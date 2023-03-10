import React from "react";
import { styled } from '@mui/system';

// import Components
import { Typography } from "@mui/material";

// import Icons
import ErrorIcon from "../../assets/icons/ErrorIcon";

const Chip = styled('div')((props) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '2px 10px',
    borderRadius: 5,
}));

const DiscrepancyChip = props => {

    return (
        <Chip sx={{ backgroundColor: '#ffc9c9' }}>

            <ErrorIcon color={'#da1e28'} sx={{ fontSize: 14, mr: 1 }} />

            <Typography fontSize={11} sx={{ fontFamily: 'Eina04-Bold', color: '#da1e28' }}>
                Abweichung
            </Typography>
        </Chip>
    )
}


export default DiscrepancyChip