import React, { useContext, useState } from "react";

// Import material ui
import { Grid, AppBar, Typography, Container, Menu, MenuItem } from "@mui/material";

// Import styles
import { useTheme, styled } from "@mui/material/styles";

// import icon
import ListIcon from "../../assets/icons/ListIcon";
import LogoutIcon from "../../assets/icons/LogoutIcon";
import MenuIcon from '../../assets/icons/MenuIcon';
import LoginIcon from "../../assets/icons/LoginIcon";
import SettingsIcon from '@mui/icons-material/Settings';

// import temporary company Logo
import CompanyWhiteLogoDekstop from "../../assets/images/company-logo-white-dekstop.png"
import CompanyBlackLogoDekstop from "../../assets/images/company-logo-black-dekstop.png";
import CompanyWhiteLogoMobile from "../../assets/images/company-logo-white-mobile.png"
import CompanyBlackLogoMobile from "../../assets/images/company-logo-black-mobile.png"


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
import { UserRole } from "../../Constants/UserRole";
import NavigationDrawer from "../NavigationDrawer/NavigationDrawer";

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

const companyLogoStyleforDekstop = {
  height: "28px", widht: "200px"
}

const companyLogoStyleforMobile = {
  height: "20px", widht: "141px"
}

const AppBarResponsive = () => {

  const theme = useTheme();

  // state from context
  const {
    handleChangeTheme,
    mode,
    logo,
    handleOpenDialog,
    isLogin,
    userRole,
    isMobile,
    isTablet,
    isDesktop,
    anchorNavigationDrawerEl,
    setAnchorNavigationDrawerEl,
    isNavigationDrawerOpen,
    handleOpenNavigationDrawer,
    handleCloseNavigationDrawer,
    openDialog
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



  /** ============= Company Logo Based on Theme for Dekstop Device ============= */
  let companyLogoforDekstop

  if (logo) {
    companyLogoforDekstop = <img src={logo} alt="company logo" style={companyLogoStyleforDekstop} />
  }
  else {
    if (mode == ColorTheme.LIGHT || mode == ColorTheme.YELLOW) {
      companyLogoforDekstop = <img src={logo} alt="company logo" style={companyLogoStyleforDekstop} />
    } else {
      companyLogoforDekstop = <img src={logo} alt="comany logo" style={companyLogoStyleforDekstop} />
    }
  }
  /** ============= Company Logo Based on Theme for Dekstop Device ============= */

  /** ============= Company Logo Based on Theme for Tablet and Mobile Device ============= */
  let companyLogoforMobile

  if (logo) {
    companyLogoforMobile = <img src={logo} alt="company logo" style={companyLogoStyleforMobile} />
  }
  else {
    if (mode == ColorTheme.LIGHT || mode == ColorTheme.YELLOW) {
      companyLogoforMobile = <img src={logo} alt="company logo" style={companyLogoStyleforMobile} />
    } else {
      companyLogoforMobile = <img src={logo} alt="logo icon" style={companyLogoStyleforMobile} />
    }
  }
  /** ============= Company Logo Based on Theme for Tablet and Mobile Device ============= */


  /** ============= Company Logo Section ============= */
  let companyLogoSection

  if (isMobile || isTablet) {
    companyLogoSection =
      <>
        {companyLogoforMobile}
      </>
  } else {
    companyLogoSection =
      <>
        {companyLogoforDekstop}
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
                  <></>
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
                {isMobile || isTablet ? (
                  <CustomTooltip title="Temporary Button">
                    <IconButton
                      onClick={handleOpenThemeMenu}
                      sx={{ mr: 1 }}
                    >
                      <SettingsIcon sx={{ color: theme.palette.background.iconColor }} />
                    </IconButton>
                  </CustomTooltip>
                ) : (<></>)}
                {isLogin ? (
                  <>
                    <CustomTooltip title="Menu">
                      {openDialog ?
                        <MenuIcon
                          sx={{ color: theme.palette.background.iconColor }}
                        />
                        : <IconButton
                          onClick={handleOpenNavigationDrawer}
                          theme={theme}
                        >
                          <MenuIcon
                            sx={{ color: theme.palette.background.iconColor }}
                          />
                        </IconButton>}
                    </CustomTooltip>
                  </>
                ) : (
                  <CustomTooltip title="Login">
                    <IconButton theme={theme} onClick={() => handleOpenDialog('login')}>
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

      <NavigationDrawer
        anchorNavigationDrawerEl={anchorNavigationDrawerEl}
        setAnchorNavigationDrawerEl={setAnchorNavigationDrawerEl}
        isNavigationDrawerOpen={isNavigationDrawerOpen}
        handleCloseNavigationDrawer={handleCloseNavigationDrawer}
      />

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
