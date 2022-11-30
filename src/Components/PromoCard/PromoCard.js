import React, { useContext, useState } from 'react';

// import material components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import Collapse from '@mui/material/Collapse';

// import reusable component
import DivFlexStart from '../ReusableComponents/DivFlexStart';
import DivFlexCenter from '../ReusableComponents/DivFlexCenter';
import ButtonSecondary from '../ReusableComponents/ButtonSecondary';

// import dummy image for promo
import logo from '../../../src/assets/Images/dummy-promo-lemonade.jpg'

// color theme
import { useTheme } from "@mui/material/styles";


// import icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PromoCard = (props) => {

    const { promo, openDetailPromo, onClickOpenPromoDetail, isDesktop } = props

    // color theme
    const theme = useTheme()

    // local state
    const [openDetail, setOpenDetail] = useState(openDetailPromo)

    return (
        <Card sx={{ width: '100%', backgroundColor: theme.palette.background.promoCard, borderRadius: 0 }}>
            <CardMedia
                component="img"
                height="210"
                image={promo.image}
                alt="promo"
                sx={{ objectFit: 'fill' }}
            />
            <CardContent style={{ paddingBottom: 5, paddingLeft: isDesktop ? 35 : '', paddingRight: isDesktop ? 35 : '' }}>
                <Typography color={theme.palette.text.secondary} sx={{ fontSize: 18, fontFamily: 'Eina04-SemiBold' }}>
                    {`${promo.title}`}
                </Typography>
            </CardContent>
            {openDetail ? (<></>) : (
                <CardActions>
                    <Button onClick={onClickOpenPromoDetail}>
                        <DivFlexStart sx={{ cursor: 'pointer' }}>
                            <Typography color={theme.palette.text.secondary} sx={{ textTransform: 'capitalize', fontFamily: 'Eina04-Regular' }}>
                                Look Detail
                            </Typography>
                            <ArrowRightAltIcon sx={{ color: theme.palette.text.secondary, ml: 1 }} />
                        </DivFlexStart>
                    </Button>
                </CardActions>
            )}

            <Collapse in={openDetail} timeout="auto" unmountOnExit>
                <div style={{ padding: isDesktop == true ? '0px 35px 15px 35px' : '0px 15px 15px 15px', marginTop: -5 }}>
                    <Typography sx={{ color: theme.palette.text.text4, fontSize: 12, fontFamily: 'Eina04-Regular' }}>
                        {promo.detail}
                    </Typography>
                    <ButtonSecondary sx={{ marginTop: 2 }}>
                        <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                            Contact our Sales Rep.
                        </Typography>
                    </ButtonSecondary>
                </div>
            </Collapse>
        </Card>
    );
}

PromoCard.defaultProps = {
    promo: {
        image: logo,
        title: '-',
        detail: "---"
    }

}

export default PromoCard
