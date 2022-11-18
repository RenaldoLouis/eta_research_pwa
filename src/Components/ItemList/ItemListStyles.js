import { createStyles, makeStyles } from '@mui/styles';

export const useItemStyles = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%', 
            background: theme.palette.background.deliveryCard, 
            // color: '#ffffff',
            borderTop:'1px solid #979797'
        },
        itemList: {
            // height: 28, 
        },
        itemSubList:{
            marginLeft: 45, 
            "&:hover": {
                background: theme.palette.background.hoverItemList, 
            }
            // height: 28
        },
        flexStart: {
            display: "flex",
            alignItems:'center',
            justifyContent: 'flex-start'
        },
        listItemText: {
            display:'flex',
            alignItems:'center',
            justifyContent:'space-between',
            width:'100%',
            // backgroundColor:'red'
        }
    }),
);
