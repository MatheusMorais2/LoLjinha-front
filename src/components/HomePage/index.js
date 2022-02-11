import React, { useEffect, useState } from "react";
import BigLogo from "../Logo";
import Slider from "../Slider";
import {
  Container,
  Content,
  Header,
  ItemBox,
  StyledLink,
  ItemList,
  Footer,
} from "./style";
import { HomeButton } from "../Button";
import { getItems } from "../../services/loljinha";
import NavigateBar from "../NavigateBar";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    renderHome();
  }, []);

  function renderHome() {
    const promise = getItems();
    promise.then((response) => {
      setItems(response.data);
    });
  }

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
      <NavigateBar />
      <Content>
        <Slider />
      </Content>
      <Footer>
        <div className="poro-gif"></div>
        <Container>
          <ItemList>
            {items.map((item) => (
              <ItemBox>
                <span>{item.name} </span>
                <img src={item.image} alt={item.name}></img>
                <span>{item.value}</span>
              </ItemBox>
            ))}
          </ItemList>
        </Container>
      </Footer>
    </>
  );
}

export default HomePage;
