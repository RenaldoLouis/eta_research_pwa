import React, { useContext, useState } from "react";

// import material UI
import { TableContainer, Typography } from "@mui/material";
// import table from material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import Icon
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import Delete from "../../assets/icons/Delete";
import Edit from "../../assets/icons/Edit";

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

// import styled and theme
import { styled, useTheme } from "@mui/material/styles";

/**========== Styled Component ========== */
const TableHeadCustom = styled(TableCell)((props) => ({
    fontFamily: 'Eina04-SemiBold',
    fontSize: 20,
    paddingLeft: 0,
    top:-1,
    backgroundColor:props.theme.palette.background.headDialog,
    color: props.theme.palette.text.emailListText
    
}))

/**========== EOL Styled Component ========== */

const getTextRoles = roles => {
    switch (roles) {
        case 'admin':
            return 'Admin'
        case 'superAdmin':
            return 'Super Admin'
        default:
            return 'Standard'
    }
}

const EmailsListDialog = () => {

    const { emailListDialog, handleEmailListDialog, emailDumpList, handleOpenAddNewEmailDialog, handleSetCurrentEmailForDelete, handleSetCurrentEmailForEdit, isMobile } = useContext(AppContext)

    const theme = useTheme()

    return (
        <>
            <CustomDialog width={800} open={emailListDialog} onClose={handleEmailListDialog} backgroundColor={theme.palette.background.dialog} >
                <div style={{ backgroundColor:theme.palette.background.dialog }}>
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleEmailListDialog} />
                </DivFlexEnd>
                <div style={{ padding: '5px 0px 30px 30px' }}>
                    {isMobile ? (
                        <>
                            <DivFlexCenter>
                                <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: 20, fontFamily: 'Eina04-Regular', textAlign: 'center' }}>
                                    {`<KundenName>`} <br /> EmailListe
                                </Typography>
                            </DivFlexCenter>

                            <Typography sx={{ fontFamily: 'Eina04-SemiBold', fontSize: 12, mt: 3 }}> Email/Roles </Typography>
                            <div style={{ maxHeight: 300, overflowY: 'scroll', paddingRight:10 }}>
                                {
                                    emailDumpList.map((list) => (
                                        <>
                                            <DivFlexSpaceBetween sx={{ mt: 2, borderBottom: '1px solid', pb: 1 }}>
                                                <div >
                                                    <Typography sx={{ fontFamily: 'Eina04-Regular', fontSize: 12, color: theme.palette.text.emailListText }}>{list.email}</Typography>
                                                    <Typography sx={{ fontFamily: 'Eina04-Regular', fontSize: 12, color: theme.palette.text.emailListText }}>{getTextRoles(list.roles)}</Typography>
                                                </div>
                                                <DivFlexCenter >
                                                    <Edit color={theme.palette.background.iconColor} sx={{ width:18, mr:1 }}  onClick={() => handleSetCurrentEmailForEdit(list)} /> 
                                                    <Delete color={theme.palette.background.iconColor} sx={{ width:18 }} onClick={() => handleSetCurrentEmailForDelete(list)} /> 
                                                </DivFlexCenter>
                                            </DivFlexSpaceBetween>
                                        </>
                                    ))
                                }
                            </div>
                            <Typography sx={{ textDecoration: 'underline', mt: 2, fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize: 12 }} onClick={handleOpenAddNewEmailDialog} >
                                + add new email
                            </Typography>

                            <ButtonSecondary sx={{ mt: 3, width:'calc(100% - 20px)' }} onClick={handleEmailListDialog}>
                                <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                                    Save
                                </Typography>
                            </ButtonSecondary>
                        </>
                    ) : (
                        <>
                            <DivFlexCenter>
                                <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: 40, fontFamily: 'Eina04-Regular' }}>
                                    {`<KundenName> EmailListe`}
                                </Typography>
                            </DivFlexCenter>
                            <TableContainer sx={{ maxHeight:400, paddingRight:2 }}>
                                <Table stickyHeader >
                                    <TableHead  >
                                        <TableRow  >
                                            <TableHeadCustom theme={theme} >Email</ TableHeadCustom>
                                            <TableHeadCustom theme={theme}>Roles</TableHeadCustom>
                                            <TableHeadCustom theme={theme}></TableHeadCustom>

                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {emailDumpList.map((list) => (
                                            <TableRow key={list.id} >
                                                <TableCell component="th" scope="row" sx={{ fontFamily: 'Eina04-Regular', pl: 0, fontSize: 20, color: theme.palette.text.emailListText }} >
                                                    {list.email}
                                                </TableCell>
                                                <TableCell sx={{ fontFamily: 'Eina04-Regular', color: theme.palette.text.emailListRole, pl: 0, fontSize: 20 }} > {getTextRoles(list.roles)}</TableCell>
                                                <TableCell sx={{ width: 100 }}>
                                                    <DivFlexSpaceBetween>
                                                        <Edit sx={{ cursor: 'pointer', width:22 }} color={theme.palette.background.iconColor} onClick={() => handleSetCurrentEmailForEdit(list)} />
                                                        <Delete sx={{ cursor: 'pointer', width:22 }} color={theme.palette.background.iconColor} onClick={() => handleSetCurrentEmailForDelete(list)} />
                                                    </DivFlexSpaceBetween>
                                                </TableCell>
                                            </TableRow>
                                        ))}

                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <Typography sx={{ textDecoration: 'underline', mt: 3, fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize: 20, color: theme.palette.text.emailListText }} onClick={handleOpenAddNewEmailDialog} >
                                + add new email
                            </Typography>
                            <ButtonSecondary sx={{ mt: 5, width:'calc(100% - 20px)' }} onClick={handleEmailListDialog}>
                                <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: 20, fontFamily: 'Eina04-SemiBold' }}>
                                    Save
                                </Typography>
                            </ButtonSecondary>
                        </>
                    )}
                </div>
                </div>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default EmailsListDialog