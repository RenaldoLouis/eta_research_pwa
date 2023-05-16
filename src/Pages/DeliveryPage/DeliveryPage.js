import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/system";
import Lottie from "react-lottie";

// import material UI
import { Typography, Grid, Box, Tooltip, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

// import Component
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import PromoNews from "../../Components/PromoNews/PromoNews";


// import moment
import moment from "moment";

// import AppContext
import { AppContext } from "../../App";

// import Reusable Component
import DivFlexStart from "../../Components/ReusableComponents/DivFlexStart";
import DivFlexCenter from "../../Components/ReusableComponents/DivFlexCenter";
import DeliveryCardMenu from "../../Components/DeliveryCard/DeliveryCardMenu";

// import Animations
import { sunriseLightAnimation, sunriseDarkAnimation, sunLightAnimation, sunDarkAnimation, moonLightAnimation, moonDarkAnimation } from "../../Components/Animations/Animations";


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
  } = useContext(AppContext);


  /** ============ State ============*/
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const [deliveryId, setDeliveryId] = useState(1);


  // function for pass delivery id to open the detail  - desktop view
  const handleClickDeliveryDesktop = (id) => {
    setDeliveryId(id);
  };


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
      <Grid container
        sx={{
          pl: isDesktop ? 5 : "",
          height: isDesktop ? "100vh" : "",
        }}
      >
        <Grid item xs={12} md={12} lg={3} id="deliverSection"
          sx={{
            overflowY: isDesktop ? "scroll" : "hidden",
            height: isDesktop ? "100vh" : "",
            pb: 2, pt: 9,
          }}
        >
          <>
            {deliveryData.length > 1 ? (
              <>
                {scrollDown && !isDesktop && (
                  <DeliverStickyTitle
                    sx={{ pl: 3, pr: 3, pt: "12px" }}
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
                  <>
                    {currentTime <= moment().hour(12).minute(0).format("HH:mm") ? (
                      <>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "0px" : "32px 24px 0px 24px",
                            mt: isDesktop ? 6 : undefined,
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
                                pb: isMobile || isTablet ? 2 : 0,
                              }}
                            />
                          ) : mode === "dark" ? (
                            <Lottie
                              options={sunriseDarkAnimation}
                              style={{
                                height: "48px",
                                width: "48px",
                                margin: "32px 0px 16px 0px",
                                pb: isMobile || isTablet ? 2 : 0,
                              }}
                            />
                          ) : mode === "yellow" ? (
                            <Lottie
                              options={sunriseLightAnimation}
                              style={{
                                height: "48px",
                                width: "48px",
                                margin: "32px 0px 16px 0px",
                                pb: isMobile || isTablet ? 2 : 0,
                              }}
                            />
                          ) : (
                            <></>
                          )}
                        </DivFlexStart>

                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "8px 24px 0px 24px",
                            pt: isDesktop ? 3 : undefined,
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
                            mt: isDesktop ? 5 : 3,
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
                              pb: 1,
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
                    ) : currentTime >= moment().hour(16).minute(0).format("HH:mm") ? (
                      <>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "0px" : "24px 24px 0px 24px",
                            mt: isDesktop ? 6 : undefined,
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
                                pb: isMobile || isTablet ? 2 : 0,
                              }}
                            />
                          ) : mode === "dark" ? (
                            <Lottie
                              options={moonDarkAnimation}
                              style={{
                                height: isMobile || isDesktop ? "60px" : "48px",
                                width: "48px",
                                margin: "32px 0px 16px 0px",
                                pb: isMobile || isTablet ? 2 : 0,
                              }}
                            />
                          ) : (
                            <></>
                          )}
                        </DivFlexStart>
                        <DivFlexStart
                          sx={{
                            padding: isDesktop ? "" : "8px 24px 0px 24px",
                            pt: isDesktop ? 3 : undefined,
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
                            mt: isDesktop ? 5 : 3,
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
                              pb: 1,
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
                            mt: isDesktop ? 6 : undefined,
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
                          ) : mode === "yellow" ? (
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
                          ) : (<></>)
                          }
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
