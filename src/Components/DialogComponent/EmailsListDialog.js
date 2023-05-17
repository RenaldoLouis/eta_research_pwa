import React, { useContext, useState } from "react";

// import material UI
import { Box, TableContainer, Typography } from "@mui/material";
// import table from material ui
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

// import Icon
import DeleteIcon from "../../assets/icons/DeleteIcon";
import EditIcon from "../../assets/icons/EditIcon";

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import CustomDialog from "../ReusableComponents/CustomDialog";
import Button from "../ReusableComponents/Button";

// import styled and theme
import { styled, useTheme } from "@mui/material/styles";

/**========== Styled Component ========== */
// table head component
const TableHeadCustom = styled(TableCell)((props) => ({
    fontFamily: 'Eina04-SemiBold',
    fontSize: 20,
    // paddingLeft: 0,
    top: -1,
    backgroundColor: props.theme.palette.background.headDialog,
    color: props.theme.palette.text.heading1,
    borderBottom: 'none',
    padding: 0,
    paddingBottom: 16
}))

const TableCellCustom = styled(TableCell)((props) => ({
    fontFamily: 'Eina04-Regular',
    color: props.theme.palette.text.primary,
    paddingLeft: 0,
    fontSize: 20,
    borderBottom: `1px solid ${props.theme.palette.background.separatorTitle}`
}))

// table data container component
const TableDataContainer = styled('div')((props) => ({
    maxHeight: 300,
    overflowY: 'auto',
    paddingRight: 24
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

    const { emailListDialog, handleEmailListDialog, emailList, handleOpenAddNewEmailDialog, handleSetCurrentEmailForDelete, handleSetCurrentEmailForEdit, isMobile } = useContext(AppContext)

    const theme = useTheme()

    // email list component based on device type
    let emailListDeviceVersion;

    if (isMobile) {
        emailListDeviceVersion =
            <>
                <DivFlexCenter sx={{ width: "calc(100% - 24px)" }}>
                    <Typography sx={{ color: theme.palette.text.heading1, fontSize: 20, fontFamily: 'Eina04-Regular', textAlign: 'center' }}>
                        {`<KundenName>`} Emailliste
                    </Typography>
                </DivFlexCenter>

                <Typography sx={{ fontFamily: 'Eina04-SemiBold', fontSize: 12, mt: 3 }}> Email/Roles </Typography>
                <TableDataContainer>
                    {
                        emailList.map((list) => (
                            <DivFlexSpaceBetween key={list.id} sx={{ mt: 2, borderBottom: `1px solid ${theme.palette.background.separatorTitle}`, pb: 1 }}>
                                <Box >
                                    <Typography sx={{ fontFamily: 'Eina04-Regular', fontSize: 12, color: theme.palette.text.primary }}>{list.email}</Typography>
                                    <Typography sx={{ fontFamily: 'Eina04-Regular', fontSize: 12, color: theme.palette.text.primary }}>{getTextRoles(list.roles)}</Typography>
                                </Box>
                                <DivFlexCenter >
                                    <EditIcon color={theme.palette.background.iconColor} sx={{ fontSize: 18, mr: 3 }} onClick={() => handleSetCurrentEmailForEdit(list)} />
                                    <DeleteIcon color={theme.palette.background.iconColor} sx={{ fontSize: 18 }} onClick={() => handleSetCurrentEmailForDelete(list)} />
                                </DivFlexCenter>
                            </DivFlexSpaceBetween>
                        ))
                    }
                </TableDataContainer>
                <Typography sx={{ textDecoration: 'underline', mt: 2, fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize: 12, width: "calc(100% - 24px)" }} onClick={handleOpenAddNewEmailDialog} >
                    +Add New Email
                </Typography>

                <Button style={{ mt: 3, width: 'calc(100% - 24px)' }} onClick={handleEmailListDialog}>
                    {`Save`}
                </Button>
            </>
    } else {
        emailListDeviceVersion =
            <>
                <DivFlexCenter sx={{ width: "calc(100% - 48px)", height: 40, mb: 8, }}>
                    <Typography sx={{ color: theme.palette.text.heading1, fontSize: 40, fontFamily: 'Eina04-Regular' }}>
                        {`<KundenName> EmailListe`}
                    </Typography>
                </DivFlexCenter>
                <TableContainer sx={{ maxHeight: 250, pr: 6 }}>
                    <Table stickyHeader >
                        <TableHead  >
                            <TableRow  >
                                <TableHeadCustom theme={theme} >Email</ TableHeadCustom>
                                <TableHeadCustom theme={theme}>Roles</TableHeadCustom>
                                <TableHeadCustom theme={theme}></TableHeadCustom>

                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {emailList.map((list) => (
                                <TableRow key={list.id}>
                                    <TableCellCustom component="th" scope="row" theme={theme}>
                                        {list.email}
                                    </TableCellCustom>
                                    <TableCellCustom > {getTextRoles(list.roles)}</TableCellCustom>
                                    <TableCellCustom sx={{ width: 90 }}>
                                        <DivFlexSpaceBetween sx={{ mr: -2 }}>
                                            <EditIcon sx={{ cursor: 'pointer', fontSize: 24 }} color={theme.palette.background.iconColor} onClick={() => handleSetCurrentEmailForEdit(list)} />
                                            <DeleteIcon sx={{ cursor: 'pointer', fontSize: 24 }} color={theme.palette.background.iconColor} onClick={() => handleSetCurrentEmailForDelete(list)} />
                                        </DivFlexSpaceBetween>
                                    </TableCellCustom>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography sx={{ textDecoration: 'underline', mt: 3, fontFamily: 'Eina04-Regular', cursor: 'pointer', fontSize: 20, color: theme.palette.text.primary }} onClick={handleOpenAddNewEmailDialog} >
                    +Add New Email
                </Typography>
                <Button style={{ mt: 8, width: 'calc(100% - 48px)' }} onClick={handleEmailListDialog} >
                    {`Save`}
                </Button>
            </>
    }


    return (
        <>
            <CustomDialog width={800} open={emailListDialog} onClose={handleEmailListDialog} backgroundColor={theme.palette.background.dialog}  >
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <Box sx={{ padding: isMobile ? '4px 0px 32px 24px' : '4px 0px 64px 48px' }}>
                        {emailListDeviceVersion}
                    </Box>
                </Box>
            </CustomDialog>

            <Outlet />
        </>

    )
}


export default EmailsListDialog