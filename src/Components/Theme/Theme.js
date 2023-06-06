import {
    createMuiTheme,
    createTheme,
    ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        background: {
            // body
            default: "#ffffff",

            // delivery card
            deliveryCard: "#F3F3F3",
            hoverDeliveryCard: "#F7F5F5",
            clickedDeliveryCard: "#EBEBEB",
            deliveryCardMenu: "#F3F3F3",

            // promo card
            promoCard: "#ffffff",
            promoCardMobile: "#F3F3F3",
            hoverItemList: "#f3f3f3",
            hoverPromoCard: "#f7f5f5",

            // appbar and icon
            appBar: "#EBEBEB",
            iconColor: "#000000",
            title: '#1A1919',
            hoverIconButton: "#F7F5F5",


            // dialog
            dialogBlanket: "rgba(0, 0, 0, 0.3)",
            dialog: "#ffffff",
            headDialog: "#ffffff",
            iconAction: "#000000",

            // loading
            circularLoading: "#262626",

            // form
            borderForm: "#A8A8A8",
            borderFormHover: "#A8A8A8",
            borderFormActive: "#525252",

            // button
            buttonSecondary: "#262626",
            buttonDefault: "#0F62FE",
            buttonActive: "#002D9C",
            buttonHover: "#4589FF",

            // tracking numbercontainer
            borderTrackingNumber: "#979797",

            // link expired
            iconStatus: '#A8A8A8',

            // scroll to top button
            scrollToTop: "#262626",

            // itemlist
            oddItemList: "#E7E7E7",

            // separatorStickyTitle
            separatorTitle: "#6F6F6F",

            //DeliveryCardMenuSearchBar
            deliveryCardMenuSearchBar: "#EBEBEB",
            deliverycardSearchIcon: "#8D8D8D",

            //DeliveryCardMenuItemTitle
            deliveryCardMenuItemTitle: "#F3F3F3",

            //DeliveryCardCloseIcon
            deliveryCardCloseIcon: "#C6C6C6",

            //delivery orders
            deliveryOrderTitle: "#F3F3F3",
            deliveryOrderTitleActive: "#EBEBEB",
            collapseIcon: "#262626",
            deliveryOrderBorderBottom: "rgba(111, 111, 111, 0.3)"
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

            // loading text
            loadingText: '#262626'
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
            deliveryCardMenu: "#393939",

            // promo card
            promoCard: "#262626",
            promoCardMobile: "#393939",
            hoverItemList: "#404040",
            hoverPromoCard: "#4c4c4c",

            // appbar and icon
            appBar: "#353535",
            iconColor: "#e0e0e0",
            title: '#f4f4f4',
            hoverIconButton: "#4C4C4C",

            // dialog
            dialogBlanket: "rgba(0, 0, 0, 0.3)",
            dialog: "#393939",
            headDialog: "#393939",
            iconAction: "#e0e0e0",

            // loading
            circularLoading: "#F4F4F4",

            // form
            borderForm: "#A8A8A8",
            borderFormHover: "#C6C6C6",
            borderFormActive: "#F4F4F4",

            // button
            buttonSecondary: "#ffffff",
            buttonDefault: "#0F62FE",
            buttonActive: "#002D9C",
            buttonHover: "#4589FF",

            // tracking numbercontainer
            borderTrackingNumber: "transparent",

            // link expired
            iconStatus: '#A8A8A8',

            // scroll to top button
            scrollToTop: "#ffffff",

            // itemlist
            oddItemList: "#525252",

            // separatorStickyTitle
            separatorTitle: "#F4F4F4",

            //DeliveryCardMenuSearchBar
            deliveryCardMenuSearchBar: "#737373",
            deliverycardSearchIcon: "#C6C6C6",



            //DeliveryCardMenuItemTitle
            deliveryCardMenuItemTitle: "#393939",

            //DeliveryCardCloseIcon
            deliveryCardCloseIcon: "#8D8D8D",

            //delivery orders
            deliveryOrderTitle: "#393939",
            deliveryOrderTitleActive: "#525252",
            collapseIcon: "#F4F4F4",
            deliveryOrderBorderBottom: "rgba(250, 250, 250, 0.3)"
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

            // loading text
            loadingText: '#F7F5F5'
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
            deliveryCardMenu: "#F3F3F3",

            // promo card
            promoCard: "#ffffff",
            promoCardMobile: "#FCF4D6",
            hoverItemList: "#f3f3f3",
            hoverPromoCard: "#FCF4D6",

            // appbar and icon
            appBar: "#EDDA48",
            iconColor: "#000000",
            title: '#1A1919',
            hoverIconButton: "#F7F5F5",

            // dialog
            dialogBlanket: "rgba(233, 228, 211, 0.3)",
            dialog: "#ffffff",
            headDialog: "#ffffff",
            iconAction: "#000000",

            // loading
            circularLoading: "#F1C21B",

            // form
            borderForm: "#A8A8A8",
            borderFormHover: "#A8A8A8",
            borderFormActive: "#525252",

            // button
            buttonSecondary: "#262626",
            buttonDefault: "#0F62FE",
            buttonActive: "#002D9C",
            buttonHover: "#4589FF",

            // tracking numbercontainer
            borderTrackingNumber: "#979797",

            // link expired
            iconStatus: '#D2A106',

            // scroll to top button
            scrollToTop: "#262626",

            // itemlist
            oddItemList: "#E7E7E7",

            // separatorStickyTitle
            separatorTitle: "#6F6F6F",

            //DeliveryCardMenuSearchBar
            deliveryCardMenuSearchBar: "#EBEBEB",
            deliverycardSearchIcon: "#8D8D8D",

            //delivery orders
            deliveryOrderTitle: "#F3F3F3",
            deliveryOrderTitleActive: "#EBEBEB",
            collapseIcon: "#262626",
            deliveryOrderBorderBottom: "rgba(111, 111, 111, 0.3)"
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

            // loading text
            loadingText: '#262626'
        },
    }
});

