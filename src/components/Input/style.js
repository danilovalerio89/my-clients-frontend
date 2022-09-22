import styled from "styled-components";

export const InputWrapper = styled.div`
  position: relative;
`;

export const InputStyled = styled.input`
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border: ${({ valid }) => (valid ? "1px solid #335eff" : "1px solid #fff")};
  border-radius: 5px;
  background-color: #1b1d1e;
  padding: 10px;
  color: #fff;
  outline-style: none;
  &:focus {
    border: 1px solid #335eff;
    outline-style: none;
  }
  &:focus + label {
    color: #335eff;
    top: -8px;
  }
`;

export const LabelStyled = styled.label`
  position: absolute;
  display: block;
  background-color: #1b1d1e;
  /* padding: 4px; */
  color: ${({ valid }) => (valid ? "#335eff" : "#cdcdcd")};
  font-size: 12px;
  left: 10px;
  top: ${({ valid }) => (valid ? "-8px" : "11px")};
  pointer-events: none;
  transition: 0.5s;
`;

export const SpanErrorStyled = styled.span`
  position: absolute;
  width: 100%;
  height: 50%;
  font-size: 10px;
  background-color: #fa4c4c;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-right-radius: 5px;
  border-bottom-left-radius: 5px;
`;
