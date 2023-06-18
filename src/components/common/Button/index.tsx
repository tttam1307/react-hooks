import React from "react";
import { PropsButton } from "./type";
import { ButtonStyled } from "./style";

export const Button: React.FC<PropsButton> = ({
  children,
  ...restProps
}) => {
  return <ButtonStyled {...restProps}>{children}</ButtonStyled>;
};
