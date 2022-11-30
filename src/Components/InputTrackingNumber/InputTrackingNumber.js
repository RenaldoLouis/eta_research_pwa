import React, { } from "react";

import { Typography, FormControl, TextField } from "@mui/material";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";

// import reusbale component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";

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
        <DivFlexCenter sx={{ mt:15, padding:0 }}>
            <div style={{ width: 306, maxHeight: 330, backgroundColor: theme.palette.background.promoCard, padding: 20 }}>
                <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                    Tracking Number
                </Typography>
                <FormControl sx={{ width: '100%', mt: 2, }}>
                    <TextField id="basic" placeholder="Input your tracking Number" onChange={handleChangeInput} sx={{ input: { fontSize: 14, fontFamily: 'Eina04-Regular' } }} />
                </FormControl>
                <ButtonSecondary onClick={onClickSubmit} sx={{ marginTop: 7}}>
                    <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                        Submit
                    </Typography>
                </ButtonSecondary>
            </div>
        </DivFlexCenter>
    )
}

export default InputTrackingNumber