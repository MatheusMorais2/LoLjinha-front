import styled from "styled-components";

const Button = styled.button`
  height: 45px;
  width: 100%;
  border: none;
  font-size: 20px;
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
    background-color: #c46fe9;
  }
`;
const CancelButton = styled.button`
  width: 84px;
  height: 35px;
  background: #ffffff;
  border: none;
  color: #a328d6;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  margin-bottom: 5px;
  border-radius: 5px;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #c46fe9;
  }
`;
const SaveButton = styled.button`
  width: 84px;
  height: 35px;
  background: #a328d6;
  border: none;
  color: #ffffff;
  font-size: 21px;
  line-height: 26px;
  text-align: center;

  border-radius: 5px;

  &:disabled {
    display: flex;
    justify-content: center;
    background-color: #c46fe9;
  }
`;

const HomeButton = styled.button`
  height: 40px;
  width: 90px;
  gap: 20px;
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
    background-color: #c46fe9;
  }
`;
export { Button, CancelButton, SaveButton, HomeButton };
