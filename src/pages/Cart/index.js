import { Container, Banner, CartText, Image } from "./style";
import Table from "./Table";

export default function Cart() {
  return (
    <Container>
      <Banner>
        <Image src="https://www.leagueoflegends.com/static/shopkeeper-b3c23be268a6ca5e2be8888cb145f50c.jpg" />
        <CartText>Carrinho</CartText>
      </Banner>
      <Table />
    </Container>
  );
}
