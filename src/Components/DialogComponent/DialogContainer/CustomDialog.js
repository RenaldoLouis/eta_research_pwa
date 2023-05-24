import React, { useContext } from 'react';
import { styled } from '@mui/system';

import { Dialog, Modal } from '@mui/material'

import DivFlexEnd from '../../DivFlexEnd';

// import icon
import CloseIcon from '../../../assets/icons/CloseIcon';

import { AppContext } from '../../../App';

import { useTheme } from '@mui/material';


const DialogComponent = styled(Dialog)((props) => ({
    "& .MuiDialog-container": {
        "& .MuiPaper-root": {
            width: props.width ? props.width : "100%",
            maxWidth: props.width,
            borderRadius: 0,
            // backgroundColor: props.isPromoDialog ? 'transparent' : ''
        },

    },
    backdropFilter: "blur(20px)",
    background: 'rgba(208, 226, 255, 0.3)'
}))


export const CustomDialog = (props) => {
    const { children, open, onClose, width } = props

    const { isMobile } = useContext(AppContext)

    const theme = useTheme()

    return (
        <DialogComponent open={open} width={width}>
            <>
                <DivFlexEnd sx={{ pr: isMobile ? 3 : 6, pt: isMobile ? 3 : 4, background: theme.palette.background.dialog }} >
                    <CloseIcon onClick={onClose} sx={{ cursor: 'pointer', fontSize: 20 }} />
                </DivFlexEnd>
                {children}
            </>
        </DialogComponent>
    )
}


export default CustomDialog
