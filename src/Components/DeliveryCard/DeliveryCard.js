import React, { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

// import material component
import { Box, Collapse, Typography } from "@mui/material";

// import AppContext
import { AppContext } from "../../App";

// import Icons
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ClockIcon from "../../assets/icons/ClockIcon";
import DoneIcon from "../../assets/icons/DoneIcon";
import ErrorIcon from "../../assets/icons/ErrorIcon";


// import components
import ItemList from "../ItemList/ItemList";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import DivFlexStart from "../DivFlexStart";
import DiscrepancyChip from "../ChipStatus/DiscrepancyChip";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import DiscrepancyIconChip from "../ChipStatus/DiscrepancyIconChip";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

const RootDeliveryCard = styled("div")((props) => ({
  backgroundColor: props.isDesktop
    ? props.data.id === props.deliveryId
      ? props.theme.palette.background.deliveryCard
      : props.isOpenItemList
        ? props.theme.palette.background.deliveryCard
        : props.theme.palette.background.default
    : props.theme.palette.background.deliveryCard,
  padding: props.isDesktop ? 16 : props.openDetail ? "16px 24px 16px 24px" : 16,
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
      {data.itemList.some((v) => {
        return v.warning === true;
      }) ? (
        width >= 1280 && width <= 1580 ? (
          <DiscrepancyIconChip />
        ) : (
          <DiscrepancyChip />
        )
      ) : (
        <></>
      )}

      {data.deliveryStatus === "Done" ? (
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
  const { totalDelivery, numberOfDeliver, data, isOpenItemList, deliveryId } =
    props;

  const { isMobile, isTablet, isDesktop } = useContext(AppContext);

  // theme color
  const theme = useTheme();

  // local state for open itemlist
  const [openDetail, setOpenDetail] = useState(false);

  useEffect(() => {
    if (totalDelivery === 1) {
      setOpenDetail(true);
    } else {
      setOpenDetail(false);
    }
  }, [totalDelivery]);

  return (
    <Box sx={{ width: openDetail || isDesktop ? "100%" : "calc(100% - 48px)" }}>
      <RootDeliveryCard
        onClick={isDesktop ? undefined : () => setOpenDetail(!openDetail)}
        isDesktop={isDesktop}
        isOpenItemList={isOpenItemList}
        deliveryId={deliveryId}
        data={data}
        openDetail={openDetail}
      >
        {(isMobile || isTablet) && (
          <DivFlexSpaceBetween sx={{ marginBottom: "10px" }}>
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
          </DivFlexSpaceBetween>
        )}
        <DivFlexSpaceBetween
          sx={{ mb: isDesktop ? 0 : undefined, flexWrap: "wrap" }}
        >
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
          <Box sx={{ display: isDesktop ? "block" : "none" }}>
            {getStatusChip(data, theme)}
          </Box>
        </DivFlexSpaceBetween>
        <DivFlexStart sx={{ marginTop: isDesktop ? "16px" : "4px" }}>
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
            {data.clientName}
          </Typography>
        </DivFlexStart>
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
                  {data.date}
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
                  {data.twStart} - {data.twEnd}
                </Typography>
              </DivFlexStart>
            </DivFlexSpaceBetween>
          </>
        ) : (
          <>
            {data.deliveryStatus === "Late" ? (
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
                  {data.twStart} - {data.twEnd}
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
                  fontSize={14}
                  color={theme.palette.text.primary}
                  sx={{ fontFamily: FontFamily.EINA04SEMIBOLD }}
                >
                  {data.twStart} - {data.twEnd}
                </Typography>
                {data.deliveryStatus === "Late" ? (
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
                ) : data.deliveryStatus === "Early" ? (
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
                        {data.date}
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
                            {data.date}
                        </Typography> */}
              </DivFlexStart>
            </DivFlexSpaceBetween>
          </>
        )}
      </RootDeliveryCard>

      <Collapse in={(openDetail && !isDesktop) || isOpenItemList}>
        {data.itemList.map((product, index) => (
          <ItemList
            item={product}
            key={index}
            index={index}
            itemLength={data.itemList.length}
            isOpenItemList={isOpenItemList}
          />
        ))}
      </Collapse>
    </Box>
  );
};

DeliveryCard.defaultProps = {
  data: {
    deliveryStatus: "",
    stopStatus: "",
    date: "-",
    twStart: "-",
    twEnd: "-",
    vehicle: "-",
    tourSorted: "",
    totalStops: 0,
    isCanceled: false,
    itemList: [0, 1, 2, 3],
    address: "-",
    clientName: "-",
    plateDriver: "-",
  },
};

export default DeliveryCard;
