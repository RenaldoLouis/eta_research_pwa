import { useContext } from "react";

import { AppContext } from "../../App";

import { useTheme, styled } from "@mui/material/styles";

import { FontFamily } from "../../Constants/FontFamily";

import DivFlexCenter from "../DivFlexCenter";


const InputOtp = styled('input')((props) => ({
    width: '15%',
    height: props.isMobile ? 35 : 60,
    border: props.isOtpFalse ? `1px solid #da1e28` : `1px solid ${props.theme.palette.background.borderForm}`,
    marginLeft: props.isMobile ? 2 : 5,
    marginRight: props.isMobile ? 2 : 5,
    textAlign: 'center',
    fontFamily: FontFamily.EINA04REGULAR,
    fontSize: props.isMobile ? 12 : 20,
    color: props.theme.palette.text.inputText,
    backgroundColor: props.theme.palette.background.dialog,
    ":focus": {
        outline: 'none',
        border: props.isOtpFalse ? `1px solid #da1e28` : `1px solid ${props.theme.palette.background.borderFormActive}`,
    }
}))

const CustomOtpInput = (props) => {

    const theme = useTheme()

    const { isMobile } = useContext(AppContext)

    const { inputLength, handleChangeInput, isOtpFalse } = props

    const inputfocus = (elmnt) => {
        if (elmnt.key === "Delete" || elmnt.key === "Backspace") {
            const next = elmnt.target.tabIndex - 2;
            if (next > -1) {
                elmnt.target.form.elements[next].focus()
            }
        }
        else {
            const next = elmnt.target.tabIndex;
            if (next < 8) {
                elmnt.target.form.elements[next].focus()
            }
        }
    }


    return (
        <form>
            <DivFlexCenter>
                {Array(inputLength).fill("").map((_, index) => (
                    <InputOtp
                        name={`otp${index + 1}`}
                        type="text"
                        autoComplete="off"
                        className="otpInput"
                        // onKeyPress={keyPressed}
                        onChange={handleChangeInput}
                        tabIndex={index + 1} maxLength="1" onKeyUp={e => inputfocus(e)}
                        isMobile={isMobile}
                        theme={theme}
                        isOtpFalse={isOtpFalse}
                    />
                ))}
            </DivFlexCenter>
        </form>
    )

}

export default CustomOtpInput