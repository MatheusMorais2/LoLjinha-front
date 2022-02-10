import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
  min-height: 70vh;

  margin: 30px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;

  .form {
    margin: auto;
    width: 800px;
    height: 200px;
  }
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 25px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
`;
export { Container, StyledLink };
