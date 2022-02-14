import styled from "styled-components";
import { StyledLink } from "../pages/HomePage/style";

export default function ToHome() {
  return (
    <StyledLink to="/">
      <CartButton>
        Voltar para
        <br />
        página inicial
      </CartButton>
    </StyledLink>
  );
}

const CartButton = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 5px;
  background-color: #232f54;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ceba95;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
  margin-top: 10px;
`;
