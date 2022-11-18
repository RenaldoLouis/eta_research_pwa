import React, { useState } from 'react';

// import List Component
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';

// import Icons
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';


// import Styles
import { useItemStyles } from './ItemListStyles';
import { Typography } from '@mui/material';


// dark mode and light mode
import { styled, useTheme } from "@mui/material/styles";


const ItemList = (props) => {

    const { item } = props

    const theme = useTheme()

    const classes = useItemStyles(theme)

    const [open, setOpen] = useState(false);

    const handleClickExpandList = () => {
        setOpen(!open);
    };

    

    return (
        <>
            <List className={classes.root}>
                <ListItemButton onClick={handleClickExpandList} className={classes.itemList} >
                    <ListItemIcon sx={{ color: '#ffffff', marginRight: -3 }}>
                        {open ? <ExpandLess sx={{ color:theme.palette.text.text4 }} /> : <ExpandMore sx={{ color:theme.palette.text.text4 }} />}
                    </ListItemIcon>
                    <div className={classes.listItemText}>
                        <Typography sx={{fontSize:14, fontWeight:600}} color={theme.palette.text.text4} >
                            {item.productName}
                        </Typography>
                        <div className={classes.flexStart}>
                            <ErrorOutlineIcon style={{ color: '#ea0000', width: 15, height: 15, marginRight: 6 }} />
                            <Typography sx={{fontSize:14}} color={theme.palette.text.text4} >
                                {`${item.amount} ${item.unit}`}
                            </Typography>
                        </div>
                    </div>
                </ListItemButton>
                <Collapse in={open} timeout="auto" unmountOnExit>
                    <div className={classes.itemSubList}>
                        <ListItemButton className={classes.itemList}>
                            <div className={classes.listItemText}>
                                <Typography sx={{fontSize:14}} color={theme.palette.text.text4} >
                                    On Truck
                                </Typography>
                                <Typography sx={{fontSize:14}} color={theme.palette.text.text4} >
                                    {`${item.onTruck} FAS`}
                                </Typography>
                            </div>
                        </ListItemButton>
                    </div>
                    <div className={classes.itemSubList} >
                        <ListItemButton className={classes.itemList}  >
                            <div className={classes.listItemText}>
                                <Typography sx={{fontSize:14}} color={theme.palette.text.text4} >
                                    Ordered
                                </Typography>
                                <Typography sx={{fontSize:14}} color={theme.palette.text.text4} >
                                    {`${item.ordered} FAS`}
                                </Typography>
                            </div>
                        </ListItemButton>
                    </div>
                </Collapse>
            </List>
        </>

    );
}


export default ItemList
