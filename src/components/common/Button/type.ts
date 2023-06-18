
import { ButtonProps } from "@mui/material";
import React, { ReactNode } from "react";

export type PropsButton = {
    children?: ReactNode;
    className?: string
} & ButtonProps