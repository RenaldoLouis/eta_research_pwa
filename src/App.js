import React from 'react';
import './App.css';
import { PwaContextProvider } from "./context/PwaContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Login from './Pages/Login';
import Verify from './Pages/Verify';
import PublicRoute from './PublicRoute';

const Main = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/verify" element={<Verify />} />
      <Route path="*" element={<PublicRoute />} />
    </Routes>
  );
}


function App() {
  return (
    <div>
      <PwaContextProvider>
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
      </PwaContextProvider>
    </div>
  );
}

export default App;
