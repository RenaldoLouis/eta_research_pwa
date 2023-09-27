import React, { useContext } from "react";

import { styled } from "@mui/system";

import Typography from "@mui/material/Typography";

import { AppContext } from "../App";

import { useTheme } from "@emotion/react";

// import contstant
import { FontFamily } from "../Constants/FontFamily";
import { FormControlLabel, FormGroup, svgIconClasses } from "@mui/material";
import { Checkbox as CheckBox } from '@mui/material';
import CheckIcon from "../assets/icons/CheckIcon";


const CheckboxLabel = styled(Typography)((props) => ({
    color: props.disabled ? "#8D8D8D" : props.theme.palette.text.checkboxLabel,
    fontSize: props.isMobile ? 12 : 16,
    fontFamily: props.checked ? FontFamily.EINA04SEMIBOLD : FontFamily.EINA04REGULAR,
    marginLeft: 7,
    marginTop: 4
}));

const CheckboxContainer = styled('div')((props) => ({
    outline: `1px solid ${props.disabled ? props.theme.palette.background.checkboxDisabled : props.theme.palette.background.checkboxBorder}`,
    boxSizing: 'border-box',
    borderRadius: "1px",
    width: 16,
    height: 16,
    position: 'relative',
    backgroundColor: props.checked ? props.theme.palette.background.checkboxBackground : 'transparent',
    padding: "2px"

}))


const StyledCheckIcon = styled(CheckIcon)((props) => ({
    color: props.disabled ? props.theme.palette.background.checkboxDisabled : props.theme.palette.background.checkboxBorder,
    position: "absolute",
    marginTop: 1
}))



const Checkbox = (props) => {
    const { isMobile, isDekstop, isTablet } = useContext(AppContext);

    const theme = useTheme()

    const { id, name, value, label, disabled,
        style, onChange, checked, error } = props;

    return (
        <FormControlLabel
            checked={checked}
            disabled={disabled}
            onChange={onChange}
            sx={{
                ...(!disabled) && {
                    "&:hover": {
                        "& .MuiTypography-root": {
                            fontFamily: FontFamily.EINA04SEMIBOLD
                        },
                        '& .MuiCheckbox-root': {
                            backgroundColor: "transparent",
                        },
                        "& .checkboxContainer": {
                            outline: `2px solid ${disabled ? theme.palette.background.checkboxDisabled : theme.palette.background.checkboxBorder}`,
                        },
                    }
                }
            }}
            control={
                <CheckBox
                    icon={
                        <CheckboxContainer theme={theme} checked={checked} disabled={disabled} className="checkboxContainer" />
                    }
                    checkedIcon={
                        <>
                            <CheckboxContainer theme={theme} checked={checked} disabled={disabled} className="checkboxContainer">
                                <StyledCheckIcon theme={theme} disabled={disabled} />
                            </CheckboxContainer>
                        </>
                    }
                />
            }
            disableTypography
            label={
                <CheckboxLabel isMobile={isMobile} theme={theme} checked={checked} disabled={disabled}>
                    {label}
                </CheckboxLabel>
            }
        />


    );
};

export default Checkbox;
