import { makeStyles } from '@mui/styles';

export const usePlatDriverStyles = makeStyles(() =>
  ({
    root: {
        display: 'flex',
        border:'0.5px solid rgb(151, 151, 151)'
    },
    plat: {
        height: 24,
        width: 5,
        background: '#7464eb',
        boxShadow: `0px 0px 2px 0px rgba(0, 0, 0, 0.5)`,
    },
    platNumber: {
        height: '24px',
        padding: '0px 6px 0px 6px',
        backgroundColor:'#fdf6f6'
    },
  }),
);
