import React, { createContext, useState, useMemo, useEffect } from "react";
import "./App.css";
import { PwaContextProvider } from "./context/PwaContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { useMediaQuery } from "@mui/material";

// import color
import Color from "./Components/Constants/Color";


// import page
import TemporaryLandingPage from "./Pages/TemporaryLandingPage";
import DeliveryPage from "./Pages/DeliveryPage/DeliveryPage";
import Verify from "./Pages/Verify";


//import Components
import AppBarResponsive from "./Components/AppBarResponsive/AppBarResponsive";
// import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';
import InputTrackingNumber from "./Pages/InputTrackingNumber/InputTrackingNumber";

// import Dialog
import LoginDialog from "./Components/DialogComponent/LoginDialog";
import OtpDialog from "./Components/DialogComponent/OtpDialog/OtpDialog";
import EmailsListDialog from "./Components/DialogComponent/EmailsListDialog";
import AddNewEmailDialog from "./Components/DialogComponent/AddNewEmailDialog";
import DeleteEmailDialog from "./Components/DialogComponent/DeleteEmailDialog";
import EditEmailDialog from "./Components/DialogComponent/EditEmailDialog";
import LogoutConfirmationDialog from "./Components/DialogComponent/LogoutConfirmationDialog";

// Import Dump data
import { promoDummyData } from "./dump-data";
import { deliveryDummyData } from "./dump-data";
import { emailDummyList } from "./dump-data";

// Dark and Light Mode
import {
  createMuiTheme,
  createTheme,
  ThemeProvider,
} from "@mui/material/styles";
import { CssBaseline } from "@mui/material";

// AppContext
export const AppContext = createContext({});

const Main = (props) => {
  return (
    <>
      <AppBarResponsive />

      {/* ======== Global Dialog Component ======== */}
      <LoginDialog />
      <LogoutConfirmationDialog />
      <OtpDialog />

      <EmailsListDialog />
      <AddNewEmailDialog />
      <DeleteEmailDialog />
      <EditEmailDialog />
      {/* ======== Global Dialog Component ======== */}


      <Routes>
        <Route path="*" element={<TemporaryLandingPage />} />
        <Route path="verify" element={<Verify />} />
        <Route path="delivery" element={<DeliveryPage />} />
        <Route path="input-tracking-number" element={<InputTrackingNumber />} />
      </Routes>
    </>
  );
};

