import React from 'react';
import { styled } from '@mui/system';

import { Dialog } from '@mui/material'

export const CustomDialog = styled(Dialog)((props) => ({
    "& .MuiDialog-container": {
        "& .MuiPaper-root": {
            width: props.width ? props.width : "100%",
            maxWidth: props.width,
            borderRadius:0,
            // backgroundColor: props.isPromoDialog ? 'transparent' : ''
        },
        
    },
    backdropFilter: "blur(18px)" 
   
}))

export default CustomDialog
