import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Form = styled.div`
  background-color: aliceblue;
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
`;

export { Container, Form, StyledLink };
