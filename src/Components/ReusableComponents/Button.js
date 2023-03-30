import React, { useContext } from "react";

import { styled } from "@mui/system";

import Typography from "@mui/material/Typography";

import { AppContext } from "../../App";



const Buttons = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  alignItems: "center",
  height: props.height ? props.height : props.isMobile ? 40 : 52,
  backgroundColor: props.isLoading ? "#002D9C" : "#0F62FE",
  cursor: "pointer",
  padding: "0px 8px",
  ":hover": {
    backgroundColor: props.isDesktop ? (props.isLoading ? "#002D9C" : "#4589FF") : "#0F62FE",
    // props.isLoading ? "#002D9C" : "#4589FF"
  },
  ":active": {
    backgroundColor: "#002D9C",
  },
}));

const Button = (props) => {
    const { isMobile, isDekstop } = useContext(AppContext);

  const { theme, children, icon, style, onClick, isPromo, height, isLoading } =
    props;

  return (
    <>
      <Buttons
        onClick={onClick}
        theme={theme}
        sx={{ ...style }}
        isMobile={isMobile}
        isDekstop={isDekstop}
        height={height}
        isLoading={isLoading}
      >
        {icon}
        <Typography
          sx={{
            fontFamily: "Eina04-SemiBold",
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
