import { Link } from "react-router-dom";
import styled from "styled-components";
import poro1 from "../../assets/poro1.png";

const Container = styled.div`
  height: 90vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #e8d8bb;

  .center {
    height: 80vh;
    width: 700px;
    padding-top: 150px;

    background-color: white;
    margin: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    border-radius: 5px;
    box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.15);
  }
  .title {
    text-align: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    margin-bottom: 10px;
  }
  .button-glow:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #81ebfe;
  }

  .icon {
    margin-top: 40px;
    background-image: url(${poro1});
    background-size: 100px;
    background-repeat: no-repeat;
    border-radius: 60px;
    width: 100px;
    height: 100px;
  }
`;

const StyledLink = styled(Link)`
  height: 40px;

  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 30px;
  line-height: 18px;
  color: black;
  text-decoration: none;

  padding-top: 150px;
`;

const Top = styled.div`
  padding-top: 58px;
`;

export { Container, StyledLink, Top };
