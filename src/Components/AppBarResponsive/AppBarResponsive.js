import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import { Tooltip } from '@mui/material';

// import icon
import ListIcon from '../../assets/icons/ListIcon';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import LoginIcon from '../../assets/icons/LoginIcon';

// temporary icon
import { DarkMode, LightMode } from '@mui/icons-material';


import { useNavigate, Outlet } from "react-router-dom"

// Dark and Light Mode
import { AppContext } from '../../App';
import { useTheme } from "@mui/material/styles";
import DivFlexEnd from '../ReusableComponents/DivFlexEnd';




const getThemeChangeText = (theme) => {
  switch (theme) {
    case 'dark':
      return 'Light Theme'
    default:
      return 'Dark Theme'
  }
}

const AppBarResponsive = () => {
  const [anchorElUser, setAnchorElSetting] = useState(null);

  const theme = useTheme()

  // state from context
  const {
    handleChangeTheme,
    mode,
    historyStack,
    setHistoryStack,
    handleLoginDialog,
    handleOpenLoginDialog,
    handleOtpDialog,
    handleEmailListDialog,
    dumpLoginState,
    dumpAuthrorization,
    isMobile,
    handleLogout } = useContext(AppContext);

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const handleBackPrevPage = () => {
    navigate(-1)
    setHistoryStack((stack) => stack.slice(0, -1))
  }

  return (
    <>
      <AppBar position="static" sx={{ background: theme.palette.background.appBar, position: 'fixed', top: 0, zIndex: 1000, width: '100%' }} elevation={0}>
        <Container maxWidth="100vw">

          <Toolbar disableGutters>

            <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
              <Typography sx={{ fontFamily: 'Eina04-Light', color: theme.palette.background.iconColor, fontFamily: 'Eina04-Bold' }} fontSize={25}>
                LOGO
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'flex' }, }}>
              <div style={{ width: isMobile ? 56 : undefined }}>
                <Tooltip title="Temporary Button">
                  <IconButton
                    // onClick={historyStack.length > 0 ? handleBackPrevPage : undefined}
                    onClick={handleChangeTheme}
                  >
                    {historyStack.length > 0 && <ArrowBackIosIcon sx={{ color: theme.palette.text.heading1 }} />}
                    {
                      mode == 'light' ? (
                        <DarkMode sx={{ color: theme.palette.background.iconColor, fontSize: 20, mt: -0.5 }} />
                      ) : mode == 'dark' ? (
                        <LightMode sx={{ color: theme.palette.background.iconColor, fontSize: 20, mt: -0.5 }} />
                      ) : (
                        <></>
                      )
                    }
                  </IconButton>
                </Tooltip>
              </div>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' }, justifyContent: 'center', alignItems: 'center' }}>
              <Typography sx={{ fontFamily: 'Eina04-Light', color: theme.palette.background.iconColor, fontFamily: 'Eina04-Bold' }} fontSize={25}>
                LOGO
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
              <Typography sx={{ fontFamily: 'Eina04-Light', color: theme.palette.text.text4 }} fontSize={12}>
                Delivery Tracking
              </Typography>
            </Box>

            <Box sx={{ flexGrow: 0, width: 56, display:'flex',justifyContent:'flex-end' }}>
              {
                dumpLoginState ? (
                  <>
                    {dumpAuthrorization == 'admin' || dumpAuthrorization == 'superadmin' ?
                      <IconButton onClick={handleEmailListDialog}>
                        <ListIcon color={theme.palette.background.iconColor} sx={{ height: 18, width: 18 }} />
                      </IconButton>
                      : (<></>)}
                    <IconButton sx={{ p: 0, mt: 1 }} onClick={handleLogout}>
                      <LogoutIcon color={theme.palette.background.iconColor} sx={{ width: 22, height: 20 }} />
                    </IconButton>

                  </>) : (
                  <IconButton sx={{ p: 0, mt: 1 }} onClick={handleOpenLoginDialog} >
                    <LoginIcon sx={{ width: 22, height: 20 }} color={theme.palette.background.iconColor} />
                  </IconButton>
                )
              }
            </Box>

          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}
export default AppBarResponsive;
