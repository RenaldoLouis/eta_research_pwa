import React, { useState, useContext } from "react";
import { styled } from "@mui/material/styles";

// import material Component
import { Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import Collapse from "@mui/material/Collapse";

import { AppContext } from "../../App";

// import Icons
import ErrorIcon from "../../assets/icons/ErrorIcon";

// import  component
import DivFlexStart from "../DivFlexStart";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

// import theme color
import { useTheme } from "@mui/material/styles";

const ItemSubList = styled(ListItemButton)((props) => ({
  marginLeft: "14px",
  height: "40px",
  ":hover": {
    cursor: "default",
  },
}));

const ItemList = (props) => {
  const { isMobile, isTablet, isDesktop } = useContext(AppContext);

  const { item, index, itemLength, isOpenItemList } = props;

  // color theme
  const theme = useTheme();

  // local state
  const [open, setOpen] = useState(true);

  const handleClickExpandList = () => {
    setOpen(!open);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          borderBottom:
            index === itemLength - 1
              ? ""
              : `1px solid ${theme.palette.background.separatorTitle}`,
          background: isDesktop
            ? isOpenItemList
              ? theme.palette.background.deliveryCardMenu
              : theme.palette.background.default
            : theme.palette.background.deliveryCardMenu,
          paddingLeft: isDesktop ? "0px" : 1,
          paddingRight: isDesktop ? "0px" : 1,
          marginRight: isDesktop ? "16px" : "",
          marginLeft: isDesktop ? "16px" : "",
        }}
      >
        <ListItemButton
          onClick={item.warning ? handleClickExpandList : undefined}
          sx={{
            "&:hover": {
              backgroundColor: "transparent",
              cursor: !item.warning ? "default" : "",
            },
          }}
          disableRipple
        >
          <DivFlexSpaceBetween sx={{ width: "100%" }}>
            <DivFlexStart>
              <Typography
                sx={{ fontSize: 12, fontFamily: FontFamily.EINA04REGULAR }}
                color={item.warning ? "#da1e28" : theme.palette.text.primary}
              >
                {item.productName}
              </Typography>
              {item.warning && (
                <ErrorIcon sx={{ color: "#da1e28", fontSize: 14 }} />
              )}
            </DivFlexStart>
            <Typography
              sx={{ fontSize: 12, fontFamily: FontFamily.EINA04REGULAR }}
              color={item.warning ? "#da1e28" : theme.palette.text.primary}
            >
              {`${item.amount} ${item.unit}`}
            </Typography>
          </DivFlexSpaceBetween>
        </ListItemButton>
        {item.warning && (
          <>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <ItemSubList
                sx={{
                  backgroundColor: theme.palette.background.oddItemList,
                  "&:hover": {
                    backgroundColor: theme.palette.background.oddItemList,
                  },
                }}
                disableRipple
              >
                <DivFlexSpaceBetween sx={{ width: "100%" }}>
                  <Typography
                    sx={{ fontSize: 12, fontFamily: FontFamily.EINA04REGULAR }}
                    color={theme.palette.text.primary}
                  >
                    On Truck
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, fontFamily: FontFamily.EINA04REGULAR }}
                    color={theme.palette.text.primary}
                  >
                    {`${item.onTruck} KL`}
                  </Typography>
                </DivFlexSpaceBetween>
              </ItemSubList>
              <ItemSubList
                sx={{ "&:hover": { backgroundColor: "transparent" } }}
                disableRipple
              >
                <DivFlexSpaceBetween sx={{ width: "100%" }}>
                  <Typography
                    sx={{ fontSize: 12, fontFamily: FontFamily.EINA04REGULAR }}
                    color={theme.palette.text.primary}
                  >
                    Ordered
                  </Typography>
                  <Typography
                    sx={{ fontSize: 12, fontFamily: FontFamily.EINA04REGULAR }}
                    color={theme.palette.text.primary}
                  >
                    {`${item.ordered} KL`}
                  </Typography>
                </DivFlexSpaceBetween>
              </ItemSubList>
            </Collapse>
          </>
        )}
      </List>
    </>
  );
};

export default ItemList;
