import React, { useEffect, useState } from "react";
import Slider from "../../components/Slider";
import {
  Container,
  Content,
  StyledLink,
  ItemList,
  ItemBox,
  Item,
  Footer,
} from "./style";
import { getItems } from "../../services/loljinha";
import Header from "../../components/Header";
import NavigateBar from "../../components/NavigateBar";
import Header from "../../components/Header";

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
      <Header />
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
