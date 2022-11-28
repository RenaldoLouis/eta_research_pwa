import React, { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

import { useStyles } from './DeliveryCardStyles'

import { Typography } from "@mui/material";

// import Icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ArrowDropDown, ArrowDropUp } from "@mui/icons-material";

// import components
import DeliveryChipStatus from "../ChipStatus/DeliveryChipStatus";
import StopChipStatus from "../ChipStatus/StopChipStatus";
import PlatDriver from "../PlatDriver/PlatDriver";
import ItemList from "../ItemList/ItemList";


const DeliveryCard = (props) => {

    const {
        totalDelivery,
        numberOfDeliver,
        data,
        onClickOpenDetail,
        isMobile
    } = props

    // theme color
    const theme = useTheme()

    // custom styles
    const classes = useStyles(theme)

    // local state
    const [openDetail, setOpenDetail] = useState(false)

    return (
        <>
            <div className={classes.root} onClick={onClickOpenDetail} style={{ width: isMobile ? '' : 400 }}>
                {totalDelivery > 1 && (
                    <div className={classes.flexSpaceBetween}>
                        <div style={{ border: '1px solid #979797', borderRadius: 5, padding: '0px 5px 0px 5px' }}>
                            <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                                {`${numberOfDeliver} / ${totalDelivery}`}
                            </Typography>
                        </div>
                        <div>
                            <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontStyle: 'italic', fontFamily: 'Eina04-LightItalic' }} >
                                {`${data.itemList.length} Products`}
                            </Typography>
                        </div>
                    </div>
                )}

                <div className={classes.flexSpaceBetween}>
                    <div className={classes.flexStart}>
                        <DeliveryChipStatus tourStatus={data.tourStatus} />
                    </div>
                    <div className={classes.flexStart}>
                        <StopChipStatus stopStatus={data.stopStatus} />
                    </div>
                </div>

                <div className={classes.flexStart}>
                    <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Bold' }}>
                        {data.clientName}
                    </Typography>
                </div>

                <div className={classes.flexStart}>
                    <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                        {data.address}
                    </Typography>
                </div>

                <div className={classes.flexSpaceBetween} style={{ marginTop: 10 }}>
                    <div className={classes.flexStart}>
                        <CalendarTodayIcon style={{
                            width: 14,
                            height: 14,
                            marginRight: 6,
                            marginTop: -3,
                            color: '#959499'
                        }} />
                        <div>
                            <Typography fontSize={16} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                                {data.date}
                            </Typography>
                        </div>
                    </div>

                </div>
                {/* {
                    data.isCanceled && (
                        <div className={classes.flexSpaceBetween}>
                            <div className={classes.flexStart} style={{ marginLeft: 20 }}>
                                <Typography fontSize={12} sx={{ textDecoration: 'line-through', color: '#e4b205', fontFamily: 'Eina04-SemiBold' }}>
                                    {`${data.twStart} - ${data.twEnd}`}
                                </Typography>
                            </div>

                        </div>
                    )
                } */}

                <div className={classes.flexSpaceBetween}>
                    <div className={classes.flexStart}>
                        <AccessTimeIcon style={{
                            width: 16,
                            height: 16,
                            marginRight: 6,
                            marginTop: -3,
                            color: '#959499'
                        }} />
                        <div>
                            <Typography fontSize={16} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                                {`${data.twStart} - ${data.twEnd}`}
                            </Typography>
                        </div>
                    </div>

                    {isMobile ? (<></>) : (<>
                        <div className={classes.flexEnd} onClick={() => setOpenDetail(!openDetail)} style={{ cursor: 'pointer' }}>
                            {openDetail ? <ArrowDropUp style={{ color:'#959499' }} /> : <ArrowDropDown  style={{ color:'#959499' }} />}
                        </div>
                    </>)}

                </div>
            </div>

            {
                isMobile ? (<></>) : (<>
                    {openDetail && (
                        <div>
                            {data.itemList.map((product, index) => (
                                <ItemList item={product} key={index} index={index} itemLength={data.itemList.length} isMobile={false} />
                            ))}
                        </div>
                    )}

                </>)
            }

        </>
    )

}

DeliveryCard.defaultProps = {
    data: {
        tourStatus: 'Too Early',
        stopStatus: 'Discrepancy',
        date: '-',
        twStart: '-',
        twEnd: '-',
        vehicle: '-',
        tourSorted: '',
        totalStops: 0,
        isCanceled: false,
        itemList: [0, 1, 2, 3],
        address: '-',
        clientName: '-'
    }

}

export default DeliveryCard