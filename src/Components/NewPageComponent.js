import React,{useContext} from "react";
import { styled, useTheme, createTheme } from "@mui/material/styles";
import { useMediaQuery } from "@mui/material";

import DeliveryCard from "./DeliveryCard/DeliveryCard";
import PromoCard from "./PromoCard/PromoCard";
import ItemList from "./ItemList/ItemList";
import DeliveryCardDetail from "./DeveliveryCardDetail/DeliveryCardDetail";
import AppBarResponsive from "./AppBarResponsive/AppBarResponsive";
import WarningComponent from "./WarningComponent/WarningComponent";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";


// Dark and Light Mode
import { AppContext } from "../App";

// dummy data for item list
const itemListData = [
    {
        productName: 'Product Name 1',
        amount: 12,
        unit: 'FAS',
        onTruck: 12,
        ordered: 8
    },
    {
        productName: 'Product Name 2',
        amount: 10,
        unit: 'FAS',
        onTruck: 12,
        ordered: 8
    },
]

const NewPageComponent = () => {

    const theme = useTheme()

    const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
    const isTablet = useMediaQuery(theme.breakpoints.only('sm'))
    const isMobile = useMediaQuery(theme.breakpoints.only('xs'))

    // Dark and Light Mode
    const { handleChangeTheme, mode } = useContext(AppContext);

    return (
        <div style={{}}>
            {/* <AppBarResponsive /> */}
            <WarningComponent />
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                padding: isMobile ? '' : 20
            }}>
                <div style={{
                    width: isMobile ? '100%' : isTablet ? '80%' : '70%',
                    // height: 200,
                    padding: 20,
                    backgroundColor: theme.palette.background.default
                }}>
                    <div style={{ marginTop: 100 }}>
                        <DeliveryCard />
                    </div>
                    <div style={{ marginTop: 100, marginBottom: 100 }}>
                        <PromoCard />
                    </div>


                </div>
            </div>
            <div>
                <DeliveryCardDetail />
                <div style={{ marginTop: 0 }}>
                    {itemListData.map((product, index) => (
                        <ItemList item={product} key={index} />
                    ))}

                </div>
            </div>
            {/* <ScrollToTopButton /> */}
        </div>
    )
}

export default NewPageComponent