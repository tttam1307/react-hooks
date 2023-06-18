import React from "react";
import { PropsText } from "./type";
import { TextStyled } from "./style";

export const Text: React.FC<PropsText> = ({ children, ...restProps }) => {
  return <TextStyled {...restProps}>{children}</TextStyled>;
};