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

// import Constants
import { FontFamily } from "../../Constants/FontFamily";


// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import  component
import DivFlexCenter from "../DivFlexCenter";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import CustomDialog from "./DialogContainer/CustomDialog";
import Button from "../Button";

// import styled and theme
import { styled, useTheme } from "@mui/material/styles";

/**========== Styled Component ========== */
// table head component
const TableHeadCustom = styled(TableCell)((props) => ({
    fontFamily: FontFamily.EINA04SEMIBOLD,
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
    fontFamily: FontFamily.EINA04REGULAR,
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

const EmailsListDialog = (props) => {

    const { emailList, handleCloseDialog, handleOpenDialog, handleSetCurrentEmailForDelete, handleSetCurrentEmailForEdit, isMobile } = useContext(AppContext)

    const { isOpen } = props;

    const theme = useTheme()

    // email list component based on device type
    let emailListDeviceVersion;

    if (isMobile) {
        emailListDeviceVersion =
            <>
                <DivFlexCenter sx={{ width: "calc(100% - 24px)" }}>
                    <Typography sx={{ color: theme.palette.text.heading1, fontSize: 20, fontFamily: FontFamily.EINA04REGULAR, textAlign: 'center' }}>
                        {`<KundenName>`} Emailliste
                    </Typography>
                </DivFlexCenter>

                <Typography sx={{ fontFamily: FontFamily.EINA04SEMIBOLD, fontSize: 12, mt: 3 }}> Email/Roles </Typography>
                <TableDataContainer>
                    {
                        emailList.map((list) => (
                            <DivFlexSpaceBetween key={list.id} sx={{ mt: 2, borderBottom: `1px solid ${theme.palette.background.separatorTitle}`, pb: 1 }}>
                                <Box >
                                    <Typography sx={{ fontFamily: FontFamily.EINA04REGULAR, fontSize: 12, color: theme.palette.text.primary }}>{list.email}</Typography>
                                    <Typography sx={{ fontFamily: FontFamily.EINA04REGULAR, fontSize: 12, color: theme.palette.text.primary }}>{getTextRoles(list.roles)}</Typography>
                                </Box>
                                <DivFlexCenter >
                                    <EditIcon color={theme.palette.background.iconAction} sx={{ fontSize: 18, mr: 3 }} onClick={() => handleSetCurrentEmailForEdit(list)} />
                                    <DeleteIcon color={theme.palette.background.iconAction} sx={{ fontSize: 18 }} onClick={() => handleSetCurrentEmailForDelete(list)} />
                                </DivFlexCenter>
                            </DivFlexSpaceBetween>
                        ))
                    }
                </TableDataContainer>
                <Typography sx={{ textDecoration: 'underline', mt: 2, fontFamily: FontFamily.EINA04REGULAR, cursor: 'pointer', fontSize: 12, width: "calc(100% - 24px)" }} onClick={() => handleOpenDialog('addNewEmail')} >
                    +Add New Email
                </Typography>

                <Button style={{ mt: 3, width: 'calc(100% - 24px)' }} onClick={handleCloseDialog}>
                    {`Save`}
                </Button>
            </>
    } else {
        emailListDeviceVersion =
            <>
                <DivFlexCenter sx={{ width: "calc(100% - 48px)", height: 40, mb: 8, }}>
                    <Typography sx={{ color: theme.palette.text.heading1, fontSize: 40, fontFamily: FontFamily.EINA04REGULAR }}>
                        {`<KundenName> EmailListe`}
                    </Typography>
                </DivFlexCenter>
                <TableContainer sx={{ maxHeight: 250, pr: 5, width: 'calc(100% - 8px)' }}>
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
                                            <EditIcon sx={{ cursor: 'pointer', fontSize: 24 }} color={theme.palette.background.iconAction} onClick={() => handleSetCurrentEmailForEdit(list)} />
                                            <DeleteIcon sx={{ cursor: 'pointer', fontSize: 24 }} color={theme.palette.background.iconAction} onClick={() => handleSetCurrentEmailForDelete(list)} />
                                        </DivFlexSpaceBetween>
                                    </TableCellCustom>
                                </TableRow>
                            ))}

                        </TableBody>
                    </Table>
                </TableContainer>
                <Typography sx={{ textDecoration: 'underline', mt: 3, fontFamily: FontFamily.EINA04REGULAR, cursor: 'pointer', fontSize: 20, color: theme.palette.text.primary }} onClick={() => handleOpenDialog('addNewEmail')} >
                    +Add New Email
                </Typography>
                <Button style={{ mt: 8, width: 'calc(100% - 48px)' }} onClick={handleCloseDialog} >
                    {`Save`}
                </Button>
            </>
    }


    return (
        <>
            <CustomDialog width={800} open={isOpen} onClose={handleCloseDialog} backgroundColor={theme.palette.background.dialog}  >
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