import React, { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

// import material component
import { Box, Collapse, InputAdornment, Typography } from "@mui/material";

// import AppContext
import { AppContext } from "../../App";

// import Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ClockIcon from "../../assets/icons/ClockIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import DoneIcon from "../../assets/icons/DoneIcon";
import SearchIcon from '@mui/icons-material/Search';
import ButtonPage from "../../assets/images/radioButtonDefault.png"
import ButtonPageHover from "../../assets/images/radioButtonHover.png"
import ButtonPageDangerDefault from "../../assets/images/radioButtonDangerDefault.png"
import ButtonPageDangerHover from "../../assets/images/radioButtonDangerHover.png"
import ButtonPageWarningDefault from "../../assets/images/radioButtonWarningDefault.png"
import ButtonPageWarningHover from "../../assets/images/radioButtonWarningHover.png"
import ButtonPageActiveDefault from "../../assets/images/radioButtonActiveDefault.png"
import ButtonPageActiveHover from "../../assets/images/radioButtonActiveHover.png"

import { useTranslation } from "react-i18next";

// import components
import ItemList from "../ItemList/ItemList";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import DivFlexStart from "../DivFlexStart";
import DiscrepancyChip from "../ChipStatus/DiscrepancyChip";
import TextFieldDeliveryCardMenu from "../ReusableComponents/TextFieldDeliveryCardMenu";

// import Utils
import { getFormatDate } from "../../connector/Utils/DateUtils";
import { getTimeFormat } from "../../connector/Utils/DateUtils";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";
import { CustomTooltip } from "../CustomTooltip";
import { deliverySimlationDarkAnimation } from "../Animations/Animations";

//import styles
import "../../index.css"

const RootDeliveryCard = styled("div")((props) => ({
  backgroundColor: props.isDesktop
    ? props.data.id === props.deliveryId
      ? props.theme.palette.background.deliveryCardMenu
      : props.isOpenItemList
        ? props.theme.palette.background.deliveryCardMenu
        : props.theme.palette.background.default
    : props.theme.palette.background.deliveryCardMenu,
  padding: props.isDesktop ?
    props.promoLength == 0 ? "0px 100px 0px 100px" : 16
    : props.openDetail ? "16px 24px 16px 24px" : 16,
  paddingTop: "40px",
  cursor: props.isDesktop
    ? props.isOpenItemList
      ? "default"
      : "pointer"
    : "pointer",
  ":hover": {
    backgroundColor: props.isDesktop
      ? props.isOpenItemList
        ? undefined
        : props.theme.palette.background.hoverDeliveryCard
      : undefined,
  },
}));

export const ItemStickyTitle = styled("div")((props) => ({
  position: "-webkit- sticky",
  position: "sticky",
  top: 0,
  // width: "100%",
  zIndex: 10,
  backgroundColor: props.theme.palette.background.deliveryCardMenuItemTitle
}));

const getStatusChip = (data, theme) => {
  return (
    // <DivFlexStart>
    //   {data.orderPositions.some((v) => {
    //     return v.warning === true;
    //   }) ? (
    //     <DiscrepancyChip />
    //   ) : (
    //     <></>
    //   )}

    //   {data.stopStatus === "FINISHED" ? (
    //     <DivFlexStart sx={{ marginLeft: "4px", height: 18 }}>
    //       <DoneIcon
    //         color={theme.palette.text.doneIcon}
    //         sx={{ fontSize: 16, mt: -0.4, marginRight: "6.33px" }}
    //       />
    //       <Typography
    //         fontSize={12}
    //         color={theme.palette.text.doneText}
    //         sx={{ fontFamily: FontFamily.EINA04REGULAR }}
    //       >
    //         FERTIG
    //       </Typography>
    //     </DivFlexStart>
    //   ) : (
    //     <DivFlexStart sx={{ ml: 0, height: 18 }} />
    //   )}
    // </DivFlexStart>
    <></>
  );
};

const DeliveryCardMenu = (props) => {
  const { totalDelivery, numberOfDeliver, data, handleSearchByOrderNumberOrPositionName, isOpenItemList, deliveryId, promoLength } =
    props;

  const { isMobile, isTablet, isDesktop } = useContext(AppContext);

  const { t } = useTranslation()

  // theme color
  const theme = useTheme();

  const { innerWidth: width } = window;

  // local state for open itemlist
  const [openDetail, setOpenDetail] = useState(false)
  const [activeRadioButton, setActiveRadioButton] = useState("");
  const [hoverState, setHoverState] = useState("");
  const [allHeight, setAllHeight] = useState(0);
  const [reduceHeight, setReduceHeight] = useState(0);

  const handleChangeRadio = (order) => {
    var section = document.getElementById(`content-${order.orderNumber}`)
    section.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'center', scrollBehavior: "smooth" });
  }

  const toggleVisible = () => {
    const container = document.getElementById('parentScroll');
    var containerTop = container.scrollTop + 1;
    const isScrollAtMax = containerTop >= (container.scrollHeight - container.clientHeight)
    if (isScrollAtMax) {
      containerTop = containerTop + 450
    }

    const itemsHeight = []
    data.orders.forEach((order) => {
      itemsHeight.push(
        document.getElementById(`content-${order.orderNumber}`).offsetHeight);
    })

    if (containerTop >= allHeight) {
      let tempHeight = 0;
      let tempReduceHeight = 0;
      for (let i = 0; i < itemsHeight.length; i++) {
        tempHeight += itemsHeight[i];
        tempReduceHeight += itemsHeight[i];
        if (tempHeight > allHeight) {
          setAllHeight(tempHeight)
          tempReduceHeight -= itemsHeight[i];
          setReduceHeight(tempReduceHeight)
          setActiveRadioButton(data.orders[i].orderNumber)
          break;
        }
      }
    }
    else if (containerTop <= reduceHeight) {
      let tempHeight = 0;
      let tempReduceHeight = 0;
      for (let i = 0; i < itemsHeight.length; i++) {
        tempHeight += itemsHeight[i];
        tempReduceHeight += itemsHeight[i];
        if (reduceHeight === tempReduceHeight) {
          setReduceHeight(tempReduceHeight - itemsHeight[i]);
          setActiveRadioButton(data.orders[i].orderNumber);
          setAllHeight(tempHeight);
          break;
        }
      }
    }

  }

  useEffect(() => {
    toggleVisible()
  })


  useEffect(() => {
    if (totalDelivery === 1) {
      setOpenDetail(true);
    } else {
      setOpenDetail(false);
    }
  }, [totalDelivery]);

  // data
  const timeStart = getTimeFormat(data.tourStopNotifications.actual.twStart)
  const timeEnd = getTimeFormat(data.tourStopNotifications.actual.twEnd)

  return (
    <Box sx={{ width: openDetail || isDesktop ? "100%" : "calc(100% - 48px)", height: "100%" }}>
      <RootDeliveryCard
        onClick={isDesktop ? undefined : () => setOpenDetail(!openDetail)}
        isDesktop={isDesktop}
        isOpenItemList={isOpenItemList}
        deliveryId={deliveryId}
        data={data}
        openDetail={openDetail}
        promoLength={promoLength}
      >
        {(isMobile || isTablet) && (
          <DivFlexSpaceBetween sx={{ mb: 1 }}>
            <Typography
              fontSize={12}
              color={theme.palette.text.primary}
              sx={{ fontFamily: FontFamily.EINA04REGULARITALIC }}
            >
              {`${numberOfDeliver} of ${totalDelivery}`}
            </Typography>
            {getStatusChip(data, theme)}
          </DivFlexSpaceBetween>
        )}
        <DivFlexSpaceBetween
          sx={{ mb: isDesktop ? 0 : undefined, flexWrap: "wrap" }}
        >
          <Typography
            fontSize={"14px"}
            sx={{
              fontFamily: FontFamily.EINA04REGULAR,
              letterSpacing: "0.15em",
              fontWeight: 400,
              lineHeight: "19.32px",
              fontStyle: "normal",
            }}
            color={theme.palette.text.primary}
          >
            {data.orderNumber}
          </Typography>
          <Box sx={{ display: isDesktop ? "block" : "none" }}>
            {getStatusChip(data, theme)}
          </Box>
        </DivFlexSpaceBetween>

        <Box sx={{ marginTop: "14px" }}>
          <Typography
            fontSize={"16px"}
            color={theme.palette.text.primary}
            sx={{
              fontFamily: FontFamily.EINA04REGULAR,
              fontWeight: 600,
              fontStyle: "normal",
              lineHeight: "22.08px",
            }}
          >
            {data?.customerText}
          </Typography>
        </Box>

        <DivFlexStart>
          <Typography
            fontSize={"16px"}
            color={theme.palette.text.primary}
            sx={{
              fontFamily: FontFamily.EINA04REGULAR,
              marginTop: "16px",
              fontWeight: 400,
              lineHeight: "22.08px",
            }}
          >
            {data.address}
          </Typography>
        </DivFlexStart>

        {data.stopStatus === "Late" ? (
          <DivFlexSpaceBetween sx={{ height: 16, pt: 1 }}>
            <Typography
              fontSize={10}
              color={theme.palette.text.primary}
              sx={{
                fontFamily: FontFamily.EINA04LIGHT,
                textDecoration: "line-through",
                ml: 2.2,
              }}
            >
              {timeStart} - {timeEnd}
            </Typography>
          </DivFlexSpaceBetween>
        ) : (
          <DivFlexStart sx={{ height: 16 }} />
        )}

        <DivFlexSpaceBetween>
          <DivFlexStart>
            <CalendarIcon
              color={"#959499"}
              sx={{
                marginRight: "9.5px",
                padding: "0px",
                fontSize: width <= 1260 ? "22px" : "25px",
              }}
            />
            <Typography
              fontSize={width <= 1260 ? '17px' : width <= 1460 ? "21px" : "28px"}
              color={theme.palette.text.primary}
              sx={{
                fontFamily: FontFamily.EINA04REGULAR,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "38.64px",
              }}
            >
              {getFormatDate(data.stopStart)}
            </Typography>
            {data.stopStatus === "Late" ? (
              <DivFlexStart sx={{ width: 40 }}>
                <ArrowDropDownIcon
                  sx={{ width: 20, height: 20, color: "#da1e28" }}
                />
                <Typography
                  fontSize={10}
                  color={"#da1e28"}
                  sx={{
                    fontFamily: FontFamily.EINA04LIGHT,
                    textTransform: "uppercase",
                    mt: 0.1,
                  }}
                >
                  Late
                </Typography>
              </DivFlexStart>
            ) : data.stopStatus === "Early" ? (
              <>
                <DivFlexStart sx={{ width: 40 }}>
                  {/* <ArrowDropUpIcon sx={{ width: 20, height: 20, color: '#58d632' }} />
                            <Typography fontSize={10} color={'#31711e'} sx={{ fontFamily: FontFamily.EINA04LIGHT, textTransform: 'uppercase' }}>
                                Early
                            </Typography> */}
                </DivFlexStart>
                <></>
              </>
            ) : (
              <DivFlexStart sx={{ width: 40 }} />
            )}
          </DivFlexStart>

          {/* <DivFlexStart sx={{ display: isOpenItemList || openDetail ? '' : 'none' }}>
                        <CalendarIcon sx={{
                            fontSize: 12,
                            mr: 0.5,
                            ml: 0.1,
                            color: '#959499'
                        }} />
                        <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: FontFamily.EINA04LIGHT }}>
                            {getFormatDate(data.stopStart)}
                        </Typography>
                    </DivFlexStart> */}
          <DivFlexStart>
            <ClockIcon
              color={"#959499"}
              sx={{
                fontSize: width <= 1260 ? "22px" : "25px",
                marginRight: "9.5px",
                padding: "0px",
              }}
            />
            <Typography
              fontSize={width <= 1260 ? '17px' : width <= 1460 ? "21px" : "28px"}
              color={theme.palette.text.primary}
              sx={{
                fontFamily: FontFamily.EINA04REGULAR,
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "38.64px",
              }}
            >
              {timeStart} - {timeEnd}
            </Typography>
          </DivFlexStart>
        </DivFlexSpaceBetween>
        <DivFlexStart style={{ paddingTop: "24px" }}>
          <TextFieldDeliveryCardMenu
            sx={{ backgroundColor: theme.palette.background.deliveryCardMenuSearchBar }}
            onChange={handleSearchByOrderNumberOrPositionName}
            InputProps={{
              startAdornment: (
                <InputAdornment sx={{ padding: "0px" }} position="start">
                  <SearchIcon />
                </InputAdornment>
              )
            }}
            placeholder={t('deliveryCard.searchReceiptNumberorItemName')}/>
        </DivFlexStart>

        <DivFlexSpaceBetween
          sx={{
            display: isOpenItemList || openDetail ? "none" : "",
            flexWrap: "wrap",
          }}
        >
          <DivFlexStart>
            {/* <CalendarIcon color={'#959499'} sx={{
                            fontSize: 12,
                            mr: 0.5,
                            ml: 0.1
                        }} /> */}
            {/* <Typography fontSize={10} color={theme.palette.text.primary} sx={{ fontFamily: FontFamily.EINA04LIGHT }}>
                            {getFormatDate(data.stopStart)}
                        </Typography> */}
          </DivFlexStart>
        </DivFlexSpaceBetween>
      </RootDeliveryCard>

      <div style={{ paddingTop: "24px", display: "flex", padding: promoLength == 0 ? "16px 100px 16px 16px" : "16px 0px 16px 16px", }} >
        <div>
          {data.orders.map((order) => {
            return (
              <div style={{ display: 'flex', paddingBottom: "11px" }} onClick={() => { handleChangeRadio(order) }}>
                <CustomTooltip sx={{ whiteSpace: "pre-line" }} title={order.orderPositions.some((v) => v.warning === true) ? `${order.orderNumber} \n Discrepancy` : order.orderNumber}>
                  <div id={order.orderNumber}
                    onMouseEnter={() => { setHoverState(order.orderNumber) }}
                    onMouseLeave={() => { setHoverState("") }}
                    style={{ display: "flex", alignItems: "center", justifyContent: "center", width: "24px", height: "24px" }}>
                    {order.orderNumber === activeRadioButton ? (
                      <div>
                        {order.orderPositions.some((v) => v.warning === true) ? (
                          <Box className="icons">
                            {hoverState === order.orderNumber ? (
                              <img alt="" src={ButtonPageWarningHover} style={{ height: "24px", width: "24px" }}
                              />
                            ) : (
                              <img alt="" src={ButtonPageWarningDefault} style={{ height: "24px", width: "24px" }}
                              />
                            )}
                          </Box>
                        ) : (
                          <Box className="icons">
                            {hoverState === order.orderNumber ? (
                              <img alt="" src={ButtonPageActiveHover} style={{ height: "24px", width: "24px" }} />
                            ) : (
                              <img alt="" src={ButtonPageActiveDefault} style={{ height: "24px", width: "24px" }} />
                            )}
                          </Box>
                        )}
                      </div>
                    ) : (
                      <Box>
                        {order.orderPositions.some((v) => v.warning === true) ? (
                          <Box>
                            {hoverState === order.orderNumber ? (
                              <img alt="" src={ButtonPageDangerHover} style={{ height: "12px", width: "16px", marginLeft: "5px" }}
                              />
                            ) : (
                              <img alt="" src={ButtonPageDangerDefault} style={{ height: "12px", width: "16px", marginLeft: "5px" }}
                              />
                            )}

                          </Box>
                        ) : (
                          <Box>
                            {hoverState === order.orderNumber ? (
                              <img alt="" src={ButtonPageHover} style={{ height: "12px", width: "12px" }}
                              />
                            ) : (
                              <img alt="" src={ButtonPage} style={{ height: "12px", width: "12px" }}
                              />
                            )}
                          </Box>
                        )}
                      </Box>
                    )}
                  </div>
                </CustomTooltip>
              </div>
            )
          })}
        </div>
        <div id="parentScroll" className="deliveryCardMenuItems" style={{ paddingLeft: "60px", width: '100%', height: "calc(100vh - 400px)", overflowY: "auto", scrollBehavior: "smooth", paddingRight: "0px" }}>
          {data.orders.map((order, index) => (
            <>
              <DivFlexSpaceBetween id={`content-${order.orderNumber}`} style={{ paddingBottom: "40px", alignItems: "none", display: 'flex', justifyContent: "start" }}>
                <div style={{ width: '100%' }}>
                  <ItemStickyTitle>
                    <Typography style={{ fontWeight: 700, fontSize: "18px", lineHeight: "24.84px", fontFamliy: "Eina04-Regular" }}>{`Beleg ${order.orderNumber}`}</Typography>
                  </ItemStickyTitle>
                  <Collapse style={{ width: "100%" }} in={(openDetail && !isDesktop) || isOpenItemList}>
                    {order.orderPositions.map((orderPosition, index) => {
                      return (
                        <ItemList
                          item={orderPosition}
                          key={index}
                          index={index}
                          itemLength={order.orderPositions.length}
                          isOpenItemList={isOpenItemList}
                        />
                      )
                    })}
                  </Collapse>
                </div>
              </DivFlexSpaceBetween>
            </>
          ))}
        </div>
      </div>
    </Box>
  );
};

DeliveryCardMenu.defaultProps = {
  data: {
    stopStatus: "",
    stopStatus: "",
    stopStart: "-",
    twStart: "-",
    twEnd: "-",
    vehicle: "-",
    tourSorted: "",
    totalStops: 0,
    isCanceled: false,
    orderPositions: [0, 1, 2, 3],
    address: "-",
    customerText: "-",
    orderNumber: "-",
  },
};

export default DeliveryCardMenu;
