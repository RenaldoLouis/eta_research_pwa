import { useContext } from "react";

import { useTheme } from "@emotion/react";

import { Typography } from "@mui/material";

import { styled } from "@mui/system";
import { AppContext } from "../../App";

// import reusable component
import DivFlexStart from "../../Components/DivFlexStart";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

// delivery title div as button
export const DeliverStickyTitle = styled("div")((props) => ({
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "space-between",
    top: 72,
    width: "100%",
    height: 60,
    backgroundColor: props.theme.palette.background.defaultMobile,
    zIndex: 1000,
    padding: "0px 24px",

}));

// promo title div as button
export const PromoStickyTitle = styled("div")((props) => ({
    display: "flex",
    position: "fixed",
    alignItems: "center",
    justifyContent: "space-between",
    top: 132,
    width: "100%",
    height: 60,
    backgroundColor: props.theme.palette.background.defaultMobile,
    borderTop: `1px solid ${props.theme.palette.background.separatorTitle}`,
    zIndex: 1000,
    padding: "0px 24px",
}));



export const AnimationContainer = (props) => {

    const { isDesktop } = useContext(AppContext)

    return (
        <DivFlexStart
            sx={{
                padding: isDesktop ? "0px" : "0px 24px",
                mt: isDesktop ? 6 : 3,
                height: "70px",
            }}
        >
            {props.children}
        </DivFlexStart>
    )

}


export const Greeting = (props) => {

    const theme = useTheme()

    const { isDesktop } = useContext(AppContext)

    return (
        <DivFlexStart
            sx={{
                padding: isDesktop ? "" : "16px 24px 0px 24px",
                pt: isDesktop ? 3 : undefined,
            }}
        >
            <Typography
                fontSize={"32px"}
                color={theme.palette.text.primary}
                sx={{
                    fontFamily: FontFamily.EINA04REGULAR,
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "40px",
                }}
            >
                {props.children}
            </Typography>

        </DivFlexStart>
    )

}

export const DeliveryInformation = (props) => {

    const { isDesktop } = useContext(AppContext)

    const theme = useTheme()

    return (
        <DivFlexStart
            sx={{
                padding: isDesktop ? "" : "0px 24px 0px 24px",
                mt: isDesktop ? 5 : 3,
            }}
        >
            <Typography
                fontSize={"36px"}
                color={theme.palette.text.primary}
                sx={{
                    fontFamily: FontFamily.EINA04REGULAR,
                    fontStyle: "normal",
                    fontWeight: 600,
                    lineHeight: "40px",
                    pb: 1,
                }}
            >
                {props.children}
            </Typography>
        </DivFlexStart>
    )

}