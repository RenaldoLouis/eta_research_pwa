import React from "react"

import { SvgIcon } from "@mui/material"

export const ChatIcon = props => {
    return (
        <SvgIcon {...props}>
            <path fill={props.color} fillRule="evenodd" clipRule="evenodd" d="M19.9835 0.251084C19.9987 0.264517 20.0135 0.278464 20.028 0.292922C20.0456 0.310592 20.0626 0.328818 20.0787 0.347553C20.2047 0.493648 20.2816 0.667541 20.3092 0.847526C20.3354 1.01809 20.3173 1.19413 20.2551 1.35717L13.7614 19.3397C13.752 19.3657 13.7415 19.3914 13.73 19.4166C13.6063 19.6864 13.4078 19.9151 13.158 20.0754C12.9082 20.2357 12.6177 20.3209 12.3209 20.3209C12.0241 20.3209 11.7335 20.2357 11.4837 20.0754C11.2399 19.9189 11.045 19.6974 10.9208 19.4359L7.57552 12.7454L0.884995 9.40012C0.623564 9.27595 0.401979 9.08099 0.245512 8.83717C0.0852128 8.58739 0 8.29683 0 8.00003C0 7.70323 0.0852128 7.41267 0.245512 7.16288C0.405811 6.9131 0.634456 6.71458 0.904273 6.59094C0.929477 6.57939 0.955151 6.56889 0.981227 6.55947L18.9581 0.0678391C19.2984 -0.0643948 19.6966 -0.00331313 19.9835 0.251084ZM15.443 3.46357L2.69263 8.06787L8.12335 10.7832L15.443 3.46357ZM9.5376 12.1974L16.8574 4.87757L12.253 17.6283L9.5376 12.1974Z" />

        </SvgIcon>
    )

}

export default ChatIcon