import React from "react";
import { PropsTextInput } from "./type";
import { TextStyled } from "./style";

export const TextField: React.FC<PropsTextInput> = ({ ...restProps }) => {
  return <TextStyled {...restProps} />;
};