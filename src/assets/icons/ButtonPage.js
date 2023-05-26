import React from "react"

import { SvgIcon } from "@mui/material"
import { makeStyles } from "@mui/styles"

const useStyles = makeStyles({
    hoverIcon: {
        '&:hover': {
            stroke: "#6F6F6F"
        }
    }
});

export const ButtonPage = props => {
    const classes = useStyles();
    return (
        <SvgIcon {...props}>
            <circle className={classes.hoverIcon} cx="5" cy="5" r="4.5" stroke="#8D8D8D" />
        </SvgIcon>
    )
}


export default ButtonPage