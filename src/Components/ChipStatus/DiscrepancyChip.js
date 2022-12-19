import React from "react";

// import Components
import { Typography } from "@mui/material";

// import Icons
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import reusable Component
import Chip from "../ReusableComponents/Chip";

const DiscrepancyChip = props => {

    return (
        <Chip sx={{ backgroundColor: '#f4c8c8' }}>

            <ErrorOutlineIcon sx={{ color: '#ea0000', width: 14, height: 14, mr: 1 }} />

            <Typography fontSize={11} sx={{ fontFamily: 'Eina04-Bold', color: '#ea0000' }}>
                Discrepancy
            </Typography>
        </Chip>
    )
}


export default DiscrepancyChip