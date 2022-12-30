import React from "react";

import { TextField } from "@mui/material";
import { styled } from '@mui/system';


const TextFieldStyled = styled(TextField)((props) => ({
    input: {
        fontSize: 14, fontFamily: 'Eina04-Regular', color: props.theme.palette.text.inputText,
        "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 1000px ${props.theme.palette.background.dialog} inset`,
            WebkitTextFillColor: props.theme.palette.text.inputText
        },
    },
    '& .MuiOutlinedInput-root': {
        '& fieldset': {
            borderColor: props.warning ? '#da1e28' : props.theme.palette.background.borderForm,
            borderRadius: 0
        },
        '&:hover fieldset': {
            borderColor: props.warning ? '#da1e28' : props.theme.palette.background.borderForm,
            borderRadius: 0
        },
        '&.Mui-focused fieldset': {
            borderColor: props.warning ? '#da1e28' : props.theme.palette.background.borderFormActive,
            borderRadius: 0
        },
    },
}))

export default TextFieldStyled;
