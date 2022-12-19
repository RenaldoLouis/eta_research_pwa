import React, { useContext, useState, useEffect } from "react";

// import material UI
import { Typography, Grid, Dialog, Tabs, Divider, TextField, FormControl, Snackbar, Select, MenuItem } from "@mui/material";

import CloseIcon from '@mui/icons-material/Close';

import { Outlet } from "react-router-dom";

import { AppContext } from "../../App";

import ButtonSecondary from "../ReusableComponents/ButtonSecondary";

import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import CustomDialog from "../ReusableComponents/CustomDialog";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";
import DivFlexStart from "../ReusableComponents/DivFlexStart";

const EditEmailDialog = () => {

    const {isMobile,  handleCloseNewEmailDialog, editEmailDialog, currentEmail, editNewEmail, handleCloseEditEmailDialog  } = useContext(AppContext)

    const theme = useTheme()



    const Roles = [
        {
            value: 'admin',
            label: 'Admin',
        },
        {
            value: 'superAdmin',
            label: 'Super Admin',
        },
        {
            value: 'standard',
            label: 'Standard',
        },
    ];

    // const initEmail = { id: null, email: '', roles: 'admin' }

    const [email, setEmail] = useState(currentEmail)

    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setEmail({ ...email, [name]: value })
    }

    const handleSubmit = (e) => {
        console.log('email', email)
        e.preventDefault()
        editNewEmail(email)
        handleCloseNewEmailDialog()
    }

    useEffect(
        () => {
            setEmail(currentEmail)
        },
        [currentEmail]
    )



    return (
        <>
            <CustomDialog width={900} open={editEmailDialog} onClose={handleCloseEditEmailDialog}  >
                <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                    <CloseIcon onClick={handleCloseEditEmailDialog} />
                </DivFlexEnd>
                <div style={{ padding: '5px 20px 30px 20px'}}>
                    <DivFlexCenter>
                        <Typography sx={{ color: theme.palette.text.heading1, fontSize: 40, fontFamily: 'Eina04-Regular' }}>
                            Edit Email
                        </Typography>
                    </DivFlexCenter>
                    <FormControl  sx={{ width: '100%' }} >
                    <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', mt: 3, width: '100%', }}>
                        <DivFlexStart sx={{ width: isMobile ? '100%' : '60%', mb:2 }}>
                            <Typography sx={{ fontSize: 20, fontFamily: 'Eina04-SemiBold', mr: 2 }}>
                                Email
                            </Typography>
                            <TextField onChange={handleChangeInput} id="basic" placeholder="" name="email" sx={{ input: { fontSize: 20, fontFamily: 'Eina04-Regular' }, width: isMobile ? '100%' : '80%' }} value={email.email} />
                        </DivFlexStart>

                        <DivFlexStart sx={{ width: isMobile ? '100%' : '35%', mb:2 }}>
                            <Typography sx={{ fontSize: 20, fontFamily: 'Eina04-SemiBold', mr: 2 }}>
                                Roles
                            </Typography>
                            <TextField
                                id="roles"
                                select
                                value={email.roles}
                                name="roles"
                                onChange={handleChangeInput}
                                sx={{ width: '100%', }}
                            >
                                {Roles.map((option) => (
                                    <MenuItem key={option.value} value={option.value}>
                                        {option.label}
                                    </MenuItem>
                                ))}
                            </TextField>

                        </DivFlexStart>

                    </DivFlexSpaceBetween>
                    </FormControl>
                    <DivFlexSpaceBetween sx={{ mt:5 }}>
                        <Typography sx={{ textDecoration: 'underline',fontFamily: 'Eina04-Regular', cursor: 'pointer' }} onClick={handleCloseNewEmailDialog} >
                            Cancel
                        </Typography>
                        <ButtonSecondary sx={{width: '35%' }} onClick={handleSubmit}>
                            <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 20, fontFamily: 'Eina04-SemiBold' }}>
                                Save
                            </Typography>
                        </ButtonSecondary>
                    </DivFlexSpaceBetween>
                </div>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default EditEmailDialog