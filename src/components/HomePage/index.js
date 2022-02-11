import React, { useEffect, useState } from "react";
import BigLogo from "../Logo";
import { BsCartPlus } from "react-icons/bs";
import Slider from "../Slider";
import {
  Container,
  Content,
  Header,
  ItemBox,
  NavigateBar,
  StyledLink,
  ItemList,
} from "./style";
import { HomeButton } from "../Button";
import { getItems } from "../../services/loljinha";

function HomePage() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    renderHome();
  }, []);

  function renderHome() {
    const promise = getItems();
    promise.then((response) => {
      setItems(response.data);
      console.log("oioio");
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
    </>
  );
}

export default HomePage;
