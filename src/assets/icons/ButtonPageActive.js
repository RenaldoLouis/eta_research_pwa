import React from "react"

import { SvgIcon } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    hoverRect: {
        '&:hover': {
            fill: "#A6C8FF"
        }
    },
    hoverCircle: {
        '&:hover': {
            fill: "#4589FF"
        }
    }
});

export const ButtonPageActive = props => {
    const classes = useStyles();
    return (
        <SvgIcon {...props}>
            <rect className={classes.hoverRect} width="24" height="24" rx="12" fill="#D0E2FF" />
            <circle className={classes.hoverCircle} cx="12" cy="12" r="9" fill="#78A9FF" />
        </SvgIcon>
    )
}


export default ButtonPageActive