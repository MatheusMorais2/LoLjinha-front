import { Header, Container, Product, Total } from "./style";
import UserContext from "../../../context/UserContext";
import { useContext } from "react";

export default function Table() {
  const { user } = useContext(UserContext);
  const productArray = user.cart;

  let total = 0;

  return (
    <Container>
      <Header>
        <span className="product">Produto</span>
        <span>Preço</span>
      </Header>

      {productArray.map((elem) => {
        total += parseInt(elem.price);
        return (
          <Product key={elem.name}>
            <div className="right-side">
              <img className="product-img" src={elem.img} alt={elem.name} />
              <span className="name">{elem.name}</span>
            </div>
            <span>{elem.price}</span>
          </Product>
        );
      })}
      <Total>
        <span>Total</span>
        <span>{total}</span>
      </Total>
    </Container>
  );
}
