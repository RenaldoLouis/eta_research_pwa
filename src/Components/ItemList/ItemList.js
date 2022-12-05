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

const ItemSubList = styled('div')((props) => ({
    marginLeft: 10,
    ":hover": {
        background: props.theme.palette.background.hoverItemList,
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
            <List sx={{ width: '100%', borderBottom: index == itemLength - 1 ? '' : '1px solid #979797', background: isDesktop ? theme.palette.background.default : theme.palette.background.deliveryCard }}>
                <ListItemButton onClick={item.warning ? handleClickExpandList : undefined} >
                    <DivFlexSpaceBetween sx={{ width: '100%' }}>
                        <DivFlexStart>
                            <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={item.warning ? '#ea0000' : theme.palette.text.text5}>
                                {item.productName}
                            </Typography>
                            {item.warning && (<ErrorOutlineIcon sx={{ color: '#ea0000', width: 15, height: 15, ml: 1 }} />)}
                        </DivFlexStart>
                        <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text5} >
                            {`${item.amount} ${item.unit}`}
                        </Typography>
                    </DivFlexSpaceBetween>
                </ListItemButton>
                {
                    item.warning && (
                        <>
                            <Collapse in={open } timeout="auto" unmountOnExit>
                                <ItemSubList>
                                    <ListItemButton>
                                        <DivFlexSpaceBetween sx={{ width: '100%' }}>
                                            <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text5} >
                                                On Truck
                                            </Typography>
                                            <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text5} >
                                                {`${item.onTruck} Fas`}
                                            </Typography>
                                        </DivFlexSpaceBetween>
                                    </ListItemButton>
                                </ItemSubList>
                                <ItemSubList>
                                    <ListItemButton >
                                        <DivFlexSpaceBetween sx={{ width: '100%' }}>
                                            <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text5} >
                                                Ordered
                                            </Typography>
                                            <Typography sx={{ fontSize: 12, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text5} >
                                                {`${item.ordered} Fas`}
                                            </Typography>
                                        </DivFlexSpaceBetween>
                                    </ListItemButton>
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
