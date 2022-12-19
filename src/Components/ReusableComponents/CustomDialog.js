import React from 'react';
import { styled } from '@mui/system';

import { Dialog } from '@mui/material'

const CustomDialog = styled(Dialog)((props) => ({
    "& .MuiDialog-container": {
        "& .MuiPaper-root": {
            width: "100%",
            maxWidth: props.width,  // Set your width here
        },
    },
   
}))

export default CustomDialog
