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
  cursor: pointer;
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

export const ModalWrapper = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  border: 2px solid var(--white);
  background-color: #1b1d1e;
  width: 60%;
  padding: 15px;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  box-shadow: 0px 1px 203px 98px rgba(255, 255, 255, 0.31);
  -webkit-box-shadow: 0px 1px 203px 98px rgba(255, 255, 255, 0.31);
  -moz-box-shadow: 0px 1px 203px 98px rgba(255, 255, 255, 0.31);
`;

export const HeaderDivModal = styled.div`
  margin: 10px 0;
  text-decoration: underline;
`;

export const DivModalBasicInfos = styled.div`
  p {
    margin: 5px 0;
  }
`;
