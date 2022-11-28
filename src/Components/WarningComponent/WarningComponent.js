import React from "react";

// import material components
import { Typography } from "@mui/material";

// import icon
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import custom styles
import { useWarningComponent } from "./WarningComponentStyles";

const WarningComponent = (props) => {

    const { isMobile } = props

    // custom styles
    const classes = useWarningComponent(isMobile)

    return (
        <div className={classes.root} style={{ top : isMobile == true  ? 56 :70 }}>
            <div className={classes.warning}>
                <div className={classes.flexCenter} style={{ width: '90%', padding: 20 }}>
                    <ErrorOutlineIcon style={{ color: '#959499', width: 26, height: 26, marginRight: 10 }} />

                    <Typography sx={{ color: '#ffffff', fontSize: 12, fontFamily:'Eina04-SemiBold' }}>
                       {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                    </Typography>

                </div>
            </div>
        </div>
    )
}

export default WarningComponent