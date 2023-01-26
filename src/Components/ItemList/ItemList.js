import React, { useState, useContext } from 'react';
import { styled } from '@mui/material/styles'

// import material Component
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import Collapse from '@mui/material/Collapse';

import { AppContext } from '../../App';

// import Icons
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import reusable component 
import DivFlexStart from '../ReusableComponents/DivFlexStart';
import DivFlexSpaceBetween from '../ReusableComponents/DivFlexSpacebetween'


// import theme color
import { useTheme } from "@mui/material/styles";

const ItemSubList = styled(ListItemButton)((props) => ({
    marginLeft: 16,
    paddingLeft: 20,
    ":hover": {
        cursor: 'default'
    }
}));




const ItemList = (props) => {

    const { isMobile, isTablet, isDesktop } = useContext(AppContext)

    const { item, index, itemLength, isOpenItemList } = props

    // color theme
    const theme = useTheme()

    // local state
    const [open, setOpen] = useState(true);

    const handleClickExpandList = () => {
        setOpen(!open);
    };



    return (
        <>
            <List 
            sx={{ width: '100%', borderBottom: index == itemLength - 1 ? '' : '1px solid #979797', 
            background: isDesktop ? isOpenItemList ? theme.palette.background.deliveryCard : theme.palette.background.default : theme.palette.background.deliveryCard,
            }}>
                <ListItemButton onClick={item.warning ? handleClickExpandList : undefined} sx={{ "&:hover": { backgroundColor: "transparent", cursor: !item.warning ? 'default' : '' } }} disableRipple >
                    <DivFlexSpaceBetween sx={{ width: '100%' }}>
                        <DivFlexStart>
                            <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={item.warning ? '#da1e28' : theme.palette.text.primary}>
                                {item.productName}
                            </Typography>
                            {item.warning && (<ErrorOutlineIcon sx={{ color: '#da1e28', width: 15, height: 15, ml: 1, mt:-0.5 }} />)}
                        </DivFlexStart>
                        <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.primary} >
                            {`${item.amount} ${item.unit}`}
                        </Typography>
                    </DivFlexSpaceBetween>
                </ListItemButton>
                {
                    item.warning && (
                        <>
                            <Collapse in={open} timeout="auto" unmountOnExit>
                                <ItemSubList sx={{ backgroundColor: theme.palette.background.oddItemList, "&:hover": { backgroundColor: theme.palette.background.oddItemList } }} disableRipple >
                                    <DivFlexSpaceBetween sx={{ width: '100%' }}>
                                        <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.primary} >
                                            On Truck
                                        </Typography>
                                        <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.primary} >
                                            {`${item.onTruck} Fas`}
                                        </Typography>
                                    </DivFlexSpaceBetween>
                                </ItemSubList>
                                <ItemSubList sx={{ "&:hover": { backgroundColor: "transparent" } }} disableRipple>
                                    <DivFlexSpaceBetween sx={{ width: '100%' }}>
                                        <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.primary} >
                                            Ordered
                                        </Typography>
                                        <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.primary} >
                                            {`${item.ordered} Fas`}
                                        </Typography>
                                    </DivFlexSpaceBetween>
                                </ItemSubList>
                            </Collapse>
                        </>
                    )
                }

            </List>
        </>

    );
}


export default ItemList
