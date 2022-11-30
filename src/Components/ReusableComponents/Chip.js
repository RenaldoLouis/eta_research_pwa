import React from 'react';
import { styled } from '@mui/system';

const Chip = styled('div')((props) =>({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding : 10,
    borderRadius:5,
    height:15
}));

export default Chip;