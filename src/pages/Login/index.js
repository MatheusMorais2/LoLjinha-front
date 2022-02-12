import { Container, StyledLink } from "./style";
import { useNavigate } from "react-router-dom";
import UserContext from "../../context/UserContext";
import { React, useState, useContext } from "react";
import { login } from "../../services/loljinha";
import { Button } from "../../components/Button";
import Loading from "../../components/Loading";
import Input from "../../components/Input";
import BigLogo from "../../components/Logo";
import NavigateBar from "../../components/NavigateBar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogin(e) {
    setIsLoading(true);
    e.preventDefault();
    const promise = login({ email, password });

    promise.then((response) => {
      setUser(response.data);
      console.log("response.data: ", response.data);
      navigate("/");
    });

    promise.catch(() => {
      alert("Confira seus dados e tente novamente");
      setIsLoading(false);
    });
  }

  return (
    <>
      <BigLogo />
      <NavigateBar />
      <Container>
        <div className="center">
          <h1 className="title">
            Digite seus dados e faça seu login, invocador!
          </h1>
          <form onSubmit={handleLogin}>
            <Input
              disabled={isLoading}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              placeholder="E-mail"
            ></Input>
            <Input
              disabled={isLoading}
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              placeholder="Senha"
            ></Input>
            <div className="button-glow">
              <Button disabled={isLoading} type="submit">
                {isLoading ? <Loading /> : "Entrar"}
              </Button>
            </div>
          </form>

          <StyledLink to="/sign-up">Não possui conta? Cadastre-se</StyledLink>
          <div className="icon"></div>
        </div>
      </Container>
    </>
  );
}
