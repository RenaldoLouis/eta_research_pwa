import { Typography } from "@mui/material";
import React from "react";

// import icon
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


import { useWarningComponent } from "./WarningComponentStyles";

const WarningComponent = () => {

    const classes = useWarningComponent()

    return (
        <div className={classes.root}>
            <div className={classes.flexCenter} style={{ width:'90%', padding:20 }}>
                    <ErrorOutlineIcon style={{ color:'#ffffff', width:26, height:26, marginRight:10 }} />

                    <Typography sx={{ color: '#ffffff', fontSize: 12, fontWeight: 600 }}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </Typography>
                    
            </div>
        </div>
    )
}

export default WarningComponent