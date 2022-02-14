import NavigateBar from "../../components/NavigateBar";
import {
  Container,
  Overview,
  ProductTitle,
  Total,
  Buttons,
  Button,
  ConfirmCode,
  Confirm,
  Cancel,
} from "./style";
import UserContext from "../../context/UserContext";
import { useContext, useEffect, useState } from "react";
import { getCart, confirmPurchase, clearCart } from "../../services/loljinha";
import ToHome from "../../components/ToHome";
import { useNavigate } from "react-router-dom";
import { StyledLink } from "../HomePage/style";
import Header from "../../components/Header";

export default function ConfirmPurchase() {
  const { user, setUser } = useContext(UserContext);
  const [productArray, setProductArray] = useState(null);
  const [confirmCode, setConfirmCode] = useState(null);

  let total = 0;

  useEffect(() => {
    getCart(user.token, setProductArray);
  }, []);

  function handleConfirm() {
    confirmPurchase(user.token, productArray, setConfirmCode);
    clearCart(user.token, setUser);
  }

  return (
    <Container>
      <Header />
      <NavigateBar />
      <Overview>
        <span>Você está comprando:</span>
        {productArray
          ? productArray.map((elem) => {
              const item = elem.item;
              total += parseInt(item.value);
              return (
                <ProductTitle>
                  {`${elem.quantity} x ${item.name} por ${
                    elem.quantity * parseInt(item.value)
                  }`}
                </ProductTitle>
              );
            })
          : ""}
        <Total>
          <span>Total</span>
          <span>{total}</span>
        </Total>

        <Buttons>
          {confirmCode ? (
            <>
              <ConfirmCode>
                Compra confirmada! Seu código de compra é:
                <br /> {confirmCode}
              </ConfirmCode>
              <ToHome />
            </>
          ) : (
            <>
              <Button onClick={handleConfirm}>
                <Confirm>Confirmar</Confirm>
              </Button>
              <StyledLink to="/">
                <Button>
                  <Cancel>Cancelar</Cancel>
                </Button>
              </StyledLink>
            </>
          )}
        </Buttons>
      </Overview>
    </Container>
  );
}
