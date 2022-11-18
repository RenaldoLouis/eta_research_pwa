import React, { useContext, useEffect, useState } from "react";

// import material UI
import { Typography, Grid, Dialog, Tabs, Tab } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import WarningComponent from "../../Components/WarningComponent/WarningComponent";
import ItemList from "../../Components/ItemList/ItemList";

import { useNavigate } from "react-router-dom";

// import AppContext
import { AppContext } from "../../App";

import { useDeliveryPage } from "./DelveryPageStyles";



const DeliveryPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const { isMobile, warning, promoDumpData, deliveryDumpData } = useContext(AppContext)

    const classes = useDeliveryPage()

    const [openPromoDialog, setOpenPromoDialog] = useState(false)

    const [idPromoDialog, setIdPromoDialog] = useState('')

    const handleClosePromoDialog = () => {
        setOpenPromoDialog(false)
    }

    let navigate = useNavigate();
    const handleDeliveryDetailPage = (deliveryId) => {
        navigate(`/deliveryDetail/${deliveryId}`)
    }

    const handlePromoDetailPage = (promoId) => {
        navigate(`/promoDetail/${promoId}`)

    }

    const handleOpenPromoDialog = (promoId) => {
        setOpenPromoDialog(true)
        setIdPromoDialog(promoId)
    }


    return (
        <>
            {
                warning && (
                    <WarningComponent />
                )
            }
            <div style={{ marginTop: 20, padding: 20 }}>
                <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start' }}>
                    {deliveryDumpData.length > 1 ? (
                        <>
                            <Typography fontSize={14} color={theme.palette.text.primary} sx={{ textTransform: 'uppercase', fontFamily: 'Eina04-SemiBold' }}>
                                there are
                            </Typography>
                            <div style={{ border: '1px solid #979797', borderRadius: 5, padding: '0px 5px 0px 5px', margin: '0 10px' }}>
                                <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                                    {deliveryDumpData.length}
                                </Typography>
                            </div>
                            <Typography fontSize={14} color={theme.palette.text.primary} sx={{ textTransform: 'uppercase', fontFamily: 'Eina04-SemiBold' }}>
                                delivery today
                            </Typography>
                        </>
                    ) : (
                        <Typography fontSize={14} color={theme.palette.text.primary} sx={{ textTransform: 'uppercase' }}>
                            TODAY'S DELIVERY
                        </Typography>
                    )}

                </div>
                {isMobile ? (<>
                    {deliveryDumpData.map((data, index) => (
                        <div key={index} style={{ marginTop: 16 }} >
                            <DeliveryCard key={index} data={data} totalDelivery={deliveryDumpData.length} numberOfDeliver={index + 1} onClickOpenDetail={() => handleDeliveryDetailPage(data.id)} />
                        </div>
                    ))}
                </>) : (<>
                    <Tabs
                        variant="scrollable"
                        scrollButtons={false}
                        value={false}
                        // sx={{ backgroundColor: 'red' }}
                    >
                        {deliveryDumpData.map((data, index) => (
                            <div key={index} style={{ marginTop: 16, display: 'inline-block', marginLeft: index > 0 ? 20 : '', }}>
                                <DeliveryCard key={index} data={data} totalDelivery={deliveryDumpData.length} numberOfDeliver={index + 1} />
                            </div>
                        ))}
                    </Tabs>
                </>)}



                <div style={{ width: '100%', marginTop: 24 }}>
                    <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                        NEWS AND PROMO
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
                    <PromoCard openDetailPromo={true} promo={promoDumpData.filter(dumpPromo => dumpPromo.id == idPromoDialog)[0]} />
                </div>
            </Dialog>
        </>
    )
}

export default DeliveryPage