import { BsCartPlus } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavigateBar() {
  return (
    <>
      <Navigate>
        <span>
          Todos os
          <br /> produtos
        </span>
        <span>Armaduras</span>
        <span>Armas</span>
        <span>Cura</span>
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
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 40px;
  color: #232f54;
  .icon {
    transition: width 2s, height 2s, transform 1s;
    font-size: 30px;
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
