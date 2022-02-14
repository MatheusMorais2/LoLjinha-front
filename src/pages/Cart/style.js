import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;
`;

const Banner = styled.div`
  margin-top: 20px;
  position: relative;
  max-width: 80%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
  border-radius: 5px;
`;

const CartText = styled.span`
  font-family: Raleway;
  font-size: 40px;
  font-weight: 800;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const CartButton = styled.div`
  width: 200px;
  height: 80px;
  border-radius: 5px;
  background-color: #ceba95;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #232f54;
  font-family: Raleway;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export { Container, Banner, CartText, Image, CartButton };
