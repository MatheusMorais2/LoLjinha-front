import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/loljinha";
import { AddCartButton } from "../Button";
import { BsCartPlus } from "react-icons/bs";
import BigLogo from "../Logo";
import NavigateBar from "../NavigateBar";
import { Container, StyledLink, ProductInfo, ProductImg } from "./style";

export default function Product() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  useEffect(() => {
    renderProduct();
  }, []);

  function renderProduct() {
    const promise = getProduct({ id });
    promise.then((response) => {
      setItem(response.data);
    });
    promise.catch((error) => {
      console.log(error);
    });
  }

  return (
    <>
      <BigLogo />
      <NavigateBar />
      <Container>
        <div className="center">
          <ProductImg>
            <img src={item.image} alt={item.name}></img>
          </ProductImg>
          <ProductInfo>
            <span>{item.name}</span>
            <span className="price">{item.value}</span>
            <div className="img"></div>
            <StyledLink to="/cart">
              <AddCartButton>
                {" "}
                <BsCartPlus className="icon" />
                Comprar
              </AddCartButton>
            </StyledLink>
          </ProductInfo>
        </div>
      </Container>
    </>
  );
}
