import React, { useContext, useEffect, useState } from "react";
import { styled } from '@mui/system'

// import material UI
import { Typography, Grid, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Backdrop } from "@mui/material";


// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";


// import Icon
// import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import DoneIcon from "../../assets/icons/DoneIcon";


// import AppContext
import { AppContext } from "../../App";


// import reusable component
import DivFlexStart from "../../Components/ReusableComponents/DivFlexStart";
import DivFlexCenter from "../../Components/ReusableComponents/DivFlexCenter";
import DivFlexEnd from "../../Components/ReusableComponents/DivFlexEnd";
import DivFlexSpaceBetween from "../../Components/ReusableComponents/DivFlexSpacebetween";


// delivery title div as button
const DeliverStickyTitle = styled('div')((props) => ({
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 56,
    width: '100%',
    height: 60,
    backgroundColor: props.theme.palette.background.default,
    zIndex: 1000,
}));

// promo title div as button
const PromoStickyTitle = styled('div')((props) => ({
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 115.5,
    width: '100%',
    height: 60,
    backgroundColor: props.theme.palette.background.default,
    borderTop: '1px solid #979797',
    zIndex: 1000,
    padding: '0px 24px'
}));



const DeliveryPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const { isMobile, warning, promoDumpData, deliveryDumpData, scrollDown, scrollToTop, isDesktop, goToPromo, isScrollToPromo } = useContext(AppContext)

    // state for open promo dialog for desktop
    const [openPromoDialog, setOpenPromoDialog] = useState(false)

    const handleClosePromoDialog = () => {
        setOpenPromoDialog(false)
        // setIsLastPromo(false)
        setPromoDetail(0)
    }

    // state for pass promo id to open the detail - desktop
    const [idPromoDialog, setIdPromoDialog] = useState('')

    const [promoDetail, setPromoDetail] = useState(0)

    const [isLastPromo, setIsLastPromo] = useState(false)

    const [isFirstPromo, setIsFirstPromo] = useState(false)


    const handleOpenPromoDialog = (promoId) => {
        setOpenPromoDialog(true)
        // setIdPromoDialog(promoId)

        setPromoDetail(promoId)
        console.log(promoId)

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

    useEffect(() => {
        if (promoDetail == promoDumpData.length - 1) {
            setIsLastPromo(true)
        } else {
            setIsLastPromo(false)
        }

        if(promoDetail == 0){
            setIsFirstPromo(true)
        } else {
            setIsFirstPromo(false)
        }

    }, [promoDetail])


    // state for pass delivery id to open the detail  - desktop
    const [deliveryId, setDeliveryId] = useState(1)

    const handleClickDeliveryDesktop = (id) => {
        setDeliveryId(id)
    }


    return (
        <>
            <Grid container sx={{ pl: isDesktop ? 5 : '', pr: isDesktop ? 5 : '', marginTop: '58px' }}>
                <Grid item xs={12} md={3} id="deliverSection">
                    <>
                        {deliveryDumpData.length > 1 ? (
                            <>
                                {scrollDown && !isDesktop && (
                                    <DeliverStickyTitle sx={{ pl: 3, pr: 3, }} onClick={scrollToTop}  >
                                        <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                            Today Delivery
                                        </Typography>
                                        <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular', textDecoration: 'underline' }} >
                                            {deliveryDumpData.length}
                                        </Typography>
                                    </DeliverStickyTitle>

                                )}
                                <Box id='titleDeliveryPage'>
                                    {
                                        deliveryDumpData.every((v) => { return v.deliveryStatus == "Done" }) ? (
                                            <DivFlexStart sx={{ padding: isDesktop ? '' : '24px 24px 0px 24px', mt: isDesktop ? 3 : undefined }}>
                                                <Typography fontSize={30} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                                    Your Delivery <br /> for {deliveryDumpData[0].date} <br /> is All <span style={{ color: theme.palette.text.highlightHeading1 }}>  <DoneIcon sx={{ height: 28, width: 32, mr: -1.5, mt:0.5 }} color= {theme.palette.text.highlightHeading1} /> DONE </span>
                                                </Typography>
                                            </DivFlexStart>
                                        ) : <DivFlexStart sx={{ padding: isDesktop ? '' : '24px 24px 0px 24px', mt: isDesktop ? 3 : undefined }}>
                                            <Typography fontSize={30} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                                Good Morning! <br /> There are <span style={{ textDecoration: 'underline', fontFamily: 'Eina04-RegularItalic', color: theme.palette.text.highlithText }}>{deliveryDumpData.length}</span> <br />  Today's Delivery
                                            </Typography>
                                        </DivFlexStart>
                                    }
                                </Box>

                            </>
                        ) : (
                            <>
                                {scrollDown && !isDesktop && (
                                    <DeliverStickyTitle sx={{ pl: 3, pr: 3, }} onClick={scrollToTop}  >
                                        <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                            Today Delivery
                                        </Typography>
                                        <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular', textDecoration: 'underline' }} >
                                            {deliveryDumpData.length}
                                        </Typography>
                                    </DeliverStickyTitle>

                                )}
                                <Box id='titleDeliveryPage'>
                                    <DivFlexStart sx={{ padding: isDesktop ? '' : '24px 24px 0px 24px' }}>
                                        <Typography fontSize={32} color={theme.palette.text.heading1} sx={{ textTransform: 'capitalized', fontFamily: 'Eina04-Regular' }}>
                                            Good Morning! <br /> This is your Today Delivery
                                        </Typography>
                                    </DivFlexStart>
                                </Box>
                            </>
                        )}

                        {deliveryDumpData.map((data, index) => (
                            <DivFlexCenter key={index} sx={{ mt: 2, pr: isDesktop ? 3 : '' }} onClick={() => handleClickDeliveryDesktop(data.id)} >
                                <DeliveryCard data={data} totalDelivery={deliveryDumpData.length} numberOfDeliver={index + 1} deliveryId={deliveryId} />
                            </DivFlexCenter>
                        ))}
                    </>
                </Grid>

                <Grid item xs={0} md={6} display={{ xs: 'none', md: 'block' }} bgcolor={{ md: theme.palette.background.deliveryCard }} padding={{ md: '16px 80px 0px 80px' }} >
                    <DivFlexCenter>
                        <DeliveryCard data={deliveryDumpData.filter(dumpDelivery => dumpDelivery.id == deliveryId)[0]} isOpenItemList={true} />
                    </DivFlexCenter>
                </Grid>

                <Grid item xs={12} md={3} sx={{ paddingTop: isMobile ? '' : 3 }}>
                    <DivFlexStart id="promo" sx={{ padding: isDesktop ? '' : '0px 24px', mt: 3, mb: 2, display: isDesktop ? 'none' : '', scrollMarginTop: 142 }}>
                        <Typography fontSize={32} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular', }}>
                            Promo and News
                        </Typography>
                    </DivFlexStart>
                    {isScrollToPromo && (
                        <PromoStickyTitle onClick={goToPromo} >
                            <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                Promo and News
                            </Typography>
                        </PromoStickyTitle>
                    )}

                    {promoDumpData.map((promo, index) => (
                        <DivFlexCenter key={index} sx={{ mb: 2, pl: isDesktop ? 3 : '' }} onClick={isDesktop ? () => handleOpenPromoDialog(index) : undefined}>
                            <PromoCard promo={promo} openDetailPromo={false} isMobile={isDesktop ? false : true} removePadding={isDesktop ? !openPromoDialog : false} />
                        </DivFlexCenter>
                    ))}
                </Grid>
            </Grid>

            <Backdrop open={openPromoDialog} sx={{ backdropFilter: "blur(18px)" }}>
                <DivFlexSpaceBetween>
                    <Box sx={{ pr: 10 }} onClick={() => handlePrevPromoDetail(promoDumpData.length)}>
                        <ArrowBackIosIcon sx={{ color: isFirstPromo ? '#F4F4F466' : '#f4f4f4', fontSize: 40, cursor: isFirstPromo ? 'default' : 'pointer' }} />
                    </Box>
                    <Box sx={{ width: 600 }}>
                        <Box sx={{ position: 'fixed', width: 600 }} >
                            <Box sx={{ float: 'right' }}>
                                <DivFlexCenter sx={{ backgroundColor: 'rgba(26, 25, 25, 0.4)', padding: 0.5, marginTop: 2, marginRight: 2, borderRadius: '50%', cursor: 'pointer' }}>
                                    <CloseIcon onClick={handleClosePromoDialog} sx={{ color: '#ffffff', fontSize: 20 }} />
                                </DivFlexCenter>
                            </Box>
                        </Box>
                        <PromoCard openDetailPromo={true} promo={promoDumpData[promoDetail]} isDialog={true} />
                    </Box>
                    <Box sx={{ pl: 10 }} onClick={() => handleNextPromoDetail(promoDumpData.length)}>
                        <ArrowForwardIosIcon sx={{ color: isLastPromo ? '#F4F4F466' : '#f4f4f4', fontSize: 40, cursor: isLastPromo ? 'default' : 'pointer' }} />
                    </Box>
                </DivFlexSpaceBetween>
            </Backdrop>
        </>
    )
}


export default DeliveryPage