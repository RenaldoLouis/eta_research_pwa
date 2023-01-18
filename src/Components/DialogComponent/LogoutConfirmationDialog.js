import React, { useContext, useState } from "react";

// import material UI
import { Typography } from "@mui/material";

// import icon
import CloseIcon from '@mui/icons-material/Close';

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import reusable component
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import CustomDialog from "../ReusableComponents/CustomDialog";
import CustomDialogContent from "../ReusableComponents/CustomDialogContent";

// import style and theme
import { useTheme } from "@mui/material/styles";

const LogoutConfirmationDialog = () => {

    const { isMobile, openLogoutDialog,  handleOpenLogoutDialog, handleCloseLogoutDialog, handleLogout } = useContext(AppContext)

    const theme = useTheme()


    return (
        <>
            <CustomDialog open={openLogoutDialog} onClose={handleCloseLogoutDialog} theme={theme}>
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleCloseLogoutDialog} style={{ cursor : 'pointer' }} />
                </DivFlexEnd>
                <CustomDialogContent>
                    <DivFlexCenter style={{ height: isMobile ? 20 : 40, marginBottom: isMobile ? 24 : 64 }}>
                        <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                            Sign Out
                        </Typography>
                    </DivFlexCenter>
                    <Typography sx={{ fontSize:isMobile?12: 20, fontFamily: 'Eina04-Regular',color: theme.palette.text.titleFormText  }}>
                       Are you sure you want to sign out ?
                    </Typography>

                    <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                        <Typography sx={{ textDecoration: 'underline', fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize:isMobile?14:20, color: theme.palette.text.titleFormText  }} onClick={handleCloseLogoutDialog} >
                            Cancel
                        </Typography>
                        <ButtonSecondary sx={{ width: '35%' }} onClick={handleLogout}>
                            <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize:isMobile?14:20 , fontFamily: 'Eina04-SemiBold' }}>
                                Sign Out
                            </Typography>
                        </ButtonSecondary>
                    </DivFlexSpaceBetween>
                </CustomDialogContent>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default LogoutConfirmationDialog