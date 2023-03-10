import React, { useContext, useState } from "react";

// import material components
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Collapse from "@mui/material/Collapse";
import { Box } from "@mui/material";

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import Button from "../ReusableComponents/Button";

import { AppContext } from "../../App";

// import dummy image for promo
import logo from "../../../src/assets/Images/dummy-promo-lemonade.jpg";

// color theme
import { useTheme } from "@mui/material/styles";

// import icons
import ChatIcon from "../../assets/icons/ChatIcon";
import PhoneIcon from "../../assets/icons/PhoneIcon";

const PromoCard = (props) => {
  const { promo, openDetailPromo, isDialog, isMobile } = props;

  const { isTablet, isDesktop } = useContext(AppContext);

  // color theme
  const theme = useTheme();

  // local state
  const [openDetail, setOpenDetail] = useState(openDetailPromo);

  return (
    <Card
      sx={{
        width: openDetail || isDesktop ? "100%" : "calc(100% - 48px)",
        backgroundColor: isMobile
          ? openDetail
            ? theme.palette.background.default
            : theme.palette.background.promoCard
          : isDialog
          ? theme.palette.background.dialog
          : theme.palette.background.promoCard,
        "&:hover": {
          backgroundColor: isMobile
            ? ""
            : isDialog
            ? ""
            : theme.palette.background.hoverDeliveryCard,
        },
        borderRadius: 0,
        cursor: "pointer",
      }}
      elevation={0}
    >
      <CardMedia
        component="img"
        image={promo.image}
        alt="promo"
        sx={{ objectFit: "contain" }}
        onClick={isMobile ? () => setOpenDetail(!openDetail) : undefined}
      />
      <CardContent
        style={{
          padding: isDialog
            ? "40px 75px 16px 75px"
            : openDetail
            ? "16px 24px 8px 24px"
            : "8px 16px 16px 0px",
        }}
      >
        <Typography
          color={theme.palette.text.primary}
          sx={{ fontSize: 18, fontFamily: "Eina04-SemiBold" }}
        >
          {promo.title}
        </Typography>
      </CardContent>

      <Collapse in={openDetail} timeout="auto" unmountOnExit>
        <Box
          sx={{
            padding:
              isDialog === true
                ? "0px 75px 5px 75px"
                : openDetail
                ? "0px 24px 24px 24px"
                : "0px 16px 8px 16px",
            maxHeight: 190,
            overflowY: "scroll",
          }}
        >
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: 12,
              fontFamily: "Eina04-Regular",
            }}
          >
            {promo.detail}
          </Typography>
        </Box>
        <Box
          sx={{
            padding: isMobile
              ? openDetail
                ? "8px 24px 16px 24px"
                : "8px 16px 16px 16px"
              : "30px 75px 30px 75px",
          }}
        >
          {isDialog ? (
            <>
              <DivFlexCenter sx={{ mb: 2 }}>
                <Typography
                  fontSize={12}
                  sx={{
                    fontFamily: "Eina04-SemiBold",
                    color: theme.palette.text.primary,
                  }}
                >
                  <span>
                    {" "}
                    <PhoneIcon
                      color={theme.palette.text.primary}
                      sx={{ fontSize: 16, mr: 0.5, mt: -0.2 }}
                    />{" "}
                  </span>{" "}
                  +62 123 4567 89
                </Typography>
              </DivFlexCenter>

              <Button
                isPromo={true}
                icon={
                  <ChatIcon color={"#F4F4F4"} sx={{ mr: 1, fontSize: 20 }} />
                }
                theme={theme}
              >
                {`Contact Our Sales Rep.`}
              </Button>
            </>
          ) : (
            <>
              <DivFlexCenter sx={{ marginBottom: 2 }}>
                <Typography
                  fontSize={12}
                  sx={{ fontFamily: "Eina04-SemiBold" }}
                  color={theme.palette.text.primary}
                >
                  Contact Our Sales Rep.
                </Typography>
              </DivFlexCenter>
              <DivFlexSpaceBetween>
                <Button height={46} isPromo={true} style={{ width: "48%" }}>
                  <ChatIcon color={"#F4F4F4"} sx={{ fontSize: 20 }} />
                </Button>
                <Button height={46} isPromo={true} style={{ width: "48%" }}>
                  <PhoneIcon color={"#F4F4F4"} sx={{ fontSize: 22 }} />
                </Button>
              </DivFlexSpaceBetween>
            </>
          )}
        </Box>
      </Collapse>
    </Card>
  );
};

PromoCard.defaultProps = {
  promo: {
    image: logo,
    title: "-",
    detail: "---",
  },
};

export default PromoCard;
