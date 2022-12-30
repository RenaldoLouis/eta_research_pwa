import React, { useContext, useState } from "react";

// import material UI
import { Typography, TextField, FormControl, Snackbar } from "@mui/material";

// import icon
import CloseIcon from '@mui/icons-material/Close';

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import reusable component
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import CustomDialog from "../ReusableComponents/CustomDialog";
import CustomDialogContent from "../ReusableComponents/CustomDialogContent";
import TextFieldStyled from "../ReusableComponents/TextFieldStyle";

// import style and theme
import { useTheme } from "@mui/material/styles";

const LoginDialog = () => {

    const { openLoginDialog, isMobile, handleCloseLoginDialog, handleButtonOtpDialog, sendOtp } = useContext(AppContext)

    const theme = useTheme()

    const [email, setEmail] = useState('')
    const [emailSubmit, setEmailSubmit] = useState('')

    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        console.log(e.target.value)
        setEmail(value)
        setEmailSubmit(value)
    }

    const handleCloseDialog = () => {
        handleCloseLoginDialog()
        setEmail('')
    }

    const handlePressSendOtp = () => {
        if (email != '') {
            setIsEmailEmpty(false)
            if (isValidEmail(emailSubmit)) {
                handleButtonOtpDialog()
                setEmail('')
                setIsEmailInvalid(false)
            } else {
                console.log('Email is not valid')
                setIsEmailInvalid(true)
            }

        }
        if (email == '') {
            console.log('Email is empty')
            setIsEmailEmpty(true)
        }
    }


    return (
        <>
            <CustomDialog open={openLoginDialog} onClose={handleCloseDialog} theme={theme}>
                <div style={{ backgroundColor: theme.palette.background.dialog }}>
                    <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                        <CloseIcon onClick={handleCloseDialog} />
                    </DivFlexEnd>
                    <CustomDialogContent sx={{ backgroundColor: theme.palette.background.dialog }}>
                        <DivFlexCenter>
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                                Sign In
                            </Typography>
                        </DivFlexCenter>
                        <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', mt: 3 }}>
                            <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-SemiBold', color: theme.palette.text.titleFormText }}>
                                Email
                            </Typography>
                            <FormControl sx={{ width: isMobile ? '100%' : '90%' }}>
                                <TextFieldStyled id="email" placeholder="example@email.com" value={email} onChange={handleChangeInput} sx={{ input: { fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-Regular', height: isMobile ? 5 : 20 } }} />
                            </FormControl>
                        </DivFlexSpaceBetween>

                        <DivFlexCenter sx={{ mt: 2 }}>
                            {isEmailEmpty ? (
                                <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                    Email is Empty
                                </Typography>
                            ) : isEmailInvalid ? (
                                <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                    Email is Invalid
                                </Typography>
                            ) : (<></>)
                            }
                        </DivFlexCenter>

                        <ButtonSecondary onClick={handlePressSendOtp} sx={{ mt: 3 }}>
                            <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-SemiBold' }}>
                                Send OTP
                            </Typography>
                        </ButtonSecondary>
                    </CustomDialogContent>
                </div>
            </CustomDialog>
            <Snackbar
                open={sendOtp}
                message={<Typography sx={{ color: theme.palette.text.titleFormText, fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-Regular' }}>
                    OTP code has been sent to <span style={{ fontFamily: 'Eina04-SemiBold' }}>{emailSubmit} </span>
                </Typography>}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                sx={{ mt: isMobile ? 1 : 10 }}
                ContentProps={{
                    sx: {
                        background: theme.palette.background.dialog,
                        width: isMobile ? '100%' : 600,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 72
                    }
                }}
            />
            <Outlet />
        </>

    )
}


export default LoginDialog