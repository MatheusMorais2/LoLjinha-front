import styled from "styled-components";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const Banner = styled.div`
  position: relative;
  max-width: 80%;
`;

const Image = styled.img`
  max-width: 100%;
  max-height: 400px;
  object-fit: cover;
  margin-bottom: 20px;
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

export { Container, Banner, CartText, Image };
