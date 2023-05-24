import React, { useContext } from "react";

import { styled } from "@mui/system";

import Typography from "@mui/material/Typography";

import { AppContext } from "../App";

import { useTheme } from "@emotion/react";

// import contstant
import { FontFamily } from "../Constants/FontFamily";



const Buttons = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignItems: "center",
  height: props.height ? props.height : props.isMobile ? 40 : 52,
  backgroundColor: props.isLoading ? props.theme.palette.background.buttonActive : props.theme.palette.background.buttonDefault,
  cursor: "pointer",
  padding: "0px 8px",
  ":hover": {
    backgroundColor:
      props.isMobile || props.isTablet ? ''
        : props.isLoading ? props.theme.palette.background.buttonActive : props.theme.palette.background.buttonHover,
  },
  ":active": {
    backgroundColor:
      props.isLoading ? props.theme.palette.background.buttonDefault
        : props.theme.palette.background.buttonActive,
  },
}));

const Button = (props) => {
  const { isMobile, isDekstop, isTablet } = useContext(AppContext);

  const theme = useTheme()

  const { children, icon, style, onClick, isPromo, height, isLoading } = props

  return (
    <>
      <Buttons
        onClick={onClick}
        theme={theme}
        sx={{ ...style }}
        isMobile={isMobile}
        isTablet={isTablet}
        isDekstop={isDekstop}
        height={height}
        isLoading={isLoading}
      >
        {icon}
        <Typography
          sx={{
            fontFamily: FontFamily.EINA04SEMIBOLD,
            color: "#F4F4F4",
            fontSize: isPromo ? (isMobile ? 12 : 14) : isMobile ? 14 : 20,
          }}
        >
          {children}
        </Typography>
      </Buttons>
    </>
  );
};

export default Button;
