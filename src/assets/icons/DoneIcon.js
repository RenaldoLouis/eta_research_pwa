import React from "react"

import { SvgIcon } from "@mui/material"

export const DoneIcon = props => {

    return (
        <SvgIcon {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M19.0607 0.43934C19.6464 1.02513 19.6464 1.97487 19.0607 2.56066L8.06066 13.5607C7.47487 14.1464 6.52513 14.1464 5.93934 13.5607L0.93934 8.56066C0.353553 7.97487 0.353553 7.02513 0.93934 6.43934C1.52513 5.85355 2.47487 5.85355 3.06066 6.43934L7 10.3787L16.9393 0.43934C17.5251 -0.146447 18.4749 -0.146447 19.0607 0.43934Z" fill={props.color} />

        </SvgIcon>
    )
}

export default DoneIcon