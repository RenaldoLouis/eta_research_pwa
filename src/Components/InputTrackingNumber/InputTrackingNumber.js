import React, { useContext, useState } from "react";

import { styled } from '@mui/system'

import { Typography, FormControl, TextField, Grid, Dialog, CircularProgress } from "@mui/material";

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

// import dummy map
import dumpMap from '../../../src/assets/Images/dumpMap.png'

// import component
import LinkExpiredStatus from "../LinkExpiredStatus/LinkExpiredStatus";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import PromoCard from "../PromoCard/PromoCard";
import TextFieldStyled from "../ReusableComponents/TextFieldStyle";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";


// Root for input tracking number component
const RootInputTrackingNumber = styled('div')((props) => ({
    backgroundImage: !props.isLinkExpired ? `url(${props.dumpMap})` : '',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    paddingTop: props.isLinkExpired ? 5 : 120,
    paddingBottom: props.isMobile ? 70 : 220,
    marginBottom: 20,
    opacity: props.mode == 'dark' ? 0.5 : undefined,
    height: props.isMobile? 400 : 600
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
    position:'absolute', 
    left:0, 
    right:0, 
    marginLeft:'auto', 
    marginRight:'auto',
    top:props.isMobile? 100 :150
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

    const handleOpenPromoDialog = (promoId) => {
        setOpenPromoDialog(true)
        setIdPromoDialog(promoId)
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
                                <TextFieldStyled id="inputTrackingNumber" placeholder="Up to 12 codes" onChange={handleChangeInput} warning={warning} theme={theme} />
                            </FormControl>
                        </DivFlexStart>
                        <ButtonSecondary onClick={onClickSubmit} sx={{ width: isMobile ? '25%' : '30%' }} >
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
            </TrackingNumberInput>

            {
                isDesktop ? (
                    <>
                        <Grid container>
                            {promoDumpData.map((promo, index) => (
                                <Grid item md={4} key={promo.id} >
                                    <DivFlexCenter sx={{ mt: 2 }} onClick={() => handleOpenPromoDialog(promo.id)} >
                                        <PromoCard promo={promo} openDetailPromo={false} isMobile={isDesktop ? false : true} removePadding={isDesktop ? !openPromoDialog : false} />
                                    </DivFlexCenter>
                                </Grid>
                            ))}
                        </Grid>
                    </>
                ) : (
                    <>
                        {promoDumpData.map((promo, index) => (
                            <DivFlexCenter key={promo.id} sx={{ mb: 2, mt: isMobile ? '' : 2 }}>
                                <PromoCard promo={promo} openDetailPromo={false} isMobile={isDesktop ? false : true} removePadding={isDesktop ? !openPromoDialog : false} />
                            </DivFlexCenter>
                        ))}
                    </>
                )
            }
            <Dialog open={openPromoDialog} onClose={handleClosePromoDialog}>
                <PromoCard openDetailPromo={true} promo={promoDumpData.filter(dumpPromo => dumpPromo.id == idPromoDialog)[0]} isDialog={true} />
            </Dialog>
        </>
    )
}

export default InputTrackingNumber