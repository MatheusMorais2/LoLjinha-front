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
    margin-bottom: 100px;
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
  flex-direction: column;
  align-items: center;
  width: 100%;
  justify-content: space-around;
`;

const Button = styled.div`
  width: 120px;
  height: 40px;
  margin-bottom: 20px;
  font-family: Raleway;
  font-size: 18px;
  line-height: 18px;
  font-weight: 700;
  color: #ceba95;
`;

const Confirm = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const Cancel = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 5px;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const ConfirmCode = styled.div`
  width: 80%;
  height: 60px;
  font-family: Raleway;
  font-size: 18px;
  line-height: 18px;
  color: #ceba95;
  background-color: #232f54;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export {
  Container,
  Overview,
  ProductTitle,
  Total,
  Buttons,
  Button,
  ConfirmCode,
  Confirm,
  Cancel,
};
