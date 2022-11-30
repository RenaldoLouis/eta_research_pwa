import React from "react";

// import theme
import { styled, useTheme } from "@mui/material/styles";

// import material component
import { Typography } from "@mui/material";

// import Icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';

// import components
import DeliveryChipStatus from "../ChipStatus/DeliveryChipStatus";
import StopChipStatus from "../ChipStatus/StopChipStatus";
import PlatDriver from "../PlatDriver/PlatDriver";

// import Reusable Components
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";

const RootDeliveryCardDetail = styled('div')((props) => ({
    backgroundColor: props.theme.palette.background.deliveryCard,
    padding: 20,
}));

const DeliveryCardDetail = (props) => {

    const {
        data
    } = props


    // theme color
    const theme = useTheme()


    return (
        <RootDeliveryCardDetail>

            <DivFlexSpaceBetween>
                <DeliveryChipStatus tourStatus={data.tourStatus} />
                <StopChipStatus stopStatus={data.stopStatus} />
            </DivFlexSpaceBetween>

            <DivFlexCenter sx={{mt:2}}>
                <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Bold' }}>
                    {data.clientName}
                </Typography>
            </DivFlexCenter>

            <DivFlexCenter>
                <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                    {data.address}
                </Typography>
            </DivFlexCenter>

            <DivFlexCenter sx={{ mt: 2 }}>
                <DivFlexStart>
                    <CalendarTodayIcon sx={{
                        width: 14,
                        height: 14,
                        mr: 1,
                        color: '#959499'
                    }} />
                    <Typography fontSize={16} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Bold' }}>
                        {data.date}
                    </Typography>
                </DivFlexStart>

            </DivFlexCenter>
            {
                data.isCanceled && (
                    <DivFlexCenter>
                        <Typography fontSize={12} sx={{ textDecoration: 'line-through', color: '#d4b305', fontFamily: 'Eina04-Bold' }}>
                            {`${data.twStart} - ${data.twEnd}`}
                        </Typography>
                    </DivFlexCenter>
                )
            }

            <DivFlexCenter>
                <DivFlexStart>
                    <AccessTimeIcon sx={{
                        width: 16,
                        height: 16,
                        mr: 1,
                        color: '#959499'
                    }} />
                    <Typography fontSize={16} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-Bold' }}>
                        {`${data.twStart} - ${data.twEnd}`}
                    </Typography>
                </DivFlexStart>
            </DivFlexCenter>

            <DivFlexCenter sx={{ mt: 1 }}>
                <PlatDriver vehicle={data.vehicle} />
            </DivFlexCenter>

        </RootDeliveryCardDetail>
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