import React from "react"

import { SvgIcon } from "@mui/material"

export const ChevronUp = props => {
    return (
        <SvgIcon {...props}>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M7.4 16L6 14.4865L12 8L18 14.4865L16.6 16L12 11.027L7.4 16Z" fill={props.color}/>
        </SvgIcon>
    )
}

export default ChevronUp