import React, { useState, useEffect, useContext, useMemo } from "react";
import { PwaContext } from "../context/PwaContext";

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


import firstStep from "../assets/images/1st_step.png";
import addLogo from "../assets/images/add_to_home_screen.png";

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

function Login() {
    const { downloadApp, supportsPWA, showInstallMessage } = useContext(PwaContext);

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

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Ver 1.2
                </p>
                {supportsPWA ? (

                    <div className="mt-3">
                        <button onClick={(e) => downloadApp(e)}>install_to_homescreen</button>
                    </div>
                ) : null}
                {isChrome ? null : (
                    <div>
                        This Browser is not supported
                    </div>
                )}
                {showInstallMessage && (
                    <div className="mt-3">
                        <button onClick={() => handleShow()}>Step to Install to homescreen</button>
                    </div>
                )}
                <div className="mt-3">
                    <button onClick={allowNotification}>Allow Notification</button>
                </div>
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>How to install to Device</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div className="navbar-modal-body">
                            1.Install this webapp to your device: tap
                            <img src={firstStep} alt="" style={{
                                width: "100%",
                                height: "100%"
                            }} />
                            <div className="mt-3">
                                2.And then add to homescreen
                                <img src={addLogo} alt="" style={{
                                    width: "100%",
                                    height: "100%"
                                }} />
                            </div>
                        </div>
                        <div className="m-3 d-flex justify-content-between">
                            <Button
                                design="Emphasized"
                                style={{ visibility: "hidden" }}
                            >
                                Save
                            </Button>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="primary" onClick={handleClose}>
                            Save Changes
                        </Button>
                    </Modal.Footer>
                </Modal>
            </header>

        </div>
    );
}

export default Login;
