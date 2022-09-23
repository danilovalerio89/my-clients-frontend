import styled from "styled-components";

export const FormWrapperSection = styled.section`
  width: 90%;
  padding: 30px;
  border: 2px solid var(--white-2);
  border-radius: 5px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;

  @media (min-width: 500px) {
    max-width: 500px;
  }

  @media (min-width: 1024px) {
    h1 {
      font-size: var(--fs-600);
    }
  }
`;
