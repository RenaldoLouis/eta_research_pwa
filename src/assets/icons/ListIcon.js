import React from "react"

import { SvgIcon } from "@mui/material"

export const ListIcon = props => {

    return (
        <SvgIcon {...props}>
            <path fill={props.color} fill-rule="evenodd" clip-rule="evenodd" d="M6 6C6 5.44772 5.55228 5 5 5C4.44772 5 4 5.44772 4 6V6.01C4 6.56228 4.44772 7.01 5 7.01C5.55228 7.01 6 6.56228 6 6.01V6ZM9 5C8.44772 5 8 5.44772 8 6C8 6.55228 8.44772 7 9 7H20C20.5523 7 21 6.55228 21 6C21 5.44772 20.5523 5 20 5H9ZM9 11C8.44772 11 8 11.4477 8 12C8 12.5523 8.44772 13 9 13H20C20.5523 13 21 12.5523 21 12C21 11.4477 20.5523 11 20 11H9ZM8 18C8 17.4477 8.44772 17 9 17H20C20.5523 17 21 17.4477 21 18C21 18.5523 20.5523 19 20 19H9C8.44772 19 8 18.5523 8 18ZM5 11C5.55228 11 6 11.4477 6 12V12.01C6 12.5623 5.55228 13.01 5 13.01C4.44772 13.01 4 12.5623 4 12.01V12C4 11.4477 4.44772 11 5 11ZM6 18C6 17.4477 5.55228 17 5 17C4.44772 17 4 17.4477 4 18V18.01C4 18.5623 4.44772 19.01 5 19.01C5.55228 19.01 6 18.5623 6 18.01V18Z" />
        </SvgIcon>
    )
}

export default ListIcon