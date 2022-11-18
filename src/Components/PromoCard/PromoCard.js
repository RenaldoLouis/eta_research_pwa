import React, { useContext, useState } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import logo from '../../../src/assets/Images/dummy-promo-lemonade.jpg'

import Collapse from '@mui/material/Collapse';

// dark mode and light mode
import { useTheme } from "@mui/material/styles";

import { AppContext } from '../../App';

// import icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

const PromoCard = (props) => {

    const theme = useTheme()

    const { isMobile } = useContext(AppContext)

    const { promo, openDetailPromo, onClickOpenPromoDetail } = props

    const {title, image, detail} = promo

    const [openDetail, setOpenDetail] = useState(openDetailPromo)

    const handleClickOpenDetail = () => {
        setOpenDetail(!openDetail)
    }

    return (
        <Card sx={{ width: '100%', backgroundColor: theme.palette.background.promoCard, borderRadius:0 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="210"
                    image={image}
                    alt="promo"
                />
                <div>
                    <CardContent style={{ paddingBottom: 5 }}>
                        <Typography color={theme.palette.text.secondary} sx={{ fontSize: 18, fontFamily: 'Eina04-SemiBold' }}>
                            {`${title}`}
                        </Typography>
                    </CardContent>
                </div>
            </CardActionArea>
            {openDetail ? (<></>) : (
                <CardActions>
                <Button onClick={onClickOpenPromoDetail}>
                    <div style={{ display: 'flex', justifyContent: 'flex-start' }}>
                        <div style={{ cursor: 'pointer' }}>
                            <Typography color={theme.palette.text.secondary} sx={{ textTransform: 'capitalize', fontFamily: 'Eina04-Regular' }}>
                                Look Detail
                            </Typography>
                        </div>
                        <div style={{ marginLeft: 6 }}>
                            <ArrowRightAltIcon sx={{ color: theme.palette.text.secondary }} />
                        </div>
                    </div>
                </Button>
            </CardActions>
            )}
            
            <Collapse in={openDetail} timeout="auto" unmountOnExit>
                <div style={{ padding: '0px 15px 15px 15px', marginTop: -5 }}>
                    <Typography sx={{ color: theme.palette.text.text4, fontSize: 12, fontFamily: 'Eina04-Regular' }}>
                        {detail}
                    </Typography>
                </div>
                <div style={{ padding: '0px 15px 25px 15px', cursor: 'pointer' }}>
                    <div style={{ width: '100%', height: 52, backgroundColor: theme.palette.text.text4, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <Typography sx={{ color: theme.palette.background.deliveryCard, fontSize: 14, fontFamily: 'Eina04-SemiBold' }}>
                            Contact our Sales Rep.
                        </Typography>
                    </div>
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
