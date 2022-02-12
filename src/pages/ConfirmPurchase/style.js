import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Overview = styled.div`
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
  margin-top: 20px;
  .span {
    margin-bottom: 10px;
  }
`;

const ProductTitle = styled.div`
  margin-bottom: 10px;
`;

const Total = styled.div`
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  margin-top: 10px;
`;

const Buttons = styled.div`
  margin-top: 20px;
  display: flex;
  width: 100%;
  justify-content: space-around;
`;

const Button = styled.div`
  width: 30%;
  height: 40px;

  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: red;

  font-family: Raleway;
  font-size: 18px;
  line-height: 18px;
  color: #ceba95;
  .confirm {
    background-color: green;
  }
  .cancel {
    background-color: red;
  }
`;

export { Container, Overview, ProductTitle, Total, Buttons, Button };
