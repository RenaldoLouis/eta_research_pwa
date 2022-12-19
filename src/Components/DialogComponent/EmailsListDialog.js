import React, { useContext, useState } from "react";

// import material UI
import { Typography, Grid, Dialog, Tabs, Divider, TextField, FormControl, Snackbar } from "@mui/material";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import Icon
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

import { Outlet } from "react-router-dom";

import { AppContext } from "../../App";

// import reusable component
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";

import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import CustomDialog from "../ReusableComponents/CustomDialog";

// dark mode and light mode
import { styled, useTheme } from "@mui/material/styles";

/**========== Styled Component ========== */
const TableHeadCustom = styled(TableCell)((props) => ({
    fontFamily: 'Eina04-SemiBold',
    fontSize: 20,
    paddingLeft: 0
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

    const {  emailListDialog, handleEmailListDialog, emailDumpList, handleOpenAddNewEmailDialog,  handleSetCurrentEmailForDelete, handleSetCurrentEmailForEdit, isDesktop } = useContext(AppContext)

    const theme = useTheme()

    return (
        <>
            <CustomDialog width={800} open={emailListDialog} onClose={handleEmailListDialog}>
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleEmailListDialog} />
                </DivFlexEnd>
                <div style={{ padding: '45px 30px 30px 30px', width: '100%' }}>
                    <DivFlexCenter>
                        <Typography sx={{ color: theme.palette.text.heading1, fontSize: 30, fontFamily: 'Eina04-Regular' }}>
                            {`<KundenName> EmailListe`}
                        </Typography>
                    </DivFlexCenter>

                    <Table sx={{ maxHeight: 'calc(100%-60px)' }} >
                        <TableHead>
                            <TableRow >
                                <TableHeadCustom  >Email</ TableHeadCustom>
                                <TableHeadCustom >Roles</TableHeadCustom>
                                <TableHeadCustom  ></TableHeadCustom>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {emailDumpList.map((list) => (
                                <TableRow key={list.id} >
                                    <TableCell component="th" scope="row" sx={{ fontFamily: 'Eina04-Regular', color: '#000000', pl: 0, fontSize:20 }} >
                                        {list.email}
                                    </TableCell>
                                    <TableCell sx={{ fontFamily: 'Eina04-Regular', color: '#909090', pl: 0, fontSize:20 }} > {getTextRoles(list.roles)}</TableCell>
                                    <TableCell sx={{ width: 100 }}>
                                        <DivFlexSpaceBetween>
                                            <EditIcon sx={{ cursor: 'pointer' }} onClick={() => handleSetCurrentEmailForEdit(list)} />
                                            <DeleteIcon sx={{ cursor: 'pointer' }} onClick={() => handleSetCurrentEmailForDelete(list)} />
                                        </DivFlexSpaceBetween>
                                    </TableCell>
                                </TableRow>
                            ))}
                            <Typography sx={{ textDecoration: 'underline', mt: 2, fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize:20 }} onClick={handleOpenAddNewEmailDialog} >
                                + add new email
                            </Typography>
                        </TableBody>
                    </Table>

                    <ButtonSecondary sx={{ mt: 5 }}>
                        <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 20, fontFamily: 'Eina04-SemiBold' }}>
                            Save
                        </Typography>
                    </ButtonSecondary>
                </div>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default EmailsListDialog