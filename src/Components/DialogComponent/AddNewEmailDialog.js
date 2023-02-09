import React, { useContext, useState } from "react";

// import material UI
import { Typography, TextField, FormControl, MenuItem, Box } from "@mui/material";

// import icon
import ErrorIcon from "../../assets/icons/ErrorIcon";


// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";


// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import CustomDialog from "../ReusableComponents/CustomDialog";
import CustomDialogContent from "../ReusableComponents/CustomDialogContent";
import TextFieldStyled from "../ReusableComponents/TextFieldStyle";
import Button from "../ReusableComponents/Button";

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
                    <CustomDialogContent isMobile={isMobile}>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}>
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: 'Eina04-Regular' }}>
                                Add New Email
                            </Typography>
                        </DivFlexCenter>
                        <FormControl sx={{ width: '100%' }} >
                            <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', width: '100%' }}>
                                <DivFlexStart sx={{ width: isDesktop ? '60%' : '100%', mb: 2, }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-SemiBold', mr: 2, color: theme.palette.text.primary, width: isMobile ? 34 : 56 }}>
                                        Email
                                    </Typography>
                                    <TextFieldStyled onChange={handleChangeInput} id="basic" placeholder="example@mail.com" name="email" sx={{ width: isDesktop ? '80%' : '100%', }} isMobile={isMobile} />
                                </DivFlexStart>

                                <DivFlexStart sx={{ width: isDesktop ? '35%' : '100%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: 'Eina04-SemiBold', mr: 2, color: theme.palette.text.primary, width: isMobile ? 34 : 56 }}>
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
                                <Box sx={{ width: isMobile ? 34 : 56, mr: 2 }} />

                                {isEmailEmpty ? (
                                    <DivFlexStart>
                                        <ErrorIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5 }} />
                                        <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                            Email is empty
                                        </Typography>
                                    </DivFlexStart>
                                ) : isEmailInvalid ? (
                                    <DivFlexStart>
                                        <ErrorIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5 }} />
                                        <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: 'Eina04-Regular' }} color={'#da1e28'}>
                                            Email is invalid
                                        </Typography>
                                    </DivFlexStart>
                                ) : (<></>)
                                }
                            </>
                        </DivFlexStart>
                        <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                            <Typography sx={{ fontSize: isMobile ? 14 : 20, textDecoration: 'underline', fontFamily: 'Eina04-SemiBold', cursor: 'pointer', color: theme.palette.text.primary }} onClick={handleCloseDialog} >
                                Cancel
                            </Typography>
                            <Button style={{ width: '35%' }} onClick={handleSubmit}>
                                {`Save`}
                            </Button>
                        </DivFlexSpaceBetween>
                    </CustomDialogContent>
                </Box>
            </CustomDialog>
            <Outlet />
        </>

    )
}


export default AddNewEmailDialog