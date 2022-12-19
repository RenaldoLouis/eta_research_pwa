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
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';

import { useNavigate, Outlet } from "react-router-dom"

// Dark and Light Mode
import { AppContext } from '../../App';
import { useTheme } from "@mui/material/styles";




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

  // Dark and Light Mode
  const { handleChangeTheme, mode, historyStack, setHistoryStack, handleLoginDialog, handleOtpDialog, handleEmailListDialog } = useContext(AppContext);

  // handle open and close menu
  const handleOpenSettingMenu = (event) => {
    setAnchorElSetting(event.currentTarget);
  };

  const handleCloseSettingMenu = () => {
    setAnchorElSetting(null);
  };

  const handleChangeThemeMenu = () => {
    handleChangeTheme()
    handleCloseSettingMenu()
  }

  const handleLoginDialogMenu = () => {
    handleLoginDialog()
    handleCloseSettingMenu()
  }

  const handleOtpDialogMenu = () => {
    handleOtpDialog()
    handleCloseSettingMenu()
  }

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const handleBackPrevPage = () => {
    navigate(-1)
    setHistoryStack((stack) => stack.slice(0, -1))
  }

  return (
    <>
      <AppBar position="static" sx={{ background: theme.palette.background.appBar, position: 'fixed', top: 0, zIndex: 1000, width: '100%' }}>
        <Container maxWidth="100vw">
          <Toolbar disableGutters>
            <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1, color: theme.palette.text.heading1 }} />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: theme.palette.text.heading1,
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>

            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={historyStack.length > 0 ? handleBackPrevPage : undefined}
                color="inherit"
              >
                {historyStack.length > 0 && <ArrowBackIosIcon sx={{ color: theme.palette.text.heading1 }} />}

              </IconButton>

            </Box>
            <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1, color: theme.palette.text.heading1, }} />
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: 'flex', md: 'none' },
                flexGrow: 1,
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.3rem',
                color: theme.palette.text.heading1,
                textDecoration: 'none',
              }}
            >
              LOGO
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            </Box>

            <Box sx={{ flexGrow: 0 }}>
              <IconButton onClick={handleOpenSettingMenu} sx={{ p: 0 }}>
                <SettingsOutlinedIcon alt="Settings" src="" sx={{ color: theme.palette.text.heading1 }} />
              </IconButton>
              <Menu
                sx={{ mt: '25px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseSettingMenu}
              >
                <MenuItem onClick={handleChangeThemeMenu}>
                  <Typography fontSize={12} sx={{ textTransform: 'capitalize', }} textAlign="center">{getThemeChangeText(mode)} </Typography>
                </MenuItem>
                <MenuItem onClick={handleLoginDialogMenu}>
                  <Typography fontSize={12} textAlign="center">Login</Typography>
                </MenuItem>
                <MenuItem onClick={handleOtpDialogMenu}>
                  <Typography fontSize={12} textAlign="center">Send OTP</Typography>
                </MenuItem>
                <MenuItem onClick={handleEmailListDialog}>
                  <Typography fontSize={12} textAlign="center">Email List</Typography>
                </MenuItem>
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}
export default AppBarResponsive;
