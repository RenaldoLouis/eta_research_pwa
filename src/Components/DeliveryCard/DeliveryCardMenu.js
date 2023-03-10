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
import CalendarIcon from "../../assets/icons/CalendarIcon";
import DoneIcon from "../../assets/icons/DoneIcon";

// import components
import ItemList from "../ItemList/ItemList";

// import Reusable Components
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DiscrepancyChip from "../ChipStatus/DiscrepancyChip";

const RootDeliveryCard = styled("div")((props) => ({
  backgroundColor: props.isDesktop
    ? props.data.id === props.deliveryId
      ? props.theme.palette.background.deliveryCard
      : props.isOpenItemList
      ? props.theme.palette.background.deliveryCard
      : props.theme.palette.background.default
    : props.theme.palette.background.deliveryCard,
  padding: props.isDesktop ? 16 : props.openDetail ? "16px 24px 16px 24px" : 16,
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

const getStatusChip = (data, theme) => {
  return (
    <DivFlexStart>
      {data.itemList.some((v) => {
        return v.warning === true;
      }) ? (
        <DiscrepancyChip />
      ) : (
        <></>
      )}

      {data.deliveryStatus === "Done" ? (
        <DivFlexStart sx={{ ml: 0, height: 18 }}>
          <DoneIcon
            color={theme.palette.text.doneIcon}
            sx={{ fontSize: 16, mt: -0.4, marginRight: "6.33px" }}
          />
          <Typography
            fontSize={12}
            color={theme.palette.text.doneText}
            sx={{ fontFamily: "Eina04-Regular" }}
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

const DeliveryCardMenu = (props) => {
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
        {isMobile && (
          <DivFlexSpaceBetween sx={{ mb: 1 }}>
            <Typography
              fontSize={12}
              color={theme.palette.text.primary}
              sx={{ fontFamily: "Eina04-RegularItalic" }}
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
              fontFamily: "Eina 04",
              letterSpacing: "0.15em",
              fontWeight: 400,
              lineHeight: "19px",
              fontStyle: "normal",
            }}
            color={theme.palette.text.primary}
          >
            {data.plateDriver}
          </Typography>
          <Box sx={{ display: isDesktop ? "block" : "none" }}>
            {getStatusChip(data, theme)}
          </Box>
        </DivFlexSpaceBetween>

        <Box sx={{ marginTop: "14px" }}>
          {data?.clientName?.split(",").map((text) => {
            return (
              <Typography
                fontSize={"16px"}
                color={theme.palette.text.primary}
                sx={{
                  fontFamily: "Eina 04",
                  fontWeight: 600,
                  fontStyle: "normal",
                  lineHeight: "22px",
                }}
              >
                {text}
              </Typography>
            );
          })}
        </Box>

        <DivFlexStart>
          <Typography
            fontSize={"16px"}
            color={theme.palette.text.primary}
            sx={{ fontFamily: "Eina04-Regular", marginTop: "16px" }}
          >
            {data.address}
          </Typography>
        </DivFlexStart>

        {data.deliveryStatus === "Late" ? (
          <DivFlexSpaceBetween sx={{ height: 16, pt: 1 }}>
            <Typography
              fontSize={10}
              color={theme.palette.text.primary}
              sx={{
                fontFamily: "Eina04-Light",
                textDecoration: "line-through",
                ml: 2.2,
              }}
            >
              {data.twStart} - {data.twEnd}
            </Typography>
          </DivFlexSpaceBetween>
        ) : (
          <DivFlexStart sx={{ height: 16 }} />
        )}

        <DivFlexSpaceBetween>
          <DivFlexStart>
            <ClockIcon
              color={"#959499"}
              sx={{
                fontSize: "25px",
                marginRight: "9.5px",
                padding: "0px",
                marginTop: "5px",
              }}
            />
            <Typography
              fontSize={"28px"}
              color={theme.palette.text.primary}
              sx={{
                fontFamily: "Eina04-Regular",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "38px",
              }}
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
                    fontFamily: "Eina04-Light",
                    textTransform: "uppercase",
                    mt: 0.1,
                  }}
                >
                  Late
                </Typography>
              </DivFlexStart>
            ) : data.deliveryStatus === "Early" ? (
              <>
                <DivFlexStart sx={{ width: 40 }}>
                  {/* <ArrowDropUpIcon sx={{ width: 20, height: 20, color: '#58d632' }} />
                            <Typography fontSize={10} color={'#31711e'} sx={{ fontFamily: 'Eina04-Light', textTransform: 'uppercase' }}>
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
                        <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Light' }}>
                            {data.date}
                        </Typography>
                    </DivFlexStart> */}
          <DivFlexStart>
            <CalendarIcon
              color={"#959499"}
              sx={{
                marginRight: "9.5px",
                padding: "0px",
                marginTop: "5px",
                fontSize: "25px",
              }}
            />
            <Typography
              fontSize={"28px"}
              color={theme.palette.text.primary}
              sx={{
                fontFamily: "Eina04-Regular",
                fontStyle: "normal",
                fontWeight: 600,
                lineHeight: "38px",
              }}
            >
              {data.date}
            </Typography>
          </DivFlexStart>
        </DivFlexSpaceBetween>

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
            {/* <Typography fontSize={10} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Light' }}>
                            {data.date}
                        </Typography> */}
          </DivFlexStart>
        </DivFlexSpaceBetween>
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

DeliveryCardMenu.defaultProps = {
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

export default DeliveryCardMenu;
