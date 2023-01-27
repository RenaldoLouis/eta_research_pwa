import React, { useContext, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
// import Grid from '@mui/material';
import { Grid } from '@mui/material';
import { Tooltip } from '@mui/material';

import { styled } from '@mui/system'

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
import DivFlexCenter from '../ReusableComponents/DivFlexCenter';
import DivFlexStart from '../ReusableComponents/DivFlexStart';


// icon button component
const IconButton = styled('div')((props) => ({
  display: 'flex',
  alignItems: 'center',
  cursor: 'pointer',
  width: 30,
  height: 30,
  borderRadius: '50%',
  ":hover": {
    backgroundColor: props.theme.palette.background.hoverDeliveryCard,
  }
}));


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
    isDesktop,
    handleOpenLogoutDialog,
    handleLogout } = useContext(AppContext);

  // const navigate = useNavigate();
  const navigate = useNavigate();
  const handleBackPrevPage = () => {
    navigate(-1)
    setHistoryStack((stack) => stack.slice(0, -1))
  }

  return (
    <>
      <AppBar position="static" sx={{ background: theme.palette.background.appBar, position: 'fixed', top: 0, zIndex: 2000, width: '100%', height:58, }} elevation={0}>
        <Container maxWidth="100vw" >
            <Grid container sx={{ height: 58, pl: isDesktop ? 2  : '', pr: isDesktop ? 1.4 : 0.4 }} >
              <Grid item xs={4} md={3} >
                <DivFlexStart sx={{ height: '100%', alignItems: 'center', height:'100%'  }} >
                  {isMobile ? (
                    <>
                      <Tooltip title="Temporary Button">
                        <IconButton
                          // onClick={historyStack.length > 0 ? handleBackPrevPage : undefined}
                          onClick={handleChangeTheme}
                          sx={{ ml:'2px' }}
                        >
                          {historyStack.length > 0 && <ArrowBackIosIcon sx={{ color: theme.palette.text.heading1 }} />}
                          {
                            mode == 'light' ? (
                              <DarkMode sx={{ color: theme.palette.background.iconColor, fontSize: 20, ml:0.5, mb:0.3  }} />
                            ) : mode == 'dark' ? (
                              <LightMode sx={{ color: theme.palette.background.iconColor, fontSize: 20, ml:0.5, mb:0.3  }} />
                            ) : (
                              <></>
                            )
                          }
                        </IconButton>
                      </Tooltip>
                    </>
                  ) : (<>
                    <Typography sx={{ fontFamily: 'Eina04-Light', color: theme.palette.background.iconColor, fontFamily: 'Eina04-Bold' }} fontSize={25}>
                      LOGO
                    </Typography>
                    <Tooltip title="Temporary Button">
                      <IconButton
                        // onClick={historyStack.length > 0 ? handleBackPrevPage : undefined}
                        onClick={handleChangeTheme}
                        sx={{ ml:2, mt:-0.5 }}
                      >
                        {historyStack.length > 0 && <ArrowBackIosIcon sx={{ color: theme.palette.text.heading1 }} />}
                        {
                          mode == 'light' ? (
                            <DarkMode sx={{ color: theme.palette.background.iconColor, fontSize: 20, ml:0.5, mb:0.3 }} />
                          ) : mode == 'dark' ? (
                            <LightMode sx={{ color: theme.palette.background.iconColor, fontSize: 20, ml:0.5, mb:0.3 }} />
                          ) : (
                            <></>
                          )
                        }
                      </IconButton>
                    </Tooltip>
                  </>
                  )}

                </DivFlexStart>

              </Grid>
              <Grid item xs={4} md={6}>
                <DivFlexCenter sx={{ alignItems: 'top', height: '100%' }} >
                  {isMobile ? (
                    <Typography sx={{ fontFamily: 'Eina04-Light', color: theme.palette.background.iconColor, fontFamily: 'Eina04-Bold' }} fontSize={25}>
                      LOGO
                    </Typography>
                  ) : (
                    <Typography sx={{ fontFamily: 'Eina04-SemiBold', color: theme.palette.text.text4 }} fontSize={14}>
                      Delivery Tracking
                    </Typography>
                  )}

                </DivFlexCenter>
              </Grid>
              <Grid item xs={4} md={3} >
                <DivFlexEnd sx={{ alignItems: 'center', height: '100%',  }}>
                  {
                    dumpLoginState ? (
                      <>
                        {dumpAuthrorization == 'admin' || dumpAuthrorization == 'superadmin' ?
                          <IconButton onClick={handleEmailListDialog} theme={theme} sx={{ mr:1 }} >
                            <ListIcon color={theme.palette.background.iconColor} sx={{ height: 18, width: 18, ml: 1.11, mt: 0.2 }} />
                          </IconButton>
                          : (<></>)}
                        <IconButton onClick={handleOpenLogoutDialog} theme={theme}  >
                          <LogoutIcon color={theme.palette.background.iconColor} sx={{ width: 22, height: 22, ml: 1.1, mt: 1.1 }} />
                        </IconButton>

                      </>) : (
                      <IconButton theme={theme} onClick={handleOpenLoginDialog} >
                        <LoginIcon color={theme.palette.background.iconColor} sx={{ width: 22, height: 22, ml: 0.9, mt: 1.2 }} />
                      </IconButton>
                    )
                  }
                </DivFlexEnd>
              </Grid>
            </Grid>

        </Container>
      </AppBar>

      <Outlet />
    </>
  );
}
export default AppBarResponsive;
