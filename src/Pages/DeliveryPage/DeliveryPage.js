import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/system";
import Lottie from "react-lottie";

import axios from "axios";

// import material UI
import { Typography, Grid, Box, Tooltip, IconButton } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import { useParams } from "react-router-dom";

// import Component
import DeliveryCard from "../../Components/DeliveryCard/DeliveryCard";
import PromoNews from "../../Components/PromoNews/PromoNews";
import DivFlexStart from "../../Components/DivFlexStart";
import DivFlexCenter from "../../Components/DivFlexCenter";
import DeliveryCardMenu from "../../Components/DeliveryCard/DeliveryCardMenu";

// import Constanst
import { ColorTheme } from "../../Constants/ColorTheme";

// import moment
import moment from "moment";

// import AppContext
import { AppContext } from "../../App";

import DeliveryData from "../../classes/DeliveryData";
import { formatAddress } from "../../connector/Utils/DataUtils";

// import Animations
import {
  sunriseLightAnimation,
  sunriseDarkAnimation,
  sunLightAnimation,
  sunDarkAnimation,
  moonLightAnimation,
  moonDarkAnimation
} from "../../Components/Animations/Animations";


// import components 
import {
  DeliverStickyTitle,
  PromoStickyTitle,
  DeliveryInformation,
  AnimationContainer,
  Greeting
} from "./DeliveryPageComponent";
import LoadingDialog from "../../Components/DialogComponent/LoadingDialog";
import PageNotFound from "../PageNotFound";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

import { deliveryDummyData } from "../../dump-data";

//import Styles
import "../../index.css"
import { cloneDeep, orderBy } from "lodash";

