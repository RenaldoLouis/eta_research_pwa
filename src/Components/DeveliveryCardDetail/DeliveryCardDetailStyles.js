import { createStyles, makeStyles } from '@mui/styles';

export const useDeliveryCardDetail = makeStyles((theme) =>
  createStyles({
    root: {
        // width:312,
        // height:165,
        backgroundColor:theme.palette.background.deliveryCard,
        padding:20,
        // color:'#ffffff'
    },
    flexSpaceBetween: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom:6
    },
    flexStart: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start'
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        marginBottom:10
    },
  }),
);
