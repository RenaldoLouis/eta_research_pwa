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
import DivFlexSpaceBetween from '../ReusableComponents/DivFlexSpacebetween';

// import dummy image for promo
import logo from '../../../src/assets/Images/dummy-promo-lemonade.jpg'

// color theme
import { useTheme } from "@mui/material/styles";


// import icons
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';


const PromoCard = (props) => {

    const { promo, openDetailPromo, isDesktop, isMobile } = props

    // color theme
    const theme = useTheme()

    // local state
    const [openDetail, setOpenDetail] = useState(openDetailPromo)

    return (
        <Card onClick={isMobile ? () => setOpenDetail(!openDetail) : undefined} sx={{ width: openDetail ? '100%' : 'calc(100% - 40px)', backgroundColor: isMobile ? theme.palette.background.promoCard : theme.palette.background.default, borderRadius: 0, cursor:'pointer','&:hover': {backgroundColor:theme.palette.background.hoverDeliveryCard}  }} elevation={0}>
            <CardMedia
                component="img"
                height="210"
                image={promo.image}
                alt="promo"
                sx={{ objectFit: 'fill' }}
            />
            <CardContent style={{ paddingBottom: 10, paddingLeft: isDesktop ? 35 : '', paddingRight: isDesktop ? 35 : '' }}>
                <Typography color={theme.palette.text.secondary} sx={{ fontSize: 18, fontFamily: 'Eina04-SemiBold' }}>
                    {`${promo.title}`}
                </Typography>
            </CardContent>

            <Collapse in={openDetail} timeout="auto" unmountOnExit>
                <div style={{ padding: isDesktop == true ? '0px 35px 15px 35px' : '0px 15px 15px 15px', marginTop: -5 }}>
                    <Typography sx={{ color: theme.palette.text.text4, fontSize: 12, fontFamily: 'Eina04-Regular' }}>
                        {promo.detail}
                    </Typography>
                    {isDesktop ?
                        (<>
                            <ButtonSecondary sx={{ width: '100%', mt: 3 }}>
                                <EmailOutlinedIcon sx={{ color: theme.palette.background.deliveryCard }} />
                                <Typography fontSize={12} sx={{ fontFamily: 'Eina04-SemiBold', ml:1 }} color={ theme.palette.background.deliveryCard } >
                                    Contact our Sales Rep.
                                </Typography>
                            </ButtonSecondary>

                        </>) :
                        (<>
                            <DivFlexCenter sx={{ mt: 3, mb:0.5 }}>
                                <Typography fontSize={12} sx={{ fontFamily: 'Eina04-SemiBold', }}  color={ theme.palette.text.secondary } >
                                    Contact our Sales Rep.
                                </Typography>
                            </DivFlexCenter>
                            <DivFlexSpaceBetween>
                                <ButtonSecondary sx={{ width: '48%' }}>
                                    <EmailOutlinedIcon sx={{ color: theme.palette.background.deliveryCard }} />
                                </ButtonSecondary>
                                <ButtonSecondary sx={{ width: '48%' }}>
                                    <LocalPhoneIcon sx={{ color: theme.palette.background.deliveryCard }} />
                                </ButtonSecondary>
                            </DivFlexSpaceBetween>
                        </>
                        )}

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
