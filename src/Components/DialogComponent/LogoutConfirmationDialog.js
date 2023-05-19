import React, { useContext, useState } from "react";

// import material UI
import { Typography } from "@mui/material";

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import component
import DivFlexCenter from "../DivFlexCenter";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import CustomDialog from "./DialogContainer/CustomDialog";
import CustomDialogContent from "./DialogContainer/CustomDialogContent";
import Button from "../Button";

// import style and theme
import { useTheme } from "@mui/material/styles";

const LogoutConfirmationDialog = () => {

    const { isMobile, openLogoutDialog, handleOpenLogoutDialog, handleCloseLogoutDialog, handleLogout } = useContext(AppContext)

    const theme = useTheme()


    return (
        <>
            <CustomDialog open={openLogoutDialog} onClose={handleCloseLogoutDialog} theme={theme}>
                <CustomDialogContent isMobile={isMobile}>
                    <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}>
                        <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                            Sign Out
                        </Typography>
                    </DivFlexCenter>
                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-Regular', color: theme.palette.text.primary }}>
                        Are you sure you want to sign out ?
                    </Typography>

                    <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                        <Typography sx={{ textDecoration: 'underline', fontFamily: 'Eina04-SemiBold', cursor: 'pointer', fontSize: isMobile ? 14 : 20, color: theme.palette.text.primary }} onClick={handleCloseLogoutDialog} >
                            Cancel
                        </Typography>
                        
                        <Button style={{ width: '40%' }} onClick={handleLogout}>
                            {`Sign Out`}
                        </Button>
                    </DivFlexSpaceBetween>
                </CustomDialogContent>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default LogoutConfirmationDialog