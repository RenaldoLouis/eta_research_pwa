import React, { useContext, useEffect, useState } from "react";
import { styled } from '@mui/system'

// import material UI
import { Typography, Grid, Dialog, Tabs, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import WarningComponent from "../../Components/WarningComponent/WarningComponent";


import DoneIcon from '@mui/icons-material/Done';

// import AppContext
import { AppContext } from "../../App";


// import reusable component
import DivFlexStart from "../../Components/ReusableComponents/DivFlexStart";
import DivFlexCenter from "../../Components/ReusableComponents/DivFlexCenter";
import { Navigate } from "react-router-dom";
import CustomDialog from "../../Components/ReusableComponents/CustomDialog";


// sticky div as button
const DeliverStickyTitle = styled('div')((props) => ({
    display: 'flex',
    position: 'fixed',
    alignItems: 'center',
    justifyContent: 'space-between',
    top: 56,
    width: '100%',
    height: 60,
    backgroundColor: props.theme.palette.background.default,
    zIndex: 1000
}));

// sticky div as button
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
    padding: '0px 20px 0px 22px'
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
    }

    // state for pass promo id to open the detail - desktop
    const [idPromoDialog, setIdPromoDialog] = useState('')

    const handleOpenPromoDialog = (promoId) => {
        setOpenPromoDialog(true)
        setIdPromoDialog(promoId)
    }


    // state for pass delivery id to open the detail  - desktop
    const [deliveryId, setDeliveryId] = useState(1)

    const handleClickDeliveryDesktop = (id) => {
        setDeliveryId(id)
    }


    return (
        <>
            {warning && (<WarningComponent isMobile={isMobile} />)}

            <Grid container mt={8}>
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
                                <div id='titleDeliveryPage'>
                                    {
                                        deliveryDumpData.every((v) => { return v.deliveryStatus == "Done" }) ? (
                                            <div style={{ padding: '0px 20px 0px 20px', marginTop: isDesktop ? 20 : undefined }}>
                                                <Typography fontSize={30} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                                    Your Delivery for {deliveryDumpData[0].date} is All <span> <DivFlexStart sx={{ color: theme.palette.text.highlightHeading1}}> <DoneIcon sx={{ fontSize: 30, mb:0.5 }} /> DONE</DivFlexStart> </span>
                                                </Typography>
                                            </div>
                                        ) : <div style={{ padding: '0px 20px 0px 20px', marginTop: isDesktop ? 20 : undefined }}>
                                            <Typography fontSize={30} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                                Good Morning! <br /> There are <span style={{ textDecoration: 'underline', fontFamily: 'Eina04-RegularItalic', color: theme.palette.text.highlithText }}>{deliveryDumpData.length}</span>  Today Delivery
                                            </Typography>
                                        </div>
                                    }
                                </div>

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
                                <div id='titleDeliveryPage'>
                                    <div style={{ padding: 20 }}>
                                        <Typography fontSize={32} color={theme.palette.text.heading1} sx={{ textTransform: 'capitalized', fontFamily: 'Eina04-Regular' }}>
                                            Good Morning! <br /> This is your Today Delivery
                                        </Typography>
                                    </div>
                                </div>
                            </>
                        )}

                        {deliveryDumpData.map((data, index) => (
                            <DivFlexCenter key={index} sx={{ mt: 2, }} onClick={() => handleClickDeliveryDesktop(data.id)} >
                                <DeliveryCard data={data} totalDelivery={deliveryDumpData.length} numberOfDeliver={index + 1} deliveryId={deliveryId} />
                            </DivFlexCenter>
                        ))}
                    </>
                </Grid>

                <Grid item xs={0} md={6} display={{ xs: 'none', md: 'block' }} bgcolor={{ md: theme.palette.background.deliveryCard }} padding={{ md: '20px 40px 0px 40px' }} >
                    <DivFlexCenter>
                        <DeliveryCard data={deliveryDumpData.filter(dumpDelivery => dumpDelivery.id == deliveryId)[0]} isOpenItemList={true} />
                    </DivFlexCenter>
                </Grid>

                <Grid item xs={12} md={3}>
                    <DivFlexStart id="promo" sx={{ padding: '0px 20px 0px 20px', mt: 3, mb: 2, display: isDesktop ? 'none' : '', scrollMarginTop: 142 }}>
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
                        <DivFlexCenter key={index} sx={{ mb: 2, mt: isMobile ? '' : 2 }} onClick={isDesktop ? () => handleOpenPromoDialog(promo.id) : undefined}>
                            <PromoCard promo={promo} openDetailPromo={false} isMobile={isDesktop ? false : true} removePadding={isDesktop ? !openPromoDialog : false} />
                        </DivFlexCenter>
                    ))}
                </Grid>

            </Grid>

            <CustomDialog open={openPromoDialog} onClose={handleClosePromoDialog} theme={theme}>
                <PromoCard openDetailPromo={true} promo={promoDumpData.filter(dumpPromo => dumpPromo.id == idPromoDialog)[0]} isDialog={true} />
            </CustomDialog>
        </>
    )
}


export default DeliveryPage