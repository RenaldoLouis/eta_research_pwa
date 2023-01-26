import React, { useContext, useEffect, useState } from "react";

import Countdown from "react-countdown";

// import material UI
import { Typography, Snackbar, Box } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import { Outlet } from "react-router-dom";

import { AppContext } from "../../../App";

import ButtonSecondary from "../../ReusableComponents/ButtonSecondary";

// import reusable component
import DivFlexCenter from "../../ReusableComponents/DivFlexCenter";
import DivFlexEnd from "../../ReusableComponents/DivFlexEnd";
import CustomDialog from "../../ReusableComponents/CustomDialog";

// dark mode and light mode
import { useTheme, styled } from "@mui/material/styles";
import CustomDialogContent from "../../ReusableComponents/CustomDialogContent";

// Renderer callback with condition
const renderer = ({ hours, minutes, seconds, completed }) => {
    if (completed) {
        // Render a complete state
        return 0;
    } else {
        // Render a countdown
        return <span>{seconds}</span>;
    }
};

const InputOtp = styled('input')((props) => ({
    width: '15%',
    height: props.isMobile ? 35 : 60,
    border: props.isOtpFalse ? `1px solid #da1e28` : `1px solid ${props.theme.palette.background.borderForm}`,
    marginLeft: props.isMobile ? 2 : 5,
    marginRight: props.isMobile ? 2 : 5,
    textAlign: 'center',
    fontFamily: 'Eina04-Regular',
    fontSize: props.isMobile ? 12 : 20,
    color: props.theme.palette.text.inputText,
    backgroundColor: props.theme.palette.background.dialog,
    ":focus": {
        outline:'none',
        border: props.isOtpFalse ? `1px solid #da1e28` : `1px solid ${props.theme.palette.background.borderFormActive}`,
    }
}))



const OtpDialog = () => {

    const { isMobile, openOtpDialog, sendOtp, handleCloseOtpDialog, handleLogin } = useContext(AppContext)

    const theme = useTheme()

    const otpChar = { otp1: '', otp2: '', otp3: '', otp4: '', otp5: '', otp6: '', otp7: '', otp8: '' }

    const [inputOtp, setInputOtp] = useState(otpChar)

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setInputOtp({ ...inputOtp, [name]: value })
    }

    const handleSubmitOtp = () => {
        console.log('inputOtp', inputOtp)
    }

    const [k, setK] = useState(false);
    const onCompleteTimeFun = () => {
        console.log("Resetting Time");
        setK((i) => !i);
    };

    const [initialTime, setInitialTime] = useState(Date.now() + 59000)
    const [otpCountdown, setOtpCountdown] = useState(true)

    const [isOtpFalse, setIsOtpFalse] = useState(false)

    const handleButtonLogin = () => {
        if (Object.values(inputOtp).includes('')) {
            console.log('please input the otp')
            setIsOtpFalse(true)
        } else {
            handleSubmitOtp()
            handleCloseOtpDialog()
            handleLogin()
            setInputOtp(otpChar)
            setIsOtpFalse(false)
        }
    }
    
    useEffect(() => {
        setInitialTime(Date.now() + 59000)
        setOtpCountdown(true)
    }, [sendOtp])

    const handleAfterFinsihCountdown = () => {
        setOtpCountdown(false)
    }

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {
                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            const next = elmnt.target.tabIndex;
            if (next < 8) {
                elmnt.target.form.elements[next].focus()
            }
        }
    }

    const handleCloseDialog = () => {
        handleCloseOtpDialog()
        setIsOtpFalse(false)
    }


    return (
        <>
            <CustomDialog open={openOtpDialog} theme={theme} >
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                        <CloseIcon onClick={handleCloseDialog} />
                    </DivFlexEnd>
                    <CustomDialogContent>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }} >
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                                OTP
                            </Typography>
                        </DivFlexCenter>
                        <form >
                            <DivFlexCenter>

                                <InputOtp
                                    name="otp1"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    // onKeyPress={keyPressed}
                                    onChange={handleChangeInput}
                                    tabIndex="1" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />
                                <InputOtp
                                    name="otp2"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    onChange={handleChangeInput}
                                    tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />
                                <InputOtp
                                    name="otp3"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    onChange={handleChangeInput}
                                    tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />
                                <InputOtp
                                    name="otp4"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    onChange={handleChangeInput}
                                    tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />

                                <InputOtp
                                    name="otp5"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    onChange={handleChangeInput}
                                    tabIndex="5" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />

                                <InputOtp
                                    name="otp6"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    onChange={handleChangeInput}
                                    tabIndex="6" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />

                                <InputOtp
                                    name="otp7"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    onChange={handleChangeInput}
                                    tabIndex="7" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />

                                <InputOtp
                                    name="otp8"
                                    type="text"
                                    autoComplete="off"
                                    className="otpInput"
                                    onChange={handleChangeInput}
                                    tabIndex="8" maxLength="1" onKeyUp={e => inputfocus(e)}
                                    isMobile={isMobile}
                                    theme={theme}
                                    isOtpFalse={isOtpFalse}
                                />
                            </DivFlexCenter>

                        </form>
                        {otpCountdown && (
                            <DivFlexCenter sx={{ mb: 3, mt: 3 }}>
                                <Typography sx={{ color: theme.palette.text.resendOtp, textDecoration: 'underline', fontSize: isMobile ? 12 : 20 }}>
                                    Resent OTP Code (<Countdown key={k} date={initialTime} renderer={renderer} onComplete={handleAfterFinsihCountdown} />)
                                </Typography>
                            </DivFlexCenter>
                        )}
                        <ButtonSecondary onClick={handleButtonLogin} sx={{ mt: isMobile ? 3 : 5 }}>
                            <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold' }}>
                                Login
                            </Typography>
                        </ButtonSecondary>
                    </CustomDialogContent>
                </Box>
            </CustomDialog>


            <Outlet />
        </>

    )
}


export default OtpDialog