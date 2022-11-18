import React, { useContext, useEffect } from "react";

// import material UI
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import WarningComponent from "../../Components/WarningComponent/WarningComponent";
import ItemList from "../../Components/ItemList/ItemList";
import DeliveryCardDetail from "../../Components/DeveliveryCardDetail/DeliveryCardDetail";

import { useParams } from 'react-router-dom';

// import AppContext
import { AppContext } from "../../App";

const PromoDetailPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const { warning, deliveryDumpData, promoDumpData } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        })
    }, [])

   
    let { promoId } = useParams()

    return (
        <>
            <div style={{}}>
                <div>
                    <PromoCard promo={promoDumpData.filter(dumpPromo=> dumpPromo.id == promoId)[0]} openDetailPromo={true} />
                </div>
                <div style={{ padding: 20 }}>
                    <div style={{ width: '100%', marginTop: 24 }}>
                        <Typography fontSize={14} color={theme.palette.text.primary}>
                            PROMO FOR YOU
                        </Typography>
                    </div>
                    {promoDumpData.filter(dumpPromo=> dumpPromo.id != promoId).map((promo, index) => (
                        <div style={{ marginTop: 10 }}>
                            <PromoCard key={index} promo={promo} openDetailPromo={false} />
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default PromoDetailPage