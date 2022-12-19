import React, { useContext, useState } from "react";

// import material UI
import { Typography, Grid, Dialog, Tabs, Divider, TextField, FormControl, Snackbar } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import { Outlet } from "react-router-dom";

import { AppContext } from "../../App";

// import reusable component
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";

import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import CustomDialog from "../ReusableComponents/CustomDialog";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";

const DeleteEmailDialog = () => {

    const {  deleteEmailDialog, currentEmail, handleCloseDeleteEmailDialog, deleteNewEmail  } = useContext(AppContext)

    const theme = useTheme()

    const handleChangeInput = (e) => {
        console.log(e.target.value)
    }



    return (
        <>
            <CustomDialog width={700} open={deleteEmailDialog} onClose={handleCloseDeleteEmailDialog}>
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleCloseDeleteEmailDialog} />
                </DivFlexEnd>
                <div style={{ padding: '5px 40px 30px 40px' }}>
                    <DivFlexCenter>
                        <Typography sx={{ color: theme.palette.text.heading1, fontSize: 40, fontFamily: 'Eina04-Regular', mb: 2 }}>
                            Delete Email
                        </Typography>
                    </DivFlexCenter>
                    <Typography sx={{ fontSize: 20, fontFamily: 'Eina04-Regular' }}>
                       Are you sure you want to delete <span style={{ fontFamily:'Eina04-SemiBold' }}>  {currentEmail.email}  </span>  ?
                    </Typography>

                    <DivFlexSpaceBetween sx={{ mt:5 }}>
                        <Typography sx={{ textDecoration: 'underline', fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize:20 }} onClick={handleCloseDeleteEmailDialog} >
                            Cancel
                        </Typography>
                        <ButtonSecondary sx={{ width: '35%' }} onClick={() => deleteNewEmail(currentEmail.id)}>
                            <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 20, fontFamily: 'Eina04-SemiBold' }}>
                                Delete
                            </Typography>
                        </ButtonSecondary>
                    </DivFlexSpaceBetween>
                </div>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default DeleteEmailDialog