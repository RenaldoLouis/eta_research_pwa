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

const DeliveryDetailPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const { warning, deliveryDumpData, promoDumpData } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        })
    },[])

   

    let { deliveryId } = useParams()

    return (
        <>
            {
                warning && (
                    <WarningComponent />
                )
            }
            <div style={{}}>
                <div>
                    <DeliveryCardDetail data = {deliveryDumpData.filter(dumpData=> dumpData.id == deliveryId)[0]} />
                    <div style={{ marginTop: 0 }}>
                        {deliveryDumpData.filter(dumpData=> dumpData.id == deliveryId)[0].itemList.map((product, index) => (
                            <ItemList item={product} key={index} />
                        ))}

                    </div>
                </div>
                <div style={{ padding: 20 }}>
                    <div style={{ width: '100%', marginTop: 24 }}>
                        <Typography fontSize={14} color={theme.palette.text.primary}>
                            PROMO FOR YOU
                        </Typography>
                    </div>
                    {promoDumpData.map((promo, index) => (
                        <div style={{ marginTop: 10 }}>
                            <PromoCard openDetailPromo={false} key={index} index={index} promo={promo} />
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default DeliveryDetailPage