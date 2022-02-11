import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
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
  padding-top: 20px;
  width: 100%;
  height: 600px;
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

const ItemBox = styled.div`
  display: flex;
  width: 100px;
  height: 120px;
  overflow-wrap: break-word;
  text-align: center;
  flex-direction: column;

  margin-left: 100px;
  background-color: white;
  border: solid 5px white;
  border-radius: 10px;
  justify-content: center;
  align-items: center;

  img {
    width: 50px;
    height: 50px;
  }
  span {
    width: 100px;
    overflow-wrap: break-word;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 15px;
    line-height: 18px;
    color: black;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
`;

export {
  Container,
  Header,
  StyledLink,
  Content,
  NavigateBar,
  ItemBox,
  ItemList,
};
