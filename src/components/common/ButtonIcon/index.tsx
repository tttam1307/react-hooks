import { IconButton } from "@mui/material"
import { ButtonIconProps } from "./type"

export const ButtonIcon: React.FC<ButtonIconProps> = ({ icon, colors = '#8E8186', ...restProps }) => {
  return (
    <IconButton sx={{
      color: `${colors}`,
    }} {...restProps}>
      {icon}
    </IconButton>
  )
}