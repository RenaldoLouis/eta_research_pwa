import React, { useState, useEffect, useContext, useMemo } from "react";
import { PwaContext } from "../context/PwaContext";

// import mui
import { Typography } from "@mui/material";

// import icon

// import Styled
import { useTheme, styled } from "@mui/material";

// import Reusable Component
import CustomDialog from "../Components/ReusableComponents/CustomDialog";
import CustomDialogContent from "../Components/ReusableComponents/CustomDialogContent";

import Button from "../Components/ReusableComponents/Button";

// import context
import { AppContext } from "../App";



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
            <Typography sx={{ color: theme.palette.text.primary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold', mb: 3 }}>
                PWA Configuration Ver 1.2
            </Typography>
            {supportsPWA ? (

                <Button onClick={(e) => downloadApp(e)} style={{ width: isMobile ? '100%' : undefined, mb: 2 }}>
                    Install to Home Screen
                </Button>

            ) : null}
            {isChrome ? null : (

                <Typography sx={{ color: theme.palette.background.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold', mb: 2 }}>
                    This Browser is not supported
                </Typography>
            )}
            {showInstallMessage && (

                <Button onClick={() => handleShow()} style={{ width: isMobile ? '100%' : undefined, mb: 2 }}>
                    Step to Install to homescreen
                </Button>

            )}

            <Button onClick={allowNotification} style={{ width: isMobile ? '100%' : undefined, mb: 2 }}>
                Allow Notification
            </Button>

            <Button onClick={onClickTrackingNumber} style={{ width: isMobile ? '100%' : undefined, mb: 2 }}>
                Temporary Link Tracking Number
            </Button>

            <Button onClick={onClickDeliveryPage} style={{ width: isMobile ? '100%' : undefined, mb: 2 }}>
                Temporary Link Delivery Page
            </Button>


            <CustomDialog open={show} onClose={handleClose} theme={theme}>
                <CustomDialogContent isMobile={isMobile}>
                    <DivFlexCenter>
                        <Typography sx={{ color: theme.palette.text.heading1, fontSize: 20, fontFamily: 'Eina04-Regular' }}>
                            How to install to Device
                        </Typography>
                    </DivFlexCenter>
                    <DivFlexStart sx={{ mt: 2, mb: 1 }}>
                        <Typography sx={{ color: theme.palette.text.primary, fontSize: 14, fontFamily: 'Eina04-Regular' }}>
                            1. Install this webapp to your device: tap
                        </Typography>
                    </DivFlexStart>
                    <img src={firstStep} alt="" style={{
                        width: "100%",
                        height: "100%"
                    }} />

                    <DivFlexStart sx={{ mt: 3, mb: 1 }}>
                        <Typography sx={{ color: theme.palette.text.primary, fontSize: 14, fontFamily: 'Eina04-Regular' }}>
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