const DeliveryPage = () => {
  const theme = useTheme();
  const param = useParams();

  const {
    isMobile,
    isTablet,
    mode,
    promoNewsData,
    // deliveryData,
    scrollDown,
    scrollToTop,
    isDesktop,
    goToPromo,
    isScrollToPromo,
    isLoading, 
    setIsLoading
  } = useContext(AppContext);


  /** ============ State ============*/
  const [currentTime, setCurrentTime] = useState(moment().format("HH:mm:ss"));
  const [deliveryId, setDeliveryId] = useState(null);

  const [deliveryData, setDeliveryData] = useState([])
  const [tempDeliveryData, setTempDeliveryData] = useState([])

  useEffect(() => {
    setIsLoading(true)
    /** NORDMANN DATA (COMPLETE) */
    const url = `https://gotraces-de.commsult.dev/api/core/eta/access/${param.stopNumber}`
    // const url = `http://localhost:3001/api/core/eta/access/${param.stopNumber}`
    axios.get(url).then(res => {

      const newDeliveryDatas = []

      res.data.forEach((deliveryData, index) => {
        newDeliveryDatas.push(new DeliveryData(
          deliveryData.id,
          deliveryData.stopStatus,
          deliveryData.twStart,
          deliveryData.twEnd,
          deliveryData.stopStart,
          formatAddress(deliveryData.address),
          deliveryData.orders[0].customerText,
          deliveryData.orders,
          deliveryData.tourStopNotifications
        ))
      })

      newDeliveryDatas.forEach(data => {
        data.orders.sort((a, b) => parseInt(a.orderNumber, 10) - parseInt(b.orderNumber, 10))
      })

      newDeliveryDatas.forEach(data => {
        data.orders.forEach(order => {
          order.orderPositions.sort((a, b) => parseInt(a.articleNumber, 10) - parseInt(b.articleNumber, 10))
        })
      })

      setDeliveryData(newDeliveryDatas)
      setDeliveryId(newDeliveryDatas[0].id)

      setTempDeliveryData(newDeliveryDatas)

      setIsLoading(false)
    }).catch(err => {
      setIsLoading(false)
    })
  }, [])

  // function for pass delivery id to open the detail  - desktop view
  const handleClickDeliveryDesktop = (id) => {
    setDeliveryId(id);
  };

  const handleSearchByOrderNumberOrPositionName = e => {
    if (e.target.value.length === 0) {
      setTempDeliveryData(cloneDeep(deliveryData))
    }
    else {
      let newTempOrders = null

      const newTempDeliveryData = cloneDeep(deliveryData)

      newTempDeliveryData.forEach((data) => {
        if (deliveryId === data.id) {
          newTempOrders = [...data.orders]
        }
      })

      // newTempOrders = newTempOrders.filter(order => order.orderNumber.includes(e.target.value))

      newTempOrders = newTempOrders.filter(order => {
        let position = order.orderPositions.some(position => position.text.toLowerCase().includes(e.target.value.toLowerCase()))

        return position || order.orderNumber.includes(e.target.value)
      })
      // newTempOrders.forEach(order => {
      //   order.orderPositions.filter(position => position.text.toLowerCase().includes(e.target.value()))
      // })
      // newTempOrders.filter((data) => data.orders.filter((order) => order.orderNumber.includes(e.target.value)))

      newTempDeliveryData.forEach((data) => {
        if (deliveryId === data.id) {
          data.orders = [...newTempOrders]
        }
      })

      setTempDeliveryData(newTempDeliveryData)
    }
  };

  useEffect(() => {
    // Update current time every second
    const intervalId = setInterval(() => {
      setCurrentTime(moment().format("HH:mm:ss"));
    }, 1000);

    // Clear interval when component unmounts
    return () => clearInterval(intervalId);
  }, []);


  /** =============== Sunrise Animation =============== */
  let morningAnimation

  if (mode == ColorTheme.DARK) {
    morningAnimation =
      <Lottie
        options={sunriseDarkAnimation}
        style={{
          height: "48px",
          width: "48px",
          margin: "32px 0px 16px 0px",
          pb: isMobile || isTablet ? 2 : 0,
        }}
      />
  } else {
    morningAnimation =
      <Lottie
        options={sunriseLightAnimation}
        style={{
          height: "48px",
          width: "48px",
          margin: "32px 0px 16px 0px",
          pb: isMobile || isTablet ? 2 : 0,
        }}
      />
  }
  /** =============== EOL Sunrise Animation =============== */


  /** =============== Midday Animation =============== */
  let middayAnimation

  if (mode == ColorTheme.DARK) {
    middayAnimation =
      <Lottie
        options={sunDarkAnimation}
        style={{
          width: '40px',
          height: "48px",
          margin: "32px 0px 16px 0px",
          paddingBottom:
            isMobile || isTablet ? "16px" : "0px",
        }}
      />
  } else {
    middayAnimation =
      <Lottie
        options={sunLightAnimation}
        style={{
          width: '40px',
          height: "48px",
          margin: "32px 0px 16px 0px",
          paddingBottom:
            isMobile || isTablet ? "16px" : "0px",
        }}
      />
  }
  /** =============== EOL Midday Animation =============== */


  /** =============== Afternoon Animation =============== */
  let afternoonAnimation

  if (mode == ColorTheme.DARK) {
    afternoonAnimation =
      <Lottie
        options={moonDarkAnimation}
        style={{
          height: isMobile || isDesktop ? "60px" : "48px",
          width: isMobile ? '40px' : "48px",
          margin: "32px 0px 16px 0px",
          pb: isMobile || isTablet ? 2 : 0,
        }}
      />
  } else {
    afternoonAnimation =
      <Lottie
        options={moonLightAnimation}
        style={{
          height: isMobile || isDesktop ? "60px" : "48px",
          width: isMobile ? '40px' : "48px",
          margin: "32px 0px 16px 0px",
          pb: isMobile || isTablet ? 2 : 0,
        }}
      />
  }
  /** =============== EOL Afternoon Animation =============== */



  /** =============== Animation for greeting based on time =============== */
  let timeGreetingAnimation

  if (currentTime <= moment().hour(12).minute(0).format("HH:mm")) {
    timeGreetingAnimation =
      <>
        <AnimationContainer>
          {morningAnimation}
        </AnimationContainer>
        <Greeting>
          Guten Morgen!
        </Greeting>
      </>
  } else if (currentTime >= moment().hour(16).minute(0).format("HH:mm")) {
    timeGreetingAnimation =
      <>
        <AnimationContainer>
          {afternoonAnimation}
        </AnimationContainer>
        <Greeting>
          Guten Abend!
        </Greeting>
      </>
  } else {
    timeGreetingAnimation =
      <>
        <AnimationContainer>
          {middayAnimation}
        </AnimationContainer>
        <Greeting>
          Guten Tag!
          {/* {param.stopNumber} */}
        </Greeting>
      </>
  }
  /** =============== EOL Animation for greeting based on time =============== */


  if (isLoading) {
    return <LoadingDialog />
  }

  return (
    <>
      {deliveryData.length > 0 ?
        (
          <Grid container
            sx={{
              pl: isDesktop ? 5 : "",
              height: isDesktop ? "100vh" : "",
            }}
          >
            <Grid className="deliveryCardGrid" item xs={12} md={12} lg={3} id="deliverSection"
              bgcolor={{ xs: theme.palette.background.defaultMobile, lg: theme.palette.background.default }}
              sx={{
                overflowY: isDesktop ? "scroll" : "hidden",
                height: isDesktop ? "100vh" : "",
                pb: 2, pt: 9,
              }}
            >
              <>
                {tempDeliveryData.length > 1 ? (
                  <>
                    {scrollDown && !isDesktop && (
                      <DeliverStickyTitle
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
                            fontFamily: FontFamily.EINA04REGULAR,
                            textDecoration: "underline",
                          }}
                        >
                          {tempDeliveryData.length}
                        </Typography>
                      </DeliverStickyTitle>
                    )}
                    <Box id="titleDeliveryPage">

                      {timeGreetingAnimation}

                      <DeliveryInformation>
                        Heute gibt es{" "}
                        <span
                          style={{
                            textDecoration: "underline",
                            fontFamily: FontFamily.EINA04REGULAR,
                            color: theme.palette.text.highlithText,
                            fontStyle: "normal",
                            fontWeight: 600,
                            lineHeight: "40px",
                          }}
                        >
                          {tempDeliveryData.length}
                        </span>{" "}
                        <br /> Auslieferungen
                      </DeliveryInformation>
                    </Box>
                  </>
                ) : (
                  <>
                    {scrollDown && !isDesktop && (
                      <DeliverStickyTitle
                        onClick={scrollToTop}
                      >
                        <Typography
                          fontSize={14}
                          color={theme.palette.text.primary}
                          sx={{ fontFamily: FontFamily.EINA04REGULAR }}
                        >
                          Today's Delivery
                        </Typography>
                        <Typography
                          fontSize={14}
                          color={theme.palette.text.primary}
                          sx={{
                            fontFamily: FontFamily.EINA04REGULAR,
                            textDecoration: "underline",
                          }}
                        >
                          {tempDeliveryData.length}
                        </Typography>
                      </DeliverStickyTitle>
                    )}
                    <Box id="titleDeliveryPage">

                      {timeGreetingAnimation}

                      <DeliveryInformation>
                        This is your <br /> Today's Delivery
                      </DeliveryInformation>
                    </Box>
                  </>
                )}

                {tempDeliveryData.map((data, index) => (
                  <DivFlexCenter
                    key={index}
                    sx={{ paddingTop: "16px", pr: isDesktop ? "30px" : "" }}
                    onClick={() => handleClickDeliveryDesktop(data.id)}
                  >
                    <DeliveryCard
                      data={data}
                      totalDelivery={tempDeliveryData.length}
                      numberOfDeliver={index + 1}
                      deliveryId={deliveryId}
                      handleSearchByOrderNumberOrPositionName={handleSearchByOrderNumberOrPositionName}
                    />
                  </DivFlexCenter>
                ))}
              </>
            </Grid>

            <Grid item xs={0} md={0} lg={6}
              display={{ xs: "none", md: "none", lg: "block" }}
              bgcolor={{ md: theme.palette.background.deliveryCardMenu }}
              padding={{ lg: "86px 40px 0px 40px" }}
              sx={{
                // overflowY: isDesktop ? "scroll" : "",
                scrollBehavior: "smooth",
                height: isDesktop ? "100vh" : "",
                paddingTop: "72px",
                // overflow: "hidden",
                // position: "sticky"
              }}
            >
              <DivFlexCenter>
                <DeliveryCardMenu
                  data={tempDeliveryData.find((delivery) => delivery.id === deliveryId)}
                  isOpenItemList={true}
                  handleSearchByOrderNumberOrPositionName={handleSearchByOrderNumberOrPositionName}
                />
              </DivFlexCenter>
            </Grid>

            <Grid item xs={12} md={12} lg={3}
              sx={{ mt: isDesktop ? 9 : 0, }}
              bgcolor={{ xs: theme.palette.background.defaultMobile, lg: theme.palette.background.default }}
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
                    sx={{ fontFamily: FontFamily.EINA04REGULAR }}
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
        ) : (
          <PageNotFound />
        )
      }


    </>
  );
};

export default DeliveryPage;
