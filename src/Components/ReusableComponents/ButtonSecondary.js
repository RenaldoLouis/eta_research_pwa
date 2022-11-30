import React from 'react';
import { styled } from '@mui/system';

const ButtonSecondary = styled('div')((props) =>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height:52,
    backgroundColor:props.theme.palette.text.text4,
    cursor:'pointer',
}));

export default ButtonSecondary;