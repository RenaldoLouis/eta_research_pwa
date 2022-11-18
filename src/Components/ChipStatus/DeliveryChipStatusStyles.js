import { createStyles, makeStyles } from '@mui/styles';

export const deliveryChipStatusStyles = makeStyles(() =>
  createStyles({
    chip: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        padding : 10,
        borderRadius:5,
        height:15
    },
  }),
);
