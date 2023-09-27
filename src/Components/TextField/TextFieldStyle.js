import React from "react";

import { TextField } from "@mui/material";
import { styled } from '@mui/system';

// import Constants
import { FontFamily } from "../../Constants/FontFamily";


const TextFieldStyled = styled(TextField)((props) => ({

    input: {
        fontSize: props.isMobile ? 12 : 20,
        fontFamily: FontFamily.EINA04REGULAR,
        color: props.theme.palette.text.inputTextActive,
        height: props.isMobile ? 5 : 20,
        "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 1000px ${props.theme.palette.background.dialog} inset`,
            WebkitTextFillColor: props.theme.palette.text.inputTextActive,
        },
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            border: props.warning ? '1px solid #da1e28' : `1px solid ${props.theme.palette.background.borderForm}`,
            borderRadius: 0
        },
        '&:hover fieldset': {
            border: props.warning ? '1px solid #da1e28' : `1px solid ${props.theme.palette.background.borderFormHover}`,
            borderRadius: 0,
        },
        '&.Mui-focused fieldset': {
            border: props.warning ? '1px solid #da1e28' : `1px solid ${props.theme.palette.background.borderFormActive}`,
            borderRadius: 0,
        },

    },

}))

export default TextFieldStyled;
