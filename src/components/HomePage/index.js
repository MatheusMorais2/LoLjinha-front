import React from "react";
import BigLogo from "../Logo";
import { BsCartPlus } from "react-icons/bs";
import Slider from "../Slider";
import { Container, Content, Header, NavigateBar, StyledLink } from "./style";
import { HomeButton } from "../Button";

function HomePage() {
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
      <NavigateBar>
        <span>Todos os produtos</span>
        <span>Armaduras</span>
        <span>Armas</span>
        <span>Cura</span>
        <div className="icon">
          <BsCartPlus />
        </div>
      </NavigateBar>
      <Content>
        <Slider />
      </Content>
      <Container>itens</Container>
    </>
  );
}

export default HomePage;
