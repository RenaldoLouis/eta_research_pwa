import React, { useContext, useState } from "react";
import AppBar from "@mui/material/AppBar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import { Tooltip } from "@mui/material";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

import { styled } from "@mui/system";

// import icon
import ListIcon from "../../assets/icons/ListIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import LogoIcon from "../../assets/Images/Logo.png";
import LogoLightIcon from "../../assets/Images/LogoLight.png";
import LogoMobileLightIcon from "../../assets/Images/LogoMobileLight.png";
import LogoMobileDarkIcon from "../../assets/Images/LogoMobileDark.png";
import BackIcon from "../../assets/icons/BackIcon";
import SettingsIcon from '@mui/icons-material/Settings';

// temporary icon
import { DarkMode, LightMode } from "@mui/icons-material";

import { useNavigate, Outlet } from "react-router-dom";

// Dark and Light Mode
import { AppContext } from "../../App";
import { useTheme } from "@mui/material/styles";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import LoginIcon from "../../assets/icons/LoginIcon";

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
    handleLoginDialog,
    handleOpenLoginDialog,
    handleOtpDialog,
    handleEmailListDialog,
    dumpLoginState,
    dumpAuthrorization,
    isMobile,
    isTablet,
    isDesktop,
    handleOpenLogoutDialog,
    handleLogout,
  } = useContext(AppContext);

  // const navigate = useNavigate();
  const navigate = useNavigate();

  /** ======== Menu for change theme ======== */
  const [anchorThemeMenuEl, setAnchorThemeMenuEl] = useState(null);
  const isThemeMenuOpen = Boolean(anchorThemeMenuEl);
  const handleOpenThemeMenu = (event) => {
    setAnchorThemeMenuEl(event.currentTarget);
  };
  const handleCloseThemeMenu = () => {
    setAnchorThemeMenuEl(null);
  };

  const handleClickTheme = (theme) => {
    handleChangeTheme(theme)
    setAnchorThemeMenuEl(null);
  }

  /** ======== Menu for change theme ======== */


  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: theme.palette.background.appBar,
          position: "fixed",
          top: 0,
          zIndex: 20,
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
              <DivFlexStart sx={{ height: "100%" }}>
                {isMobile || isTablet ? (
                  <>
                    <Tooltip title="Temporary Button">
                      <IconButton
                        onClick={handleChangeTheme}
                        sx={{ ml: "2px" }}
                      >
                        <SettingsIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <>
                    {mode === "light" ? (
                      <img
                        src={LogoLightIcon}
                        alt="logo icon"
                        style={{ height: "29px", widht: "200px" }}
                      />
                    ) : mode === "dark" ? (
                      <img src={LogoIcon} alt="logo icon" />
                    ) : mode === "yellow" ? (
                      <img
                        src={LogoLightIcon}
                        alt="logo icon"
                        style={{ height: "29px", widht: "200px" }}
                      />
                    ) : (
                      <></>
                    )}

                    <Tooltip title="Temporary Button">
                      <IconButton
                        onClick={handleOpenThemeMenu}
                        sx={{ ml: 2, mt: 0.5 }}
                      >
                        <SettingsIcon />
                      </IconButton>
                    </Tooltip>
                  </>
                )}
              </DivFlexStart>
            </Grid>
            <Grid item xs={4} md={6}>
              <DivFlexCenter sx={{ alignItems: "top", height: "100%" }}>
                {isMobile || isTablet ? (
                  <img
                    src={
                      mode === "dark" ? LogoMobileDarkIcon : LogoMobileLightIcon
                    }
                    alt=""
                    style={{ height: "20.45px", width: "30.35px" }}
                  />
                ) : (
                  <Typography
                    sx={{
                      fontFamily: "Eina 04",
                      color: theme.palette.text.primary,
                      fontStyle: "normal",
                      fontWeight: 600,
                      lineHeight: "25px",
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
                {dumpLoginState ? (
                  <>
                    {dumpAuthrorization == "admin" ||
                      dumpAuthrorization == "superadmin" ? (
                      <Tooltip title="Email List">
                        <IconButton
                          onClick={handleEmailListDialog}
                          theme={theme}
                          sx={{ mr: 1 }}
                        >
                          <ListIcon
                            color={theme.palette.background.iconColor}
                            sx={{ fontSize: 22, mr: 0.1 }}
                          />
                        </IconButton>
                      </Tooltip>
                    ) : (
                      <></>
                    )}
                    <Tooltip title="Logout">
                      <IconButton
                        onClick={handleOpenLogoutDialog}
                        theme={theme}
                      >
                        <LogoutIcon
                          color={theme.palette.background.iconColor}
                          sx={{ fontSize: 22, ml: 0.4 }}
                        />
                      </IconButton>
                    </Tooltip>
                  </>
                ) : (
                  <Tooltip title="Login">
                    <IconButton theme={theme} onClick={handleOpenLoginDialog}>
                      <LoginIcon
                        color={theme.palette.background.iconColor}
                        sx={{ fontSize: 22, ml: 0.4 }}
                      />
                    </IconButton>
                  </Tooltip>
                )}
                {/* <IconButton>
                  <ListIcon
                    color={theme.palette.background.iconColor}
                    sx={{ fontSize: 22, mr: 0.1 }}
                  />
                </IconButton>
                <IconButton onClick={() => {}}>
                  <LogoutIcon
                    color={theme.palette.background.iconColor}
                    sx={{ fontSize: 22, ml: 0.4 }}
                  />
                </IconButton> */}
              </DivFlexEnd>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      <Menu
        id="change-theme-menu"
        anchorEl={anchorThemeMenuEl}
        open={isThemeMenuOpen}
        onClose={handleCloseThemeMenu}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <MenuItem onClick={() => handleClickTheme('light')}>Light Theme</MenuItem>
        <MenuItem onClick={() => handleClickTheme('dark')}>Dark Theme</MenuItem>
        <MenuItem onClick={() => handleClickTheme('yellow')}>Yellow Theme</MenuItem>
      </Menu>

      <Outlet />
    </>
  );
};
export default AppBarResponsive;
