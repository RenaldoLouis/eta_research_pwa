import React, { useContext, useState, useEffect } from "react";

// import material UI
import { Typography, TextField, FormControl, MenuItem, Box } from "@mui/material";

// import icon
import ErrorIcon from "../../assets/icons/ErrorIcon";

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import component
import DivFlexStart from "../DivFlexStart";
import DivFlexCenter from "../DivFlexCenter";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import CustomDialog from "./DialogContainer/CustomDialog";
import CustomDialogContent from "./DialogContainer/CustomDialogContent";
import TextFieldStyled from "../TextField/TextFieldStyle";
import Button from "../Button";
import SelectMenuItem from "./SelectMenuItem/SelectMenuItem";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";


// import style and theme
import { useTheme } from "@mui/material/styles";

const EditEmailDialog = () => {

    const { isMobile, handleCloseNewEmailDialog, editEmailDialog, currentEmail, editNewEmail, handleCloseEditEmailDialog, isDesktop } = useContext(AppContext)

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
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <CustomDialogContent isMobile={isMobile}>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 40, marginBottom: isMobile ? 3 : 8 }}>
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: FontFamily.EINA04REGULAR }}>
                                Edit Email
                            </Typography>
                        </DivFlexCenter>
                        <FormControl sx={{ width: '100%' }} >
                            <DivFlexSpaceBetween sx={{ flexWrap: 'wrap', width: '100%', }}>
                                <DivFlexStart sx={{ width: isDesktop ? '60%' : '100%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: FontFamily.EINA04SEMIBOLD, mr: 2, color: theme.palette.text.primary, width: isMobile ? 34 : 56 }}>
                                        Email
                                    </Typography>
                                    <TextFieldStyled onChange={handleChangeInput} id="basic" placeholder="" name="email" sx={{ width: isDesktop ? '80%' : '100%' }} value={email.email} isMobile={isMobile} />
                                </DivFlexStart>

                                <DivFlexStart sx={{ width: isDesktop ? '35%' : '100%', mb: 2 }}>
                                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: FontFamily.EINA04SEMIBOLD, mr: 2, color: theme.palette.text.primary, width: isMobile ? 34 : 56 }}>
                                        Roles
                                    </Typography>

                                    <SelectMenuItem email={email} handleChangeInput={handleChangeInput} />

                                </DivFlexStart>

                            </DivFlexSpaceBetween>
                        </FormControl>

                        <DivFlexStart sx={{ width: isMobile ? '100%' : '60%' }}>
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
                        </DivFlexStart>

                        <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 5 }}>
                            <Typography sx={{ fontSize: isMobile ? 14 : 20, textDecoration: 'underline', fontFamily: FontFamily.EINA04SEMIBOLD, cursor: 'pointer', color: theme.palette.text.primary }} onClick={handleCloseDialog} >
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


export default EditEmailDialog