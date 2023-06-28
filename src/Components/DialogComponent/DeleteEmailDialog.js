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

import { useTranslation } from "react-i18next";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

// import style and theme
import { useTheme } from "@mui/material/styles";

const DeleteEmailDialog = (props) => {

    const { t, i18n } = useTranslation()

    const { currentEmail, handleCloseDialog, deleteNewEmail, isMobile } = useContext(AppContext)

    const { isOpen } = props;

    const theme = useTheme()

    return (
        <>
            <CustomDialog width={700} open={isOpen} onClose={handleCloseDialog} theme={theme}>
                <CustomDialogContent isMobile={isMobile}>
                    <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}>
                        <Typography sx={{ color: theme.palette.text.primary, fontSize: isMobile ? 20 : 40, fontFamily: FontFamily.EINA04REGULAR }}>
                            {t('emailList.deleteEmail')}
                        </Typography>
                    </DivFlexCenter>
                    {i18n.language === "de" ? (
                        <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: FontFamily.EINA04REGULAR, color: theme.palette.text.primary }}>
                            Sind Sie sicher, dass Sie  <span style={{ fontFamily: FontFamily.EINA04SEMIBOLD, color: theme.palette.text.highlithText }}>  {currentEmail.email}  </span>  löschen möchten?
                        </Typography>
                    ) : (
                        <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: FontFamily.EINA04REGULAR, color: theme.palette.text.primary }}>
                            Are you sure you want to delete  <span style={{ fontFamily: FontFamily.EINA04SEMIBOLD, color: theme.palette.text.highlithText }}>  {currentEmail.email}  </span>  ?
                        </Typography>
                    )}


                    <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                        <Typography sx={{ textDecoration: 'underline', fontFamily: FontFamily.EINA04SEMIBOLD, cursor: 'pointer', fontSize: isMobile ? 14 : 20, color: theme.palette.text.primary }} onClick={handleCloseDialog} >
                            {t('emailList.cancel')}
                        </Typography>
                        <Button style={{ width: '35%' }} onClick={() => deleteNewEmail(currentEmail.id)} >
                            {t('emailList.delete')}
                        </Button>
                    </DivFlexSpaceBetween>
                </CustomDialogContent>
            </CustomDialog>

            <Outlet />
        </>

    )
}


export default DeleteEmailDialog