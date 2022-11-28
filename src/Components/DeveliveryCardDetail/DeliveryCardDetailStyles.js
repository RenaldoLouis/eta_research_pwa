import { makeStyles } from '@mui/styles';

export const useDeliveryCardDetail = makeStyles((theme) =>
  ({
    root: {
        backgroundColor:theme.palette.background.deliveryCard,
        padding:20,
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
