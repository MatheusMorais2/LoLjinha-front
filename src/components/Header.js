import BigLogo from "./Logo";
import { StyledLink } from "../pages/HomePage/style";
import { HomeButton } from "./Button";
import UserContext from "../context/UserContext";
import { useContext } from "react";
import styled from "styled-components";

export default function Header() {
  const { user } = useContext(UserContext);
  return (
    <Container>
      <BigLogo />
      {user ? (
        <Greetings>Olá,{` ${user.name}`}</Greetings>
      ) : (
        <>
          <StyledLink to="/login">
            <HomeButton>Login</HomeButton>
          </StyledLink>
          <StyledLink to="/sign-up">
            <HomeButton>SignUp</HomeButton>
          </StyledLink>
        </>
      )}
    </Container>
  );
}

const Greetings = styled.div`
  font-family: Raleway;
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  color: #ceba95;
`;

const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;
