import React, { useContext, useState, useEffect } from "react";

import { styled } from "@mui/system";

import {
  Typography,
  FormControl,
  Grid,
  CircularProgress,
  circularProgressClasses,
  Backdrop,
  Box,
} from "@mui/material";

// Lottie Animation
import Lottie from "react-lottie";

// dark mode and light mode
import { useTheme } from "@mui/material/styles";

// import reusbale component
import DivFlexCenter from "../../Components/ReusableComponents/DivFlexCenter";
import Button from "../../Components/ReusableComponents/Button";

import { useNavigate } from "react-router-dom";

// import appcontext
import { AppContext } from "../../App";

// import icon
import ErrorIcon from "../../assets/icons/ErrorIcon";


// import animation assets
import lightModeAnimationFixed from "../../assets/animations/Light Mode_Fixed_1.json";
import darkModeAnimationFixed from "../../assets/animations/Dark Mode_fixed_1.json";

// import component
import LinkExpiredStatus from "../../Components/LinkExpiredStatus/LinkExpiredStatus";
import DivFlexStart from "../../Components/ReusableComponents/DivFlexStart";
import TextFieldStyled from "../../Components/ReusableComponents/TextFieldStyle";

import PromoNews from "../../Components/PromoNews/PromoNews";

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

const InputTrackingNumber = () => {
  const { isLinkExpired, isMobile, promoNewsData, isDesktop, mode } =
    useContext(AppContext);

  const theme = useTheme();

  // const input search
  const [searchTrackingNumber, setSearchTrackingNumber] = useState("");
  const handleChangeInput = (e) => {
    setSearchTrackingNumber(e.target.value);
  };

  // loading submit search tracking number
  const [isLoading, setIsLoading] = useState(false);

  // state warning
  const [warning, setWarning] = useState(false);

  let navigate = useNavigate();

  const goToDeliveryPage = () => {
    navigate("/delivery");
  };

  const onClickSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      if (searchTrackingNumber == "123456890AB") {
        setWarning(false);
        goToDeliveryPage();
        setSearchTrackingNumber("");
      } else {
        setWarning(true);
      }
      setIsLoading(false);
    }, 1000);
  };

  // Light Mode Animation
  const lightAnimation = {
    loop: true,
    autoplay: true,
    animationData: lightModeAnimationFixed,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  // dark mode animation
  const darkAnimation = {
    loop: true,
    autoplay: true,
    animationData: darkModeAnimationFixed,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
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
                fontFamily: "Eina04-Regular",
                mt: isDesktop ? 15 : 3,
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
                  fontFamily: "Eina04-SemiBold",
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
                  onChange={handleChangeInput}
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
                      fontFamily: "Eina04-SemiBold",
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
              overflowY: isDesktop ? "auto" : "",
              padding: isDesktop ? '24px 40px 0px 24px' : '0px 0px 0px 0px'
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
          <Lottie options={mode == "light" ? lightAnimation : darkAnimation} />
        </Box>
      )}
    </>
  );
};

export default InputTrackingNumber;
