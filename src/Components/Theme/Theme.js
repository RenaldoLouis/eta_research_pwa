import {
    createMuiTheme,
    createTheme,
    ThemeProvider,
  } from "@mui/material/styles";
  import { CssBaseline } from "@mui/material";

export const ligthTheme = createTheme({
    palette: {
        background: {
            // body
            default: "#ffffff",

            // delivery card
            deliveryCard: "#F3F3F3",
            hoverDeliveryCard: "#F7F5F5",
            clickedDeliveryCard: "#EBEBEB",

            // promo card
            promoCard: "#ffffff",
            hoverItemList: "#f3f3f3",
            hoverPromoCard: "#f7f5f5",

            // appbar and icon
            appBar: "#ebebeb",
            iconColor: "#000000",

            // dialog
            dialog: "#ffffff",
            headDialog: "#ffffff",

            // form
            borderForm: "#A8A8A8",
            borderFormHover: "#A8A8A8",
            borderFormActive: "#525252",

            // button
            buttonSecondary: "#262626",

            // tracking numbercontainer
            borderTrackingNumber: "#979797",

            // scroll to top button
            scrollToTop: "#262626",

            // itemlist
            oddItemList: "#E7E7E7",

            // separatorStickyTitle
            separatorTitle: "#6F6F6F",
        },
        text: {
            primary: "#1A1919",
            heading1: "#1A1919",
            highlithText: "#000000",

            // text for chip delivery card
            doneText: "#6F6F6F",
            doneIcon: "#A8A8A8",

            // button
            buttonSecondary: "#ffffff",

            // text in dialog
            dialogHeadingText: "#1A1919",
            emailListText: "#000000",
            inputText: "#8D8D8D",
            inputTextActive: "#1A1919",
            emailListRole: "#909090",
        },
    }
});

export const darkTheme = createTheme({
    palette: {
        background: {
            // body
            default: "#262626",

            // delivery card
            deliveryCard: "#393939",
            hoverDeliveryCard: "#4C4C4C",
            clickedDeliveryCard: "#1F2020",

            // promo card
            promoCard: "#262626",
            promoCardMobile: "#393939",
            hoverItemList: "#404040",
            hoverPromoCard: "#4c4c4c",

            // appbar and icon
            appBar: "#353535",
            iconColor: "#e0e0e0",

            // dialog
            dialog: "#393939",
            headDialog: "#393939",

            // form
            borderForm: "#A8A8A8",
            borderFormHover: "#C6C6C6",
            borderFormActive: "#F4F4F4",

            // button
            buttonSecondary: "#ffffff",

            // tracking numbercontainer
            borderTrackingNumber: "transparent",

            // scroll to top button
            scrollToTop: "#ffffff",

            // itemlist
            oddItemList: "#525252",

            // separatorStickyTitle
            separatorTitle: "#F4F4F4",
        },
        text: {
            primary: "#f4f4f4",
            heading1: "#f4f4f4",
            highlithText: "#ffffff",

            // text for chip delivery card
            doneText: "#FFFFFF",
            doneIcon: "#A8A8A8",

            // button
            buttonSecondary: "#262626",

            // text dialog
            dialogHeadingText: "#e0e0e0",
            emailListText: "#f4f4f4",
            inputText: "#e0e0e0",
            inputTextActive: "#FFFFFF",
            emailListRole: "#ffffff",
        },
    }
});

export const yellowTheme = createTheme({
    palette: {
        background: {
            // body
            default: "#ffffff",

            // delivery card
            deliveryCard: "#F3F3F3",
            hoverDeliveryCard: "#F7F5F5",
            clickedDeliveryCard: "#EBEBEB",

            // promo card
            promoCard: "#ffffff",
            hoverItemList: "#f3f3f3",
            hoverPromoCard: "#f7f5f5",

            // appbar and icon
            appBar: "#EDDA48",
            iconColor: "#000000",

            // dialog
            dialog: "#ffffff",
            headDialog: "#ffffff",

            // form
            borderForm: "#A8A8A8",
            borderFormHover: "#A8A8A8",
            borderFormActive: "#525252",

            // button
            buttonSecondary: "#262626",

            // tracking numbercontainer
            borderTrackingNumber: "#979797",

            // scroll to top button
            scrollToTop: "#262626",

            // itemlist
            oddItemList: "#E7E7E7",

            // separatorStickyTitle
            separatorTitle: "#6F6F6F",
        },
        text: {
            primary: "#1A1919",
            heading1: "#1A1919",
            highlithText: "#000000",

            // text for chip delivery card
            doneText: "#6F6F6F",
            doneIcon: "#A8A8A8",

            // button
            buttonSecondary: "#ffffff",

            // text in dialog
            dialogHeadingText: "#1A1919",
            emailListText: "#000000",
            inputText: "#8D8D8D",
            inputTextActive: "#1A1919",
            emailListRole: "#909090",
        },
    }
});