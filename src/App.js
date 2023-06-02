import React, { createContext, useState, useMemo, useEffect } from "react";

import "./App.css";

import { PwaContextProvider } from "./context/PwaContext";

import { ToastContainer } from "react-toastify";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import Material
import { useMediaQuery } from "@mui/material";
import { CssBaseline } from "@mui/material";

//Import Styles
import { createTheme, ThemeProvider, } from "@mui/material/styles";

// import Page
import TemporaryLandingPage from "./Pages/TemporaryLandingPage";
import DeliveryPage from "./Pages/DeliveryPage/DeliveryPage";
import PageNotFound from "./Pages/PageNotFound";
import Verify from "./Pages/Verify";

//import Components
import AppBarResponsive from "./Components/AppBarResponsive/AppBarResponsive";
import TrackingPage from "./Pages/TrackingPage/TrackingPage";

// import Theme
import { lightTheme, darkTheme, yellowTheme, blueTheme } from "./Components/Theme/Theme";

// import Constans
import { ColorTheme } from "./Constants/ColorTheme";
import { UserRole } from './Constants/UserRole'
import { UrlPage } from "./Constants/UrlPage";

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
        <Route path="*" element={<PageNotFound />} />
        <Route path={UrlPage.VERIFY} element={<Verify />} />

        <Route path={`/:stopNumber`} element={<DeliveryPage />} />
        <Route path={UrlPage.TRACKINGPAGE} element={<TrackingPage />} />
      </Routes>
    </>
  );
};


function App() {

  /* ==================== Change Theme ==================== */
  const [mode, setMode] = useState(ColorTheme.LIGHT);

  const handleChangeTheme = (theme) => {
    localStorage.setItem("mode", theme);
    setMode(theme)
  };

  useEffect(() => {
    let activeMode = localStorage.getItem("mode");
    if (activeMode) {
      setMode(activeMode);
    } else {
      setMode(ColorTheme.LIGHT);
      localStorage.setItem("mode", ColorTheme.LIGHT);
    }
  }, [mode]);
  /* ==================== End Of Change Theme  ==================== */

  /* ================== Data ===================== */
  const [promoNewsData, setPromoNewsData] = useState(promoDummyData)

  const [emailList, setEmailList] = useState(emailDummyList);
  /* =====================EOL Data ===================== */


  /* ================== Link Status ===================== */
  const [isLinkExpired, setIsLinkExpired] = useState(false);
  /* ================== EOL Link Status ===================== */


  /* =========Breakpoint device============ */
  const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 900,
        lg: 1200,
        xl: 1536,
      },
    },
  });
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const isTablet = useMediaQuery(theme.breakpoints.down("lg"));
  const isMobile = useMediaQuery(theme.breakpoints.only("xs"));
  /* =========EOL Breakpoint device============ */


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


  /** ========================== Authentication and Authorization ========================== */
  const [isLogin, setIsLogin] = useState(false);

  const [userRole, setUserRole] = useState(UserRole.SUPERADMIN);

  const handleLogin = () => {
    setIsLogin(true);
  };
  /** ========================== EOL Authentication and Authorization ========================== */


  /** ===============Logout =============== */
  const [openLogoutDialog, setOpenLogoutDialog] = useState(false);

  const handleOpenLogoutDialog = () => {
    setOpenLogoutDialog(true);
  };

  const handleCloseLogoutDialog = () => {
    setOpenLogoutDialog(false);
  };

  const handleLogout = () => {
    setOpenLogoutDialog(false);
    setIsLogin(false);
  };
  /** ===============EOL Logout =============== */


  /* ================== Handle Scrolling ===================== */
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
        document.getElementById("deliverSection").clientHeight - 110
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
  /* ================== EOL Handle Scrolling ===================== */


  const AppContextValue = {
    mode,
    handleChangeTheme,

    isMobile,
    isTablet,
    isDesktop,
    promoNewsData,
    emailList,
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

    isLogin,
    userRole,
    handleLogin,
    handleLogout,
  };

  return (
    <>
      <PwaContextProvider>
        <AppContext.Provider value={AppContextValue}>
          <ThemeProvider theme={mode == ColorTheme.DARK ? darkTheme : mode == ColorTheme.YELLOW ? yellowTheme : mode == ColorTheme.BLUE ? blueTheme : lightTheme}>
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
              <Main />
            </Router>
          </ThemeProvider>
        </AppContext.Provider>
      </PwaContextProvider>
    </>
  );
}

export default App;
