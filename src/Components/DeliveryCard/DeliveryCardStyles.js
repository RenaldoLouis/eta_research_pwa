import { createStyles, makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
        // width:312,
        // height:165,
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
    flexEnd: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },
  }),
);
