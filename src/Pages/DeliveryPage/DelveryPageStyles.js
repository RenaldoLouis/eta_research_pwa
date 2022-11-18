import { createStyles, makeStyles } from '@mui/styles';

export const useDeliveryPage = makeStyles((theme) =>
    createStyles({
        root: {
            width: '100%',
            background: theme.palette.background.deliveryCard,
            // color: '#ffffff',
            borderTop: '1px solid #979797'
        },
        mediumScreen: {
            overflowX: 'scroll',
            overflowY: 'hidden', 
            whiteSpace: 'nowrap', 
            width: '100%',
            '&::-webkit-scrollbar': {
                // width: '0',
            },

        }
    }),
);
