import { makeStyles } from '@mui/styles';

export const useWarningComponent = makeStyles(() =>
  ({
    root:{
      display:'flex',
      justifyContent:'center',
      position:'sticky',
      // top:56,
      zIndex:1000
    },
    warning: {
        width:'100%',
        maxHeight:150,
        maxWidth:590,
        backgroundColor:'#af1d1d',
       
    },
    flexCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
       
    },
  }),
);
