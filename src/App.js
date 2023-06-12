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
import EmailNotificationDialog from "./Components/DialogComponent/EmailNotificationDialog";
import AddNewEmailDialog from "./Components/DialogComponent/AddNewEmailDialog";
import DeleteEmailDialog from "./Components/DialogComponent/DeleteEmailDialog";
import EditEmailDialog from "./Components/DialogComponent/EditEmailDialog";
import LogoutConfirmationDialog from "./Components/DialogComponent/LogoutConfirmationDialog";
import LoadingDialog from "./Components/DialogComponent/LoadingDialog";

// Import Dump data
import { promoDummyData } from "./dump-data";
import { deliveryDummyData } from "./dump-data";
import { emailDummyList } from "./dump-data";

// AppContext
export const AppContext = createContext({});

const Main = (props) => {
  const { openDialog } = props;
  return (
    <>
      <AppBarResponsive />

      {/* ======== Global Dialog Component ======== */}
      {props.isLoadingLogin && (<LoadingDialog />)}

      <LoginDialog isOpen={openDialog === 'login'} />
      <LogoutConfirmationDialog isOpen={openDialog === 'logout'} />
      <OtpDialog isOpen={openDialog === 'otp'} />

      <EmailNotificationDialog isOpen={openDialog === 'emailNotification'} />
      <EmailsListDialog isOpen={openDialog === 'emailList'} />
      <AddNewEmailDialog isOpen={openDialog === 'addNewEmail'} />
      <DeleteEmailDialog isOpen={openDialog === 'deleteEmail'} />
      <EditEmailDialog isOpen={openDialog === 'editEmail'} />
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

  /** ======== State for navigation drawer ======== */
  const [anchorNavigationDrawerEl, setAnchorNavigationDrawerEl] = useState(null);
  const isNavigationDrawerOpen = Boolean(anchorNavigationDrawerEl)

  const handleOpenNavigationDrawer = event => {
    setAnchorNavigationDrawerEl(event.currentTarget);
  }

  const handleCloseNavigationDrawer = () => {
    setAnchorNavigationDrawerEl(null);
  };

  /** ======== EOL state for navigation drawer ======== */

  /** ===============Dialog =============== */
  const [openDialog, setOpenDialog] = useState('');

  const handleOpenDialog = (dialogName) => {
    setAnchorNavigationDrawerEl(null);
    setOpenDialog(dialogName);
  }

  const handleCloseDialog = () => {
    setOpenDialog('');
  }

  /** ===============EOL Dialog =============== */


  /** ==========================OTP Dialog ========================== */
  const [sendOtp, setSendOtp] = useState(false);

  const handleButtonOtpDialog = () => {
    handleOpenDialog('otp');
    setSendOtp(true);
  };

  const handleCloseOtpDialog = () => {
    handleCloseDialog();
    setSendOtp(false);
  };
  /** ==========================EOL OTP Dialog ========================== */

  /** ==========================Add new Email ========================== */
  // add new email function
  const addNewEmail = (email) => {
    email.id = emailList.length + 1;
    setEmailList([...emailList, email]);
  };
  /** ==========================Eol Add new Email ========================== */


  /** ==========================Delete Email ========================== */
  // select email for deleted and open dialog
  const handleSetCurrentEmailForDelete = (email) => {
    setCurrentEmail(email);
    handleOpenDialog('deleteEmail');
  };
  // delete selected email
  const deleteNewEmail = (id) => {
    setEmailList(emailList.filter((email) => email.id !== id));
    handleOpenDialog('emailList');
  };
  /** ==========================EOL Delete Email ========================== */


  /** ==========================Update or Edit Email ========================== */
  // selected email for edit or delete
  const [currentEmail, setCurrentEmail] = useState({
    id: null,
    email: "",
    roles: "",
  });

  // select email for updated and open dialog
  const handleSetCurrentEmailForEdit = (email) => {
    setCurrentEmail(email);
    handleOpenDialog('editEmail');
  };
  // update selected email
  const editNewEmail = (newEmail) => {
    setEmailList(
      emailList.map((email) =>
        email.id == currentEmail.id ? newEmail : email
      )
    );
    handleOpenDialog('emailList');
  };
  /** ==========================Eol Update or Edit Email ========================== */


  /** ========================== Authentication and Authorization ========================== */
  const [isLogin, setIsLogin] = useState(false);

  const [isLoadingLogin, setIsLoadingLogin] = useState(false)

  const [userRole, setUserRole] = useState(UserRole.SUPERADMIN);

  const handleLogin = () => {
    setIsLogin(true);
  };
  /** ========================== EOL Authentication and Authorization ========================== */


  /** ===============Logout =============== */

  const handleLogout = () => {
    handleCloseDialog();
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

    setIsLoadingLogin,

    anchorNavigationDrawerEl,
    setAnchorNavigationDrawerEl,
    isNavigationDrawerOpen,
    handleOpenNavigationDrawer,
    handleCloseNavigationDrawer,

    openDialog,
    handleOpenDialog,
    handleCloseDialog,

    sendOtp,
    handleButtonOtpDialog,
    handleCloseOtpDialog,

    addNewEmail,

    currentEmail,
    deleteNewEmail,
    handleSetCurrentEmailForDelete,

    handleSetCurrentEmailForEdit,

    editNewEmail,

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
              <Main openDialog={openDialog} isLoadingLogin={isLoadingLogin} />
            </Router >
          </ThemeProvider >
        </AppContext.Provider >
      </PwaContextProvider >
    </>
  );
}

export default App;
