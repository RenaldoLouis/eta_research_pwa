import React, { useContext, useState } from "react";

// Import material ui
import { Grid, AppBar, Typography, Container, Menu, MenuItem } from "@mui/material";

// Import styles
import { useTheme, styled } from "@mui/material/styles";

// import icon
import ListIcon from "../../assets/icons/ListIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import LoginIcon from "../../assets/icons/LoginIcon";
import SettingsIcon from '@mui/icons-material/Settings';

// import temporary Logo
import LogoIcon from "../../assets/Images/Logo.png";
import LogoLightIcon from "../../assets/Images/LogoLight.png";
import LogoMobileLightIcon from "../../assets/Images/LogoMobileLight.png";
import LogoMobileDarkIcon from "../../assets/Images/LogoMobileDark.png";

// import react-router-dom
import { Outlet } from "react-router-dom";

// import AppContext
import { AppContext } from "../../App";

// import component
import DivFlexStart from "../DivFlexStart";
import DivFlexCenter from "../DivFlexCenter";
import DivFlexEnd from "../DivFlexEnd";
import { CustomTooltip } from "../CustomTooltip";

// import constants
import { ColorTheme } from "../../Constants/ColorTheme";

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
    backgroundColor: props.theme.palette.background.hoverIconButton,
  },
}));

const AppBarResponsive = () => {

  const theme = useTheme();

  // state from context
  const {
    handleChangeTheme,
    mode,
    handleOpenLoginDialog,
    handleEmailListDialog,
    dumpLoginState,
    dumpAuthrorization,
    isMobile,
    isTablet,
    isDesktop,
    handleOpenLogoutDialog,
  } = useContext(AppContext);


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



  /** ============= Company Logo Based on Theme ============= */
  let companyLogo

  if (mode == ColorTheme.LIGHT || mode == ColorTheme.YELLOW) {
    companyLogo =
      <img
        src={LogoLightIcon}
        alt="logo icon"
        style={{ height: "29px", widht: "200px" }}
      />
  } else {
    companyLogo = <img src={LogoIcon} alt="logo icon" />
  }
  /** ============= Company Logo Based on Theme ============= */


  /** ============= Company Logo Section ============= */
  let companyLogoSection

  if (isMobile || isTablet) {
    companyLogoSection =
      <>
        <CustomTooltip title=" Button">
          <IconButton
            onClick={handleOpenThemeMenu}
            sx={{ ml: 2, mt: 0.5 }}
          >
            <SettingsIcon sx={{ color: theme.palette.background.iconColor }} />
          </IconButton>
        </CustomTooltip>
      </>
  } else {
    companyLogoSection =
      <>
        {companyLogo}
        <CustomTooltip title="Temporary Button">
          <IconButton
            onClick={handleOpenThemeMenu}
            sx={{ ml: 2, mt: 0.5 }}
          >
            <SettingsIcon sx={{ color: theme.palette.background.iconColor }} />
          </IconButton>
        </CustomTooltip>
      </>
  }

  /** ============= EOL Company Logo Section ============= */


  return (
    <>
      <AppBar
        position="static"
        sx={{
          background: theme.palette.background.appBar,
          position: "fixed",
          top: 0,
          zIndex: 1500,
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
                {companyLogoSection}
              </DivFlexStart>
            </Grid>

            <Grid item xs={4} md={6}>
              <DivFlexCenter sx={{ alignItems: "top", height: "100%" }}>
                {isMobile || isTablet ? (
                  <img
                    src={
                      mode === ColorTheme.DARK || ColorTheme.BLUE ? LogoMobileDarkIcon : LogoMobileLightIcon
                    }
                    alt=""
                    style={{ height: "20.45px", width: "30.35px" }}
                  />
                ) : (
                  <Typography
                    sx={{
                      fontFamily: "Eina 04",
                      color: theme.palette.background.title,
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
                      <CustomTooltip title="Email List">
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
                      </CustomTooltip>
                    ) : (
                      <></>
                    )}
                    <CustomTooltip title="Logout">
                      <IconButton
                        onClick={handleOpenLogoutDialog}
                        theme={theme}
                      >
                        <LogoutIcon
                          color={theme.palette.background.iconColor}
                          sx={{ fontSize: 22, ml: 0.4 }}
                        />
                      </IconButton>
                    </CustomTooltip>
                  </>
                ) : (
                  <CustomTooltip title="Login">
                    <IconButton theme={theme} onClick={handleOpenLoginDialog}>
                      <LoginIcon
                        color={theme.palette.background.iconColor}
                        sx={{ fontSize: 22, ml: 0.4 }}
                      />
                    </IconButton>
                  </CustomTooltip>
                )}
              </DivFlexEnd>
            </Grid>
          </Grid>
        </Container>
      </AppBar>

      {/* Temporary Component to change theme */}
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
        sx={{
          "& .MuiMenu-paper":
            { backgroundColor: theme.palette.background.appBar },

          zIndex: 1600
        }}
      >
        <MenuItem onClick={() => handleClickTheme(ColorTheme.LIGHT)}>Light Theme</MenuItem>
        <MenuItem onClick={() => handleClickTheme(ColorTheme.DARK)}>Dark Theme</MenuItem>
        <MenuItem onClick={() => handleClickTheme(ColorTheme.YELLOW)}>Yellow Theme</MenuItem>
        <MenuItem onClick={() => handleClickTheme(ColorTheme.BLUE)}>Blue Theme</MenuItem>
      </Menu>

      <Outlet />
    </>
  );
};
export default AppBarResponsive;
