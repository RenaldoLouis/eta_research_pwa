import React, { useContext, useEffect, useState } from "react";
import { styled } from '@mui/system'

// import material UI
import { Typography, Grid, Dialog, Tabs, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import WarningComponent from "../../Components/WarningComponent/WarningComponent";
import DoneDeliveryStatus from "../../Components/DoneDeliveryStatus/DoneDeliveryStatus";
import LinkExpiredStatus from "../../Components/LinkExpiredStatus/LinkExpiredStatus";

// import AppContext
import { AppContext } from "../../App";


// import reusable component
import DivFlexStart from "../../Components/ReusableComponents/DivFlexStart";
import DivFlexCenter from "../../Components/ReusableComponents/DivFlexCenter";


const DeliveryPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const { isMobile, warning, promoDumpData, deliveryDumpData, isLinkExpired, historyStack, setHistoryStack, scrollDown, scrollToTop, isDesktop, goToPromo, isScrollToPromo } = useContext(AppContext)

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

    // styled component
    const DeliverStickyTitle = styled('div')((props) => ({
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 56,
        width: '100%',
        height: 60,
        backgroundColor: props.theme.palette.background.default,
        // borderBottom: '1px solid #979797',
        zIndex: 1000
    }));

    const PromoStickyTitle = styled('div')((props) => ({
        display: 'flex',
        position: 'fixed',
        alignItems: 'center',
        justifyContent: 'space-between',
        top: 115.5,
        width: '100%',
        height: 60,
        backgroundColor: props.theme.palette.background.default,
        // borderBottom: '1px solid #979797',
        borderTop: '1px solid #979797',
        zIndex: 1000,
        padding: '0px 20px 0px 22px'
    }));

    return (
        <>
            {warning && (<WarningComponent isMobile={isMobile} />)}

            <div style={{ marginTop: 70 }}>
                <Grid container sx={{ mb: 4 }}>
                    <Grid item xs={12} md={4} id="deliverSection">
                        {isLinkExpired ? (<LinkExpiredStatus isMobile={isMobile} />) :
                            (
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

                                            <div style={{ padding: '0px 20px 0px 20px', marginTop: isDesktop ? 20 : undefined }}>
                                                <Typography fontSize={30} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                                    Good Morning! There are <span style={{ textDecoration: 'underline', fontFamily: 'Eina04-RegularItalic' }}>{deliveryDumpData.length}</span>  Today Delivery
                                                </Typography>
                                                {/* <button onClick={goToPromo}>GO to promo</button> */}
                                            </div>
                                        </>
                                    ) : (
                                        <div style={{ padding: 20 }}>
                                            <Typography fontSize={32} color={theme.palette.text.heading1} sx={{ textTransform: 'capitalized' }}>
                                                Good Morning! This is your Today Delivery
                                            </Typography>
                                        </div>
                                    )}

                                    {
                                        deliveryDumpData.every((v) => { return v.tourStatus == "Done" }) ? (
                                            <DoneDeliveryStatus isMobile={true} />
                                        ) : <></>
                                    }
                                    {deliveryDumpData.map((data, index) => (
                                        <DivFlexCenter key={index} sx={{ mt: 2, display: isDesktop && deliveryDumpData.length <= 1 ? 'none' : undefined }} onClick={() => handleClickDeliveryDesktop(data.id)} >
                                            <DeliveryCard data={data} totalDelivery={deliveryDumpData.length} numberOfDeliver={index + 1} deliveryId={deliveryId}  />
                                        </DivFlexCenter>
                                    ))}
                                </>
                            )}
                    </Grid>
                    <Grid item xs={0} md={5} display={{ xs: 'none', md: 'block' }}>
                        <DivFlexCenter>
                            <DeliveryCard data={deliveryDumpData.filter(dumpDelivery => dumpDelivery.id == deliveryId)[0]} isOpenItemList={true} />
                        </DivFlexCenter>
                    </Grid>
                    <Grid item xs={12} md={3}>
                        <DivFlexStart id="promo" sx={{ pl: 2, pr: 2, mt: 3, mb: 2, display: isDesktop ? 'none' :'', scrollMarginTop: 142 }}>
                            <Typography fontSize={32} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular', }}>
                                Promo and News
                            </Typography>
                        </DivFlexStart>
                        {isScrollToPromo && deliveryDumpData.length > 1 && (
                            <PromoStickyTitle onClick={goToPromo} >
                                <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-Regular' }} >
                                    Promo and News
                                </Typography>
                            </PromoStickyTitle>
                        )}

                        {promoDumpData.map((promo, index) => (
                            <DivFlexCenter key={index} sx={{ mt: 2 }} onClick={isDesktop ? () => handleOpenPromoDialog(promo.id) : undefined}>
                                <PromoCard promo={promo} openDetailPromo={false} isMobile={isDesktop ? false : true} removePadding={isDesktop ? !openPromoDialog : false}  />
                            </DivFlexCenter>
                        ))}
                    </Grid>
                </Grid>
            </div>
            <Dialog open={openPromoDialog} onClose={handleClosePromoDialog}>
                <div style={{ width: 412 }}>
                    <PromoCard openDetailPromo={true} promo={promoDumpData.filter(dumpPromo => dumpPromo.id == idPromoDialog)[0]} isDesktop={true} />
                </div>
            </Dialog>
        </>
    )
}


export default DeliveryPage