import { createStyles, makeStyles } from '@mui/styles';

export const useScrollToTopButton = makeStyles((theme) =>
    createStyles({
        root: {
            position: 'fixed',
            zIndex: 1000,
            color: theme.palette.background.default,
            bottom: 40,
            right: 10,
            height: 50,
            width: 50,
            backgroundColor: theme.palette.background.scrollToTop,
            borderRadius: '50%',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            cursor: 'pointer'
        },
    }),
);
