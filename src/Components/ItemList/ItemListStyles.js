import { makeStyles } from '@mui/styles';

export const useItemStyles = makeStyles((theme) =>
    ({
        root: {
            width: '100%', 
            // background: theme.palette.background.deliveryCard, 
        },
        itemList: {
            // height: 28, 
        },
        itemSubList:{
            marginLeft: 45, 
            "&:hover": {
                background: theme.palette.background.hoverItemList, 
            }
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
        }
    }),
);
