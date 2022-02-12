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
        <StyledLink to="/cart">
          <div className="icon">
            <BsCartPlus />
          </div>
        </StyledLink>
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
  /* font-size: 5vh; */
  color: #232f54;
  /* margin-bottom: 20px; */

  .icon {
    /* padding-left: 300px; */
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

    /* margin-left: 200px;
    margin-right: 50px; */
  }
  span:hover {
    color: #189ea7;
  }
`;

const StyledLink = styled(Link)`
  color: #232f54;
`;
