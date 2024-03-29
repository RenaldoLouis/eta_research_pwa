import React, { useContext, useState } from "react";

// import material UI
import {
  Typography,
  TextField,
  FormControl,
  Snackbar,
  Box,
} from "@mui/material";

// import icon
import ErrorIcon from "../../assets/icons/ErrorIcon";

// import react router dom
import { Outlet } from "react-router-dom";

// import context
import { AppContext } from "../../App";

// import component
import DivFlexCenter from "../DivFlexCenter";
import DivFlexSpaceBetween from "../DivFlexSpacebetween";
import CustomDialog from "./DialogContainer/CustomDialog";
import CustomDialogContent from "./DialogContainer/CustomDialogContent";
import TextFieldStyled from "../TextField/TextFieldStyle";
import Button from "../Button";

// import Constants
import { FontFamily } from "../../Constants/FontFamily";

// import style and theme
import { useTheme } from "@mui/material/styles";
import DivFlexStart from "../DivFlexStart";

const LoginDialog = (props) => {
  const {
    isMobile,
    handleCloseDialog,
    handleButtonOtpDialog,
    sendOtp,
  } = useContext(AppContext);

  const { isOpen } = props;

  const theme = useTheme();

  // email validation

  const [email, setEmail] = useState("");
  const [emailSubmit, setEmailSubmit] = useState("");

  const [isEmailEmpty, setIsEmailEmpty] = useState(false);
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);

  function isValidEmail(email) {
    return /\S+@\S+\.\S+/.test(email);
  }

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    setEmail(value);
    setEmailSubmit(value);
  };

  const handleCloseLoginDialog = () => {
    handleCloseDialog();
    setEmail("");
    setIsEmailEmpty(false);
    setIsEmailInvalid(false);
  };

  const handlePressSendOtp = () => {
    if (email != "") {
      setIsEmailEmpty(false);
      if (isValidEmail(emailSubmit)) {
        handleCloseDialog();
        handleButtonOtpDialog();
        setEmail("");
        setIsEmailInvalid(false);
      } else {
        setIsEmailInvalid(true);
      }
    }
    if (email == "") {
      setIsEmailEmpty(true);
    }
  };

  return (
    <>
      <CustomDialog
        open={isOpen}
        onClose={handleCloseLoginDialog}
        theme={theme}
      >
        <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
          <CustomDialogContent
            isMobile={isMobile}
            sx={{ backgroundColor: theme.palette.background.dialog }}
            theme={theme}
          >
            <DivFlexCenter
              sx={{ height: isMobile ? 20 : 40, mb: isMobile ? 3 : 8 }}
            >
              <Typography
                sx={{
                  color: theme.palette.text.heading1,
                  fontSize: isMobile ? 20 : 40,
                  fontFamily: FontFamily.EINA04REGULAR,
                }}
              >
                Sign In
              </Typography>
            </DivFlexCenter>
            <DivFlexSpaceBetween sx={{ flexWrap: "wrap" }}>
              <Typography
                sx={{
                  fontSize: isMobile ? 12 : 14,
                  fontFamily: FontFamily.EINA04SEMIBOLD,
                  color: theme.palette.text.primary,
                }}
              >
                Email
              </Typography>
              <FormControl sx={{ width: isMobile ? "100%" : "90%" }}>
                <TextFieldStyled
                  id="email"
                  placeholder="example@email.com"
                  value={email}
                  onChange={handleChangeInput}
                  isMobile={isMobile}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") {
                      handlePressSendOtp();
                    }
                  }}
                />
              </FormControl>
            </DivFlexSpaceBetween>

            <DivFlexStart sx={{ mt: 2 }}>
              <Box sx={{ width: isMobile ? "" : 55 }} />

              {isEmailEmpty ? (
                <DivFlexStart>
                  <ErrorIcon
                    sx={{
                      color: "#da1e28",
                      fontSize: isMobile ? 16 : 18,
                      mr: 0.5,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: isMobile ? 12 : 14,
                      fontFamily: FontFamily.EINA04REGULAR,
                    }}
                    color={"#da1e28"}
                  >
                    Email is empty
                  </Typography>
                </DivFlexStart>
              ) : isEmailInvalid ? (
                <DivFlexStart>
                  <ErrorIcon
                    sx={{
                      color: "#da1e28",
                      fontSize: isMobile ? 16 : 18,
                      mr: 0.5,
                    }}
                  />
                  <Typography
                    sx={{
                      fontSize: isMobile ? 12 : 14,
                      fontFamily: FontFamily.EINA04REGULAR,
                    }}
                    color={"#da1e28"}
                  >
                    Email is invalid
                  </Typography>
                </DivFlexStart>
              ) : (
                <></>
              )}
            </DivFlexStart>

            <Button
              onClick={handlePressSendOtp}
              style={{ marginTop: isMobile ? 3 : 5, width: "100%" }}
              ref={(node) => (this.btn = node)}
            >
              {`Send OTP`}
            </Button>
          </CustomDialogContent>
        </Box>
      </CustomDialog>
      {/* <Snackbar
        open={sendOtp}
        message={
          <Typography
            sx={{
              color: theme.palette.text.primary,
              fontSize: isMobile ? 12 : 14,
              fontFamily: FontFamily.EINA04REGULAR,
            }}
          >
            OTP code has been sent to{" "}
            <span style={{ fontFamily: FontFamily.EINA04SEMIBOLD}}>
              {emailSubmit}{" "}
            </span>
          </Typography>
        }
        anchorOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
        sx={{ mt: isMobile ? 8 : 10, zIndex: 3000 }}
        ContentProps={{
          sx: {
            background: theme.palette.background.dialog,
            width: isMobile ? "100%" : 600,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: 72,
            borderRadius: 0,
          },
        }}
      /> */}
      <Outlet />
    </>
  );
};

export default LoginDialog;
