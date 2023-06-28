import React, { useContext, useEffect, useState, useRef } from "react";

// import material UI
import { Typography, Box } from "@mui/material";

// import Icon
import ErrorIcon from "../../../assets/icons/ErrorIcon";

// import react-router-dom
import { Outlet } from "react-router-dom";

// import appContext
import { AppContext } from "../../../App";

// import translations
import { useTranslation } from "react-i18next";

// import component
import DivFlexCenter from "../../DivFlexCenter";
import CustomDialog from "../DialogContainer/CustomDialog";
import Button from "../../Button";

// import Constants
import { FontFamily } from "../../../Constants/FontFamily";

// dark mode and light mode
import { useTheme, styled } from "@mui/material/styles";
import CustomDialogContent from "../DialogContainer/CustomDialogContent";
import DivFlexStart from "../../DivFlexStart";

// import dump data
// import { otpCodeGenerate } from "../../../dump-data";


// import otp input library
import OtpInput from "react-otp-input";

const InputOtp = styled('input')((props) => ({
    height: props.isMobile ? 35 : 60,
    border: props.isOtpFalse ? `1px solid #da1e28` : `1px solid ${props.theme.palette.background.borderForm}`,
    marginLeft: props.isMobile ? 2 : 5,
    marginRight: props.isMobile ? 2 : 5,
    textAlign: 'center',
    fontFamily: FontFamily.EINA04REGULAR,
    fontSize: props.isMobile ? 12 : 20,
    color: props.theme.palette.text.inputText,
    backgroundColor: props.theme.palette.background.dialog,
    ":focus": {
        outline: 'none',
        border: props.isOtpFalse ? `1px solid #da1e28` : `1px solid ${props.theme.palette.background.borderFormActive}`,
    }
}))


const OtpDialog = (props) => {

    const { isMobile, sendOtp, handleCloseOtpDialog, handleLogin, setIsLoadingLogin, handleCloseDialog } = useContext(AppContext)

    const { isOpen } = props;

    const { t } = useTranslation()

    const theme = useTheme()

    const otpCodeGenerate = "00000000"

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


    /** ================ OTP state using OTP library */
    const [isOtpFalse, setIsOtpFalse] = useState(false)

    const [otpCode, setOtpCode] = useState("");

    const handleChange = (otp) => {
        setOtpCode(otp);
        console.log("code", otpCode);
    };

    const handleButtonLogin = () => {
        setIsLoadingLogin(true)
        if (otpCode == otpCodeGenerate) {
            handleCloseOtpDialog()
            handleLogin()
            setOtpCode("")
            setIsOtpFalse(false)
            setIsLoadingLogin(false)
        } else {
            setIsOtpFalse(true)
            setIsLoadingLogin(false)
        }
    }

    /** ================ EOL OTP state using OTP library */


    const handleCloseDialogOtp = () => {
        handleCloseOtpDialog()
        setIsOtpFalse(false)
        setOtpCode("")
    }


    return (
        <>
            <CustomDialog open={isOpen} theme={theme} onClose={handleCloseDialogOtp} >
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <CustomDialogContent isMobile={isMobile} theme={theme}>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }} >
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: FontFamily.EINA04REGULAR }}>
                                {t('sigInDialog.otp')}
                            </Typography>
                        </DivFlexCenter>

                        <OtpInput
                            value={otpCode}
                            onChange={handleChange}
                            numInputs={8}
                            renderSeparator={<span style={{ width: "8px" }}></span>}
                            renderInput={(props) => <InputOtp isOtpFalse={isOtpFalse} theme={theme} isMobile={isMobile} {...props} />}
                            inputStyle={{
                                width: "100%",
                            }}
                        />

                        {isOtpFalse &&
                            <DivFlexStart sx={{ mt: 2, pl: 0.5 }}>
                                <ErrorIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5 }} />
                                <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: FontFamily.EINA04REGULAR }} color={'#da1e28'}>
                                    {t('sigInDialog.otpCodeIsIncorrect')}
                                </Typography>
                            </DivFlexStart>
                        }
                        {timer != 0 && (
                            <DivFlexCenter sx={{ mb: 0, mt: 6 }}>
                                <Typography sx={{ fontFamily: FontFamily.EINA04REGULAR, color: theme.palette.text.primary, textDecoration: 'underline', fontSize: isMobile ? 12 : 20 }}>
                                    {t('sigInDialog.resentOtp')} ({timer})
                                </Typography>
                            </DivFlexCenter>
                        )}
                        <Button onClick={handleButtonLogin} style={{ mt: timer != 0 ? 2 : 5 }} >
                            {t('sigInDialog.login')}
                        </Button>
                    </CustomDialogContent>
                </Box>
            </CustomDialog>

            <Outlet />
        </>

    )
}


export default OtpDialog