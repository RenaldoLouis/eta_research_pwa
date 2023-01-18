import React, { useContext, useState } from "react";

import { styled } from '@mui/system'

import { Typography, FormControl, TextField, Grid, Dialog, CircularProgress, Backdrop } from "@mui/material";

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

// import component
import LinkExpiredStatus from "../LinkExpiredStatus/LinkExpiredStatus";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import PromoCard from "../PromoCard/PromoCard";
import TextFieldStyled from "../ReusableComponents/TextFieldStyle";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";
import CustomDialog from "../ReusableComponents/CustomDialog";


// Root for input tracking number component
const RootInputTrackingNumber = styled('div')((props) => ({
    backgroundImage: !props.isLinkExpired ? `url(${props.dumpMap})` : '',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    paddingTop: props.isLinkExpired ? 5 : 120,
    paddingBottom: props.isMobile ? 70 : '',
    // marginBottom: 20,
    opacity: props.mode == 'dark' ? 0.5 : undefined,
    height: props.isMobile ? 400 : '100vh'
}))

// warning component
const Warning = styled('div')((props) => ({
    width: props.isMobile ? 'calc(100% - 10%)' : 'calc(100% - 6%)',
    padding: 10,
    backgroundColor: '#af1d1d',
    marginTop: 25
}));

// input tracking number component
const TrackingNumberInput = styled('div')((props) => ({
    position: 'absolute',
    left: 0,
    right: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    top: props.isMobile ? 100 : 150
}));

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
        // jumpToDeliveryPage()
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
        if(promoDetail != promoLength-1){
            setPromoDetail(promoDetail + 1)

            console.log(`${promoDetail} of ${promoLength}`)
        }
    }

    const handlePrevPromoDetail = (promoLength) => {
        if(promoDetail > 0){
            setPromoDetail(promoDetail - 1)

            console.log(`${promoDetail} of ${promoLength}`)
        }
    }




    return (
        <>
            <RootInputTrackingNumber isLinkExpired={isLinkExpired} dumpMap={dumpMap} isMobile={isMobile} mode={mode} >
            </RootInputTrackingNumber>
            <TrackingNumberInput isMobile={isMobile}>
                {
                    isLinkExpired &&
                    <LinkExpiredStatus isMobile={isMobile} />
                }
                <DivFlexCenter sx={{}}>
                    <DivFlexSpaceBetween sx={{ width: isMobile ? '90%' : 700, border: '1px solid #979797', padding: '50px 10px 50px 40px', flexWrap: 'wrap', backgroundColor: theme.palette.background.dialog, borderColor: theme.palette.background.borderTrackingNumber, }}>
                        <DivFlexStart sx={{ width: isMobile ? '100%' : '20%' }}>
                            <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-SemiBold', }}>
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
                        <DivFlexCenter sx={{ width: isMobile ? '7%' : '5%' }}>
                            {isLoading && <CircularProgress size={isMobile ? '20px' : '30px'} sx={{ color: theme.palette.background.buttonSecondary }} />}
                        </DivFlexCenter>


                        {warning &&
                            <Warning isMobile={isMobile}>
                                <DivFlexCenter >
                                    <ErrorOutlineIcon style={{ color: '#959499', width: 26, height: 26, marginRight: 10 }} />
                                    <Typography sx={{ color: '#ffffff', fontSize: 12, fontFamily: 'Eina04-SemiBold' }}>
                                        {`Sorry your tracking attempt was not succesfull. Please check your tracking number.`}
                                    </Typography>
                                </DivFlexCenter>
                            </Warning>
                        }

                    </DivFlexSpaceBetween>
                </DivFlexCenter>
                {isDesktop &&
                    <div style={{ width: '100%', height: '', backgroundColor: theme.palette.background.default, position: 'fixed', bottom: 0, padding: '32px 40px' }}>
                        <Grid container >
                            {promoDumpData.slice(0, 3).map((promo, index) => (
                                <Grid item md={4} key={promo.id} >
                                    <DivFlexCenter sx={{}} onClick={() => handleOpenPromoDialog(index)} >
                                        <PromoCard promo={promo} openDetailPromo={false} trackingNumberPage={true} />
                                    </DivFlexCenter>
                                </Grid>
                            ))}
                        </Grid>
                    </div>}
            </TrackingNumberInput>

            {isMobile && (
                <div style={{ marginTop: 24 }}>
                    {promoDumpData.slice(0, 3).map((promo, index) => (
                        <DivFlexCenter key={promo.id} sx={{ mb: 3, mt: isMobile ? '' : 2 }}>
                            <PromoCard promo={promo} openDetailPromo={false} isMobile={isDesktop ? false : true} removePadding={isDesktop ? !openPromoDialog : false} />
                        </DivFlexCenter>
                    ))}
                </div>
            )}

            {/* <CustomDialog open={openPromoDialog} onClose={handleClosePromoDialog} theme={theme}>
                <div style={{ position: 'fixed', width: 600 }} >
                    <div style={{ float: 'right' }}>
                        <DivFlexCenter style={{ backgroundColor: 'rgba(26, 25, 25, 0.4)', padding: 4, marginTop: 8, marginRight: 8, borderRadius: '50%', cursor: 'pointer' }}>
                            <CloseIcon onClick={handleClosePromoDialog} style={{ color: '#ffffff', fontSize: 20 }} />
                        </DivFlexCenter>
                    </div>

                </div>
                <PromoCard openDetailPromo={true} promo={promoDumpData.filter(dumpPromo => dumpPromo.id == idPromoDialog)[0]} isDialog={true} />
            </CustomDialog> */}
            <Backdrop open={openPromoDialog} style={{ backdropFilter: "blur(18px)" }}>
                <DivFlexSpaceBetween>
                    <div style={{ paddingRight: 80 }} onClick={() => handlePrevPromoDetail(promoDumpData.length)}>
                        <ArrowBackIosIcon style={{ color: '#f4f4f4', fontSize: 40, cursor:'pointer' }} />
                    </div>
                    <div style={{ width: 600 }}>
                        <div style={{ position: 'fixed', width: 600 }} >
                            <div style={{ float: 'right' }}>
                                <DivFlexCenter style={{ backgroundColor: 'rgba(26, 25, 25, 0.4)', padding: 4, marginTop: 8, marginRight: 8, borderRadius: '50%', cursor: 'pointer' }}>
                                    <CloseIcon onClick={handleClosePromoDialog} style={{ color: '#ffffff', fontSize: 20 }} />
                                </DivFlexCenter>
                            </div>

                        </div>
                        <PromoCard openDetailPromo={true} promo={promoDumpData[promoDetail]} isDialog={true} />

                    </div>
                    <div style={{ paddingLeft: 80 }} onClick={() => handleNextPromoDetail(promoDumpData.length)}>
                        <ArrowForwardIosIcon style={{ color: '#f4f4f4', fontSize: 40, cursor:'pointer' }} />
                    </div>
                </DivFlexSpaceBetween>
            </Backdrop>
        </>
    )
}

export default InputTrackingNumber