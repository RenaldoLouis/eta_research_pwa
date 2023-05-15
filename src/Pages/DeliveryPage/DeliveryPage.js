import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/system";
import Lottie from "react-lottie";

// import material UI
import { Typography, Grid, Box, Tooltip, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { Backdrop } from "@mui/material";

// import Component
import PromoCard from "../../Components/PromoCard/PromoCard";
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import PromoNews from "../../Components/PromoNews/PromoNews";

// import Icon
import DoneIcon from "../../assets/icons/DoneIcon";
import CloseIcon from "../../assets/icons/CloseIcon";
import BackIcon from "../../assets/icons/BackIcon";
import NextIcon from "../../assets/icons/NextIcon";

// import AppContext
import { AppContext } from "../../App";

// import reusable component
// import moonFixed from "../../assets/lotties/MOON_FIXED_Dark.json"
import sunRiseDark from "../../assets/lotties/SUNRISE_DARKMODE.json";
import sunRiseLight from "../../assets/lotties/SUNRISE_LIGHTMODE.json";
import sunLight from "../../assets/lotties/SUN_LIGHTMODE.json";
import sunDark from "../../assets/lotties/SUN_DARKMODE.json";
import moonLight from "../../assets/lotties/MOON_LIGHTMODE.json";
import moonDark from "../../assets/lotties/MOON_DARKMODE.json";
import DivFlexStart from "../../Components/ReusableComponents/DivFlexStart";
import DivFlexCenter from "../../Components/ReusableComponents/DivFlexCenter";
import DivFlexEnd from "../../Components/ReusableComponents/DivFlexEnd";
import DivFlexSpaceBetween from "../../Components/ReusableComponents/DivFlexSpacebetween";
import DeliveryCardMenu from "../../Components/DeliveryCard/DeliveryCardMenu";
import moment from "moment";
import { initial } from "lodash";
import CustomDialog from "../../Components/ReusableComponents/CustomDialog";
import PromoDialog from "../../Components/ReusableComponents/PromoDialog";
import LeftArrowDialog from "../../Components/ReusableComponents/LeftArrowDialog";
import RightArrowDialog from "../../Components/ReusableComponents/RightArrowDialog";

// delivery title div as button
const DeliverStickyTitle = styled("div")((props) => ({
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  top: 56,
  width: "100%",
  height: 60,
  backgroundColor: props.theme.palette.background.default,
  zIndex: 1000,
}));

// promo title div as button
const PromoStickyTitle = styled("div")((props) => ({
  display: "flex",
  position: "fixed",
  alignItems: "center",
  justifyContent: "space-between",
  top: 115.5,
  width: "100%",
  height: 60,
  backgroundColor: props.theme.palette.background.default,
  borderTop: `1px solid ${props.theme.palette.background.separatorTitle}`,
  zIndex: 1000,
  padding: "0px 24px",
}));

const DeliveryPage = () => {
  // theme
  const theme = useTheme();

  // state from contex
  const {
    isMobile,
    isTablet,
    mode,
    promoNewsData,
    deliveryData,
    scrollDown,
    scrollToTop,
    isDesktop,
    goToPromo,
    isScrollToPromo,
    handleChangeTheme,
  } = useContext(AppContext);

  // state for open promo dialog for desktop
  const [openPromoDialog, setOpenPromoDialog] = useState(false);

  const handleClosePromoDialog = () => {
    setOpenPromoDialog(false);
    // setIsLastPromo(false)
    setPromoDetail(0);
  };

  // state for pass promo id to open the detail - desktop
  const [idPromoDialog, setIdPromoDialog] = useState("");

  const [promoDetail, setPromoDetail] = useState(0);

  const [isLastPromo, setIsLastPromo] = useState(false);

  const [isFirstPromo, setIsFirstPromo] = useState(false);

  const handleOpenPromoDialog = (promoId) => {
    setOpenPromoDialog(true);
    // setIdPromoDialog(promoId)

    setPromoDetail(promoId);
    console.log(promoId);
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
    if (promoDetail === promoNewsData.length - 1) {
      setIsLastPromo(true);
    } else {
      setIsLastPromo(false);
    }

    if (promoDetail === 0) {
      setIsFirstPromo(true);
    } else {
      setIsFirstPromo(false);
    }
  }, [promoDetail]);

  // state for pass delivery id to open the detail  - desktop
  const [deliveryId, setDeliveryId] = useState(1);

  const handleClickDeliveryDesktop = (id) => {
    setDeliveryId(id);
  };

  const sunriseLightAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunRiseLight,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sunriseDarkAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunRiseDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sunLightAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunLight,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const sunDarkAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunDark,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const moonLightAnimation = {
    loop: true,
    autoplay: true,
    animationData: moonLight,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const moonDarkAnimation = {
    loop: true,
    autoplay: true,
    animationData: moonDark,
    renderSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));

  useEffect(() => {
    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <Grid
        container
        sx={{
          paddingLeft: isDesktop ? "40px" : "",
          // pr: isDesktop ? 5 : "",
          height: isDesktop ? "100vh" : "",
        }}
      >
        <Grid
          item
          xs={12}
          md={12}
          lg={3}
          id="deliverSection"
          sx={{
            overflowY: isDesktop ? "scroll" : "hidden",
            height: isDesktop ? "100vh" : "",
            paddingBottom: "16px",
            paddingTop: "72px",
          }}
        >
          <>
            {deliveryData.length > 1 ? (
              <>
                {scrollDown && !isDesktop && (
                  <DeliverStickyTitle
                    sx={{ pl: 3, pr: 3, paddingTop: "12px" }}
                    onClick={scrollToTop}
                  >
                    <Typography
                      fontSize={14}
                      color={theme.palette.text.primary}
                      sx={{
                        fontFamily: "Eina 04",
                        fontStyle: "normal",
                        fontWeight: 400,
                        lineHeight: "19px",
                      }}
                    >
                      Heutige Lieferungen
                    </Typography>
                    <Typography
                      fontSize={14}
                      color={theme.palette.text.highlithText}
                      sx={{
                        fontFamily: "Eina04-Regular",
                        textDecoration: "underline",
                      }}
                    >
                      {deliveryData.length}
                    </Typography>
                  </DeliverStickyTitle>
                )}
                <Box id="titleDeliveryPage">
                  {/* {deliveryData.every((v) => {
                    return v.deliveryStatus === "Done";
                  }) 
                  ? (
                    <DivFlexStart
                      sx={{
                        padding: isDesktop ? "" : "24px 24px 0px 24px",
                        mt: isDesktop ? 3 : undefined,
                      }}
                    >
                      <Typography
                        fontSize={30}
                        color={theme.palette.text.primary}
                        sx={{ fontFamily: "Eina04-Regular" }}
                      >
                        Your Delivery <br /> for {deliveryData[0].date}{" "}
                        <br /> is All{" "}
                        <span style={{ color: theme.palette.text.primary }}>
                          {" "}
                          <DoneIcon
                            sx={{ fontSize: 36, mr: -1, mt: -0.6 }}
                          />{" "}
                          DONE{" "}
                        </span>
                      </Typography>
                    </DivFlexStart>
                  ) : 
                  ( */}
                  <>
                    {currentTime <=
                      moment().hour(12).minute(0).format("HH:mm") ? (
                      <>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "0px" : "32px 24px 0px 24px",
                            marginTop: isDesktop ? "48px" : undefined,
                            height: "70px",
                            width: isMobile || isTablet ? "100px" : "50px",
                          }}
                        >
                          {mode === "light" ? (
                            <Lottie
                              options={sunriseLightAnimation}
                              style={{
                                height: "48px",
                                width: "48px",
                                margin: "32px 0px 16px 0px",
                                paddingBottom:
                                  isMobile || isTablet ? "16px" : "0px",
                              }}
                            />
                          ) : mode === "dark" ? (
                            <Lottie
                              options={sunriseDarkAnimation}
                              style={{
                                height: "48px",
                                width: "48px",
                                margin: "32px 0px 16px 0px",
                                paddingBottom:
                                  isMobile || isTablet ? "16px" : "0px",
                              }}
                            />
                          ) : (
                            <></>
                          )}
                        </DivFlexStart>

                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "8px 24px 0px 24px",
                            paddingTop: isDesktop ? "24px" : undefined,
                          }}
                        >
                          <Typography
                            fontSize={"32px"}
                            color={theme.palette.text.primary}
                            sx={{
                              fontFamily: "Eina04-Regular",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "40px",
                            }}
                          >
                            Guten Morgen!
                          </Typography>
                        </DivFlexStart>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "0px 24px 0px 24px",
                            marginTop: isDesktop ? "40px" : "24px",
                          }}
                        >
                          <Typography
                            fontSize={"36px"}
                            color={theme.palette.text.primary}
                            sx={{
                              fontFamily: "Eina04-Regular",
                              fontStyle: "normal",
                              fontWeight: 600,
                              lineHeight: "40px",
                              paddingBottom: "8px",
                            }}
                          >
                            Heute gibt es{" "}
                            <span
                              style={{
                                textDecoration: "underline",
                                fontFamily: "Eina04-Regular",
                                color: theme.palette.text.highlithText,
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "40px",
                              }}
                            >
                              {deliveryData.length}
                            </span>{" "}
                            <br /> Auslieferungen
                          </Typography>
                        </DivFlexStart>
                      </>
                    ) : currentTime >=
                      moment().hour(16).minute(0).format("HH:mm") ? (
                      <>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "0px" : "24px 24px 0px 24px",
                            marginTop: isDesktop ? "48px" : undefined,
                            height: "70px",
                            width: isMobile || isTablet ? "100px" : "50px",
                          }}
                        >
                          {mode === "light" ? (
                            <Lottie
                              options={moonLightAnimation}
                              style={{
                                height: isMobile || isDesktop ? "60px" : "48px",
                                width: "48px",
                                margin: "32px 0px 16px 0px",
                                paddingBottom:
                                  isMobile || isTablet ? "16px" : "0px",
                              }}
                            />
                          ) : mode === "dark" ? (
                            <Lottie
                              options={moonDarkAnimation}
                              style={{
                                height: isMobile || isDesktop ? "60px" : "48px",
                                width: "48px",
                                margin: "32px 0px 16px 0px",
                                paddingBottom:
                                  isMobile || isTablet ? "16px" : "0px",
                              }}
                            />
                          ) : (
                            <></>
                          )}
                        </DivFlexStart>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "8px 24px 0px 24px",
                            paddingTop: isDesktop ? "24px" : undefined,
                          }}
                        >
                          <Typography
                            fontSize={"32px"}
                            color={theme.palette.text.primary}
                            sx={{
                              fontFamily: "Eina04-Regular",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "40px",
                            }}
                          >
                            Guten Abend!
                          </Typography>
                        </DivFlexStart>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "0px 24px 0px 24px",
                            marginTop: isDesktop ? "40px" : "24px",
                          }}
                        >
                          <Typography
                            fontSize={"36px"}
                            color={theme.palette.text.primary}
                            sx={{
                              fontFamily: "Eina04-Regular",
                              fontStyle: "normal",
                              fontWeight: 600,
                              lineHeight: "40px",
                              paddingBottom: "8px",
                            }}
                          >
                            Heute gibt es{" "}
                            <span
                              style={{
                                textDecoration: "underline",
                                fontFamily: "Eina04-Regular",
                                color: theme.palette.text.highlithText,
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "40px",
                              }}
                            >
                              {deliveryData.length}
                            </span>{" "}
                            <br /> Auslieferungen
                          </Typography>
                        </DivFlexStart>
                      </>
                    ) : (
                      <>
                        <DivFlexStart
                          sx={{
                            margin: isDesktop ? "0px" : "32px 24px 0px 24px",
                            marginTop: isDesktop ? "48px" : undefined,
                            height: "70px",
                            width: isMobile || isTablet ? "100px" : "50px",
                          }}
                        >
                          {mode === "light" ? (
                            <Lottie
                              options={sunLightAnimation}
                              style={{
                                widht: isMobile || isDesktop ? "58px" : "48px",
                                height: "48px",
                                margin: "32px 0px 16px 0px",
                                paddingBottom:
                                  isMobile || isTablet ? "16px" : "0px",
                              }}
                            />
                          ) : mode === "dark" ? (
                            <Lottie
                              options={sunDarkAnimation}
                              style={{
                                widht: isMobile || isDesktop ? "58px" : "48px",
                                height: "48px",
                                margin: "32px 0px 16px 0px",
                                paddingBottom:
                                  isMobile || isTablet ? "16px" : "0px",
                              }}
                            />
                          ) : (
                            <></>
                          )}
                        </DivFlexStart>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "8px 24px 0px 24px",
                            paddingTop: isDesktop ? "24px" : undefined,
                          }}
                        >
                          <Typography
                            fontSize={"32px"}
                            color={theme.palette.text.primary}
                            sx={{
                              fontFamily: "Eina04-Regular",
                              fontStyle: "normal",
                              fontWeight: 400,
                              lineHeight: "40px",
                            }}
                          >
                            Guten Tag!
                          </Typography>
                        </DivFlexStart>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "0px 24px 0px 24px",
                            marginTop: isDesktop ? "40px" : "24px",
                          }}
                        >
                          <Typography
                            fontSize={"36px"}
                            color={theme.palette.text.primary}
                            sx={{
                              fontFamily: "Eina04-Regular",
                              fontStyle: "normal",
                              fontWeight: 600,
                              lineHeight: "40px",
                              paddingBottom: "8px",
                            }}
                          >
                            Heute gibt es{" "}
                            <span
                              style={{
                                textDecoration: "underline",
                                fontFamily: "Eina04-Regular",
                                color: theme.palette.text.highlithText,
                                fontStyle: "normal",
                                fontWeight: 600,
                                lineHeight: "40px",
                              }}
                            >
                              {deliveryData.length}
                            </span>{" "}
                            <br /> Auslieferungen
                          </Typography>
                        </DivFlexStart>
                      </>
                    )}
                  </>
                  {/* )} */}
                </Box>
              </>
            ) : (
              <>
                {scrollDown && !isDesktop && (
                  <DeliverStickyTitle
                    sx={{ pl: 3, pr: 3 }}
                    onClick={scrollToTop}
                  >
                    <Typography
                      fontSize={14}
                      color={theme.palette.text.primary}
                      sx={{ fontFamily: "Eina04-Regular" }}
                    >
                      Today's Delivery
                    </Typography>
                    <Typography
                      fontSize={14}
                      color={theme.palette.text.primary}
                      sx={{
                        fontFamily: "Eina04-Regular",
                        textDecoration: "underline",
                      }}
                    >
                      {deliveryData.length}
                    </Typography>
                  </DeliverStickyTitle>
                )}
                <Box id="titleDeliveryPage">
                  <DivFlexStart
                    sx={{ padding: isDesktop ? "" : "24px 24px 0px 24px" }}
                  >
                    <Typography
                      fontSize={32}
                      color={theme.palette.text.primary}
                      sx={{
                        textTransform: "capitalized",
                        fontFamily: "Eina04-Regular",
                      }}
                    >
                      Good Morning! <br /> This is your <br /> Today's Delivery
                    </Typography>
                  </DivFlexStart>
                </Box>
              </>
            )}

            {deliveryData.map((data, index) => (
              <DivFlexCenter
                key={index}
                sx={{ paddingTop: "16px", pr: isDesktop ? "30px" : "" }}
                onClick={() => handleClickDeliveryDesktop(data.id)}
              >
                <DeliveryCard
                  data={data}
                  totalDelivery={deliveryData.length}
                  numberOfDeliver={index + 1}
                  deliveryId={deliveryId}
                />
              </DivFlexCenter>
            ))}
          </>
        </Grid>

        <Grid item xs={0} md={0} lg={6}
          display={{ xs: "none", md: "none", lg: "block" }}
          bgcolor={{ md: theme.palette.background.deliveryCard }}
          padding={{ lg: "86px 80px 0px 80px" }}
          sx={{
            overflowY: isDesktop ? "scroll" : "",
            height: isDesktop ? "100vh" : "",
            paddingTop: "72px",
          }}
        >
          <DivFlexCenter>
            <DeliveryCardMenu
              data={
                deliveryData.filter(
                  (dumpDelivery) => dumpDelivery.id === deliveryId
                )[0]
              }
              isOpenItemList={true}
            />
          </DivFlexCenter>
        </Grid>

        <Grid item xs={12} md={12} lg={3}
          sx={{ mt: isDesktop ? 9 : 0, }}
        >
          <Box
            sx={{
              paddingTop: isMobile || isTablet ? "" : 3,
              overflowY: isDesktop ? "scroll" : "",
              height: isDesktop ? "calc(100vh - 80px)" : "",
              paddingRight: isDesktop ? "40px" : "0px",
              pl: isDesktop ? "24px" : "0px",
            }}
          >
            <DivFlexStart
              id="promo"
              sx={{
                padding: isDesktop ? "" : "0px 24px",
                mt: 3,
                mb: 2,
                display: isDesktop ? "none" : "",
                scrollMarginTop: 142,
              }}
            >
              <Typography
                fontSize={32}
                color={theme.palette.text.primary}
                sx={{ fontFamily: "Eina04-Regular" }}
              >
                Promo und News
              </Typography>
            </DivFlexStart>
            {isScrollToPromo && (
              <PromoStickyTitle onClick={goToPromo}>
                <Typography
                  fontSize={14}
                  color={theme.palette.text.primary}
                  sx={{
                    fontFamily: "Eina 04",
                    fontWeight: 400,
                    lineHeight: "19.32px",
                  }}
                >
                  Promo und News
                </Typography>
              </PromoStickyTitle>
            )}

            <PromoNews promoData={promoNewsData} />

          </Box>
        </Grid>
      </Grid>

    </>
  );
};

export default DeliveryPage;
