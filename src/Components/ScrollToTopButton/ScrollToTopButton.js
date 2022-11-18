import React, { useState } from "react";

// import Icon
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

// import styles
import { useScrollToTopButton } from "./ScrollToTopButtonStyles";

// dark mode and light mode
import { styled, useTheme } from "@mui/material/styles";

import { Outlet } from 'react-router-dom';

const ScrollToTopButton = () => {

    const theme = useTheme()

    const classes = useScrollToTopButton(theme)

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
                <div className={classes.root} onClick={scrollToTop}>
                    <ArrowUpwardIcon />
                </div>
            )}
            <div>
                <Outlet />
            </div>
        </>
    )
}

export default ScrollToTopButton