import React from "react";
import BigLogo from "../Logo";

import Slider from "../Slider";
import { Container, Content, Header } from "./style";

function HomePage() {
  return (
    <>
      <BigLogo />
      <Header></Header>
      <Content>
        <Slider />
      </Content>
      <Container>
        {/* <Form>
          <button>Aqui</button>
          <StyledLink to="/login">Primeira vez? Cadastre-se!</StyledLink>
        </Form> */}
      </Container>
    </>
  );
}

export default HomePage;
