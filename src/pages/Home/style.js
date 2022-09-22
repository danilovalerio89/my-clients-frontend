import styled from "styled-components";

export const MainStyled = styled.main`
  width: 100%;
  height: 100vh;
  background-color: var(--bck-grd);
`;

export const DivStyled = styled.header`
  width: 100%;
  height: 10%;
  background-color: var(--white-2);
  display: flex;
  justify-content: center;
  align-items: center;
  justify-content: flex-start;
`;

export const DivImg = styled.div`
  width: 30%;
  background-color: var(--white-2);
  display: flex;
  justify-content: center;
`;

export const NavStyled = styled.nav`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  background-color: var(--white-2);
  button {
    background-color: var(--white-2);
  }
`;

export const SectionWrapper = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 25px auto;
  background-color: var(--bck-grd);
`;

export const ButtonNav = styled.button`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid var(--white);
  padding: 5px;
  width: 111px;
  border-radius: 5px;

  &:hover {
    border: 1px solid var(--black-1);
    color: var(--black-2);
  }
`;
