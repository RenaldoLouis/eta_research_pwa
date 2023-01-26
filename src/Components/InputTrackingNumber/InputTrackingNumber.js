import React, { useContext, useState } from "react";

import { styled } from '@mui/system'

import { Typography, FormControl, TextField, Grid, Dialog, CircularProgress, Backdrop, Box } from "@mui/material";

// Lottie Animation
import Lottie from "react-lottie";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";

// import reusbale component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import ButtonSecondary from "../ReusableComponents/ButtonSecondary";

import { useNavigate } from "react-router-dom";

// import appcontext
import { AppContext } from "../../App";

// import icon
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';



// import dummy map
import dumpMap from '../../../src/assets/Images/dumpMap.png'

// import animation assets
import lightModeAnimation from '../../../src/assets/animations/Light Mode_Fixed.json'
import darkModeAnimation from '../../../src/assets/animations/Dark Mode_Fixed.json'

// import component
import LinkExpiredStatus from "../LinkExpiredStatus/LinkExpiredStatus";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import PromoCard from "../PromoCard/PromoCard";
import TextFieldStyled from "../ReusableComponents/TextFieldStyle";




// warning component
const Warning = styled('div')((props) => ({
    width: props.isMobile ? 'calc(100% - 11.5%)' : 'calc(100% - 6.5%)',
    padding: 10,
    backgroundColor: '#DA1E28',
    marginTop: 25,
}));


// input tracking number component
const InputTrackingNumberContainer = styled('div')((props) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: props.isDesktop ? 680 : '100%',
    marginTop: props.isDesktop ? 56 : 16,
    border: `1px solid ${props.theme.palette.background.borderTrackingNumber}`,
    padding: props.isDesktop ? '48px 24px 48px 40px' : '24px 8px 24px 24px',
    flexWrap: 'wrap',
    backgroundColor: props.theme.palette.background.dialog,
}))




