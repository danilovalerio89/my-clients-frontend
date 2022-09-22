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

export const FormWrapperRegister = styled.section`
  width: 90%;
  padding: 10px;
  border: 1px solid var(--white-2);
  border-radius: 5px;

  @media (min-width: 500px) {
    padding: 10px 30px;
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: var(--fs-600);
    }
  }
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

export const PasswordDivStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  div {
    width: 100%;
  }
`;
export const CheckboxDivStyled = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  color: #cdcdcd;
  input {
    cursor: pointer;
  }
`;
export const ButtonStyled = styled.button`
  height: 40px;
  color: #fff;
  background-color: #335eff;
  border-radius: 5px;
  border-style: none;
  transition: 0.3s;
  font-size: 18px;
  &:hover {
    cursor: pointer;
    background-color: #040089;
  }
  &:active {
    transform: translateY(2px);
  }
`;

export const SpanStyled = styled.span`
  text-align: end;
  color: #335eff;
  font-size: 12px;
  &:hover {
    cursor: pointer;
  }
`;
export const SpanError = styled.span`
  font-size: 10px;
  background-color: #fa4c4c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  text-align: center;
`;

export const NavLink = styled(Link)`
  font-size: var(--fs-100);
  color: var(--clr-500);
  &:hover {
    cursor: pointer;
    color: var(--white);
  }
`;
