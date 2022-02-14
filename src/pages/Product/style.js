import { Link } from "react-router-dom";
import poro2 from "../../assets/poro2.png";
import styled from "styled-components";

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Container = styled.div`
  width: 90vw;
  height: 85vh;
  display: flex;
  justify-content: center;

  padding-top: 20px;
  background-color: #e8d8bb;

  .center {
    height: 90%;
    width: 80%;

    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    background-color: white;

    border-radius: 5px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  }
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 18px;
  text-decoration: none;

  .icon {
    margin-right: 5px;
  }
`;

const ProductInfo = styled.div`
  width: 80%;
  max-height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #efe7da;
  border-radius: 8px;
  border: solid 2px #19324c;
  .img {
    background-image: url(${poro2});
    background-size: 100px;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
  }
  span {
    overflow-wrap: break-word;
    text-align: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 28px;
    color: #19324c;
  }
  .price {
    color: green;
  }
`;

const ProductImg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-height: 40%;
  background-color: #efe7da;
  border-radius: 20px;
  border: solid 2px #19324c;

  img {
    margin: 5px;
    max-height: 95%;
    min-width: 100px;
    border-radius: 20px;
  }
`;

export { Container, StyledLink, ProductInfo, ProductImg, Wrap };
