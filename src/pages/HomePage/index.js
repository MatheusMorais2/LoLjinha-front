import React, { useEffect, useState } from "react";
import BigLogo from "../../components/Logo";
import Slider from "../../components/Slider";
import {
  Container,
  Content,
  Header,
  StyledLink,
  ItemList,
  ItemBox,
  Item,
  Footer,
} from "./style";
import { HomeButton } from "../../components/Button";
import { getItems } from "../../services/loljinha";
import NavigateBar from "../../components/NavigateBar";

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
                <StyledLink to={`/product/${item._id}`}>
                  <Item>
                    <span className="title">{item.name} </span>
                    <img src={item.image} alt={item.name}></img>
                    <span className="price">{item.value}</span>
                  </Item>
                </StyledLink>
              </ItemBox>
            ))}
          </ItemList>
        </Container>
      </Footer>
    </>
  );
}

export default HomePage;
