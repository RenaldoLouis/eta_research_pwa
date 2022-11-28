import React from "react";

// import theme
import { useTheme } from "@mui/material/styles";

// import custom styles
import { useDeliveryCardDetail } from './DeliveryCardDetailStyles'

// import material component
import { Typography } from "@mui/material";

// import Icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// import components
import DeliveryChipStatus from "../ChipStatus/DeliveryChipStatus";
import StopChipStatus from "../ChipStatus/StopChipStatus";
import PlatDriver from "../PlatDriver/PlatDriver";

const DeliveryCardDetail = (props) => {

    const {
        data
    } = props


    // theme color
    const theme = useTheme()

    // custom styles
    const classes = useDeliveryCardDetail(theme)

    return (
        <div className={classes.root}>
            <div className={classes.flexSpaceBetween}>
                <div className={classes.flexStart}>
                    <DeliveryChipStatus tourStatus={data.tourStatus} />
                </div>
                <div className={classes.flexStart}>
                    <StopChipStatus stopStatus={data.stopStatus} />
                </div>
            </div>
            <div className={classes.flexCenter}>
                <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Bold' }}>
                    {data.clientName}
                </Typography>
            </div>
            <div className={classes.flexCenter}>
                    <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                        {data.address}
                    </Typography>
                </div>
            <div className={classes.flexCenter}>
                <div className={classes.flexStart}>
                    <CalendarTodayIcon style={{
                        width: 14,
                        height: 14,
                        marginRight: 6,
                        color: '#959499'
                    }} />
                    <div>
                        <Typography fontSize={16} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Bold' }}>
                            {data.date}
                        </Typography>
                    </div>
                </div>

            </div>
            {
                data.isCanceled && (
                    <div className={classes.flexCenter}>
                        <div className={classes.flexStart} style={{ marginLeft: 20 }}>
                            <Typography fontSize={12} sx={{ textDecoration: 'line-through', color: '#d4b305', fontFamily: 'Eina04-Bold' }}>
                                {`${data.twStart} - ${data.twEnd}`}
                            </Typography>
                        </div>

                    </div>
                )
            }
            <div className={classes.flexCenter}>
                <div className={classes.flexStart}>
                    <AccessTimeIcon style={{
                        width: 16,
                        height: 16,
                        marginRight: 6,
                        color: '#959499'
                    }} />
                    <div>
                        <Typography fontSize={16} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-Bold' }}>
                            {`${data.twStart} - ${data.twEnd}`}
                        </Typography>
                    </div>
                </div>

            </div>
            <div className={classes.flexCenter}>
                <PlatDriver vehicle={data.vehicle} />
            </div>
        </div>
    )

}

DeliveryCardDetail.defaultProps = {
    data: {
        tourStatus: '-',
        stopStatus: '-',
        date: '-',
        twStart: '-',
        twEnd: '-',
        vehicle: '-',
        tourSorted: '',
        totalStops: 0,
        isCanceled: true
    }
}

export default DeliveryCardDetail