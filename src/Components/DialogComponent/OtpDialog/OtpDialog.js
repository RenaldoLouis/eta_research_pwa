import React, { useContext, useEffect, useState, useRef } from "react";

// import material UI
import { Typography, Box } from "@mui/material";

// import Icon
import ErrorIcon from "../../../assets/icons/ErrorIcon";

// import react-router-dom
import { Outlet } from "react-router-dom";

// import appContext
import { AppContext } from "../../../App";

// import component
import DivFlexCenter from "../../DivFlexCenter";
import CustomDialog from "../DialogContainer/CustomDialog";
import Button from "../../Button";
import CustomOtpInput from "../../CustomOtpInput/CustomOtpInput";

// import Constants
import { FontFamily } from "../../../Constants/FontFamily";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";
import CustomDialogContent from "../DialogContainer/CustomDialogContent";
import DivFlexStart from "../../DivFlexStart";

// import dump data
import { otpValue } from "../../../dump-data";



const OtpDialog = () => {

    const { isMobile, openOtpDialog, sendOtp, handleCloseOtpDialog, handleLogin } = useContext(AppContext)

    const theme = useTheme()

    /** ================ OTP using Custom Component ================ */

    // initiate otp value
    const otpChar = { otp1: '', otp2: '', otp3: '', otp4: '', otp5: '', otp6: '', otp7: '', otp8: '' }

    const [inputOtp, setInputOtp] = useState(otpChar)

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setInputOtp({ ...inputOtp, [name]: value })
    }

    const handleSubmitOtp = () => {
        console.log('inputOtp', inputOtp)
    }

    const [isOtpFalse, setIsOtpFalse] = useState(false)

    const handleButtonLogin = () => {
        if (JSON.stringify(inputOtp) === JSON.stringify(otpValue)) {
            handleSubmitOtp()
            handleCloseOtpDialog()
            handleLogin()
            setInputOtp(otpChar)
            setIsOtpFalse(false)
        } else {
            setIsOtpFalse(true)
        }
    }

    /** ================ EOL OTP using Custom Component ================ */



    /** ================ Countdown Timer ================ */

    useEffect(() => {
        if (sendOtp == true) {
            onCountdownStart()
        }
    }, [sendOtp])

    const timerRef = useRef(null)
    const [timer, setTimer] = useState('00');

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const seconds = Math.floor((total / 1000) % 60);
        const minutes = Math.floor((total / 1000 / 60) % 60);
        const hours = Math.floor((total / 1000 / 60 / 60) % 24);
        return {
            total, hours, minutes, seconds
        };
    }

    const startTimer = (e) => {
        let { total, hours, minutes, seconds } = getTimeRemaining(e);

        if (total >= 0) {
            setTimer(seconds)
        }
    }

    const clearTimer = (e) => {
        setTimer('59');

        if (timerRef.current) clearInterval(timerRef.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        timerRef.current = id;
    }

    const getInitTime = () => {
        let deadline = new Date();
        deadline.setSeconds(deadline.getSeconds() + 59);
        return deadline;
    }

    const onCountdownStart = () => {
        clearTimer(getInitTime());
    }

    /** ================ EOL Cuntdown Timer ================ */


    const handleCloseDialog = () => {
        handleCloseOtpDialog()
        setIsOtpFalse(false)
    }


    return (
        <>
            <CustomDialog open={openOtpDialog} theme={theme} onClose={handleCloseDialog} >
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <CustomDialogContent isMobile={isMobile} theme={theme}>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }} >
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: FontFamily.EINA04REGULAR }}>
                                OTP
                            </Typography>
                        </DivFlexCenter>

                        <CustomOtpInput inputLength={8} handleChangeInput={handleChangeInput} isOtpFalse={isOtpFalse} />


                        {isOtpFalse &&
                            <DivFlexStart sx={{ mt: 2, pl: 0.5 }}>
                                <ErrorIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5 }} />
                                <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: FontFamily.EINA04REGULAR }} color={'#da1e28'}>
                                    OTP code is incorrect
                                </Typography>
                            </DivFlexStart>
                        }
                        {timer != 0 && (
                            <DivFlexCenter sx={{ mb: 0, mt: 6 }}>
                                <Typography sx={{ fontFamily: FontFamily.EINA04REGULAR, color: theme.palette.text.primary, textDecoration: 'underline', fontSize: isMobile ? 12 : 20 }}>
                                    Resent OTP Code {timer}
                                </Typography>
                            </DivFlexCenter>
                        )}
                        <Button onClick={handleButtonLogin} style={{ mt: timer != 0 ? 2 : 5 }} >
                            {`Login`}
                        </Button>
                    </CustomDialogContent>
                </Box>
            </CustomDialog>

            <Outlet />
        </>

    )
}


export default OtpDialog