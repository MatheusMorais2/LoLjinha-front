import styled from "styled-components";

const Container = styled.div`
  width: 80%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
  font-family: Raleway;
  font-size: 18px;
  line-height: 18px;
  color: #232f54;
  background-color: #ceba95;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 20px;
`;

const QuantityButton = styled.div`
  width: 16px;
  height: 16px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #232f54;
  font-size: 20px;
  color: #ceba95;
`;

const Header = styled.div`
  width: 100%;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;

  .product {
    width: 50%;
  }
`;

const Product = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;

  .right-side {
    width: 50%;
    display: flex;
    align-items: center;

    .product-img {
      max-width: 10vw;
    }

    .name {
      margin-left: 10px;
    }
  }
`;

const Total = styled.div`
  display: flex;
  justify-content: space-between;
  font-weight: 800;
  margin-bottom: 20px;
`;

export { Container, Header, Product, Total, QuantityButton };
