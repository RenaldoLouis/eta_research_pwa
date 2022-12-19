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

function truncate(string, length) {
    if (string.length > 40)
        return string.substring(0, 40) + '...';
    else
        return string;
};


const PromoCard = (props) => {

    const { promo, openDetailPromo, isDialog, isMobile } = props

    // color theme
    const theme = useTheme()

    // local state
    const [openDetail, setOpenDetail] = useState(openDetailPromo)

    return (
        <Card onClick={isMobile ? () => setOpenDetail(!openDetail) : undefined} sx={{ width: openDetail ? '100%' : 'calc(100% - 40px)', backgroundColor: isMobile ? openDetail ? theme.palette.background.default : theme.palette.background.promoCard : theme.palette.background.default, borderRadius: 0, cursor: 'pointer', }} elevation={0}>
            <CardMedia
                component="img"
                height={isMobile ? 210 : isDialog ? 290 : 210}
                image={promo.image}
                alt="promo"
                sx={{ objectFit: 'fill' }}
            />
            <CardContent style={{
                padding: isMobile ? '10px 20px 10px 20px' : isDialog ? '35px 75px 20px 75px' : '10px 0px 20px 0px'
            }}>
                <Typography color={theme.palette.text.secondary} sx={{ fontSize: 18, fontFamily: 'Eina04-SemiBold' }}>
                    {isDialog || openDetail ? promo.title : truncate(promo.title)}
                    {/* {promo.title} */}
                </Typography>
            </CardContent>

            <Collapse in={openDetail} timeout="auto" unmountOnExit >
                <div style={{ padding: isDialog == true ? '0px 75px 5px 75px' : '0px 20px 10px 20px', marginTop: -5, maxHeight: 190, overflowY: 'scroll' }}>
                    <Typography sx={{ color: theme.palette.text.text4, fontSize: 12, fontFamily: 'Eina04-Regular' }}>
                        {promo.detail}
                    </Typography>
                </div>
                <div style={{ padding: isMobile ? '10px 20px 20px 20px' : '30px 75px 30px 75px' }}>
                    {isDialog ?
                        (<>
                            <DivFlexCenter>
                                <Typography fontSize={12} sx={{ fontFamily:'Eina04-SemiBold' }}>
                                    Phone +62 123 4567 89
                                </Typography>
                            </DivFlexCenter>
                            <ButtonSecondary sx={{ width: '100%', position: 'sticky', mt:1 }}>
                                <EmailOutlinedIcon sx={{ color: theme.palette.background.deliveryCard }} />
                                <Typography fontSize={12} sx={{ fontFamily: 'Eina04-SemiBold', ml: 1 }} color={theme.palette.background.deliveryCard} >
                                    Contact our Sales Rep.
                                </Typography>
                            </ButtonSecondary>

                        </>) :
                        (<>
                            <DivFlexCenter sx={{ mb: 0.5 }}>
                                <Typography fontSize={12} sx={{ fontFamily: 'Eina04-SemiBold', }} color={theme.palette.text.secondary} >
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
