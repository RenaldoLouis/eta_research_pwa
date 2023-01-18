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

function LimitChar(string, length) {
    if (string.length > 50)
        return string.substring(0, 50) + '...';
    else
        return string;
};


const PromoCard = (props) => {

    const { promo, openDetailPromo, isDialog, isMobile , isDesktop, trackingNumberPage} = props

    // color theme
    const theme = useTheme()

    // local state
    const [openDetail, setOpenDetail] = useState(openDetailPromo)

    return (
        <Card onClick={isMobile ? () => setOpenDetail(!openDetail) : undefined} sx={{ width: openDetail ? '100%' : 'calc(100% - 40px)', backgroundColor: isMobile ? openDetail ? theme.palette.background.default : theme.palette.background.promoCard : trackingNumberPage ? theme.palette.background.promoCard : isDialog ? theme.palette.background.dialog : theme.palette.background.default, borderRadius: 0, cursor: 'pointer', "&:hover":{backgroundColor: isMobile ? '' : isDialog ? '' : theme.palette.background.hoverDeliveryCard  } }} elevation={0}>
            <CardMedia
                component="img"
                // height={isMobile ? 210 : isDialog ? 290 : 210}
                // width={'100%'}
                image={promo.image}
                alt="promo"
                sx={{ objectFit: 'contain' }}
            />
            <CardContent style={{
                padding: isMobile ? '8px 16px 16px 16px' : trackingNumberPage ?  '24px 24px 32px 24px' : isDialog ? '40px 75px 16px 75px' : '8px 8px 16px 8px', 
            }}>
                <Typography color={theme.palette.text.primary} sx={{ fontSize: 18, fontFamily: 'Eina04-SemiBold' }}>
                    {promo.title}
                </Typography>
            </CardContent>


            <Collapse in={openDetail} timeout="auto" unmountOnExit >
                <div style={{ padding: isDialog == true ? '0px 75px 5px 75px' : '0px 20px 10px 20px', maxHeight: 190, overflowY: 'scroll'}}>
                    {/* <Typography color={theme.palette.text.primary} sx={{ fontSize: 18, fontFamily: 'Eina04-SemiBold' }}>
                        {promo.title}
                    </Typography> */}
                    <Typography sx={{ color: theme.palette.text.text4, fontSize: 12, fontFamily: 'Eina04-Regular' }}>
                        {promo.detail}
                    </Typography>
                </div>
                <div style={{ padding: isMobile ? '10px 20px 20px 20px' : '30px 75px 30px 75px' }}>
                    {isDialog ?
                        (<>
                            <DivFlexCenter style={{ marginBottom:16 }}>
                                <Typography fontSize={12} sx={{ fontFamily: 'Eina04-SemiBold', color: theme.palette.background.buttonSecondary }}>
                                    Phone +62 123 4567 89
                                </Typography>
                            </DivFlexCenter>
                            <ButtonSecondary sx={{ width: '100%', position: 'sticky' }}>
                                <EmailOutlinedIcon sx={{ color: theme.palette.text.buttonSecondary }} />
                                <Typography fontSize={12} sx={{ fontFamily: 'Eina04-SemiBold', ml: 1, color: theme.palette.text.buttonSecondary }} >
                                    Contact Our Sales Rep.
                                </Typography>
                            </ButtonSecondary>

                        </>) :
                        (<>
                            <DivFlexCenter style={{ marginBottom:16 }}>
                                <Typography fontSize={12} sx={{ fontFamily: 'Eina04-SemiBold', }} color={theme.palette.text.secondary} >
                                    Contact Our Sales Rep.
                                </Typography>
                            </DivFlexCenter>
                            <DivFlexSpaceBetween>
                                <ButtonSecondary sx={{ width: '48%' }}>
                                    <EmailOutlinedIcon sx={{ color: theme.palette.text.buttonSecondary }} />
                                </ButtonSecondary>
                                <ButtonSecondary sx={{ width: '48%' }}>
                                    <LocalPhoneIcon sx={{ color: theme.palette.text.buttonSecondary }} />
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
