import { createStyles, makeStyles } from '@mui/styles';

export const useWarningComponent = makeStyles(() =>
  createStyles({
    root: {
        width:'100%',
        maxHeight:150,
        backgroundColor:'#af1d1d',
        position:'sticky',
        top:56,
        zIndex:1000
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
       
    },
  }),
);
