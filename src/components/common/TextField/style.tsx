import { TextField, outlinedInputClasses } from "@mui/material";
import { styled } from "styled-components";
// import theme from "../../../theme";

export const TextStyled = styled(TextField)`
  &.MuiTextField-root {
    background-color: #F5F6F8;
    border-radius: 0.625em;
    & .${outlinedInputClasses.notchedOutline} {
        border: 0em;
    },
    & input {
        padding: 0.875em
    }
  }
`;