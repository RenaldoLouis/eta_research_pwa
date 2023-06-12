import React, { useContext } from 'react'
import DivFlexStart from './DivFlexStart'
import { MenuItem, Select, Typography } from '@mui/material'
import SelectMenuItem from './DialogComponent/SelectMenuItem/SelectMenuItem'
import { FontFamily } from '../Constants/FontFamily'
import { useTheme, styled } from "@mui/material/styles";
import { AppContext } from '../App'


const Form = (props) => {

    const theme = useTheme()

    const { isMobile } = useContext(AppContext)

    const { label, handleChangeSelect, options, selectDefaultValue } = props;

    return (
        <DivFlexStart sx={{ width: isMobile ? '45%' : '24%', ml: 3 }}>
            <Typography
                sx={
                    {
                        fontSize: isMobile ? 12 : 16,
                        fontFamily: FontFamily.EINA04SEMIBOLD,
                        mr: 2, color: theme.palette.text.primary
                    }
                }>
                {label}
            </Typography>

            <Select
                defaultValue={selectDefaultValue}
                onChange={handleChangeSelect}
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
                    height: isMobile ? 32 : 46,
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
                {options.map((option) => (
                    <MenuItem key={option.value} value={option.value}
                        sx={{
                            background: theme.palette.background.dialog,
                            "&:hover": {
                                backgroundColor: theme.palette.background.hoverDeliveryCard
                            }
                        }}>
                        <Typography sx={{ color: theme.palette.background.formLabel, fontSize: isMobile ? 12 : 16, fontFamily: FontFamily.EINA04REGULAR }}>
                            {option.label}
                        </Typography>
                    </MenuItem>
                ))}

            </Select>
        </DivFlexStart>
    )
}

export default Form