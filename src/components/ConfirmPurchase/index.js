import NavigateBar from "../NavigateBar";
import {
  Container,
  Overview,
  ProductTitle,
  Total,
  Buttons,
  Button,
} from "./style";
import UserContext from "../../context/UserContext";
import { useContext } from "react";

export default function ConfirmPurchase() {
  const { user } = useContext(UserContext);
  let total = 0;
  return (
    <Container>
      <NavigateBar />
      <Overview>
        <span>Você está comprando:</span>
        {user.cart.map((elem) => {
          total += elem.price;
          return (
            <ProductTitle>
              {`${elem.quantity} x ${elem.name} por ${
                elem.quantity * parseInt(elem.price)
              }`}
            </ProductTitle>
          );
        })}
        <Total>
          <span>Total</span>
          <span>{total}</span>
        </Total>
        <Buttons>
          <Button className="confirm">Confirmar</Button>
          <Button className="cancel">Cancelar</Button>
        </Buttons>
      </Overview>
    </Container>
  );
}