const InputTrackingNumber = () => {

    const { isLinkExpired, isMobile, promoDumpData, isDesktop, mode } = useContext(AppContext)

    const theme = useTheme()

    // const input search
    const [searchTrackingNumber, setSearchTrackingNumber] = useState('')
    const handleChangeInput = (e) => {
        setSearchTrackingNumber(e.target.value)
    }

    // loading submit search tracking number
    const [isLoading, setIsLoading] = useState(false)

    // state warning
    const [warning, setWarning] = useState(false)


    let navigate = useNavigate();

    const jumpToDeliveryPage = () => {
        navigate("/delivery")
    }

    const onClickSubmit = () => {
        setIsLoading(true)
        setTimeout(() => {
            if (searchTrackingNumber == '123456890AB') {
                setWarning(false)
                jumpToDeliveryPage()
                setSearchTrackingNumber('')
            } else {
                setWarning(true)
            }
            setIsLoading(false)
        }, 1000);
    }


    // state for open promo dialog for desktop
    const [openPromoDialog, setOpenPromoDialog] = useState(false)

    const handleClosePromoDialog = () => {
        setOpenPromoDialog(false)
    }

    // state for pass promo id to open the detail - desktop
    const [idPromoDialog, setIdPromoDialog] = useState('')

    const [promoDetail, setPromoDetail] = useState(0)

    const handleOpenPromoDialog = (promoId) => {
        setOpenPromoDialog(true)
        // setIdPromoDialog(promoId)
        setPromoDetail(promoId)

    }

    const handleNextPromoDetail = (promoLength) => {
        if (promoDetail != promoLength - 1) {
            setPromoDetail(promoDetail + 1)

            console.log(`${promoDetail} of ${promoLength}`)
        }
    }

    const handlePrevPromoDetail = (promoLength) => {
        if (promoDetail > 0) {
            setPromoDetail(promoDetail - 1)

            console.log(`${promoDetail} of ${promoLength}`)
        }
    }

    // Light Mode Animation
    const lightAnimation = {
        loop: true,
        autoplay: true,
        animationData: lightModeAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    const darkAnimation = {
        loop: true,
        autoplay: true,
        animationData: darkModeAnimation,
        rendererSettings: {
            preserveAspectRatio: "xMidYMid slice"
        }
    }

    return (
        <>
            <Grid container sx={{ pt: '58px' }}>
                <Grid item xs={12} md={9} sx={{ pl: isDesktop ? 5 : 3, pr: 3, }}>
                    {
                        isLinkExpired ?
                            <LinkExpiredStatus /> :
                            <Typography fontSize={isMobile ? 32 : 32} sx={{ width: '100%', fontFamily: 'Eina04-Regular', mt: isDesktop ? 15 : 3, color: theme.palette.text.tex4 }}>
                                Please insert your tracking number
                            </Typography>
                    }
                    <InputTrackingNumberContainer isDesktop={isDesktop} theme={theme}>
                        <DivFlexStart sx={{ width: isMobile ? '100%' : '20%' }}>
                            <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-SemiBold', mb: isDesktop ? '' : 1 }}>
                                Tracking Number
                            </Typography>
                        </DivFlexStart>
                        <DivFlexStart sx={{ width: isMobile ? '60%' : '40%' }} >
                            <FormControl sx={{ width: '100%' }}>
                                <TextFieldStyled id="inputTrackingNumber" placeholder="Up to 12 codes" onChange={handleChangeInput} warning={warning} theme={theme} sx={{ input: { fontSize: 14, height: isMobile ? 5 : 14 } }} />
                            </FormControl>
                        </DivFlexStart>
                        <ButtonSecondary onClick={onClickSubmit} sx={{ width: isMobile ? '25%' : '30%', height: isMobile ? 38 : 46 }} >
                            <Typography sx={{ color: theme.palette.text.buttonSecondary, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                                Track
                            </Typography>
                        </ButtonSecondary>
                        <DivFlexCenter sx={{ width: isMobile ? '8%' : '5%' }}>
                            {isLoading && <CircularProgress size={isMobile ? '20px' : '30px'} sx={{ color: theme.palette.background.buttonSecondary }} />}
                        </DivFlexCenter>

                        {warning &&
                            <Warning isMobile={isMobile} >
                                <DivFlexCenter >
                                    <ErrorOutlineIcon sx={{ color: '#FF8389', width: 26, height: 26, marginRight: 1 }} />
                                    <Typography sx={{ color: '#ffffff', fontSize: 12, fontFamily: 'Eina04-SemiBold' }}>
                                        {`Sorry your tracking attempt was not succesfull. Please check your tracking number.`}
                                    </Typography>
                                </DivFlexCenter>
                            </Warning>
                        }

                    </InputTrackingNumberContainer>
                </Grid>

                <Grid item xs={12} md={3} sx={{ zIndex: 10, pl: isDesktop ? 1 : '', mt: isDesktop ? '' : 5 }} >
                    <Box sx={{ height: isDesktop ? 'calc(100vh - 58px)' : '', overflowY: isDesktop ? 'scroll' : '', pt: 3, pr: isDesktop ? 5 : '' }}>
                        {promoDumpData.map((promo, index) => (
                            <DivFlexCenter key={index} sx={{ mb: 3 }} onClick={isDesktop ? () => handleOpenPromoDialog(index) : undefined}>
                                <PromoCard promo={promo} openDetailPromo={false} isMobile={isDesktop ? false : true} removePadding={isDesktop ? !openPromoDialog : false} />
                            </DivFlexCenter>
                        ))}
                    </Box>
                </Grid>

            </Grid>

            {isDesktop
                && <Box sx={{ width: '100%', position: 'absolute', bottom: 0, paddingBottom: 0, lineHeight: 0 }}>
                    <Lottie options={mode == 'light' ? lightAnimation : darkAnimation} />
                </Box>
            }

            <Backdrop open={openPromoDialog} sx={{ backdropFilter: "blur(18px)", zIndex: 1000 }}>
                <DivFlexSpaceBetween>
                    <Box sx={{ pr: 10 }} onClick={() => handlePrevPromoDetail(promoDumpData.length)}>
                        <ArrowBackIosIcon sx={{ color: '#f4f4f4', fontSize: 40, cursor: 'pointer' }} />
                    </Box>
                    <Box sx={{ width: 600 }}>
                        <Box sx={{ position: 'fixed', width: 600 }} >
                            <Box sx={{ float: 'right' }}>
                                <DivFlexCenter sx={{ backgroundColor: 'rgba(26, 25, 25, 0.4)', padding: 0.5, marginTop: 1, marginRight: 1, borderRadius: '50%', cursor: 'pointer' }}>
                                    <CloseIcon onClick={handleClosePromoDialog} sx={{ color: '#ffffff', fontSize: 20 }} />
                                </DivFlexCenter>
                            </Box>
                        </Box>
                        <PromoCard openDetailPromo={true} promo={promoDumpData[promoDetail]} isDialog={true} />
                    </Box>
                    <Box sx={{ pl: 10 }} onClick={() => handleNextPromoDetail(promoDumpData.length)}>
                        <ArrowForwardIosIcon sx={{ color: '#f4f4f4', fontSize: 40, cursor: 'pointer' }} />
                    </Box>
                </DivFlexSpaceBetween>
            </Backdrop>
        </>
    )
}

export default InputTrackingNumber