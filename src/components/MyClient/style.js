import styled, { css } from "styled-components";

export const DivWrapper = styled.div`
  width: 90%;
  border: 2px solid var(--white);
  border-radius: 5px;
  margin-bottom: 25px;
  padding: 5px;
  display: flex;
`;

export const DivInfos = styled.div`
  width: 100%;
  h1 {
    font-size: var(--fs-300);
    color: var(--white);
    margin: 5px;
    text-decoration: underline;
    text-underline-offset: 5px;
  }
  p {
    font-size: var(--fs-200);
    color: var(--white-1);
    margin: 5px;
  }
`;

export const DivButton = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 10px;
`;

export const ButtonClient = styled.button`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 75px;
  height: 100%;
  padding: 2px;
  border: 1px solid var(--white);
  color: var(--white);
  background-color: ${(props) =>
    props.update
      ? css`var(--yellow)`
      : props.delete
      ? css`var(--error)`
      : css`var(--green)`};

  border-radius: 5px;
`;

export const ModalWrapper = styled.section`
  position: absolute;
  width: 100vw;
  height: 100vh;
  top: 30px;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalDiv = styled.div`
  border: 2px solid var(--white);
  background-color: #1b1d1e;
  max-width: 600px;
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
  font-size: var(--fs-300);
  text-decoration: underline;
  color: var(--white);
`;

export const DivModalBasicInfos = styled.div`
  p {
    margin: 5px 0;
    color: var(--white);
    font-size: var(--fs-100);
  }
`;

export const CloseDivs = styled.header`
  display: flex;
  justify-content: flex-end;
  button {
    width: 25px;
    height: 25px;
    color: var(--black);
    border-radius: 5px;
    border: 1px solid var(--white);
  }
`;

export const DivButtons = styled.div`
  display: flex;
  justify-content: space-between;
  button {
    width: 145px;
  }
`;

export const DivContacts = styled.div`
  border-top: 1px solid var(--white);
`;
