import React, { useContext, useState } from "react";

import Countdown from "react-countdown";

// import material UI
import { Typography, Dialog, TextField, FormControl, Snackbar } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import { Outlet } from "react-router-dom";

import { AppContext } from "../../../App";

import ButtonSecondary from "../../ReusableComponents/ButtonSecondary";

import DivFlexCenter from "../../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../../ReusableComponents/DivFlexEnd";

// dark mode and light mode
import { useTheme, styled } from "@mui/material/styles";
import DivFlexStart from "../../ReusableComponents/DivFlexStart";

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
    width: props.isMobile? 25 :'15%',
    height: props.isMobile? 35 :  60,
    borderRadius: 5,
    border: ' 1px solid rgb(151, 151, 151)',
    marginLeft: props.isMobile? 2: 5,
    marginRight: props.isMobile? 2:  5,
    textAlign:'center'
}))


const OtpDialog = () => {

    const { isMobile, openOtpDialog, sendOtp, handleSendOtp, hanldeCloseOtpDialog, handleCloseSendOtp } = useContext(AppContext)

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


    const [openStatus, setOpenStatus] = useState(false)

    const handleCloseStatus = () => {
        setOpenStatus(false)
    }

    const [initialTime, setInitialTime] = useState(Date.now() + 15000)

    const handleSendOtpButton = () => {
        handleSubmitOtp()
        handleSendOtp()
        setOpenStatus(true)
        setInitialTime(Date.now() + 15000)
    }

    const handleAfterFinsihCountdown = () => {
        handleCloseSendOtp()
        setOpenStatus(false)
    }

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {

                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            console.log("next");

            const next = elmnt.target.tabIndex;
            if (next < 8) {
                elmnt.target.form.elements[next].focus()
            }
        }

        console.log(elmnt.target.tabIndex)

    }



    return (
        <>
            <Dialog open={openOtpDialog} >
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={hanldeCloseOtpDialog} />
                </DivFlexEnd>
                <div style={{ padding: '5px 20px 50px 20px', width: isMobile ? '100%' : 600 }}>
                    <DivFlexCenter sx={{ mb: 2 }}>
                        <Typography sx={{ color: theme.palette.text.heading1, fontSize: 40, fontFamily: 'Eina04-Regular' }}>
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

                            />
                            <InputOtp
                                name="otp2"
                                type="text"
                                autoComplete="off"
                                className="otpInput"
                                onChange={handleChangeInput}
                                tabIndex="2" maxLength="1" onKeyUp={e => inputfocus(e)}
                                isMobile={isMobile}
                            />
                            <InputOtp
                                name="otp3"
                                type="text"
                                autoComplete="off"
                                className="otpInput"
                                onChange={handleChangeInput}
                                tabIndex="3" maxLength="1" onKeyUp={e => inputfocus(e)}
                                isMobile={isMobile}
                            />
                            <InputOtp
                                name="otp4"
                                type="text"
                                autoComplete="off"
                                className="otpInput"
                                onChange={handleChangeInput}
                                tabIndex="4" maxLength="1" onKeyUp={e => inputfocus(e)}
                                isMobile={isMobile}
                            />

                            <InputOtp
                                name="otp5"
                                type="text"
                                autoComplete="off"
                                className="otpInput"
                                onChange={handleChangeInput}
                                tabIndex="5" maxLength="1" onKeyUp={e => inputfocus(e)}
                                isMobile={isMobile}
                            />

                            <InputOtp
                                name="otp6"
                                type="text"
                                autoComplete="off"
                                className="otpInput"
                                onChange={handleChangeInput}
                                tabIndex="6" maxLength="1" onKeyUp={e => inputfocus(e)}
                                isMobile={isMobile}
                            />

                            <InputOtp
                                name="otp7"
                                type="text"
                                autoComplete="off"
                                className="otpInput"
                                onChange={handleChangeInput}
                                tabIndex="7" maxLength="1" onKeyUp={e => inputfocus(e)}
                                isMobile={isMobile}
                            />

                            <InputOtp
                                name="otp8"
                                type="text"
                                autoComplete="off"
                                className="otpInput"
                                onChange={handleChangeInput}
                                tabIndex="8" maxLength="1" onKeyUp={e => inputfocus(e)}
                                isMobile={isMobile}
                            />
                        </DivFlexCenter>

                    </form>
                    {sendOtp && (
                        <DivFlexCenter sx={{ mb: 3, mt: 3 }}>
                            <Typography sx={{ color: theme.palette.text.resendOtp, textDecoration: 'underline', fontSize: 20 }}>
                                Resent OTP Code (<Countdown key={k} date={initialTime} renderer={renderer} onComplete={handleAfterFinsihCountdown} />)
                            </Typography>
                        </DivFlexCenter>
                    )}
                    <ButtonSecondary onClick={handleSendOtpButton} sx={{ mt: 3 }}>
                        <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 20, fontFamily: 'Eina04-SemiBold' }}>
                            Login
                        </Typography>
                    </ButtonSecondary>
                </div>
            </Dialog>

            <Snackbar
                open={openStatus}
                onClose={handleCloseStatus}
                message={<Typography sx={{ color: '#131415', fontSize: 14, fontFamily: 'Eina04-Regular' }}>
                    OTP code has been sent to <span style={{ fontFamily: 'Eina04-SemiBold' }}>example@email.com </span>
                </Typography>}
                anchorOrigin={{
                    vertical: "top",
                    horizontal: "center"
                }}
                sx={{ mt: 10 }}
                ContentProps={{
                    sx: {
                        background: "#ffffff",
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


export default OtpDialog