import React, { createContext, useState, useMemo, useEffect } from 'react';
import './App.css';
import { PwaContextProvider } from "./context/PwaContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from './Pages/Login';
import Verify from './Pages/Verify';
import PublicRoute from './PublicRoute';
import { useMediaQuery } from "@mui/material";


// Dummy 
import logo from '../src/assets/Images/dummy-promo-lemonade.jpg'

//import Components
import AppBarResponsive from './Components/AppBarResponsive/AppBarResponsive';
import ScrollToTopButton from './Components/ScrollToTopButton/ScrollToTopButton';
import InputTrackingNumber from './Components/InputTrackingNumber/InputTrackingNumber';

// import Dialog
import LoginDialog from './Components/DialogComponent/LoginDialog';
import OtpDialog from './Components/DialogComponent/OtpDialog/OtpDialog'
import EmailsListDialog from './Components/DialogComponent/EmailsListDialog';
import AddNewEmailDialog from './Components/DialogComponent/AddNewEmailDialog';
import DeleteEmailDialog from './Components/DialogComponent/DeleteEmailDialog';
import EditEmailDialog from './Components/DialogComponent/EditEmailDialog';


// import page
import DeliveryPage from './Pages/DeliveryPage/DeliveryPage';
import LinkExpiredStatus from './Components/LinkExpiredStatus/LinkExpiredStatus';


// Dark and Light Mode
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';

// AppContext
export const AppContext = createContext({});


const Main = (props) => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="*" element={<PublicRoute />} />
      <Route element={<AppBarResponsive />} >
        <Route element={<LoginDialog />}>
          <Route element={<OtpDialog />}>
            <Route element={<EmailsListDialog />}>
              <Route element={<AddNewEmailDialog />} >
                <Route element={<DeleteEmailDialog />} >
                  <Route element={<EditEmailDialog />}>
                    {/* <Route element={<OtpSendStatus />} > */}
                    <Route path="/delivery" element={props.isLinkExpired ? <InputTrackingNumber /> : <DeliveryPage />} />
                    <Route path="/inputTrackingNumber" element={<InputTrackingNumber />} />
                    {/* <Route path='/linkExpired' element={<LinkExpiredStatus /> }/> */}
                  </Route>
                </Route>
              </Route>
            </Route>
          </Route>
        </Route>
        {/* </Route> */}
      </Route>
    </Routes >
  );
}


