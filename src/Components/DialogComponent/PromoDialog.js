import React, { useContext } from "react";

import { AppContext } from "../../App";

// import styles
import { styled } from "@mui/system";
import { useTheme } from "@mui/styles";


// import icon
import CloseIcon from "../../assets/icons/CloseIcon";
import BackIcon from "../../assets/icons/BackIcon";
import NextIcon from "../../assets/icons/NextIcon";


// import component
import { Box, Dialog, Popover, Popper, Typography } from "@mui/material";
import DivFlexCenter from "../DivFlexCenter";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import PromoCard from "../PromoCard/PromoCard";


const DialogComponent = styled(Dialog)((props) => ({
  "& .MuiDialog-container": {
    "& .MuiPaper-root": {
      width: props.width ? props.width : "100%",
      borderRadius: 0,
      boxShadow: 'none',
      position: "unset",
    },
    backdropFilter: "blur(20px)",
    background: props.theme.palette.background.dialogBlanket
  },
}));

export const PromoDialog = (props) => {
  const {
    open,
    onClose,
    isFirstPromo,
    promo,
    handlePrevPromoDetail,
    handleNextPromoDetail,
    isLastPromo,
  } = props;

  const { mode } = useContext(AppContext)

  const theme = useTheme()

  return (
    <DialogComponent open={open} onClose={onClose} mode={mode} theme={theme}>
      <DivFlexSpaceBetween>
        <Box sx={{ position: "absolute", left: 215, }}>
          <BackIcon
            color={isFirstPromo ? "#F4F4F466" : "#f4f4f4"}
            sx={{
              fontSize: 56,
              cursor: isFirstPromo ? "default" : "pointer",
            }}
            onClick={handlePrevPromoDetail}
          />
        </Box>
        <Box sx={{ width: 600 }}>
          <Box sx={{ position: "fixed", width: 600 }}>
            <Box sx={{ float: "right" }}>
              <DivFlexCenter
                sx={{
                  backgroundColor: "rgba(26, 25, 25, 0.4)",
                  padding: 0.5,
                  marginTop: 2,
                  marginRight: 2,
                  borderRadius: "50%",
                  cursor: "pointer",
                }}
              >
                <CloseIcon
                  onClick={onClose}
                  sx={{ color: "#ffffff", fontSize: 20, pr: 0.2 }}
                />
              </DivFlexCenter>
            </Box>
          </Box>
          <PromoCard
            openDetailPromo={true}
            promo={promo} // promoNewsData[promoDetail]
            isDialog={true}
          />
        </Box>
        <Box sx={{ position: "absolute", right: 215 }}>
          <NextIcon
            color={isLastPromo ? "#F4F4F466" : "#f4f4f4"}
            sx={{
              fontSize: 56,
              cursor: isLastPromo ? "default" : "pointer",
            }}
            onClick={handleNextPromoDetail}
          />
        </Box>
      </DivFlexSpaceBetween>
    </DialogComponent>
  );
};

export default PromoDialog;
