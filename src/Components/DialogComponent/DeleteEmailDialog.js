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

const DeleteEmailDialog = () => {

    const {  deleteEmailDialog, currentEmail, handleCloseDeleteEmailDialog, deleteNewEmail, isMobile  } = useContext(AppContext)

    const theme = useTheme()


    return (
        <>
            <CustomDialog width={700} open={deleteEmailDialog} onClose={handleCloseDeleteEmailDialog} theme={theme}>
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleCloseDeleteEmailDialog} />
                </DivFlexEnd>
                <CustomDialogContent>
                    <DivFlexCenter>
                        <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular', mb: 2 }}>
                            Delete Email
                        </Typography>
                    </DivFlexCenter>
                    <Typography sx={{ fontSize:isMobile?12: 20, fontFamily: 'Eina04-Regular',color: theme.palette.text.titleFormText  }}>
                       Are you sure you want to delete  <span style={{ fontFamily:'Eina04-SemiBold' }}>  {currentEmail.email}  </span>  ?
                    </Typography>

                    <DivFlexSpaceBetween sx={{ mt:5 }}>
                        <Typography sx={{ textDecoration: 'underline', fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize:isMobile?14:20, color: theme.palette.text.titleFormText  }} onClick={handleCloseDeleteEmailDialog} >
                            Cancel
                        </Typography>
                        <ButtonSecondary sx={{ width: '35%' }} onClick={() => deleteNewEmail(currentEmail.id)}>
                            <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize:isMobile?14:20 , fontFamily: 'Eina04-SemiBold' }}>
                                Delete
                            </Typography>
                        </ButtonSecondary>
                    </DivFlexSpaceBetween>
                </CustomDialogContent>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default DeleteEmailDialog