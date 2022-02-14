import { Header, Container, Product, Total, QuantityButton } from "./style";
import UserContext from "../../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { addOne, getCart, removeOne } from "../../../services/loljinha";

export default function Table() {
  const { user, setUser } = useContext(UserContext);
  const [productArray, setProductArray] = useState(null);

  useEffect(() => {
    getCart(user.token, setProductArray);
  }, []);

  function handleAdd(id) {
    addOne(id, user, setUser);
  }

  function handleRemove(id) {
    removeOne(id, user, setUser);
  }

  let total = 0;

  return (
    <Container>
      <Header>
        <span className="product">Produto</span>
        <span>Quantidade</span>
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
                <span>
                  <QuantityButton onClick={() => handleAdd(item._id)}>
                    +
                  </QuantityButton>{" "}
                  {elem.quantity}{" "}
                  <QuantityButton onClick={() => handleRemove(item._id)}>
                    -
                  </QuantityButton>
                </span>
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
