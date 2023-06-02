import React from "react"

import { SvgIcon } from "@mui/material"

export const ChevronDown = props => {
    return (
        <SvgIcon {...props}>
           <path fill-rule="evenodd" clip-rule="evenodd" d="M16.6 8L18 9.51351L12 16L6 9.51351L7.4 8L12 12.973L16.6 8Z" fill={props.color}/>
        </SvgIcon>
    )
}

export default ChevronDown