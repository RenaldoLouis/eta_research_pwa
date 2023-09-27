import React, { useContext } from 'react';
import { styled } from '@mui/system';

import { Dialog } from '@mui/material'


const DialogBlanket = styled(Dialog)((props) => ({
    "& .MuiDialog-container": {
        "& .MuiPaper-root": {
            width: props.width ? props.width : "100%",
            maxWidth: props.width,
            borderRadius: 0,
            background: 'transparent',
            boxShadow: 'none',
            height: props.height ? props.height : '',
        },
        backdropFilter: "blur(20px)",
        background: props.theme.palette.background.dialogBlanket
    },
}))


export default DialogBlanket