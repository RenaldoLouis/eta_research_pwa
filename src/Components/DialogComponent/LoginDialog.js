import React, { useContext, useState } from "react";

// import material UI
import { Typography, Grid, Dialog, Tabs, Divider, TextField, FormControl, Snackbar } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import { Outlet } from "react-router-dom";

import { AppContext } from "../../App";

// import reusable component
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";

import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import DivFlexStart from "../ReusableComponents/DivFlexStart";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";

const LoginDialog = () => {

    const { openLoginDialog, isMobile, handleLoginDialog } = useContext(AppContext)

    const theme = useTheme()

    const handleChangeInput = (e) => {
        console.log(e.target.value)
    }



    return (
        <>
            <Dialog open={openLoginDialog} onClose={handleLoginDialog}>
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleLoginDialog} />
                </DivFlexEnd>
                <div style={{ padding: '5px 30px 30px 30px', width: isMobile ? '100%' : 600 }}>
                    <DivFlexCenter>
                        <Typography sx={{ color: theme.palette.text.heading1, fontSize: 32, fontFamily: 'Eina04-Regular' }}>
                            Sign In
                        </Typography>
                    </DivFlexCenter>
                    <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', mt: 3 }}>
                        <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                            Email
                        </Typography>
                        <FormControl sx={{ width: isMobile ? '100%' : '90%' }}>
                            <TextField id="basic" placeholder="" onChange={handleChangeInput} sx={{ input: { fontSize: 14, fontFamily: 'Eina04-Regular' } }} />
                        </FormControl>
                    </DivFlexSpaceBetween>
                    <ButtonSecondary sx={{ mt: 3 }}>
                        <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                            Send OTP
                        </Typography>
                    </ButtonSecondary>
                </div>
            </Dialog>
            <Outlet />
        </>

    )
}


export default LoginDialog