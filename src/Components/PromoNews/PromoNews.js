
import { useState, useContext, useEffect } from "react"


import { AppContext } from "../../App"

import { Box, Backdrop } from "@mui/material"

import DivFlexCenter from "../ReusableComponents/DivFlexCenter"
import PromoCard from "../PromoCard/PromoCard"
import PromoDialog from "../ReusableComponents/PromoDialog"


// import component
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween"
import BackIcon from "../../assets/icons/BackIcon"
import CloseIcon from "../../assets/icons/CloseIcon"
import NextIcon from "../../assets/icons/NextIcon"

const PromoNews = (props) => {

    const { isDesktop } = useContext(AppContext)

    const { promoData } = props

    const [openPromoDialog, setOpenPromoDialog] = useState(false)
    const [promoDetail, setPromoDetail] = useState(0);
    const [isLastPromo, setIsLastPromo] = useState(false);
    const [isFirstPromo, setIsFirstPromo] = useState(false);


    const handleClosePromoDialog = () => {
        setOpenPromoDialog(false);
    };

    const handleOpenPromoDialog = (promoId) => {
        setOpenPromoDialog(true);
        // setIdPromoDialog(promoId)
        setPromoDetail(promoId);
    };

    const handleNextPromoDetail = (promoLength) => {
        if (promoDetail !== promoLength - 1) {
            setPromoDetail(promoDetail + 1);
        }
    };

    const handlePrevPromoDetail = (promoLength) => {
        if (promoDetail > 0) {
            setPromoDetail(promoDetail - 1);
        }
    };

    useEffect(() => {
        if (promoDetail == promoData.length - 1) {
            setIsLastPromo(true);
        } else {
            setIsLastPromo(false);
        }

        if (promoDetail == 0) {
            setIsFirstPromo(true);
        } else {
            setIsFirstPromo(false);
        }
    }, [promoDetail]);


    return (
        <>
            <Box>
                {promoData.map((promo, index) => (
                    <DivFlexCenter
                        key={index}
                        sx={{ mb: 3 }}
                        onClick={isDesktop ? () => handleOpenPromoDialog(index) : undefined}
                    >
                        <PromoCard
                            promo={promo}
                            openDetailPromo={false}
                            isMobile={isDesktop ? false : true}
                            removePadding={isDesktop ? !openPromoDialog : false}
                        />
                    </DivFlexCenter>
                ))}
            </Box>

            <PromoDialog
                open={openPromoDialog}
                onClose={handleClosePromoDialog}
                promo={promoData[promoDetail]}
                isFirstPromo={isFirstPromo}
                isLastPromo={isLastPromo}
                handlePrevPromoDetail={() =>
                    handlePrevPromoDetail(promoData.length)
                }
                handleNextPromoDetail={() =>
                    handleNextPromoDetail(promoData.length)
                }
            />

        </>
    )
}

export default PromoNews