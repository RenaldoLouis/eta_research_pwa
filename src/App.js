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

// import page
import DeliveryPage from './Pages/DeliveryPage/DeliveryPage';


// Dark and Light Mode
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';

// AppContext
export const AppContext = createContext({});


const Main = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="*" element={<PublicRoute />} />
      <Route element={<AppBarResponsive />} >
        <Route path="/delivery" element={<DeliveryPage />} />
        <Route path="/inputTrackingNumber" element={<InputTrackingNumber />} />
      </Route>
    </Routes>
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
                heading1: '#959499'
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
                heading1: '#959499'
              }
            })
        }
      }),
    [mode]
  );

  /* ==================== End Of Dark and Light Mode ==================== */

  const [warning, setWarning] = useState(false)

  /* =========Dummy Data ============ */

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
      title: 'Lemonade Promo Desember 2021',
      detail: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."

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
      tourStatus: '',
      stopStatus: 'Discrepancy',
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
      tourStatus: 'Done',
      stopStatus: 'Discrepancy',
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
      tourStatus: 'Too Early',
      stopStatus: 'Early',
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
      tourStatus: 'On Delivery',
      stopStatus: 'Done',
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
    if (scrolled > 50) {
      setScrollDown(true)
    } else if (scrolled <= 50) {
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
    if (document.documentElement.scrollTop >= (document.getElementById('deliverSection').clientHeight - 40)) {
      setIsScrollToPromo(true)
    } else {
      setIsScrollToPromo(false)
    }
  }
  window.addEventListener('scroll', scrollToPromo);


  const goToPromo = () => {
    document.getElementById("promo").scrollIntoView({ behavior: 'smooth' })
  }
  /* =========Scrolling State============ */



  const AppContextValue = {
    mode,
    handleChangeTheme,
    isMobile,
    isTablet,
    isDesktop,
    warning,
    promoDumpData,
    deliveryDumpData,
    isLinkExpired,
    historyStack,
    setHistoryStack,
    scrollDown,
    scrollToTop,
    goToPromo,
    isScrollToPromo
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
              <Main />
            </Router>
          </ThemeProvider>
        </AppContext.Provider>
      </PwaContextProvider>
    </div>
  );
}

export default App;
