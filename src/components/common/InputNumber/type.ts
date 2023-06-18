import { TextFieldProps } from "@mui/material";
import { ReactNode } from "react";

export type PropsTextInput = {
    children?: ReactNode;
    className?: string,
    pattern?: string
} & TextFieldProps