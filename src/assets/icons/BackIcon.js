import React from "react"

import { SvgIcon } from "@mui/material"

export const BackIcon = props => {
    return (
        <SvgIcon {...props}>
            <path  fill={props.color} fill-rule="evenodd" clip-rule="evenodd" d="M16.7071 5.29289C17.0976 5.68342 17.0976 6.31658 16.7071 6.70711L11.4142 12L16.7071 17.2929C17.0976 17.6834 17.0976 18.3166 16.7071 18.7071C16.3166 19.0976 15.6834 19.0976 15.2929 18.7071L9.29289 12.7071C8.90237 12.3166 8.90237 11.6834 9.29289 11.2929L15.2929 5.29289C15.6834 4.90237 16.3166 4.90237 16.7071 5.29289Z"/>
        </SvgIcon>
    )
}



export default BackIcon