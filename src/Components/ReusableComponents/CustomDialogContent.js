import React from 'react';
import { styled } from '@mui/system';

export const CustomDialogContent = styled('div')((props) => ({
    padding: props.isMobile ? '8px 24px 32px 24px' : '8px 48px 64px 48px'
}))

export default CustomDialogContent
