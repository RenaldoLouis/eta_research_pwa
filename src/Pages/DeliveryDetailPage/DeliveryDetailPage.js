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

import { useParams, useNavigate, useLocation } from 'react-router-dom';

// import AppContext
import { AppContext } from "../../App";

const DeliveryDetailPage = () => {

    // theme
    const theme = useTheme()

    // state from contex
    const {isMobile,  warning, deliveryDumpData, promoDumpData, setHistoryStack } = useContext(AppContext)

    useEffect(() => {
        window.scrollTo({
            top: 0,
            // behavior: 'smooth'
        })
    },[])

    let navigate = useNavigate();
    const location = useLocation()
    const handlePromoDetailPage = (promoId) => {
        navigate(`/promoDetail/${promoId}`)
        setHistoryStack((stack) => stack.concat(location))
    }
   

    let { deliveryId } = useParams()

    return (
        <>
            {
                warning && (
                    <WarningComponent isMobile={isMobile} />
                )
            }
            <div style={{}}>
                <div>
                    <DeliveryCardDetail data = {deliveryDumpData.filter(dumpData=> dumpData.id == deliveryId)[0]} />
                    <div style={{  backgroundColor: theme.palette.background.deliveryCard, borderTop:'1px solid #979797', padding:'10px 20px 0px 20px', display:'flex', justifyContent:'space-between'  }}>
                        <Typography fontSize={14} sx={{textTransform:'uppercase', fontFamily: 'Eina04-Bold'}} >Item List</Typography>
                        <Typography fontSize={14} sx={{fontFamily: 'Eina04-Regular'}}> {`${deliveryDumpData.filter(dumpData=> dumpData.id == deliveryId)[0].itemList.length} Products`}</Typography>
                    </div>
                    <div style={{ marginTop: 0 }}>
                        {deliveryDumpData.filter(dumpData=> dumpData.id == deliveryId)[0].itemList.map((product, index) => (
                            <ItemList item={product} key={index} index={index} itemLength={deliveryDumpData.filter(dumpData=> dumpData.id == deliveryId)[0].itemList.length} isMobile={true}/>
                        ))}

                    </div>
                </div>
                <div style={{ padding: 20 }}>
                    <div style={{ width: '100%', marginTop: 24 }}>
                        <Typography fontSize={14} color={theme.palette.text.heading1} sx={{ fontFamily:'Eina04-SemiBold' }}>
                            PROMO FOR YOU
                        </Typography>
                    </div>
                    {promoDumpData.map((promo, index) => (
                        <div style={{ marginTop: 10 }}>
                            <PromoCard openDetailPromo={false} key={index}  promo={promo} onClickOpenPromoDetail={()=>handlePromoDetailPage(promo.id)} />
                        </div>

                    ))}
                </div>
            </div>
        </>
    )
}

export default DeliveryDetailPage