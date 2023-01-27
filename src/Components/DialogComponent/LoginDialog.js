import React, { useContext, useState } from "react";

// import material UI
import { Typography, TextField, FormControl, Snackbar, Box } from "@mui/material";

// import icon
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


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
import DivFlexStart from "../ReusableComponents/DivFlexStart";

const LoginDialog = () => {

    const { openLoginDialog, isMobile, handleCloseLoginDialog, handleButtonOtpDialog, sendOtp } = useContext(AppContext)

    const theme = useTheme()

    // email validation

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
        setIsEmailEmpty(false)
        setIsEmailInvalid(false)
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
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                        <CloseIcon onClick={handleCloseDialog} sx={{ cursor: 'pointer' }} />
                    </DivFlexEnd>
                    <CustomDialogContent sx={{ backgroundColor: theme.palette.background.dialog }}>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}>
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                                Sign In
                            </Typography>
                        </DivFlexCenter>
                        <DivFlexSpaceBetween sx={{ flexWrap: 'wrap' }}>
                            <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-SemiBold', color: theme.palette.text.titleFormText}}>
                                Email
                            </Typography>
                            <FormControl sx={{ width: isMobile ? '100%' : '90%' }}>
                                <TextFieldStyled id="email" placeholder="example@email.com" value={email} onChange={handleChangeInput} isMobile={isMobile} />
                            </FormControl>
                        </DivFlexSpaceBetween>

                        <DivFlexStart sx={{ mt: 2 }}>
                            <Box sx={{ color: theme.palette.text.titleFormText, width: isMobile ? '' : 55 }} />

                            {isEmailEmpty ? (
                                <DivFlexStart>
                                    <ErrorOutlineIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5, mt: -0.3 }} />
                                    <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                        Email is empty
                                    </Typography>
                                </DivFlexStart>
                            ) : isEmailInvalid ? (
                                <DivFlexStart>
                                    <ErrorOutlineIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5, mt: -0.3 }} />
                                    <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                        Email is invalid
                                    </Typography>
                                </DivFlexStart>
                            ) : (<></>)
                            }
                        </DivFlexStart>

                        <ButtonSecondary onClick={handlePressSendOtp} sx={{ mt: isMobile ? 3 : 5 }}>
                            <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-SemiBold' }}>
                                Send OTP
                            </Typography>
                        </ButtonSecondary>
                    </CustomDialogContent>
                </Box>
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
                sx={{ mt: isMobile ? 8 : 10, zIndex: 3000 }}
                ContentProps={{
                    sx: {
                        background: theme.palette.background.dialog,
                        width: isMobile ? '100%' : 600,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: 72,
                        borderRadius: 0
                    }
                }}
            />
            <Outlet />
        </>

    )
}


export default LoginDialog