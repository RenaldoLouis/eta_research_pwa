import React, { useState } from 'react';
import { styled } from '@mui/material/styles'

// import material Component
import { Typography } from '@mui/material';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// import Icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import reusable component 
import DivFlexStart from '../ReusableComponents/DivFlexStart';
import DivFlexSpaceBetween from '../ReusableComponents/DivFlexSpacebetween'


// import theme color
import { useTheme } from "@mui/material/styles";

const ItemSubList = styled('div')((props) => ({
    marginLeft: 45,
    ":hover": {
        background: props.theme.palette.background.hoverItemList,
    }
}));



const ItemList = (props) => {

    const { item, index, itemLength, isMobile } = props

    // color theme
    const theme = useTheme()

    // local state
    const [open, setOpen] = useState(false);

    const handleClickExpandList = () => {
        setOpen(!open);
    };



    return (
        <>
            <List sx={{ width: '100%', borderBottom: index == itemLength - 1 ? '' : '1px solid #979797', background: isMobile ? theme.palette.background.deliveryCard : theme.palette.background.itemListDesktop }}>
                <ListItemButton onClick={item.disable ? undefined : handleClickExpandList} >
                    <ListItemIcon sx={{ color: '#ffffff', marginRight: -3 }}>
                        {item.disable == false && (
                            <>
                                {open ? <ExpandLess sx={{ color: theme.palette.text.text4 }} /> : <ExpandMore sx={{ color: theme.palette.text.text4 }} />}
                            </>
                        )}
                    </ListItemIcon>
                    <DivFlexSpaceBetween sx={{ width: '100%' }}>
                        <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-SemiBold' }} color={theme.palette.text.text4}>
                            {item.productName}
                        </Typography>
                        <DivFlexStart>
                            {item.warning && (<ErrorOutlineIcon style={{ color: '#ea0000', width: 15, height: 15, marginRight: 6 }} />)}
                            <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text4} >
                                {`${item.amount} ${item.unit}`}
                            </Typography>
                        </DivFlexStart>
                    </DivFlexSpaceBetween>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <ItemSubList>
                        <ListItemButton>
                            <DivFlexSpaceBetween sx={{ width: '100%' }}>
                                <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text4} >
                                    On Truck
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text4} >
                                    {`${item.onTruck} Fas`}
                                </Typography>
                            </DivFlexSpaceBetween>
                        </ListItemButton>
                    </ItemSubList>
                    <ItemSubList>
                        <ListItemButton >
                            <DivFlexSpaceBetween sx={{ width: '100%' }}>
                                <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text4} >
                                    Ordered
                                </Typography>
                                <Typography sx={{ fontSize: 14, fontFamily: 'Eina04-Regular' }} color={theme.palette.text.text4} >
                                    {`${item.ordered} Fas`}
                                </Typography>
                            </DivFlexSpaceBetween>
                        </ListItemButton>
                    </ItemSubList>
                </Collapse>
            </List>
        </>

    );
}


export default ItemList
