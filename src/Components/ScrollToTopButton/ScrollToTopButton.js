import React, { useState } from "react";

import { styled } from '@mui/system'

// import Icon
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// import color theme
import { useTheme } from "@mui/material/styles";

// import react-roter-dom
import { Outlet } from 'react-router-dom';


const ButtonToTop = styled('div')((props) => ({
    position: 'fixed',
    zIndex: 1000,
    color: props.theme.palette.background.default,
    bottom: 40,
    right: 10,
    height: 50,
    width: 50,
    backgroundColor: props.theme.palette.background.scrollToTop,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer'
}));

const ScrollToTopButton = () => {

    const theme = useTheme()

    const [showButton, setShowButton] = useState(false)

    const toggleVisible = () => {
        const scrolled = document.documentElement.scrollTop;
        if (scrolled > 20) {
            setShowButton(true)
        } else if (scrolled <= 20) {
            setShowButton(false)
        }
    }

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    window.addEventListener('scroll', toggleVisible)

    return (
        <>
            {showButton && (
                <ButtonToTop onClick={scrollToTop}>
                    <ArrowUpwardIcon />
                </ButtonToTop>
            )}

            <Outlet />
        </>
    )
}

export default ScrollToTopButton