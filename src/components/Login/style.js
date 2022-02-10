import { Link } from "react-router-dom";
import styled from "styled-components";
import poro1 from "../../assets/poro1.png";

const Container = styled.div`
  min-height: 90vh;

  margin: 30px;
  display: flex;

  .right-side {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .title {
    padding-bottom: 20px;
    width: 100%;
    text-align: center;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
  }
  .left-side {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .button-glow:hover {
    color: rgba(255, 255, 255, 1);
    box-shadow: 0 5px 15px #81ebfe;
  }

  .icon {
    margin-top: 20px;
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
  justify-content: center;
  align-items: center;

  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 35px;
  line-height: 18px;
  color: black;
  text-decoration: none;
`;
export { Container, StyledLink };
