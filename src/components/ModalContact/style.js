import styled from "styled-components";

export const FormStyled = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 30px;
  box-sizing: border-box;
`;

export const DivStyled = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
  h1 {
    color: var(--white);
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-around;
  button {
    border-radius: 5px;
    padding: 5px;
    width: 70px;
  }
`;
