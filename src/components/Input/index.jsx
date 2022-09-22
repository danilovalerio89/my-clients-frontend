import {
  InputStyled,
  InputWrapper,
  LabelStyled,
  SpanErrorStyled,
} from "./style";
import { useState } from "react";

const Input = ({ label, register, name, errors, ...rest }) => {
  const [valid, setValid] = useState(false);

  function handleInputStyle(value) {
    setValid((state) => (value.length > 0 ? (state = true) : (state = false)));
  }

  return (
    <InputWrapper>
      <InputStyled
        {...register(name)}
        onChange={(event) => handleInputStyle(event.target.value)}
        valid={valid}
        {...rest}
      />
      <LabelStyled valid={valid}>{label}</LabelStyled>
      {errors && <SpanErrorStyled>{errors.message}</SpanErrorStyled>}
    </InputWrapper>
  );
};
export default Input;
