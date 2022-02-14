import { BsCartPlus } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavigateBar() {
  return (
    <>
      <Navigate>
        <StyledLink to={"/all"}>
          <span>Todos os produtos</span>
        </StyledLink>
        <StyledLink to={"/armor"}>
          <span>Armaduras</span>
        </StyledLink>
        <StyledLink to={"/weapon"}>
          <span>Armas</span>
        </StyledLink>
        <StyledLink to={"/heal"}>
          <span>Cura</span>
        </StyledLink>
        <div className="icon">
          <StyledLink to="/cart">
            <BsCartPlus />
          </StyledLink>
        </div>
      </Navigate>
    </>
  );
}

const Navigate = styled.div`
  padding: 0 5vw;
  background-color: #ceba95;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-left: 300px;
  width: 100%;
  height: 40px;
  color: #232f54;
  .icon {
    transition: width 2s, height 2s, transform 1s;
    font-size: 30px;
  }
  .icon:hover {
    transform: scale(1.2);
  }
  span {
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 1.9vh;
    line-height: 18px;
    color: #232f54;
  }
  span:hover {
    color: #189ea7;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #232f54;
`;
