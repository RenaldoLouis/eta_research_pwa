import React, { useContext } from 'react';
import { styled } from '@mui/system';

import { Dialog, Modal } from '@mui/material'

import DivFlexEnd from '../../DivFlexEnd';

// import icon
import CloseIcon from '../../../assets/icons/CloseIcon';

import { AppContext } from '../../../App';

import { useTheme } from '@mui/material';

import DialogBlanket from './DialogBlanket';

export const CustomDialog = (props) => {
    const { children, open, onClose, width } = props

    const { isMobile } = useContext(AppContext)

    const theme = useTheme()

    return (
        <DialogBlanket open={open} width={width} theme={theme}>
            <>
                <DivFlexEnd sx={{ pr: isMobile ? 3 : 6, pt: isMobile ? 3 : 4, background: theme.palette.background.dialog }} >
                    <CloseIcon onClick={onClose} sx={{ cursor: 'pointer', fontSize: 20 }} />
                </DivFlexEnd>
                {children}
            </>
        </DialogBlanket>
    )
}


export default CustomDialog
