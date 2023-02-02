import React, { useState, useEffect, useContext, useMemo } from "react";
import { PwaContext } from "../context/PwaContext";

// import mui
import { Typography } from "@mui/material";

// import icon
import CloseIcon from '@mui/icons-material/Close';

// import Styled
import { useTheme, styled } from "@mui/material";

// import Reusable Component
import ButtonSecondary from "../Components/ReusableComponents/ButtonSecondary";
import CustomDialog from "../Components/ReusableComponents/CustomDialog";
import CustomDialogContent from "../Components/ReusableComponents/CustomDialogContent";

// import context
import { AppContext } from "../App";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


// router
import { useNavigate, Outlet } from "react-router-dom"


import firstStep from "../assets/Images/1st_step.png";
import addLogo from "../assets/Images/add_to_home_screen.png";
import DivFlexEnd from "../Components/ReusableComponents/DivFlexEnd";
import DivFlexCenter from "../Components/ReusableComponents/DivFlexCenter";
import DivFlexStart from "../Components/ReusableComponents/DivFlexStart";

// Opera 8.0+
var isOpera = (!!window.opr && (navigator.userAgent.indexOf("Opera") || navigator.userAgent.indexOf('OPR')) !== -1) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

// Firefox 1.0+
var isFirefox = typeof InstallTrigger !== 'undefined';

// Safari 3.0+ "[object HTMLElementConstructor]" 
var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || (typeof safari !== 'undefined' && window['safari'].pushNotification));

// Internet Explorer 6-11
var isIE = /*@cc_on!@*/false || !!document.documentMode;

// Edge 20+
var isEdge = !isIE && !!window.StyleMedia;

// Chrome 1 - 79
var isChrome = navigator.userAgent.indexOf("Chrome") !== -1;


export const Container = styled('div')((props) => ({
    width: '100vw',
    paddingLeft: 24,
    paddingRight: 24,
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
}))

function Login() {
    const { downloadApp, supportsPWA, showInstallMessage } = useContext(PwaContext);

    const theme = useTheme()

    const { isMobile, isDesktop } = useContext(AppContext)

    const [show, setShow] = useState(false);


    const randomNotification = () => {
        const notifTitle = "test Notification";
        const notifBody = `Created by Tester1.`;
        const notifImg = `https://commons.wikimedia.org/wiki/File:Facebook_Like_Button.jpg`;
        const options = {
            body: notifBody,
            icon: notifImg,
        };
        new Notification(notifTitle, options);
        setTimeout(randomNotification, 5000);
    }

    const allowNotification = () => {
        Notification.requestPermission().then((result) => {
            if (result === 'granted') {
                randomNotification();
            }
        });
    }

    const handleClose = () => {
        setShow(false);
    }

    const handleShow = () => {
        setShow(true);
    }


    const navigate = useNavigate();

    const onClickTrackingNumber = () => {
        navigate("/inputTrackingNumber")
    }

    const onClickDeliveryPage = () => {
        navigate("/delivery")
    }

    return (
        <Container>
            <Typography sx={{ color: theme.palette.text.primary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold', mb:3 }}>
                PWA Configuration Ver 1.2
            </Typography>
            {supportsPWA ? (
                <ButtonSecondary onClick={(e) => downloadApp(e)} sx={{ padding: '0px 16px 0px 16px', mb: 3, maxWidth: '100%' }}>
                    <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold' }}>
                        Install to Home Screen
                    </Typography>
                </ButtonSecondary>
            ) : null}
            {isChrome ? null : (

                <Typography sx={{ color: theme.palette.background.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold', mb: 2 }}>
                    This Browser is not supported
                </Typography>
            )}
            {showInstallMessage && (

                <ButtonSecondary onClick={() => handleShow()} sx={{ padding: '0px 16px 0px 16px', mb: 2, maxWidth: '100%' }}>
                    <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold' }}>
                        Step to Install to homescreen
                    </Typography>
                </ButtonSecondary>
            )}

            <ButtonSecondary onClick={allowNotification} sx={{ padding: '0px 16px 0px 16px', mb: 2, maxWidth: '100%' }}>
                <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold' }}>
                    Allow Notification
                </Typography>
            </ButtonSecondary>

            <ButtonSecondary onClick={onClickTrackingNumber} sx={{ padding: '0px 16px 0px 16px', mb: 2, maxWidth: '100%' }}>
                <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold' }}>
                    Temporary Link Tracking Number
                </Typography>
            </ButtonSecondary>

            <ButtonSecondary onClick={onClickDeliveryPage} sx={{ padding: '0px 16px 0px 16px', mb: 2, maxWidth: '100%' }}>
                <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold' }}>
                    Temporary Link Delivery Page
                </Typography>
            </ButtonSecondary>
            <CustomDialog open={show} onClose={handleClose} theme={theme}>
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleClose} sx={{ cursor: 'pointer' }} />
                </DivFlexEnd>
                <CustomDialogContent>
                    <DivFlexCenter>
                        <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: 20, fontFamily: 'Eina04-Regular' }}>
                            How to install to Device
                        </Typography>
                    </DivFlexCenter>
                    <DivFlexStart sx={{ mt: 2, mb: 1 }}>
                        <Typography sx={{ color: theme.palette.text.titleFormText, fontSize: 14, fontFamily: 'Eina04-Regular' }}>
                            1. Install this webapp to your device: tap
                        </Typography>
                    </DivFlexStart>
                    <img src={firstStep} alt="" style={{
                        width: "100%",
                        height: "100%"
                    }} />

                    <DivFlexStart sx={{ mt: 3, mb: 1 }}>
                        <Typography sx={{ color: theme.palette.text.titleFormText, fontSize: 14, fontFamily: 'Eina04-Regular' }}>
                            2. And then add to homescreen
                        </Typography>
                    </DivFlexStart>
                    <img src={addLogo} alt="" style={{
                        width: "100%",
                        height: "100%"
                    }} />
                </CustomDialogContent>
            </CustomDialog>

        </Container>
    );
}

export default Login;
