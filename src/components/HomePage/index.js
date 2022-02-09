import React from "react";
import { Container, Form, StyledLink } from "./style";

function HomePage() {
  return (
    <>
      <h1>LoLjinha</h1>
      <Container>
        <Form>
          <button>Aqui</button>
          <StyledLink to="/login">Primeira vez? Cadastre-se!</StyledLink>
        </Form>
      </Container>
    </>
  );
}

export default HomePage;
