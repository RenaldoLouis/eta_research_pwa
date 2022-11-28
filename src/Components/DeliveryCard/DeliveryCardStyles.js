import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme) =>
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
    flexEnd: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'flex-end'
  },
  }),
);
