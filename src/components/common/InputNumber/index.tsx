import React, { useState } from "react";
import { PropsTextInput } from "./type";
import { TextStyled } from "./style";

export const InputNumber: React.FC<PropsTextInput> = ({ ...restProps }) => {
  const [num, setNum] = useState<string | number>();

  const handleChange = (e: any, pattern?: string) => {
    let val = e.target.value
    let newVal
    console.log('val', e.target.value)

    newVal = val.replace(/\D/g, '');
    setNum(newVal);
  };

  return <TextStyled onChange={(e) => handleChange(e)} value={num} {...restProps} />;
};