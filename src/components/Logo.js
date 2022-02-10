import styled from "styled-components";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

export default function BigLogo() {
  return (
    <>
      <Top>
        <StyledLink to="/">
          <Logo />
        </StyledLink>
      </Top>
    </>
  );
}

const Top = styled.div`
  padding-top: 38px;
`;

const Logo = styled.div`
  width: 300px;
  height: 100px;

  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 300px 100px;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
`;
