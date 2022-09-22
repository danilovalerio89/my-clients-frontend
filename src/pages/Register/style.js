import styled from "styled-components";

export const FormStyled = styled.form`
  width: 360px;
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
    width: 45%;
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

export const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1b1d1e;
`;

export const DivStyled = styled.div`
  display: flex;
  margin: 30px 0;
  align-items: center;
  justify-content: center;
`;
