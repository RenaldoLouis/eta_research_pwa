import React, { useContext, useEffect } from "react";

// import material UI
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";

import { useParams } from 'react-router-dom';

// import AppContext
import { AppContext } from "../../App";

import { useNavigate, useLocation } from "react-router-dom";

const PromoDetailPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const { warning, deliveryDumpData, promoDumpData, setHistoryStack } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        })
    }, [])

    let navigate = useNavigate();
    const location = useLocation()
    const handlePromoDetailPage = (promoId) => {
        navigate(`/promoDetail/${promoId}`)
        setHistoryStack((stack) => stack.concat(location))
    }


    let { promoId } = useParams()

    return (
        <>
            <PromoCard promo={promoDumpData.filter(dumpPromo => dumpPromo.id == promoId)[0]} openDetailPromo={true} />
            <div style={{ padding: 20 }}>
                <Typography fontSize={14} color={theme.palette.text.primary} sx={{ mt: 3 }}>
                    PROMO FOR YOU
                </Typography>
                {promoDumpData.filter(dumpPromo => dumpPromo.id != promoId).map((promo, index) => (
                    <div style={{ marginTop: 10 }}>
                        <PromoCard key={index} promo={promo} openDetailPromo={false} onClickOpenPromoDetail={() => handlePromoDetailPage(promo.id)} />
                    </div>

                ))}
            </div>
        </>
    )
}

export default PromoDetailPage