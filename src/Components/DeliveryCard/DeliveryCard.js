import React, { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

// import material component
import { Box, Collapse, InputAdornment, Typography } from "@mui/material";

// import AppContext
import { AppContext } from "../../App";

// import Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ClockIcon from "../../assets/icons/ClockIcon";
import DoneIcon from "../../assets/icons/DoneIcon";
import ErrorIcon from "../../assets/icons/ErrorIcon";
import SearchIcon from '@mui/icons-material/Search';


// import components
import ItemList from "../ItemList/ItemList";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import DivFlexStart from "../DivFlexStart";
import DiscrepancyChip from "../ChipStatus/DiscrepancyChip";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import DiscrepancyIconChip from "../ChipStatus/DiscrepancyIconChip";

// import Utils
import { getFormatDate } from "../../connector/Utils/DateUtils";
import { getTimeFormat } from "../../connector/Utils/DateUtils";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";
import TextFieldDeliveryCardMenu from "../ReusableComponents/TextFieldDeliveryCardMenu";
import DivFlexEnd from "../DivFlexEnd";
import CloseIcon from "../../assets/icons/CloseIcon";

//import styles
import '../../index.css'

const RootDeliveryCard = styled("div")((props) => ({
  backgroundColor: props.isDesktop
    ? props.data.orderNumber === props.deliveryId
      ? props.theme.palette.background.deliveryCard
      : props.isOpenItemList
        ? props.theme.palette.background.deliveryCard
        : props.theme.palette.background.default
    : props.theme.palette.background.deliveryCard,
  padding: props.isDesktop ? 16 : props.openDetail ? "16px 24px 0px 24px" : 16,
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
  ":active": {
    backgroundColor: props.theme.palette.background.clickedDeliveryCard,
  },
}));



const getStatusChip = (data, theme) => {
  const { innerWidth: width } = window;
  return (
    <DivFlexStart>
      {/* {data.orderPositions.some((v) => {
        return v.warning === true;
      }) ? (
        width >= 1200 && width <= 1580 ? (
          <DiscrepancyIconChip />
        ) : (
          <DiscrepancyChip />
        )
      ) : (
        <></>
      )} */}

      {data.stopStatus === "FINISHED" ? (
        <DivFlexStart sx={{ ml: 1, height: 18, pt: 0 }}>
          <DoneIcon
            color={theme.palette.text.doneIcon}
            sx={{ fontSize: 16, mt: -0.3, marginRight: "4px" }}
          />
          <Typography
            fontSize={12}
            color={theme.palette.text.doneText}
            sx={{ fontFamily: FontFamily.EINA04REGULAR }}
          >
            FERTIG
          </Typography>
        </DivFlexStart>
      ) : (
        <DivFlexStart sx={{ ml: 0, height: 18 }} />
      )}
    </DivFlexStart>
  );
};

const DeliveryCard = (props) => {
  const { totalDelivery, numberOfDeliver, data, handleSearchByOrderNumberOrPositionName, isOpenItemList, deliveryId } =
    props;

  const { isMobile, isTablet, isDesktop } = useContext(AppContext);

  // theme color
  const theme = useTheme();

  // local state for open itemlist
  const [openDetail, setOpenDetail] = useState(false);
  const [openItem, setOpenItem] = useState([]);

  const handleOpenItemList = (item) => {
    const checkData = openItem.some((v) => v === item)
    if (checkData) {
      const removedData = openItem.filter(function (value) {
        return value !== item
      })
      setOpenItem(removedData)
    }
    else {
      setOpenItem((prevState) => [...prevState, item])
    }
  }

  const handleAddAllItem = () => {
    setOpenItem("")
    const allData = []
    data.orders.map((data) => {
      return allData.push(data.orderNumber)
    })
    setOpenItem(allData);
  }

  const handleCheckItemData = () => {
    const dataLength = []
    data.orders.map((data) => {
      return dataLength.push(data.orderNumber);
    })
    if (openItem.length === dataLength.length) {
      return true
    }
    else {
      return false
    }
  }

  const handleOpenDeliveryCard = () => {
    setOpenItem([])
    setOpenDetail(!openDetail)
  }

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
    <Box sx={{ width: openDetail || isDesktop ? "100%" : "calc(100% - 48px)" }}>
      <RootDeliveryCard
        onClick={isDesktop ? undefined : () => handleOpenDeliveryCard()}
        isDesktop={isDesktop}
        isOpenItemList={isOpenItemList}
        deliveryId={deliveryId}
        data={data}
        openDetail={openDetail}
      >
        {(isMobile || isTablet) && (
          <DivFlexSpaceBetween sx={{ marginBottom: "10px" }}>
            {openDetail ? (
              ""
            ) : (
              <>
                <Typography
                  fontSize={12}
                  color={theme.palette.text.primary}
                  sx={{
                    fontFamily: FontFamily.EINA04REGULAR,
                    fontWeight: 400,
                    lineHeight: "16.56px",
                    fontStyle: "italic",
                  }}
                >
                  {`${numberOfDeliver} von ${totalDelivery}`}
                </Typography>
                {getStatusChip(data, theme)}
              </>
            )}
          </DivFlexSpaceBetween>
        )}
        <DivFlexSpaceBetween
          sx={{ mb: isDesktop ? 0 : undefined, flexWrap: "wrap" }}
        >
          {!openDetail && (
            <Typography
              fontSize={12}
              sx={{
                fontFamily: FontFamily.EINA04REGULAR,
                letterSpacing: "0.15em",
                fontStyle: "normal",
                fontWeight: 400,
                lineHeight: "17px",
              }}
              color={theme.palette.text.primary}
            >
              {data.plateDriver}
            </Typography>
          )}
          <Box sx={{ display: isDesktop ? "block" : "none" }}>
            {getStatusChip(data, theme)}
          </Box>
        </DivFlexSpaceBetween>
        <DivFlexSpaceBetween sx={{ marginTop: isDesktop ? "16px" : "4px" }}>
          <Typography
            fontSize={16}
            color={theme.palette.text.primary}
            sx={{
              fontFamily: FontFamily.EINA04REGULAR,
              fontWeight: 600,
              size: "14px",
              lineHeight: "19.32px",
            }}
          >
            {data.customerText}
          </Typography>
          {(isMobile || isTablet) && (
            <Box>
              {openDetail && (
                <CloseIcon sx={{
                  height: '16px',
                  width: '16px',
                  fill: theme.palette.background.deliveryCardCloseIcon
                }}
                />
              )}
            </Box>
          )}
        </DivFlexSpaceBetween>
        <DivFlexStart sx={{ marginTop: isDesktop ? "16px" : "4px" }}>
          <Typography
            fontSize={12}
            color={theme.palette.text.primary}
            sx={{
              fontFamily: FontFamily.EINA04REGULAR,
              lineHeight: "16.56px",
              fontWeight: 400,
            }}
          >
            {data.address}
          </Typography>
        </DivFlexStart>

        {openDetail ? (
          <>
            <DivFlexSpaceBetween sx={{ marginTop: "16px" }}>
              <DivFlexStart>
                <CalendarIcon
                  sx={{
                    height: "16px",
                    width: "16px",
                    color: "#A8A8A8",
                    marginRight: "5.67px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: FontFamily.EINA04REGULAR,
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "22.08px",
                  }}
                >
                  {getFormatDate(data.stopStart)}
                </Typography>
              </DivFlexStart>
              <DivFlexStart>
                <ClockIcon
                  sx={{
                    height: "16px",
                    width: "16px",
                    color: "#A8A8A8",
                    marginRight: "5.67px",
                  }}
                />
                <Typography
                  sx={{
                    fontFamily: FontFamily.EINA04REGULAR,
                    fontWeight: 600,
                    fontStyle: "normal",
                    fontSize: "16px",
                    lineHeight: "22.08px",
                  }}
                >
                  {timeStart} - {timeEnd}
                </Typography>
              </DivFlexStart>
            </DivFlexSpaceBetween>
            {(isMobile || isTablet) && (
              <Box>
                {openDetail && (
                  <>

                  </>
                )}
              </Box>
            )}
          </>
        ) : (
          <>
            {data.stopStatus === "Late" ? (
              <DivFlexStart
                sx={{ height: 14, paddingTop: isDesktop ? "8px" : "1px" }}
              >
                <Typography
                  fontSize={10}
                  sx={{
                    fontFamily: FontFamily.EINA04LIGHT,
                    textDecoration: "line-through",
                    ml: 2.2,
                    color: "#C6C6C6",
                  }}
                >
                  {timeStart} - {timeEnd}
                </Typography>
              </DivFlexStart>
            ) : (
              <DivFlexStart sx={{ height: 16 }} />
            )}

            <DivFlexSpaceBetween sx={{ paddingTop: isDesktop ? "" : "1px" }}>
              <DivFlexStart sx={{ mr: 2 }}>
                <ClockIcon
                  color={"#959499"}
                  sx={{
                    fontSize: 12,
                    mr: 0.5,
                  }}
                />
                <Typography
                  fontSize={window.innerWidth < 1274 ? 10 : 14}
                  color={theme.palette.text.primary}
                  sx={{ fontFamily: FontFamily.EINA04SEMIBOLD }}
                >
                  {timeStart} - {timeEnd}
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
                      SPÄTE
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
              {/* {isMobile || isTablet ? (
                ""
              ) : (
                <Typography
                  sx={{
                    fontFamily:FontFamily.EINA04REGULAR",
                    fontStyle: "normal",
                    fontSize: "10px",
                    fontWeight: 300,
                    lineHeight: "13.8px",
                  }}
                >
                  Klick für Details
                </Typography>
              )} */}
              {isDesktop &&
                <Typography
                  sx={{
                    fontFamily: FontFamily.EINA04REGULAR,
                    fontStyle: "normal",
                    fontSize: "10px",
                    fontWeight: 300,
                    lineHeight: "13.8px",
                  }}
                >
                  Klick für Details
                </Typography>
              }
            </DivFlexSpaceBetween>
            {isDesktop ? (
              ""
            ) : (
              <>
                {openDetail ? (
                  ""
                ) : (
                  <DivFlexSpaceBetween sx={{ marginTop: "4px" }}>
                    <DivFlexStart>
                      <CalendarIcon
                        sx={{
                          fontSize: 12,
                          mr: 0.5,
                          ml: 0.1,
                          color: "#959499",
                        }}
                      />
                      <Typography
                        fontSize={10}
                        sx={{
                          fontFamily: FontFamily.EINA04REGULAR,
                          fontWeight: 300,
                          fontStyle: "normal",
                          lineHeight: "13.8px",
                        }}
                      >
                        {getFormatDate(data.stopStart)}
                      </Typography>
                    </DivFlexStart>
                    <Typography
                      fontSize={10}
                      sx={{
                        fontFamily: FontFamily.EINA04REGULAR,
                        fontWeight: 300,
                        fontStyle: "normal",
                        lineHeight: "13.8px",
                      }}
                    >
                      Klick für Details
                    </Typography>
                  </DivFlexSpaceBetween>
                )}
              </>
            )}

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
          </>
        )}
      </RootDeliveryCard>

      {(isMobile || isTablet) && (
        <>
          <Box sx={{ padding: "0px 24px", backgroundColor: theme.palette.background.deliveryCard }}>
            {openDetail && (
              <DivFlexStart sx={{ paddingTop: "16px", paddingBottom: "12px" }}>
                <TextFieldDeliveryCardMenu
                  sx={{ backgroundColor: theme.palette.background.deliveryCardMenuSearchBar, width: "100%" }}
                  onChange={handleSearchByOrderNumberOrPositionName}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment sx={{ padding: "0px" }} position="start">
                        <SearchIcon />
                      </InputAdornment>
                    )
                  }}
                  placeholder="Search Beleg Number or Item Name" />
              </DivFlexStart>
            )}
          </Box>
          {handleCheckItemData() ? (
            <Box sx={{ padding: "0px 24px 16px 0px", backgroundColor: theme.palette.background.deliveryCard }}>
              {openDetail && (
                <DivFlexEnd style={{ zIndex: 1000, position: "relative" }}>
                  <Typography sx={{
                    fontFamily: "Eina04-Regular",
                    fontStyle: "normal",
                    fontWeight: 600, fontSize: "12px",
                    lineHeight: "17px",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                    onClick={() => { setOpenItem([]) }}
                    >Alle verbergen</Typography>
                </DivFlexEnd>
              )}
            </Box>
          ) : (
            <Box sx={{ padding: "0px 24px 16px 0px", backgroundColor: theme.palette.background.deliveryCard }}>
              {openDetail && (
                <DivFlexEnd style={{ zIndex: 1000, position: "relative" }}>
                  <Typography sx={{
                    fontFamily: "Eina04-Regular",
                    fontStyle: "normal",
                    fontWeight: 600, fontSize: "12px",
                    lineHeight: "17px",
                    textDecorationLine: "underline",
                    cursor: "pointer",
                  }}
                    onClick={() => { handleAddAllItem() }}
                  >Alle anzeigen</Typography>
                </DivFlexEnd>
              )}
            </Box>
          )}
          <Box className="deliveryCardGrid" style={{ maxHeight: 380, overflowY: 'scroll', position: "relative" }}>
            {data.orders.map((order, index) => (
              <>
                {openDetail && (
                  <Box sx={{
                    display: 'flex',
                    justifyContent: "space-between",
                    position: "sticky",
                    height: "50px", padding: "0px 24px",
                    alignItems: "center",
                    backgroundColor: theme.palette.background.deliveryCardItemTitle,
                    zIndex: 100,
                    top: 0
                  }}
                    onClick={() => {
                      handleOpenItemList(order.orderNumber)
                    }}
                  >
                    <Typography sx={{
                      fontFamily: "Eina04-Regular",
                      fontStyle: "normal",
                      fontWeight: 400,
                      fontSize: "12px",
                      lineHeight: "17px"
                    }}>{order.orderNumber}</Typography>
                    {openItem.includes(order.orderNumber) ? (<ArrowDropUpIcon />) : (<ArrowDropDownIcon />)}
                  </Box>
                )}
                <Collapse in={openItem.includes(order.orderNumber)} >
                  {order.orderPositions.map((orderPosition, index) => {
                    return (
                      <>
                        <ItemList
                          item={orderPosition}
                          key={index}
                          index={index}
                          itemLength={order.orderPositions.length}
                          isOpenItemList={isOpenItemList}
                        />
                      </>
                    )
                  })}
                </Collapse>
              </>
            ))}

          </Box>
        </>
      )}

    </Box>
  );
};

DeliveryCard.defaultProps = {
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

export default DeliveryCard;
