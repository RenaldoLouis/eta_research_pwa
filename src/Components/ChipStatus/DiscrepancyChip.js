import React from "react";
import { styled } from '@mui/system';

// import Components
import { Typography } from "@mui/material";

// import Icons
import ErrorIcon from "../../assets/icons/ErrorIcon";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

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
            <div style={{ alignItems:'center', display:'flex' }}>
                <Typography fontSize={11} sx={{ fontFamily: FontFamily.EINA04BOLD, color: '#da1e28' }}>
                    Abweichung
                </Typography>
            </div>
        </Chip>
    )
}


export default DiscrepancyChip