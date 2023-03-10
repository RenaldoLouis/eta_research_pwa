import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Tooltip } from "@mui/material";

import { styled } from "@mui/system";

// import icon
import ListIcon from "../../assets/icons/ListIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import LogoIcon from "../../assets/Images/Logo.png";
import BackIcon from "../../assets/icons/BackIcon";

// temporary icon
import { DarkMode, LightMode } from "@mui/icons-material";

import { useNavigate, Outlet } from "react-router-dom";

// Dark and Light Mode
import { AppContext } from "../../App";
import { useTheme } from "@mui/material/styles";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexStart from "../ReusableComponents/DivFlexStart";

// icon button component
const IconButton = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
  width: 30,
  height: 30,
  borderRadius: "50%",
  justifyContent: "center",
  ":hover": {
    backgroundColor: props.theme.palette.background.hoverDeliveryCard,
  },
}));

const AppBarResponsive = () => {
  const [anchorElUser, setAnchorElSetting] = useState(null);

  const theme = useTheme();

  // state from context
  const {
    handleChangeTheme,
    mode,
    historyStack,
    setHistoryStack,
    // handleLoginDialog,
    // handleOpenLoginDialog,
    // handleOtpDialog,
    // handleEmailListDialog,
    // dumpLoginState,
    // dumpAuthrorization,
    isMobile,
    isDesktop,
    // handleOpenLogoutDialog,
    // handleLogout,
  } = useContext(AppContext);

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const handleBackPrevPage = () => {
    navigate(-1);
    setHistoryStack((stack) => stack.slice(0, -1));
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: theme.palette.background.appBar,
          position: "fixed",
          top: 0,
          zIndex: 2000,
          width: "100%",
          height: 72,
        }}
        elevation={0}
      >
        <Container maxWidth="100vw">
          <Grid
            container
            sx={{
              height: 72,
              pl: isDesktop ? 2 : "",
              pr: isDesktop ? 1.4 : 0.4,
            }}
          >
            <Grid item xs={4} md={3}>
              <DivFlexStart
                sx={{ height: "100%", alignItems: "center", }}
              >
                {isMobile ? (
                  <>
                    <Tooltip title="Temporary Button">
                      <IconButton
                        // onClick={historyStack.length > 0 ? handleBackPrevPage : undefined}
                        onClick={handleChangeTheme}
                        sx={{ ml: "2px" }}
                      >
                        {historyStack.length > 0 && (
                          <BackIcon
                            sx={{ color: theme.palette.text.heading1 }}
                          />
                        )}
                        {mode === "light" ? (
                          <DarkMode
                            sx={{
                              color: theme.palette.background.iconColor,
                              fontSize: 20,
                            }}
                          />
                        ) : mode === "dark" ? (
                          <LightMode
                            sx={{
                              color: theme.palette.background.iconColor,
                              fontSize: 20,
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <>
                    <img src={LogoIcon} alt="Logo Image"/>
                    {/* <Typography
                      sx={{
                        // fontFamily: "Eina04-Light",
                        color: theme.palette.background.iconColor,
                        fontFamily: "Eina04-Bold",
                      }}
                      fontSize={25}
                    >
                      Drink
                    </Typography>
                    <Typography
                      sx={{
                        // fontFamily: "Eina04-Light",
                        color: "#D1B704",
                        fontFamily: "Eina04-Bold",
                        paddingLeft: "5.77px",
                      }}
                      fontSize={25}
                    >
                      & More
                    </Typography> */}
                    {/* <Tooltip title="Temporary Button">
                      <IconButton
                        // onClick={historyStack.length > 0 ? handleBackPrevPage : undefined}
                        onClick={handleChangeTheme}
                        sx={{ ml: 2, mt: -0.5 }}
                      >
                        {historyStack.length > 0 && (
                          <BackIcon
                            sx={{ color: theme.palette.text.heading1 }}
                          />
                        )}
                        {mode === "light" ? (
                          <DarkMode
                            sx={{
                              color: theme.palette.background.iconColor,
                              fontSize: 20,
                            }}
                          />
                        ) : mode === "dark" ? (
                          <LightMode
                            sx={{
                              color: theme.palette.background.iconColor,
                              fontSize: 20,
                            }}
                          />
                        ) : (
                          <></>
                        )}
                      </IconButton>
                    </Tooltip> */}
                  </>
                )}
              </DivFlexStart>
            </Grid>
            <Grid item xs={4} md={6}>
              <DivFlexCenter sx={{ alignItems: "top", height: "100%" }}>
                {isMobile ? (
                  <Typography
                    sx={{
                      fontFamily: "Eina04-Light",
                      color: theme.palette.background.iconColor,
                      // fontFamily: "Eina04-Bold",
                    }}
                    fontSize={25}
                  >
                    LOGO
                  </Typography>
                ) : (
                  <Typography
                    sx={{
                      fontFamily: "Eina 04",
                      color: theme.palette.text.primary,
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "25px"
                    }}
                    fontSize={"18px"}
                  >
                    Track and Trace
                  </Typography>
                )}
              </DivFlexCenter>
            </Grid>
            <Grid item xs={4} md={3}>
              <DivFlexEnd sx={{ alignItems: "center", height: "100%" }}>
                {/* {
                  dumpLoginState ? (
                    <>
                      {dumpAuthrorization == 'admin' || dumpAuthrorization == 'superadmin' ?
                        <IconButton onClick={handleEmailListDialog} theme={theme} sx={{ mr: 1 }} >
                          <ListIcon color={theme.palette.background.iconColor} sx={{ fontSize: 22, mr: 0.1 }} />
                        </IconButton>
                        : (<></>)}
                      <IconButton onClick={handleOpenLogoutDialog} theme={theme}  >
                        <LogoutIcon color={theme.palette.background.iconColor} sx={{ fontSize: 22, ml: 0.4 }} />
                      </IconButton>

                    </>) : (
                    <IconButton theme={theme} onClick={handleOpenLoginDialog} >
                      <LoginIcon color={theme.palette.background.iconColor} sx={{ fontSize: 22, ml: 0.4 }} />
                    </IconButton>
                  )
                } */}
                <IconButton>
                  <ListIcon
                    color={theme.palette.background.iconColor}
                    sx={{ fontSize: 22, mr: 0.1 }}
                  />
                </IconButton>
                <IconButton onClick={console.log("test")}>
                  <LogoutIcon
                    color={theme.palette.background.iconColor}
                    sx={{ fontSize: 22, ml: 0.4 }}
                  />
                </IconButton>
              </DivFlexEnd>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
};
export default AppBarResponsive;
