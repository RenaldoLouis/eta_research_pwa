import React, { useContext, useState } from 'react';

// import material components
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

// import reusable component
import DivFlexStart from '../ReusableComponents/DivFlexStart';
import DivFlexCenter from '../ReusableComponents/DivFlexCenter';
import ButtonSecondary from '../ReusableComponents/ButtonSecondary';
import DivFlexSpaceBetween from '../ReusableComponents/DivFlexSpacebetween';

import { AppContext } from "../../App";


// import dummy image for promo
import logo from '../../../src/assets/Images/dummy-promo-lemonade.jpg'

// color theme
import { useTheme } from "@mui/material/styles";


// import icons
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import { Box } from '@mui/material';


const PromoCard = (props) => {

    const { promo, openDetailPromo, isDialog, isMobile } = props

    const { isTablet, isDesktop } = useContext(AppContext)


    // color theme
    const theme = useTheme()

    // local state
    const [openDetail, setOpenDetail] = useState(openDetailPromo)

    return (
        <Card onClick={isMobile ? () => setOpenDetail(!openDetail) : undefined}
            sx={{
                width: openDetail || isDesktop ? '100%' : 'calc(100% - 48px)',
                backgroundColor: isMobile ? openDetail ? theme.palette.background.default : theme.palette.background.promoCard : isDialog ? theme.palette.background.dialog : theme.palette.background.promoCard,
                "&:hover": { backgroundColor: isMobile ? '' : isDialog ? '' : theme.palette.background.hoverDeliveryCard },
                borderRadius: 0,
                cursor: 'pointer',
            }}
            elevation={0}>
            <CardMedia
                component="img"
                image={promo.image}
                alt="promo"
                sx={{ objectFit: 'contain' }}
            />
            <CardContent style={{
                padding: isDialog ? '40px 75px 16px 75px' : '8px 16px 16px 16px',
            }}>
                <Typography color={theme.palette.text.primary} sx={{ fontSize: 18, fontFamily: 'Eina04-SemiBold' }}>
                    {promo.title}
                </Typography>
            </CardContent>


            <Collapse in={openDetail} timeout="auto" unmountOnExit >
                <Box sx={{ padding: isDialog == true ? '0px 75px 5px 75px' : '0px 16px 8px 16px', maxHeight: 190, overflowY: 'scroll' }}>
                    <Typography sx={{ color: theme.palette.text.text4, fontSize: 12, fontFamily: 'Eina04-Regular' }}>
                        {promo.detail}
                    </Typography>
                </Box>
                <Box sx={{ padding: isMobile ? '8px 16px 16px 16px' : '30px 75px 30px 75px' }}>
                    {isDialog ?
                        (<>
                            <DivFlexCenter sx={{ mb: 2 }}>
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
                            <DivFlexCenter sx={{ marginBottom: 2 }}>
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

                </Box>
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
