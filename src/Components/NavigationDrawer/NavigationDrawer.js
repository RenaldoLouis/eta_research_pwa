import React, { useContext } from 'react'
import { AppContext } from '../../App';
import { Box, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Menu, MenuItem, Typography, styled, useTheme } from '@mui/material';
import CloseIcon from '../../assets/icons/CloseIcon';
import { CustomTooltip } from '../CustomTooltip';
import DivFlexSpaceBetween from '../DivFlexSpacebetween';
import SettingIcon from '../../assets/icons/SettingIcon';
import ListIcon from '../../assets/icons/ListIcon';
import LogoutIcon from '../../assets/icons/LogoutIcon';
import { UserRole } from '../../Constants/UserRole';
import { FontFamily } from '../../Constants/FontFamily';

const NavigationDrawer = (props) => {

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

    const DrawerMenuItem = styled(MenuItem)((props) => ({
        ':hover': {
            backgroundColor: theme.palette.background.menuItemHover
        },
        ':active': {
            backgroundColor: theme.palette.background.menuItemClicked
        },
        ...(props.active) && {
            backgroundColor: theme.palette.background.menuItemActive,
        },
        '.MuiListItemIcon-root': {
            color: props.active ? theme.palette.background.menuItemActiveIcon : theme.palette.background.iconColor,
            minWidth: '0px'
        },
        padding: isMobile ? "16px" : "16px 24px",
        gap: "16px",
        width: "100%",
        alignItems: "flex-start"
    }));

    const DrawerListItemText = styled(ListItemText)(() => ({
        '& .MuiListItemText-primary': {
            fontFamily: FontFamily.EINA04SEMIBOLD,
            color: theme.palette.background.title,
            fontStyle: "normal",
            fontWeight: 600,
            lineHeight: "25px",
            fontSize: 18
        }

    }))

    const {
        isMobile,
        userRole,
        emailListDialog,
        handleEmailListDialog,
        openLogoutDialog,
        handleOpenLogoutDialog,
        emailNotificationDialog,
        handleOpenDialog,
        handleOpenEmailNotificationDialog } = useContext(AppContext);

    const { anchorNavigationDrawerEl, isNavigationDrawerOpen, handleCloseNavigationDrawer } = props;


    const theme = useTheme();


    return (
        <>
            {isMobile ?
                <>
                    <Drawer
                        sx={{
                            width: 260,
                            flexShrink: 0,
                            "& .MuiDrawer-paper": {
                                width: 260,
                                backgroundColor: theme.palette.background.drawerPaper
                            }
                        }}
                        anchor="right"
                        open={anchorNavigationDrawerEl !== null}
                        onClose={handleCloseNavigationDrawer}
                    >
                        <Box sx={{
                            marginTop: "72px",
                            display: "flex",
                            justifyContent: "space-between",
                            paddingX: "24px",
                            paddingY: "20px",
                            borderBottom: `1px solid ${theme.palette.background.titleSeparator}`,
                            marginBottom: "16px"
                        }}>
                            <Grid container sx={{ gap: 0.5 }}>
                                <Grid item xs={12}>
                                    <Typography
                                        sx={{
                                            fontFamily: FontFamily.EINA04SEMIBOLD,
                                            color: theme.palette.background.title,
                                            fontStyle: "normal",
                                            lineHeight: "27px",
                                        }}
                                        fontSize={20}
                                    >Super Admin</Typography>
                                </Grid>
                                <Grid item xs={12}>
                                    <Typography
                                        sx={{
                                            fontFamily: FontFamily.EINA04REGULAR,
                                            color: theme.palette.background.title,
                                            fontStyle: "normal",
                                            fontWeight: 400,
                                            lineHeight: "16px",
                                        }}
                                        fontSize={12}
                                    >superadmin@gmail.com</Typography>
                                </Grid>
                            </Grid>
                            <CustomTooltip title="Close">
                                <IconButton
                                    onClick={handleCloseNavigationDrawer}
                                    theme={theme}
                                >
                                    <CloseIcon
                                        color={theme.palette.background.iconColor}
                                    />
                                </IconButton>
                            </CustomTooltip>
                        </Box>
                        <DrawerMenuItem active={emailNotificationDialog} onClick={() => handleOpenDialog("emailNotification")}>
                            <ListItemIcon>
                                <SettingIcon sx={{ stroke: theme.palette.background.iconColor, color: theme.palette.background.iconColor }} />
                            </ListItemIcon>
                            <DrawerListItemText>
                                Email Notification
                            </DrawerListItemText>
                        </DrawerMenuItem>
                        {UserRole == UserRole.ADMIN ||
                            userRole == UserRole.SUPERADMIN &&
                            <DrawerMenuItem active={emailListDialog} onClick={() => handleOpenDialog('emailList')}>
                                <ListItemIcon>
                                    <ListIcon color={theme.palette.background.iconColor} />
                                </ListItemIcon>
                                <DrawerListItemText>
                                    Email List
                                </DrawerListItemText>
                            </DrawerMenuItem>
                        }
                        <DrawerMenuItem active={true} onClick={() => handleOpenDialog('logout')} sx={{ position: "absolute", bottom: "16px" }}>
                            <ListItemIcon >
                                <LogoutIcon color={theme.palette.background.iconColor} />
                            </ListItemIcon>
                            <DrawerListItemText>
                                Sign out
                            </DrawerListItemText>
                        </DrawerMenuItem>
                    </Drawer>
                </> : <Menu
                    id="navigation-drawer"
                    anchorEl={anchorNavigationDrawerEl}
                    open={isNavigationDrawerOpen}
                    onClose={handleCloseNavigationDrawer}
                    anchorOrigin={{
                        vertical: 'bottom',
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
                    <Box sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        paddingX: "24px",
                        paddingY: "20px",
                        borderBottom: `1px solid #a8a8a8`,
                        marginBottom: "16px"
                    }}>
                        <Grid container sx={{ gap: 1 }}>
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        fontFamily: FontFamily.EINA04SEMIBOLD,
                                        color: theme.palette.background.title,
                                        fontStyle: "normal",
                                        lineHeight: "30px",
                                    }}
                                    fontSize={22}
                                >Super Admin</Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Typography
                                    sx={{
                                        fontFamily: FontFamily.EINA04REGULAR,
                                        color: theme.palette.background.title,
                                        fontStyle: "normal",
                                        fontWeight: 400,
                                        lineHeight: "19px",
                                    }}
                                    fontSize={14}
                                >superadmin@gmail.com</Typography>
                            </Grid>
                        </Grid>
                        <CustomTooltip title="Close">
                            <IconButton
                                onClick={handleCloseNavigationDrawer}
                                theme={theme}
                            >
                                <CloseIcon
                                    color={theme.palette.background.iconColor}
                                />
                            </IconButton>
                        </CustomTooltip>
                    </Box>
                    <DrawerMenuItem active={emailNotificationDialog} onClick={() => handleOpenDialog("emailNotification")}>
                        <ListItemIcon>
                            <SettingIcon sx={{ color: theme.palette.background.iconColor }} />
                        </ListItemIcon>
                        <DrawerListItemText>
                            Email Notification
                        </DrawerListItemText>
                    </DrawerMenuItem>
                    {UserRole == UserRole.ADMIN ||
                        userRole == UserRole.SUPERADMIN &&
                        <DrawerMenuItem active={emailListDialog} onClick={() => handleOpenDialog("emailList")}>
                            <ListItemIcon>
                                <ListIcon />
                            </ListItemIcon>
                            <DrawerListItemText>
                                Email List
                            </DrawerListItemText>
                        </DrawerMenuItem>
                    }
                    <DrawerMenuItem active={openLogoutDialog} onClick={() => handleOpenDialog('logout')} sx={{ marginTop: 8 }}>
                        <ListItemIcon >
                            <LogoutIcon color={theme.palette.background.iconColor} />
                        </ListItemIcon>
                        <DrawerListItemText>
                            Sign out
                        </DrawerListItemText>
                    </DrawerMenuItem>
                </Menu>
            }
        </>
    )
}

export default NavigationDrawer