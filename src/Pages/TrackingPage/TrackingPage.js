import React, { useContext, useState, useRef } from "react";

import { styled } from "@mui/system";

import {
  Typography,
  FormControl,
  Grid,
  CircularProgress,
  circularProgressClasses,
  Box,
} from "@mui/material";

// import react-router-dom
import { useNavigate } from "react-router-dom";

// Lottie Animation
import Lottie from "react-lottie";

// import useTheme
import { useTheme } from "@mui/material/styles";

// import appcontext
import { AppContext } from "../../App";

// import icon
import ErrorIcon from "../../assets/icons/ErrorIcon";

// import delivery simlation animations
import { deliverySimlationLightAnimation, deliverySimlationDarkAnimation } from "../../Components/Animations/Animations";

// import component
import LinkExpiredStatus from "../../Components/LinkExpiredStatus/LinkExpiredStatus";
import DivFlexStart from "../../Components/DivFlexStart";
import TextFieldStyled from "../../Components/TextField/TextFieldStyle";
import DivFlexCenter from "../../Components/DivFlexCenter";
import Button from "../../Components/Button";
import PromoNews from "../../Components/PromoNews/PromoNews";

// import constanst
import { ColorTheme } from "../../Constants/ColorTheme";
import { UrlPage } from "../../Constants/UrlPage";
import { FontFamily } from "../../Constants/FontFamily";


// warning component
const Warning = styled("div")((props) => ({
  width: props.isMobile ? "calc(100% - 11.5%)" : "calc(100% - 6.5%)",
  padding: 10,
  backgroundColor: "#DA1E28",
  marginTop: 25,
}));

// input tracking number component
const InputTrackingNumberContainer = styled("div")((props) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  width: props.isDesktop ? 680 : "100%",
  marginTop: props.isDesktop ? 56 : 16,
  border: `1px solid ${props.theme.palette.background.borderTrackingNumber}`,
  padding: props.isDesktop ? "48px 24px 48px 40px" : "24px 8px 24px 24px",
  flexWrap: "wrap",
  backgroundColor: props.theme.palette.background.dialog,
}));



const TrackingPage = () => {

  const { isLinkExpired, isMobile, promoNewsData, isDesktop, mode } = useContext(AppContext);

  const theme = useTheme();

  let navigate = useNavigate();

  const trackingNumberRef = useRef()

  /** ========= State ============ */
  const [isLoading, setIsLoading] = useState(false);
  const [warning, setWarning] = useState(false);


  const goToDeliveryPage = () => {
    navigate(UrlPage.DELIVERY);
  };

  const onClickSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (trackingNumberRef.current.value == "123456890AB") {
        setWarning(false);
        goToDeliveryPage();
      } else {
        setWarning(true);
      }
      setIsLoading(false);
    }, 1000);
  };


  return (
    <>
      <Grid container sx={{ height: 'calc(100vh - 58px)' }}>

        <Grid item xs={12} md={9} sx={{ pl: isDesktop ? 5 : 3, pr: 3 }}>
          {isLinkExpired ? (
            <LinkExpiredStatus />
          ) : (
            <Typography
              fontSize={isMobile ? 32 : 32}
              sx={{
                width: "100%",
                fontFamily: FontFamily.EINA04REGULAR,
                mt: 15,
                color: theme.palette.text.tex4,
              }}
            >
              Please insert your tracking number
            </Typography>
          )}
          <InputTrackingNumberContainer isDesktop={isDesktop} theme={theme}>
            <DivFlexStart sx={{ width: isMobile ? "100%" : "20%" }}>
              <Typography
                sx={{
                  fontSize: 14,
                  fontFamily: FontFamily.EINA04SEMIBOLD,
                  mb: isDesktop ? "" : 1,
                }}
              >
                Tracking Number
              </Typography>
            </DivFlexStart>
            <DivFlexStart sx={{ width: isMobile ? "60%" : "40%" }}>
              <FormControl sx={{ width: "100%" }}>
                <TextFieldStyled
                  id="tracking-number"
                  placeholder="Up to 12 codes"
                  inputRef={trackingNumberRef}
                  warning={warning}
                  theme={theme}
                  sx={{ input: { fontSize: 14, height: isMobile ? 5 : 14 } }}
                />
              </FormControl>
            </DivFlexStart>
            <Button
              onClick={onClickSubmit}
              style={{ width: isMobile ? "25%" : "30%" }}
              height={isMobile ? 38 : 47}
              isLoading={isLoading}
              isPromo={true}
            >
              Track
            </Button>
            <DivFlexCenter sx={{ width: isMobile ? "8%" : "5%" }}>
              {isLoading && (
                <CircularProgress
                  size={isMobile ? "20px" : "30px"}
                  sx={{
                    color: theme.palette.background.buttonSecondary,
                    // animationDuration: "0ms",
                    [`& .${circularProgressClasses.circle}`]: {
                      strokeLinecap: "round",
                    },
                  }}
                />
              )}
            </DivFlexCenter>
            {warning && (
              <Warning isMobile={isMobile}>
                <DivFlexCenter>
                  <ErrorIcon color={"#FF8389"} sx={{ mr: 1, fontSize: 24 }} />
                  <Typography
                    sx={{
                      color: "#ffffff",
                      fontSize: 12,
                      fontFamily: FontFamily.EINA04SEMIBOLD,
                    }}
                  >
                    {`Sorry your tracking attempt was not succesfull. Please check your tracking number.`}
                  </Typography>
                </DivFlexCenter>
              </Warning>
            )}
          </InputTrackingNumberContainer>
        </Grid>

        <Grid item xs={12} md={3}
          sx={{ zIndex: 10, pl: isDesktop ? 1 : "", mt: isDesktop ? 9 : 5, }}
        >
          <Box
            sx={{
              maxHeight: isDesktop ? "calc(100vh - 80px)" : "",
              overflowY: isDesktop ? "scroll" : "",
              padding: isDesktop ? '24px 40px 0px 24px' : '0px'
            }}
          >
            <PromoNews promoData={promoNewsData} />
          </Box>
        </Grid>

      </Grid>

      {isDesktop && (
        <Box
          sx={{
            width: "100%",
            position: "absolute",
            bottom: 0,
            paddingBottom: 0,
            lineHeight: 0,
          }}
        >
          <Lottie options={mode == ColorTheme.DARK ? deliverySimlationDarkAnimation : mode == ColorTheme.YELLOW ? deliverySimlationLightAnimation : deliverySimlationLightAnimation} />
        </Box>
      )}
    </>
  );
};

export default TrackingPage;
