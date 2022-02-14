import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 500px;
  border: none;
  font-size: 20px;
  text-decoration: none;
  font-family: "Lexend Deca", sans-serif;
  color: rgba(255, 255, 255, 0.8);
  background: #154473;
  padding: 12px 12px;
  border-radius: 4px;
  font-weight: bolder;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #189ea7;
  }
`;

const HomeButton = styled.button`
  height: 40px;
  width: 90px;
  margin-left: 10px;
  border: none;
  font-size: 15px;
  text-decoration: none;
  font-family: "Lexend Deca", sans-serif;
  color: rgba(255, 255, 255, 0.8);
  background: #154473;
  padding: 12px 15px;
  border-radius: 4px;
  font-weight: bolder;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #189ea7;
  }
`;
const AddCartButton = styled.button`
  height: 50px;
  width: 90%;
  border: none;
  font-size: 18px;
  text-decoration: none;
  font-family: "Lexend Deca", sans-serif;
  color: rgba(255, 255, 255, 0.8);
  background: #154473;
  border-radius: 4px;
  font-weight: bolder;
  text-transform: uppercase;
  transition: all 0.2s ease-in-out;
  margin-bottom: 10px;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #189ea7;
  }
`;
export { Button, HomeButton, AddCartButton };
