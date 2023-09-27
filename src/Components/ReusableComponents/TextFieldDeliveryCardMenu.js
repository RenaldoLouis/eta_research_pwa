import React from "react";

import { TextField } from "@mui/material";
import { styled } from '@mui/system';


const TextFieldDeliveryCardMenu = styled(TextField)((props) => ({

    input: {
        padding: "0px",
        backgroundColor: props.theme.palette.background.deliveryCardMenuSearchBar,
        fontSize: props.isMobile ? 12 : "14px",
        fontFamily: 'Eina04-Regular',
        color: props.theme.palette.text.inputTextActive,
        height: props.isMobile ? 5 : "44px",
        width: props.isMobile ? "200px" : "364px",
        "&:-webkit-autofill": {
            WebkitBoxShadow: `0 0 0 1000px ${props.theme.palette.background.dialog} inset`,
            WebkitTextFillColor: props.theme.palette.text.inputTextActive,
        },
    },
    '& .MuiOutlinedInput-root': {
        paddingLeft: "8px",
        '& fieldset': {
            border: "none",
            // border: props.warning ? '1px solid #da1e28' : `1px solid ${props.theme.palette.background.borderForm}`,
            borderRadius: 0
        },
        '&:hover fieldset': {
            border: "none",
            // border: props.warning ? '1px solid #da1e28' : `1px solid ${props.theme.palette.background.borderFormHover}`,
            borderRadius: 0,
        },
        '&.Mui-focused fieldset': {
            border: "none",
            // border: props.warning ? '1px solid #da1e28' : `1px solid ${props.theme.palette.background.borderFormActive}`,
            borderRadius: 0,
        },
    },
    '& .MuiInputAdornment-root': {
        width: '20px',
    }
}))

export default TextFieldDeliveryCardMenu;
