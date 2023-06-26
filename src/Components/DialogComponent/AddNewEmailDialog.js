import React, { useContext, useState } from "react";

// import material UI
import { Typography, TextField, FormControl, MenuItem, Box, Select } from "@mui/material";

// import icon
import ErrorIcon from "../../assets/icons/ErrorIcon";

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import component
import DivFlexCenter from "../DivFlexCenter";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import DivFlexStart from "../DivFlexStart";
import CustomDialog from "./DialogContainer/CustomDialog";
import CustomDialogContent from "./DialogContainer/CustomDialogContent";
import TextFieldStyled from "../TextField/TextFieldStyle";
import Button from "../Button";
import SelectMenuItem from "./SelectMenuItem/SelectMenuItem";


// import style and theme
import { useTheme, styled } from "@mui/material/styles";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

const AddNewEmailDialog = (props) => {

    const { isMobile, isDesktop, handleCloseDialog, handleOpenDialog, addNewEmail } = useContext(AppContext)
    const { isOpen } = props;

    const theme = useTheme()

    const initEmail = { id: null, email: '', roles: 'admin' }

    const [email, setEmail] = useState(initEmail)

    // validation for email
    const [isEmailEmpty, setIsEmailEmpty] = useState(false)
    const [isEmailInvalid, setIsEmailInvalid] = useState(false)

    function isValidEmail(email) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChangeInput = (e) => {
        e.preventDefault()
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
                handleCloseDialog();
                setEmail(initEmail)
                setIsEmailInvalid(false)
                setIsEmailEmpty(false)
            }
            else {
                setIsEmailInvalid(true)
            }
        }
    }

    const handleCloseDialogAddNewEmail = () => {
        setEmail(initEmail)
        handleOpenDialog('');
        setIsEmailInvalid(false)
        setIsEmailEmpty(false)
    }

    const roles = [
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


    return (
        <>
            <CustomDialog width={900} open={isOpen} onClose={handleCloseDialogAddNewEmail} theme={theme} >
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <CustomDialogContent isMobile={isMobile}>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}>
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: FontFamily.EINA04REGULAR }}>
                                Add New Email
                            </Typography>
                        </DivFlexCenter>
                        <FormControl sx={{ width: '100%' }} >
                            <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', width: '100%' }}>
                                <DivFlexStart sx={{ width: isDesktop ? '60%' : '100%', mb: 2, }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: FontFamily.EINA04SEMIBOLD, mr: 2, color: theme.palette.text.primary, width: isMobile ? 34 : 56 }}>
                                        Email
                                    </Typography>
                                    <TextFieldStyled onChange={handleChangeInput} id="basic" placeholder="example@mail.com" name="email" sx={{ width: isDesktop ? '80%' : '100%', }} isMobile={isMobile} />
                                </DivFlexStart>

                                <DivFlexStart sx={{ width: isDesktop ? '35%' : '100%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: FontFamily.EINA04SEMIBOLD, mr: 2, color: theme.palette.text.primary, width: isMobile ? 34 : 56 }}>
                                        Roles
                                    </Typography>

                                    <SelectMenuItem id={"roles"} name={"roles"} defaultValue={email.roles} handleChangeInput={handleChangeInput} options={roles} />

                                </DivFlexStart>
                            </DivFlexSpaceBetween>
                        </FormControl>

                        <DivFlexStart sx={{ width: isMobile ? '100%' : '60%' }}>
                            <>
                                <Box sx={{ width: isMobile ? 34 : 56, mr: 2 }} />

                                {isEmailEmpty ? (
                                    <DivFlexStart>
                                        <ErrorIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5 }} />
                                        <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: FontFamily.EINA04REGULAR }} color={'#da1e28'}>
                                            Email is empty
                                        </Typography>
                                    </DivFlexStart>
                                ) : isEmailInvalid ? (
                                    <DivFlexStart>
                                        <ErrorIcon sx={{ color: '#da1e28', fontSize: isMobile ? 16 : 18, mr: 0.5 }} />
                                        <Typography sx={{ fontSize: isMobile ? 12 : 14, fontFamily: FontFamily.EINA04REGULAR }} color={'#da1e28'}>
                                            Email is invalid
                                        </Typography>
                                    </DivFlexStart>
                                ) : (<></>)
                                }
                            </>
                        </DivFlexStart>
                        <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                            <Typography sx={{ fontSize: isMobile ? 14 : 20, textDecoration: 'underline', fontFamily: FontFamily.EINA04SEMIBOLD, cursor: 'pointer', color: theme.palette.text.primary }} onClick={handleCloseDialogAddNewEmail} >
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