import { Container, Banner, CartText, Image, CartButton } from "./style";
import Table from "./Table";
import NavigateBar from "../../components/NavigateBar";
import { StyledLink } from "../HomePage/style";
import UserContext from "../../context/UserContext";
import { useContext } from "react";
import ToLogin from "../../components/ToLogin";
import ToHome from "../../components/ToHome";

export default function Cart() {
  const { user } = useContext(UserContext);

  return (
    <Container>
      <NavigateBar />
      <Banner>
        <Image src="https://www.leagueoflegends.com/static/shopkeeper-b3c23be268a6ca5e2be8888cb145f50c.jpg" />
        <CartText>Carrinho</CartText>
      </Banner>
      {user ? <Table /> : <ToLogin />}

      {user ? (
        <StyledLink to="/confirm-purchase">
          <CartButton>
            Confirmar
            <br />
            compra
          </CartButton>
        </StyledLink>
      ) : (
        ""
      )}
      <ToHome />
    </Container>
  );
}
