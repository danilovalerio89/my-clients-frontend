import styled, { css } from "styled-components";

export const DivWrapper = styled.div`
  width: 90%;
  border: 1px solid var(--white);
  border-radius: 5px;
  margin-bottom: 25px;

  h1 {
    font-size: var(--fs-200);
    color: var(--white-2);
    margin: 5px;
  }
  p {
    font-size: var(--fs-100);
    color: var(--clr-500);
    margin: 5px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`;

export const ButtonClient = styled.div`
  display: flex;
  justify-content: center;
  width: 75px;
  padding: 2px;
  border: 1px solid var(--white);
  color: var(--white);
  background-color: ${(props) =>
    props.update
      ? css`var(--yellow)`
      : props.delete
      ? css`var(--error)`
      : css`var(--clr-500)`};

  border-radius: 5px;
`;
