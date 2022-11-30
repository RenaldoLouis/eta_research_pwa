import React, { useContext, useEffect, useState } from "react";
import { styled } from '@mui/system'

// import material UI
import { Typography, Grid, Dialog, Tabs, Divider } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import WarningComponent from "../../Components/WarningComponent/WarningComponent";
import ItemList from "../../Components/ItemList/ItemList";
import DoneDeliveryStatus from "../../Components/DoneDeliveryStatus/DoneDeliveryStatus";
import LinkExpiredStatus from "../../Components/LinkExpiredStatus/LinkExpiredStatus";

import DoneAllIcon from '@mui/icons-material/DoneAll';

import { useNavigate, useLocation } from "react-router-dom";

// import AppContext
import { AppContext } from "../../App";


// import reusable component
import DivFlexStart from "../../Components/ReusableComponents/DivFlexStart";


const DeliveryPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const { isMobile, warning, promoDumpData, deliveryDumpData, isLinkExpired, historyStack, setHistoryStack } = useContext(AppContext)

    const [openPromoDialog, setOpenPromoDialog] = useState(false)

    const [idPromoDialog, setIdPromoDialog] = useState('')

    const handleClosePromoDialog = () => {
        setOpenPromoDialog(false)
    }

    let navigate = useNavigate();
    const location = useLocation()
    const handleDeliveryDetailPage = (deliveryId) => {
        navigate(`/deliveryDetail/${deliveryId}`)
        setHistoryStack((stack) => stack.concat(location))
    }

    const handlePromoDetailPage = (promoId) => {
        navigate(`/promoDetail/${promoId}`)
        setHistoryStack((stack) => stack.concat(location))
    }

    const handleOpenPromoDialog = (promoId) => {
        setOpenPromoDialog(true)
        setIdPromoDialog(promoId)
    }

    const ChipTotalDelivery = styled('div')((props) => ({
        border: '1px solid #979797',
        borderRadius: 5, 
        padding: '0px 5px 0px 5px', 
        margin: '0 10px'
    }));


    return (
        <>
            {warning && (<WarningComponent isMobile={isMobile} />)}

            <div style={{ marginTop: 20, padding: 20 }}>
                {isLinkExpired ? (<LinkExpiredStatus isMobile={isMobile} />) :
                    (
                        <div style={{ position: isMobile ? undefined : "fixed", zIndex: isMobile ? undefined : 10, padding: isMobile ? undefined : '0px 0px 5px 0px', }}>
                            <DivFlexStart>
                                {deliveryDumpData.length > 1 ? (
                                    <>
                                        <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ textTransform: 'uppercase', fontFamily: 'Eina04-SemiBold' }}>
                                            there are
                                        </Typography>
                                        <ChipTotalDelivery>
                                            <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                                                {deliveryDumpData.length}
                                            </Typography>
                                        </ChipTotalDelivery>
                                        <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ textTransform: 'uppercase', fontFamily: 'Eina04-SemiBold' }}>
                                            delivery today
                                        </Typography>
                                    </>
                                ) : (
                                    <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ textTransform: 'uppercase' }}>
                                        TODAY'S DELIVERY
                                    </Typography>
                                )}

                            </DivFlexStart>
                            {isMobile ? (<>
                                {
                                    deliveryDumpData.every((v) => { return v.tourStatus == "Done" }) ? (
                                        <DoneDeliveryStatus isMobile={true} />
                                    ) : <></>
                                }
                                {deliveryDumpData.map((data, index) => (
                                    <div key={index} style={{ marginTop: 16 }} >
                                        <DeliveryCard key={index} data={data} totalDelivery={deliveryDumpData.length} numberOfDeliver={index + 1} onClickOpenDetail={() => handleDeliveryDetailPage(data.id)} isMobile={true} />
                                    </div>
                                ))}
                            </>) : (<>
                                <Tabs
                                    variant="scrollable"
                                    scrollButtons={false}
                                    value={false}
                                    // sx={{ backgroundColor: 'red' }}
                                    style={{ width: 'calc(100vw - 40px)' }}
                                >
                                    {
                                        deliveryDumpData.every((v) => { return v.tourStatus == "Done" }) ? (
                                            <DoneDeliveryStatus />
                                        ) : <div></div>
                                    }
                                    {deliveryDumpData.map((data, index) => (
                                        <div key={index} style={{ marginTop: 16, display: 'inline-block', marginLeft: index > 0 ? 20 : '', }}>
                                            <DeliveryCard key={index} data={data} totalDelivery={deliveryDumpData.length} numberOfDeliver={index + 1} />
                                        </div>
                                    ))}
                                </Tabs>
                            </>)}
                        </div>
                    )}

                {isMobile && (<Divider sx={{ marginTop: 5, }} color={'#979797'} style={{ marginLeft: -20, marginRight: -20 }} />)}


                {isMobile ? (<></>) : (
                    isLinkExpired ? (<></>) : (
                        <div style={{ width: '100%', height: warning ? 365 : 290, backgroundColor: theme.palette.background.default, position: 'fixed', zIndex: 5, top: 65 }} />
                    )
                )}

                <div style={{ width: '100%', marginTop: isMobile ? 34 : isLinkExpired ? 34 : 300, marginBottom: 12 }}>
                    <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily: 'Eina04-SemiBold', textTransform: 'uppercase' }}>
                        Promo For You
                    </Typography>
                </div>

                <Grid container spacing={{ xs: 2, md: 3 }}>
                    {promoDumpData.map((promo, index) => (
                        <Grid item xs={12} sm={4} md={4} lg={3} key={index}  >
                            <PromoCard key={index} promo={promo} openDetailPromo={false} onClickOpenPromoDetail={isMobile ? () => handlePromoDetailPage(promo.id) : () => handleOpenPromoDialog(promo.id)} />
                        </Grid>
                    ))}
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