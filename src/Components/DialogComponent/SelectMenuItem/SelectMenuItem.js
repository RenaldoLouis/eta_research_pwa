import React, {useContext} from "react";

import { Typography, TextField, FormControl, MenuItem, Box, Select } from "@mui/material";

import { AppContext } from "../../../App";

import { FontFamily } from "../../../Constants/FontFamily";

// import style and theme
import { useTheme, styled } from "@mui/material/styles";

const Roles = [
    {
        value: 'admin',
        label: 'Admin',
    },
    {
        value: 'superAdmin',
        label: 'Super Admin',
    },
    {
        value: 'standard',
        label: 'Standard',
    },
];

const SelectMenuItem = (props) => {

    const { email, handleChangeInput } = props

    const theme = useTheme()

    const {isMobile} = useContext(AppContext)

    return (
        <Select
            id="roles"
            defaultValue={email.roles}
            name="roles"
            onChange={handleChangeInput}
            inputProps={{
                MenuProps: {
                    MenuListProps: {
                        sx: {
                            backgroundColor: theme.palette.background.dialog,
                            pt: 0, pb: 0,
                            "&& .Mui-selected": {
                                backgroundColor: theme.palette.background.hoverDeliveryCard,
                                "&:hover": {
                                    backgroundColor: theme.palette.background.hoverDeliveryCard
                                }
                            },
                        }
                    }
                }
            }}
            sx={{
                height: isMobile ? 40 : 53,
                width: '100%',
                borderRadius: 0,
                alignItems: 'center',
                paddingTop: isMobile ? 0.8 : 0.4,
                "& .MuiSvgIcon-root": {
                    color: theme.palette.text.primary,
                },
                ".MuiOutlinedInput-notchedOutline":
                {
                    border: `1px solid ${theme.palette.background.borderForm}`,
                },
                "&.MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline":
                {
                    border: `1px solid  ${theme.palette.background.borderFormHover}`,
                },
                "&.MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline":
                {
                    border: `1px solid ${theme.palette.background.borderFormActive}`,
                },
            }}
        >
            {Roles.map((option) => (
                <MenuItem key={option.value} value={option.value}
                    sx={{
                        background: theme.palette.background.dialog,
                        "&:hover": {
                            backgroundColor: theme.palette.background.hoverDeliveryCard
                        }
                    }}>
                    <Typography sx={{ fontSize: isMobile ? 12 : 20, fontFamily: FontFamily.EINA04REGULAR }}>
                        {option.label}
                    </Typography>
                </MenuItem>
            ))}
        </Select>
    )
}

export default SelectMenuItem