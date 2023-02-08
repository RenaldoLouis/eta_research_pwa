import React, { useContext, useState } from "react";

// import material UI
import { Typography } from "@mui/material";

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import CustomDialog from "../ReusableComponents/CustomDialog";
import CustomDialogContent from "../ReusableComponents/CustomDialogContent";
import Button from "../ReusableComponents/Button";

// import style and theme
import { useTheme } from "@mui/material/styles";

const DeleteEmailDialog = () => {

    const { deleteEmailDialog, currentEmail, handleCloseDeleteEmailDialog, deleteNewEmail, isMobile } = useContext(AppContext)

    const theme = useTheme()

    return (
        <>
            <CustomDialog width={700} open={deleteEmailDialog} onClose={handleCloseDeleteEmailDialog} theme={theme}>
                <CustomDialogContent isMobile={isMobile}>
                    <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}>
                        <Typography sx={{ color: theme.palette.text.primary, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                            Delete Email
                        </Typography>
                    </DivFlexCenter>
                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-Regular', color: theme.palette.text.primary }}>
                        Are you sure you want to delete  <span style={{ fontFamily: 'Eina04-SemiBold', color:theme.palette.text.highlithText }}>  {currentEmail.email}  </span>  ?
                    </Typography>

                    <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                        <Typography sx={{ textDecoration: 'underline', fontFamily: 'Eina04-Semibold', cursor: 'pointer', fontSize: isMobile ? 14 : 20, color: theme.palette.text.primary }} onClick={handleCloseDeleteEmailDialog} >
                            Cancel
                        </Typography>
                        <Button style={{ width: '35%' }} onClick={() => deleteNewEmail(currentEmail.id)} >
                            {`Delete`}
                        </Button>
                    </DivFlexSpaceBetween>
                </CustomDialogContent>
            </CustomDialog>

            <Outlet />
        </>

    )
}


export default DeleteEmailDialog