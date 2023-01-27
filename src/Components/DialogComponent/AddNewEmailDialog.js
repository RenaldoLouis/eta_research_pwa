import React, { useContext, useState } from "react";

// import material UI
import { Typography, TextField, FormControl, MenuItem, Box } from "@mui/material";

// import icon
import CloseIcon from '@mui/icons-material/Close';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";


// import reusable component
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import CustomDialog from "../ReusableComponents/CustomDialog";
import CustomDialogContent from "../ReusableComponents/CustomDialogContent";
import TextFieldStyled from "../ReusableComponents/TextFieldStyle";

// import style and theme
import { useTheme, styled } from "@mui/material/styles";

const AddNewEmailDialog = () => {

    const { isMobile, isDesktop, addNewEmailDialog, handleCloseNewEmailDialog, addNewEmail } = useContext(AppContext)

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

    const initEmail = { id: null, email: '', roles: 'admin' }

    const [email, setEmail] = useState(initEmail)

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
                addNewEmail(email)
                handleCloseNewEmailDialog()
                setEmail(initEmail)
                setIsEmailInvalid(false)
                setIsEmailEmpty(false)
            }
            else {
                setIsEmailInvalid(true)
            }
        }
    }

    const handleCloseDialog = () => {
        setEmail(initEmail)
        handleCloseNewEmailDialog()
        setIsEmailInvalid(false)
        setIsEmailEmpty(false)
    }


    return (
        <>
            <CustomDialog width={900} open={addNewEmailDialog} onClose={handleCloseDialog} theme={theme} >
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <DivFlexEnd sx={{ pr: 2, pt: 2 }} >
                        <CloseIcon onClick={handleCloseDialog} sx={{ cursor: 'pointer' }} />
                    </DivFlexEnd>
                    <CustomDialogContent>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}>
                            <Typography sx={{ color: theme.palette.text.dialogHeadingText, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                                Add New Email
                            </Typography>
                        </DivFlexCenter>
                        <FormControl sx={{ width: '100%' }} >
                            <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', width: '100%' }}>
                                <DivFlexStart sx={{ width: isMobile ? '100%' : '60%', mb: 2, }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-SemiBold', mr: 2, color: theme.palette.text.titleFormText,  width:isMobile ? 34 : 56 }}>
                                        Email
                                    </Typography>
                                    <TextFieldStyled onChange={handleChangeInput} id="basic" placeholder="example@mail.com" name="email" sx={{ width: isMobile ? '100%' : '80%', }} isMobile={isMobile} />
                                </DivFlexStart>

                                <DivFlexStart sx={{ width: isMobile ? '100%' : '35%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-SemiBold', mr: 2, color: theme.palette.text.titleFormText,  width:isMobile ? 34 : 56 }}>
                                        Roles
                                    </Typography>
                                    <TextFieldStyled
                                        id="roles"
                                        select
                                        defaultValue={email.roles}
                                        name="roles"
                                        onChange={handleChangeInput}
                                        fullWidth
                                        sx={{
                                            alignItems: 'center',
                                            "& .MuiInputBase-root": {
                                                height: isMobile ? 40 : 53,
                                                width: '100%',
                                                alignItems: 'center',
                                                color: theme.palette.text.inputTextActive,
                                                paddingTop: isMobile ? 0.8 : 0.4
                                            }
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

                        <DivFlexStart sx={{ width: isMobile ? '100%' : '60%' }}>
                            <>
                                <Box sx={{ color: theme.palette.text.titleFormText, width:isMobile ? 34 : 56, mr:2 }} />
                                  
                                {isEmailEmpty ? (
                                    <DivFlexStart>
                                        <ErrorOutlineIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5, mt: -0.3 }} />
                                        <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                            Email is empty
                                        </Typography>
                                    </DivFlexStart>
                                ) : isEmailInvalid ? (
                                    <DivFlexStart>
                                        <ErrorOutlineIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5, mt: -0.3 }} />
                                        <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                            Email is invalid
                                        </Typography>
                                    </DivFlexStart>
                                ) : (<></>)
                                }
                            </>
                        </DivFlexStart>
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
                </Box>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default AddNewEmailDialog