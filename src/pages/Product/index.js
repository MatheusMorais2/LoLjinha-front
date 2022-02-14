import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProduct } from "../../services/loljinha";
import { AddCartButton } from "../../components/Button";
import { BsCartPlus } from "react-icons/bs";
import NavigateBar from "../../components/NavigateBar";
import { Container, StyledLink, ProductInfo, ProductImg } from "./style";
import Header from "../../components/Header";


export default function Product() {
  const { id } = useParams();
  const [item, setItem] = useState({});
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

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

  function putIntoCart() {
    const promise = putCart(id, user.token);
    promise.then(() => navigate("/cart", { replace: true }));
    promise.catch((error) => console.log(error));
  }

  function loginAlert() {
    alert("Por favor, faça login para continuar para o carrinho");
  }

  return (
    <>
      <Header />
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

            <AddCartButton onClick={user ? putIntoCart : loginAlert}>
              {" "}
              <BsCartPlus className="icon" />
              Comprar
            </AddCartButton>
          </ProductInfo>
        </div>
      </Container>
    </>
  );
}
