import { Link } from "react-router-dom";
import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bck-grd);
`;

export const DivStyled = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
  justify-content: center;
  h1 {
    color: var(--clr-500);
    font-size: var(--fs-500);
  }
`;

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  box-sizing: border-box;
`;

export const PasswordDivLoginStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  div {
    width: 100%;
  }
`;

export const ButtonStyled = styled.button`
  height: 40px;
  color: var(--white);
  background-color: var(--clr-500);
  border-radius: 5px;
  border-style: none;
  transition: 0.3s;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    background-color: var(--clr-500);
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const SpanStyled = styled.span`
  text-align: end;
  color: var(--clr-500);
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;

export const NavLink = styled(Link)`
  color: var(--clr-500);
  font-size: var(--fs-100);
  &:hover {
    cursor: pointer;
    color: var(--white);
  }
`;
