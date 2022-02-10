import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 110vh;
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
const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: #7bc2fd;
`;
const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: pink;
`;

export { Container, Form, StyledLink, Content, Header };
