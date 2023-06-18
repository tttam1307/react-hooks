import React from "react";
import { PropsTextInput } from "./type";
import { TextStyled } from "./style";

export const InputEmail: React.FC<PropsTextInput> = ({ placeholder = 'example@mail.com', ...restProps }) => {
  return <TextStyled placeholder={placeholder} {...restProps} />;
};