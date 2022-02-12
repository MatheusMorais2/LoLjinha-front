import { Header, Container, Product, Total } from "./style";
import UserContext from "../../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { getCart } from "../../../services/loljinha";

export default function Table() {
  const { user } = useContext(UserContext);
  const [productArray, setProductArray] = useState(null);

  useEffect(() => {
    getCart(user.token, setProductArray);
  }, []);

  let total = 0;

  return (
    <Container>
      <Header>
        <span className="product">Produto</span>
        <span>Preço</span>
      </Header>

      {productArray
        ? productArray.map((elem) => {
            const item = elem.item;
            total += parseInt(item.value);
            return (
              <Product key={item.name}>
                <div className="right-side">
                  <img
                    className="product-img"
                    src={item.image}
                    alt={item.name}
                  />
                  <span className="name">{item.name}</span>
                </div>
                <span>{item.value}</span>
              </Product>
            );
          })
        : ""}
      <Total>
        <span>Total</span>
        <span>{total}</span>
      </Total>
    </Container>
  );
}
