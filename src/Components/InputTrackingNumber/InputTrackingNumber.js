import React, { } from "react";

import { Typography, FormControl, TextField } from "@mui/material";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";

import { useNavigate } from "react-router-dom";


const InputTrackingNumber = () => {

    const theme = useTheme()

    const handleChangeInput = (e) => {
        console.log(e.target.value)
    }

    let navigate = useNavigate();
    const onClickSubmit = () => {
        navigate("/delivery")
    }

    return (
        <div style={{ width: '100vw', minHeight: '100vh' }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', top: '20%', marginTop: '20%' }}>
                <div style={{ width: 306, maxHeight: 330, backgroundColor: theme.palette.background.promoCard, padding: 20 }}>
                    <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                        Tracking Number
                    </Typography>
                    <FormControl sx={{ width: '100%', marginTop:2, }}>
                        <TextField id="basic" placeholder="Input your tracking Number" onChange={handleChangeInput} sx={{ input: { fontSize:14, fontFamily: 'Eina04-Regular' } }} />
                    </FormControl>
                    <div onClick={onClickSubmit} style={{ width: '100%', height: 52, backgroundColor: theme.palette.text.text4, display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop:60,  cursor:'pointer' }}>
                        <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                            Submit
                        </Typography>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InputTrackingNumber