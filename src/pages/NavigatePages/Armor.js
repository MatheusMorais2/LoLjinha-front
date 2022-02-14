import Header from "../../components/Header";
import React, { useEffect, useState } from "react";
import NavigateBar from "../../components/NavigateBar";
import { getArmor } from "../../services/loljinha";
import styled from "styled-components";
import { Link } from "react-router-dom";

function ArmorProduct() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    renderArmor();
  }, []);

  function renderArmor() {
    const promise = getArmor();
    promise.then((response) => {
      setItems(response.data);
    });
  }

  return (
    <>
      <Header />
      <NavigateBar />
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
    </>
  );
}

export default ArmorProduct;

const Container = styled.div`
  height: 85vh;
  padding-top: 90px;
  width: 100%;
  background-color: #e8d8bb;
  display: flex;
  align-items: center;
  flex-direction: column;
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

const ItemBox = styled.div`
  display: flex;
  width: 140px;
  height: 180px;
  text-align: center;
  margin: 10px;
  margin-left: 100px;
  background-color: #efe7da;

  border-radius: 8px;

  img {
    margin: 5px;
    width: 90px;
    height: 90px;
  }
  span {
    overflow-wrap: break-word;
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #0c141d;
  }
`;

const ItemList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  border-radius: 10px;
`;
const Item = styled.div`
  width: 140px;
  height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
