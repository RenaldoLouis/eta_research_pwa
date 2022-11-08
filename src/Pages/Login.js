import React, { useState, useEffect, useContext, useMemo } from "react";
import { PwaContext } from "../context/PwaContext";


function Login() {
    const { downloadApp, supportsPWA, showInstallMessage } = useContext(PwaContext);

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

    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                {supportsPWA ? (

                    <div className="mt-3">
                        <button onClick={(e) => downloadApp(e)}>install_to_homescreen</button>
                    </div>
                ) : null}
                <div className="mt-3">
                    <button onClick={allowNotification}>Allow Notification</button>
                </div>
            </header>
        </div>
    );
}

export default Login;
