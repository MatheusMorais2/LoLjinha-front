import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  min-height: 45vh;
  width: 60%;
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

const ItemBox = styled.div`
  display: flex;
  width: 140px;
  height: 180px;
  text-align: center;
  margin: 10px;
  margin-left: 100px;
  background-color: #efe7da;

  border-radius: 8px;

  img {
    margin: 5px;
    width: 90px;
    height: 90px;
  }
  span {
    overflow-wrap: break-word;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #0c141d;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  border-radius: 10px;
`;
const Item = styled.div`
  width: 140px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Footer = styled.div`
  min-height: 40vh;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;

  .poro-gif {
    width: 50px;
    height: 50px;
    margin-bottom: 20px;
    background-image: url("http://pa1.narvii.com/6378/a79f542fe99748319baa292def19453ddc0d9f45_00.gif");
    background-size: 50px 50px;
  }
`;

export {
  Container,
  Header,
  StyledLink,
  Content,
  ItemBox,
  ItemList,
  Footer,
  Item,
};
