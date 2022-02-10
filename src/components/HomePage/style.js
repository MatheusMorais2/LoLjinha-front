import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 60vh;
  display: flex;
`;

const Header = styled.div`
  display: flex;

  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
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
  height: 800px;
  background-color: #e8d8bb;
`;
const NavigateBar = styled.div`
  background-color: #ceba95;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 30px;
  color: #232f54;

  .icon {
    padding-left: 300px;
    transition: width 2s, height 2s, transform 1s;
  }
  .icon:hover {
    transform: scale(1.1);
  }
  span {
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #232f54;

    margin-left: 200px;
    margin-right: 50px;
  }
  span:hover {
    color: #189ea7;
  }
`;

export { Container, Header, StyledLink, Content, NavigateBar };
