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
  padding: 10px;
  width: 100%;
  height: 100%;
`;

const Logo = styled.div`
  width: 200px;
  height: 70px;
  position: sticky;
  background-image: url(${logo});
  background-repeat: no-repeat;
  background-size: 200px 70px;
`;
const StyledLink = styled(Link)`
  display: flex;
  justify-content: start;
  align-items: center;
  text-decoration: none;
  margin-left: 10%;
`;
