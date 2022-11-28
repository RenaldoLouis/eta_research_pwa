import React from "react";

// imoort material component
import { Typography } from "@mui/material";

// import custom styles
import { usePlatDriverStyles } from "./PlatDriverStyles";

const PlatDriver = props => {

    const {vehicle} = props

    // custom styles
    const classes = usePlatDriverStyles()

    return (
        <div className={classes.root}>
            <div className={classes.plat} />

            <div className={classes.platNumber}>
                <Typography
                    sx={{
                       fontFamily:'RobotoMono-Regular',
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