export const blueTheme = createTheme({
    palette: {
        background: {
            // body
            default: "#ffffff",

            // delivery card
            deliveryCard: "#F3F3F3",
            hoverDeliveryCard: "#F7F5F5",
            clickedDeliveryCard: "#EBEBEB",
            deliveryCardMenu: "#EBF2FD",

            // promo card
            promoCard: "#ffffff",
            promoCardMobile: "#EBF2FD",
            hoverItemList: "#f3f3f3",
            hoverPromoCard: "#EBF2FD",

            // appbar and icon
            appBar: "#2F6DD2",
            iconColor: "#e0e0e0",
            title: '#F7F5F5',
            hoverIconButton: "#EBF2FD",

            // dialog
            dialogBlanket: "rgba(208, 226, 255, 0.3)",
            dialog: "#ffffff",
            headDialog: "#ffffff",
            iconAction: "#161616",

            // loading
            circularLoading: "#2F6DD2",

            // form
            borderForm: "#A8A8A8",
            borderFormHover: "#A8A8A8",
            borderFormActive: "#525252",

            // button
            buttonSecondary: "#262626",
            buttonDefault: "#0F62FE",
            buttonActive: "#183769",
            buttonHover: "#5285D9",

            // tracking numbercontainer
            borderTrackingNumber: "#979797",

            // link expired
            iconStatus: '#5285D9',

            // scroll to top button
            scrollToTop: "#262626",

            // itemlist
            oddItemList: "#D5E2F6",

            // separatorStickyTitle
            separatorTitle: "#6F6F6F",

            //DeliveryCardMenuSearchBar
            deliveryCardMenuSearchBar: "#EBEBEB",
            deliverycardSearchIcon: "#8D8D8D",

            //delivery orders
            deliveryOrderTitle: "#F3F3F3",
            deliveryOrderTitleActive: "#EBEBEB",
            collapseIcon: "#262626",
            deliveryOrderBorderBottom: "rgba(111, 111, 111, 0.3)"
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

            // loading text
            loadingText: '#262626'
        },
    }
});