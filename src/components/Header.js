import styled from "styled-components";
import { Link } from "react-router-dom";
import BigLogo from "./Logo";
import { HomeButton } from "./Button";

export default function NavigateBar() {
  return (
    <>
      <Header>
        <BigLogo />
        <StyledLink to="/login">
          <HomeButton>Login</HomeButton>
        </StyledLink>
        <StyledLink to="/sign-up">
          <HomeButton>SignUp</HomeButton>
        </StyledLink>
      </Header>
    </>
  );
}

const Header = styled.div`
  display: flex;
  margin-left: 30px;
  margin-right: 30px;
  align-items: center;
`;

const StyledLink = styled(Link)`
  display: flex;
  font-family: Raleway;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  line-height: 18px;
  color: #ffffff;
  text-decoration: none;
`;
