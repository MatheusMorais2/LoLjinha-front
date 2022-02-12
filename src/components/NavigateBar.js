import { BsCartPlus } from "react-icons/bs";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function NavigateBar() {
  return (
    <>
      <Navigate>
        <span>Todos os produtos</span>
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
  background-color: #ceba95;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  font-size: 30px;
  color: #232f54;

  .icon {
    padding-left: 300px;
    transition: width 2s, height 2s, transform 1s;
  }
  .icon:hover {
    transform: scale(1.1);
  }
  span {
    font-family: Raleway;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 18px;
    color: #232f54;

    margin-left: 200px;
    margin-right: 50px;
  }
  span:hover {
    color: #189ea7;
  }
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #232f54;
`;
