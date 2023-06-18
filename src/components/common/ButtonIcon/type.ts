import { IconButtonProps } from "@mui/material"
import { ReactNode } from "react"

export type ButtonIconProps = {
  icon: ReactNode,
  width?: string,
  colors?: string
} & IconButtonProps