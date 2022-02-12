import { StyledLink } from "./HomePage/style";
import styled from "styled-components";

export default function ToLogin() {
  return (
    <StyledLink to="/login">
      <Button>Faça login</Button>
    </StyledLink>
  );
}

const Button = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 5px;
  background-color: #ceba95;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #232f54;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;
