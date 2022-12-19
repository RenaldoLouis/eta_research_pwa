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


// Root for input tracking number component
const RootInputTrackingNumber = styled('div')((props) => ({
    backgroundImage: !props.isLinkExpired ? `url(${props.dumpMap})` : '',
    backgroundSize: '100% 100%',
    backgroundRepeat: 'no-repeat',
    paddingTop: props.isLinkExpired ? 5 : 120,
    paddingBottom: 220
}))

// warning component
const Warning = styled('div')((props) => ({
    width: '100%',
    padding: 10,
    backgroundColor: '#af1d1d',
    marginTop: 25
}));

const InputTrackingNumber = () => {

    const { isLinkExpired, isMobile, promoDumpData, isDesktop } = useContext(AppContext)

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

    const onClick = () => {
        navigate("/delivery")
    } 

    const onClickSubmit = () => {
        // navigate("/delivery")
        // setIsLoading(true)
        // setTimeout(() => {
        //     if (searchTrackingNumber == '123456890AB') {
        //         setWarning(false)
        //     } else {
        //         setWarning(true)
        //     }
        //     setIsLoading(false)
        // }, 1000);
        onClick()
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
            <RootInputTrackingNumber isLinkExpired={isLinkExpired} dumpMap={dumpMap} >
                {
                    isLinkExpired &&
                    <LinkExpiredStatus isMobile={isMobile} />
                }
                <DivFlexCenter sx={{}}>
                    <DivFlexSpaceBetween sx={{ width: isMobile ? '90%' : 700, border: '1px solid #979797', padding: 4, flexWrap: 'wrap', backgroundColor: '#ffffff' }}>
                        <DivFlexStart sx={{ width: isMobile ? '100%' : '20%' }}>
                            <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-SemiBold', }}>
                                Tracking Number
                            </Typography>
                        </DivFlexStart>
                        <DivFlexStart sx={{ width: isMobile ? !isLoading ? '65%' : '50%' : '40%' }} >
                            <FormControl sx={{ width: '100%' }}>
                                <TextField id="basic" placeholder="Up to 12 codes" onChange={handleChangeInput} sx={{ input: { fontSize: 14, fontFamily: 'Eina04-Regular' } }} />
                            </FormControl>
                        </DivFlexStart>
                        <ButtonSecondary onClick={onClickSubmit} sx={{ width: '30%' }} >
                            <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                                Track
                            </Typography>
                        </ButtonSecondary>
                        {isLoading && <CircularProgress sx={{ color: "black", width: '2%' }} />}

                        {warning &&
                            <Warning >
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
            </RootInputTrackingNumber>
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
                            <DivFlexCenter key={promo.id} sx={{ mt: 2 }}>
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