import React, { useContext } from "react";

import { styled } from "@mui/system";

import { AppContext } from "../App";

import { useTheme } from "@emotion/react";
import { FormControlLabel, Typography } from "@mui/material";
// import { Radio as MUIRadio } from '@mui/material';
import { Radio as MUIRadio } from '@mui/material';
import { FontFamily } from "../Constants/FontFamily";


const RadioLabel = styled(Typography)((props) => ({

    color: props.disabled ? props.theme.palette.background.radioDisabled : props.theme.palette.text.radioLabel,
    fontSize: props.isMobile ? 12 : 16,
    fontFamily: props.checked ? FontFamily.EINA04SEMIBOLD : FontFamily.EINA04REGULAR,
}));

const StyledRadio = styled(MUIRadio)((props) => ({
    color: props.theme.palette.background.radioBorder,
    "&.Mui-checked": {
        color: props.theme.palette.background.radioBorder,
    },
}));

const Unchecked = styled('div')((props) => ({
    border: `1px solid ${props.disabled ? props.theme.palette.background.radioDisabled : props.theme.palette.background.radioBorder}`,
    borderRadius: "100%",
    width: 16,
    height: 16,
}))

const Checked = styled('div')((props) => ({
    position: "relative",
    border: `1px solid ${props.disabled ? props.theme.palette.background.radioDisabled : props.theme.palette.background.radioBorder}`,
    borderRadius: "100%",
    width: 16,
    height: 16,
    "&:before": {
        content: '" "',
        position: "absolute",
        width: 9.33,
        height: 9.33,
        backgroundColor: props.disabled ? props.theme.palette.background.radioDisabled : props.theme.palette.background.radioBorder,
        borderRadius: "100%",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    }
}))



const Radio = (props) => {
    const { isMobile, isDekstop, isTablet } = useContext(AppContext);

    const theme = useTheme()

    const { value, label, checked, disabled } = props;

    return (
        <FormControlLabel
            sx={{
                cursor: disabled ? "default" : "pointer",
                ...(!disabled) && {
                    "&:hover": {
                        "& .MuiTypography-root": {
                            fontFamily: FontFamily.EINA04SEMIBOLD
                        },
                        '& .MuiRadio-root': {
                            backgroundColor: "transparent",
                        },

                        ...(!checked) && {
                            "& .radioUnchecked": {
                                border: "none",
                                backgroundColor: theme.palette.background.radioHover
                            }
                        }
                    },

                },
            }}
            disableTypography
            value={value}
            control={
                <StyledRadio
                    icon={
                        <Unchecked disabled={disabled} className="radioUnchecked" />
                    }
                    checkedIcon={
                        <Checked disabled={disabled} className="radioChecked" />
                    }
                    theme={theme} disabled={disabled} />
            }
            label={<RadioLabel isMobile={isMobile} disabled={disabled} checked={checked}>{label}</RadioLabel>}

        />


    );
};

export default Radio;
