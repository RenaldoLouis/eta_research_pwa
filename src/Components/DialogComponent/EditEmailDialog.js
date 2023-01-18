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


    // validation for email
    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }


    const handleChangeInput = (e) => {
        const { name, value } = e.target
        setEmail({ ...email, [name]: value })
    }

    const handleSubmit = (e) => {
        if (email.email == '') {
            setIsEmailEmpty(true)
        }
        if (email.email != '') {
            setIsEmailEmpty(false)
            if (isValidEmail(email.email)) {
                e.preventDefault()
                editNewEmail(email)
                handleCloseNewEmailDialog()
            } else {
                setIsEmailInvalid(true)
            }
        }
    }

    const handleCloseDialog = () => {
        handleCloseEditEmailDialog()
        setIsEmailInvalid(false)
        setIsEmailEmpty(false)
        setEmail(currentEmail)
    }

    useEffect(
        () => {
            setEmail(currentEmail)
        },
        [currentEmail]
    )


    return (
        <>
            <CustomDialog width={900} open={editEmailDialog} onClose={handleCloseDialog} theme={theme} >
                <div style={{ backgroundColor: theme.palette.background.dialog }}>
                    <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                        <CloseIcon onClick={handleCloseDialog} style={{ cursor: 'pointer' }} />
                    </DivFlexEnd>
                    <CustomDialogContent>
                        <DivFlexCenter style={{ height: isMobile ? 20 : 40, marginBottom: isMobile ? 24 : 64 }}>
                            <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                                Edit Email
                            </Typography>
                        </DivFlexCenter>
                        <FormControl sx={{ width: '100%' }} >
                            <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', width: '100%', }}>
                                <DivFlexStart sx={{ width: isMobile ? '100%' : '60%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-SemiBold', mr: 2, color: theme.palette.text.titleFormText }}>
                                        Email
                                    </Typography>
                                    <TextFieldStyled onChange={handleChangeInput} id="basic" placeholder="" name="email" sx={{ width: isMobile ? '100%' : '80%' }} value={email.email} isMobile={isMobile} />
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
                                                color: theme.palette.text.inputTextActive,
                                                paddingTop: isMobile ? 0.8 : ''
                                            },
                                        }}
                                        isMobile={isMobile}
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

                        <DivFlexCenter style={{ width: isMobile ? '100%' : '60%' }}>
                            {isEmailEmpty ? (
                                <Typography sx={{ fontSize: isMobile ?12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                    Email is Empty
                                </Typography>
                            ) : isEmailInvalid ? (
                                <Typography sx={{ fontSize: isMobile ?12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                    Email is Invalid
                                </Typography>
                            ) : (<></>)
                            }
                        </DivFlexCenter>

                        <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                            <Typography sx={{ fontSize: isMobile ? 14 : 20, textDecoration: 'underline', fontFamily: 'Eina04-Regular', cursor: 'pointer', color: theme.palette.text.titleFormText }} onClick={handleCloseDialog} >
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