function App() {

  /* ==================== Dark and Light Mode ==================== */
  const [mode, setMode] = useState('light')
  const handleChangeTheme = () => {
    if (localStorage.getItem('mode') === "light") {
      setMode("dark");
      localStorage.setItem('mode', "dark")

    } else if (localStorage.getItem('mode') === "dark") {
      setMode("light");
      localStorage.setItem('mode', "light")
    }
  };



  useEffect(() => {
    let activeMode = localStorage.getItem('mode')
    if (activeMode) {
      setMode(activeMode)
    } else {
      setMode('light')
      localStorage.setItem('mode', "light")
    }
  }, [mode])



  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          ...(mode === "light"
            ? {
              background: {
                default: "#ffffff",
                deliveryCard: '#f3f3f3',
                promoCard: '#f3f3f3',
                hoverItemList: '#f3f3f3',
                scrollToTop: '#262626',
                appBar: '#ebebeb',
                itemListDesktop: '#ffffff',
                hoverDeliveryCard: '#f7f5f5'
              },
              text: {
                primary: '#626262',
                secondary: '#2b2b2b',
                text3: '#fafafa',
                text4: '#1a1919',
                text5: '#2b2b2b',
                heading1: '#959499',
                resendOtp: '#b4b4b4'
              },
            }
            : {
              background: {
                default: "#000000",
                deliveryCard: '#2b2b2b',
                promoCard: '#2b2b2b',
                hoverItemList: '#404040',
                scrollToTop: '#ffffff',
                appBar: '#ffffff',
                itemListDesktop: '#363636',
                hoverDeliveryCard: '#363636'
              },
              text: {
                primary: "#fff",
                secondary: '#fff',
                text3: '#fafafa',
                text4: '#ffffff',
                text5: '#ffffff',
                heading1: '#959499',
                resendOtp: '#ffffff'
              }
            })
        }
      }),
    [mode]
  );

  /* ==================== End Of Dark and Light Mode ==================== */

  const [warning, setWarning] = useState(false)



  /* ==================Dummy Data ===================== */

  const promoDumpData = [
    {
      id: 1,
      image: logo,
      title: 'Lemonade Promo November 2021',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 2,
      image: logo,
      title: 'Example of very long headline for a Promo Lemonade Promo November',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 3,
      image: logo,
      title: 'Lemonade Promo January 2022',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

    },
    {
      id: 4,
      image: logo,
      title: 'Lemonade Promo February 2022',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
  ]

  const deliveryDumpData = [
    {
      id: 1,
      deliveryStatus: 'Late',
      date: 'Mon, 19 Jan 2021',
      twStart: '11.00',
      twEnd: '11.00',
      vehicle: 'BCY-1111',
      tourSorted: '',
      totalStops: 0,
      isCanceled: false,
      products: [0, 1, 2],
      address: 'Lindenstraße 6, 14467 Potsdam, Germany',
      clientName: 'Genossenschaft Migros Zürich',
      plateDriver: '1234567890AB',
      itemList: [
        {
          productName: 'Product Name 1',
          amount: 12,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: true
        },
        {
          productName: 'Product Name 2',
          amount: 10,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: false
        },
        {
          productName: 'Product Name 3',
          amount: 12,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: true
        },
        {
          productName: 'Product Name 4',
          amount: 10,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: false
        },
      ]
    },

    {
      id: 2,
      deliveryStatus: 'Done',
      date: 'Mon, 20 Jan 2021',
      twStart: '11.00',
      twEnd: '11.00',
      vehicle: 'BCY-1111',
      tourSorted: '',
      totalStops: 0,
      isCanceled: false,
      products: [0, 1, 2, 3],
      address: 'Lindenstraße 6, 14467 Potsdam, Germany',
      clientName: 'Genossenschaft Migros Zürich',
      isCanceled: true,
      plateDriver: '1234567890AB',
      itemList: [
        {
          productName: 'Product Name 1',
          amount: 12,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          disable: false,
          warning: true
        },
        {
          productName: 'Product Name 2',
          amount: 10,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: false
        },
      ]
    },

    {
      id: 3,
      deliveryStatus: 'Early',
      date: 'Mon, 19 Jan 2021',
      twStart: '11.00',
      twEnd: '11.00',
      vehicle: 'BCY-1111',
      tourSorted: '',
      totalStops: 0,
      isCanceled: false,
      products: [0, 1, 2, 3],
      address: 'Lindenstraße 6, 14467 Potsdam, Germany',
      clientName: 'Genossenschaft Migros Zürich',
      plateDriver: '1234567890AB',
      itemList: [
        {
          productName: 'Product Name 1',
          amount: 12,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: false
        },

      ]
    },
    {
      id: 4,
      deliveryStatus: 'Done',
      date: 'Mon, 19 Jan 2021',
      twStart: '11.00',
      twEnd: '11.00',
      vehicle: 'BCY-1111',
      tourSorted: '',
      totalStops: 0,
      isCanceled: false,
      products: [0, 1, 2],
      address: 'Lindenstraße 6, 14467 Potsdam, Germany',
      clientName: 'Genossenschaft Migros Zürich',
      plateDriver: '1234567890AB',
      itemList: [
        {
          productName: 'Product Name 1',
          amount: 12,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: false
        },
        {
          productName: 'Product Name 2',
          amount: 10,
          unit: 'Fas',
          onTruck: 12,
          ordered: 8,
          warning: false
        },
      ]
    },
  ]

  const EmailList = [
    {
      id: 1,
      email: 'Email@example.com',
      roles: 'admin'
    },
    {
      id: 2,
      email: 'Email2@example.com',
      roles: 'standard'
    }
  ]
  /* =====================EOL Dummy Data ===================== */





  // dump link status
  const [isLinkExpired, setIsLinkExpired] = useState(false)
  /* =========End Of Dummy Data ============ */



  /* =========stack history============ */
  const [historyStack, setHistoryStack] = useState([])

  /* =========End of stack history============ */


  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isTablet = useMediaQuery(theme.breakpoints.only('sm'))
  const isMobile = useMediaQuery(theme.breakpoints.only('xs'))



  /* =========Scrolling State============ */

  // handle scroll page delivery section
  const [scrollDown, setScrollDown] = useState(false)

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (scrolled > 75) {
      setScrollDown(true)
    } else if (scrolled <= 75) {
      setScrollDown(false)
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
  window.addEventListener('scroll', toggleVisible)


  // handle scroll page to promo section
  const [isScrollToPromo, setIsScrollToPromo] = useState(false)

  const scrollToPromo = () => {
    if (!isLinkExpired) {


      if (document.documentElement.scrollTop >= (document.getElementById('deliverSection').clientHeight - 40)) {
        setIsScrollToPromo(true)
      } else {
        setIsScrollToPromo(false)
      }
    }
  }
  window.addEventListener('scroll', scrollToPromo);


  const goToPromo = () => {
    document.getElementById("promo").scrollIntoView({ behavior: 'smooth' })
  }
  /* =========EOL Scrolling State============ */



  /** ===============Login Dialog =============== */
  const [openLoginDialog, setOpenLoginDialog] = useState(false)

  const handleLoginDialog = () => {
    setOpenLoginDialog(!openLoginDialog)
  }
  /** ===============EOL Login Dialog =============== */



  /** ==========================OTP Dialog ========================== */
  const [openOtpDialog, setOpenOtpDialog] = useState(false)

  const handleOtpDialog = () => {
    setOpenOtpDialog(true)
  }

  const [sendOtp, setSendOtp] = useState(false)

  // otp sending status 
  const [sendOtpStatus, setSendOtpStatus] = useState(false)

  const handleSendOtp = () => {
    setSendOtp(true)
    setSendOtpStatus(true)
  }

  const hanldeCloseOtpDialog = () => {
    setOpenOtpDialog(false)
    setSendOtp(false)
  }

  const handleCloseSendOtpStatus = () => {
    setSendOtpStatus(false)
  }

  const handleCloseSendOtp = () => {
    setSendOtp(false)
  }
  /** ==========================EOL OTP Dialog ========================== */



  /** ==========================Dummy Email List ========================== */
  const [emailDumpList, setEmailDumpList] = useState(EmailList)


  /** ==========================Email List Dialog ========================== */
  const [emailListDialog, setEmailListDialog] = useState(false)

  const handleEmailListDialog = () => {
    setEmailListDialog(!emailListDialog)
  }
  /** ==========================EOL Email List Dialog ========================== */



  // dialog for add new email list
  const [addNewEmailDialog, setAddNewEmailDialog] = useState(false)

  // dialog for delete email
  const [deleteEmailDialog, setDeleteEmailDialog] = useState(false)

  // dialog for edit email
  const [editEmailDialog, setEditEmailDialog] = useState(false)



  /** ==========================Add new Email ========================== */
  // open dialog for add new email
  const handleOpenAddNewEmailDialog = () => {
    handleEmailListDialog()
    setAddNewEmailDialog(true)
  }
  // close dialog for add new email
  const handleCloseNewEmailDialog = () => {
    setAddNewEmailDialog(false)
    handleEmailListDialog()
  }
  // add new email function
  const addNewEmail = email => {
    email.id = emailDumpList.length + 1
    setEmailDumpList([...emailDumpList, email])
  }
  /** ==========================Eol Add new Email ========================== */



  // selected email for edit or delete
  const [currentEmail, setCurrnetEmail] = useState({ id: null, email: '', roles: '' })



  /** ==========================Delete Email ========================== */
  // select email for deleted and open dialog
  const handleSetCurrentEmailForDelete = email => {
    setCurrnetEmail(email)
    setEmailListDialog(false)
    setEditEmailDialog(false)
    setDeleteEmailDialog(true)
  }
  // delete selected email
  const deleteNewEmail = id => {
    setEmailDumpList(emailDumpList.filter(email => email.id !== id))
    setDeleteEmailDialog(false)
    handleEmailListDialog()
  }
  // close dialog for delete email
  const handleCloseDeleteEmailDialog = () => {
    setDeleteEmailDialog(false)
    handleEmailListDialog()
  }
  /** ==========================Eol Delete Email ========================== */



  /** ==========================Update or Edit Email ========================== */
  // select email for updated and open dialog
  const handleSetCurrentEmailForEdit = email => {
    setCurrnetEmail(email)
    setEmailListDialog(false)
    setDeleteEmailDialog(false)
    setEditEmailDialog(true)
  }
  // update selected email
  const editNewEmail = newEmail => {
    setEmailDumpList(emailDumpList.map(email => (email.id == currentEmail.id ? newEmail : email)))
    setDeleteEmailDialog(false)
    setEditEmailDialog(false)
    setEmailListDialog(true)
  }
  // close dialog for update email
  const handleCloseEditEmailDialog = () => {
    setEditEmailDialog(false)
    handleEmailListDialog()
  }
  /** ==========================Eol Update or Edit Email ========================== */




  const AppContextValue = {
    mode,
    handleChangeTheme,
    isMobile,
    isTablet,
    isDesktop,
    warning,
    promoDumpData,
    emailDumpList,
    deliveryDumpData,
    isLinkExpired,
    historyStack,
    setHistoryStack,
    scrollDown,
    scrollToTop,
    goToPromo,
    isScrollToPromo,

    openLoginDialog,
    handleLoginDialog,

    openOtpDialog,
    handleOtpDialog,
    hanldeCloseOtpDialog,

    sendOtp,
    handleSendOtp,
    handleCloseSendOtp,

    sendOtpStatus,
    handleCloseSendOtpStatus,

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
    handleCloseEditEmailDialog
  };

  return (
    <div >
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
    </div>
  );
}

export default App;
