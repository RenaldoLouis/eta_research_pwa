import React from "react";

/**Import Component */
import { Typography } from "@mui/material";

/**Styles */
import { usePlatDriverStyles } from "./PlatDriverStyles";

const PlatDriver = props => {

    const {vehicle} = props

    const classes = usePlatDriverStyles()

    return (
        <div className={classes.root}>
            <div className={classes.plat} />

            <div className={classes.platNumber}>
                <Typography
                    style={{
                       fontFamily:'Roboto Mono',

                    }}   
                    color={'#26242e'} fontSize={14}
                >
                    {vehicle}
                </Typography>
            </div>
        </div>
    )
}

PlatDriver.defaultProps = {
    vehicle:`Unknown Driver`
}

export default PlatDriver;