function App() {


  /* ==================== Dark and Light Mode ==================== */
  const [mode, setMode] = useState("light");
  const handleChangeTheme = () => {
    if (localStorage.getItem("mode") === "light") {
      setMode("dark");
      localStorage.setItem("mode", "dark");
    } else if (localStorage.getItem("mode") === "dark") {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  };

  useEffect(() => {
    let activeMode = localStorage.getItem("mode");
    if (activeMode) {
      setMode(activeMode);
    } else {
      setMode("light");
      localStorage.setItem("mode", "light");
    }
  }, [mode]);

  const theme = useMemo(
    () =>
      createTheme({
        breakpoints: {
          values: {
            xs: 0,
            sm: 600,
            md: 1280,
            lg: 1280,
            xl: 1530,
          },
        },
        palette: {
          mode,
          ...(mode === "light"
            ? {
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
            : {
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
            }),
        },
      }),
    [mode]
  );

  /* ==================== End Of Dark and Light Mode ==================== */

  /* ================== Data ===================== */

  const [promoNewsData, setPromoNewsData] = useState(promoDummyData)

  const [deliveryData, setDeliveryData] = useState(deliveryDummyData)

  const [emailList, setEmailList] = useState(emailDummyList);


  /* =====================EOL Data ===================== */


  // dump link status
  const [isLinkExpired, setIsLinkExpired] = useState(false);


  /* =========Breakpoint device============ */
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.down("md"));
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  /* =========EOL Breakpoint device============ */


  /* =========Scrolling State============ */

  // handle scroll page delivery section
  const [scrollDown, setScrollDown] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (document.getElementById("titleDeliveryPage")) {
      if (
        document.documentElement.scrollTop >=
        document.getElementById("titleDeliveryPage").clientHeight - 50
      ) {
        setScrollDown(true);
      } else {
        setScrollDown(false);
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);

  // handle scroll page to promo section
  const [isScrollToPromo, setIsScrollToPromo] = useState(false);

  const scrollToPromo = () => {
    // if (!isLinkExpired) {
    if (document.getElementById("deliverSection")) {
      if (
        document.documentElement.scrollTop >=
        document.getElementById("deliverSection").clientHeight - 100
      ) {
        setIsScrollToPromo(true);
      } else {
        setIsScrollToPromo(false);
      }
    }
  };
  window.addEventListener("scroll", scrollToPromo);

  const goToPromo = () => {
    document.getElementById("promo").scrollIntoView({ behavior: "smooth" });
  };
  /* =========EOL Scrolling State============ */



  /** ===============Login Dialog =============== */
  const [openLoginDialog, setOpenLoginDialog] = useState(false);

  const handleOpenLoginDialog = () => {
    setOpenLoginDialog(true);
  };
  const handleCloseLoginDialog = () => {
    setOpenLoginDialog(false);
  };

  /** ===============EOL Login Dialog =============== */



  /** ==========================OTP Dialog ========================== */
  const [openOtpDialog, setOpenOtpDialog] = useState(false);

  const [sendOtp, setSendOtp] = useState(false);

  const handleButtonOtpDialog = () => {
    setOpenOtpDialog(true);
    setSendOtp(true);
    handleCloseLoginDialog();
  };

  const handleCloseOtpDialog = () => {
    setOpenOtpDialog(false);
    setSendOtp(false);
  };

  /** ==========================EOL OTP Dialog ========================== */



  /** ==========================Email List Dialog ========================== */
  const [emailListDialog, setEmailListDialog] = useState(false);

  const handleEmailListDialog = () => {
    setEmailListDialog(!emailListDialog);
  };
  /** ==========================EOL Email List Dialog ========================== */


  /** ==========================State for dialog List Dialog ========================== */

  // dialog for add new email list
  const [addNewEmailDialog, setAddNewEmailDialog] = useState(false);

  // dialog for delete email
  const [deleteEmailDialog, setDeleteEmailDialog] = useState(false);

  // dialog for edit email
  const [editEmailDialog, setEditEmailDialog] = useState(false);

  /** ==========================EOL State for dialog List Dialog ========================== */


  /** ==========================Add new Email ========================== */
  // open dialog for add new email
  const handleOpenAddNewEmailDialog = () => {
    handleEmailListDialog();
    setAddNewEmailDialog(true);
  };
  // close dialog for add new email
  const handleCloseNewEmailDialog = () => {
    setAddNewEmailDialog(false);
    handleEmailListDialog();
  };
  // add new email function
  const addNewEmail = (email) => {
    email.id = emailList.length + 1;
    setEmailList([...emailList, email]);
  };
  /** ==========================Eol Add new Email ========================== */


  /** ==========================Delete Email ========================== */
  // select email for deleted and open dialog
  const handleSetCurrentEmailForDelete = (email) => {
    setCurrnetEmail(email);
    setEmailListDialog(false);
    setEditEmailDialog(false);
    setDeleteEmailDialog(true);
  };
  // delete selected email
  const deleteNewEmail = (id) => {
    setEmailList(emailList.filter((email) => email.id !== id));
    setDeleteEmailDialog(false);
    handleEmailListDialog();
  };
  // close dialog for delete email
  const handleCloseDeleteEmailDialog = () => {
    setDeleteEmailDialog(false);
    handleEmailListDialog();
  };
  /** ==========================EOL Delete Email ========================== */


  /** ==========================Update or Edit Email ========================== */
  // selected email for edit or delete
  const [currentEmail, setCurrnetEmail] = useState({
    id: null,
    email: "",
    roles: "",
  });

  // select email for updated and open dialog
  const handleSetCurrentEmailForEdit = (email) => {
    setCurrnetEmail(email);
    setEmailListDialog(false);
    setDeleteEmailDialog(false);
    setEditEmailDialog(true);
  };
  // update selected email
  const editNewEmail = (newEmail) => {
    setEmailList(
      emailList.map((email) =>
        email.id == currentEmail.id ? newEmail : email
      )
    );
    setDeleteEmailDialog(false);
    setEditEmailDialog(false);
    setEmailListDialog(true);
  };
  // close dialog for update email
  const handleCloseEditEmailDialog = () => {
    setEditEmailDialog(false);
    handleEmailListDialog();
  };
  /** ==========================Eol Update or Edit Email ========================== */

  /** ==========================Dummy State for Authentication========================== */
  const [dumpLoginState, setDumpLoginState] = useState(false);
  const [dumpAuthrorization, setDumpAuthrorization] = useState("superadmin");

  const handleLogin = () => {
    setDumpLoginState(true);
  };

  /** ===============Logout Dialog =============== */
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(false);
    setDumpLoginState(false);
  };

  /** ===============EOL Logout Dialog =============== */

  /** ==========================EOL Dummy State for Authentication========================== */

  const AppContextValue = {
    mode,
    handleChangeTheme,

    isMobile,
    isTablet,
    isDesktop,
    promoNewsData,
    emailList,
    deliveryData,
    isLinkExpired,

    scrollDown,
    scrollToTop,

    isScrollToPromo,
    goToPromo,

    openLoginDialog,
    handleOpenLoginDialog,
    handleCloseLoginDialog,

    openLogoutDialog,
    handleOpenLogoutDialog,
    handleCloseLogoutDialog,

    sendOtp,
    openOtpDialog,
    handleButtonOtpDialog,
    handleCloseOtpDialog,

    emailListDialog,
    handleEmailListDialog,

    addNewEmailDialog,
    handleOpenAddNewEmailDialog,
    handleCloseNewEmailDialog,
    addNewEmail,

    currentEmail,
    deleteNewEmail,
    handleSetCurrentEmailForDelete,

    deleteEmailDialog,
    handleCloseDeleteEmailDialog,

    editEmailDialog,
    handleSetCurrentEmailForEdit,

    editNewEmail,
    handleCloseEditEmailDialog,

    dumpLoginState,
    dumpAuthrorization,
    handleLogin,
    handleLogout,
  };

  return (
    <>
      <PwaContextProvider>
        <AppContext.Provider value={AppContextValue}>
          <ThemeProvider theme={theme}>
            <CssBaseline />
            <Router>
              <ToastContainer
                autoClose={3000}
                hideProgressBar={true}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnHover={false}
                pauseOnFocusLoss={false}
                position="bottom-left"
              />
              <Main isLinkExpired={isLinkExpired} />
            </Router>
          </ThemeProvider>
        </AppContext.Provider>
      </PwaContextProvider>
    </>
  );
}

export default App;
