import React, { useContext, useState, useEffect } from "react";

// import material UI
import { Typography, TextField, FormControl, MenuItem } from "@mui/material";

// import icon
import CloseIcon from '@mui/icons-material/Close';

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import reusable component
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import CustomDialog from "../ReusableComponents/CustomDialog";
import CustomDialogContent from "../ReusableComponents/CustomDialogContent";
import TextFieldStyled from "../ReusableComponents/TextFieldStyle";


// import style and theme
import { useTheme } from "@mui/material/styles";

const EditEmailDialog = () => {

    const { isMobile, handleCloseNewEmailDialog, editEmailDialog, currentEmail, editNewEmail, handleCloseEditEmailDialog } = useContext(AppContext)

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
            <CustomDialog width={900} open={editEmailDialog} onClose={handleCloseEditEmailDialog} theme={theme} >
                <div style={{ backgroundColor: theme.palette.background.dialog }}>
                    <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                        <CloseIcon onClick={handleCloseEditEmailDialog} />
                    </DivFlexEnd>
                    <CustomDialogContent>
                        <DivFlexCenter>
                            <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                                Edit Email
                            </Typography>
                        </DivFlexCenter>
                        <FormControl sx={{ width: '100%' }} >
                            <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', mt: 3, width: '100%', }}>
                                <DivFlexStart sx={{ width: isMobile ? '100%' : '60%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-SemiBold', mr: 2, color: theme.palette.text.titleFormText }}>
                                        Email
                                    </Typography>
                                    <TextFieldStyled onChange={handleChangeInput} id="basic" placeholder="" name="email" sx={{ input: { fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-Regular', height: isMobile ? 5 : 20, color: theme.palette.text.inputText }, width: isMobile ? '100%' : '80%' }} value={email.email} />
                                </DivFlexStart>

                                <DivFlexStart sx={{ width: isMobile ? '100%' : '35%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-SemiBold', mr: 2, color: theme.palette.text.titleFormText }}>
                                        Roles
                                    </Typography>
                                    <TextFieldStyled
                                        id="roles"
                                        select
                                        value={email.roles}
                                        name="roles"
                                        onChange={handleChangeInput}
                                        fullWidth
                                        sx={{
                                            alignItems: 'center',
                                            "& .MuiInputBase-root": {
                                                height: isMobile ? 40 : 55,
                                                width: '100%',
                                                color: theme.palette.text.inputText
                                            },
                                        }}
                                    >
                                        {Roles.map((option) => (
                                            <MenuItem key={option.value} value={option.value}>
                                                <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-Regular' }}>
                                                    {option.label}
                                                </Typography>
                                            </MenuItem>
                                        ))}
                                    </TextFieldStyled>

                                </DivFlexStart>

                            </DivFlexSpaceBetween>
                        </FormControl>
                        <DivFlexSpaceBetween sx={{ mt: 5 }}>
                            <Typography sx={{ fontSize: isMobile ? 14 : 20, textDecoration: 'underline', fontFamily: 'Eina04-Regular', cursor: 'pointer', color: theme.palette.text.titleFormText }} onClick={handleCloseNewEmailDialog} >
                                Cancel
                            </Typography>
                            <ButtonSecondary sx={{ width: '35%' }} onClick={handleSubmit}>
                                <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: isMobile ? 14 : 20, fontFamily: 'Eina04-SemiBold' }}>
                                    Save
                                </Typography>
                            </ButtonSecondary>
                        </DivFlexSpaceBetween>
                    </CustomDialogContent>
                </div>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default EditEmailDialog