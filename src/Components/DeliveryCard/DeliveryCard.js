import React, { useContext, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

// import material component
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

// import Reusable Components
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DivFlexEnd from "../ReusableComponents/DivFlexEnd";


const RootDeliveryCard = styled('div')((props) => ({
    backgroundColor: props.theme.palette.background.deliveryCard,
    padding: 20,
}))

const TotalDeliveryChip = styled('div')((props) => ({
    border: '1px solid #979797', 
    borderRadius: 5, 
    padding: '0px 5px 0px 5px'
}))


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

    // local state
    const [openDetail, setOpenDetail] = useState(false)

    return (
        <>
            <RootDeliveryCard onClick={onClickOpenDetail} style={{ width: isMobile ? '' : 400 }}>
                {totalDelivery > 1 && (
                    <DivFlexSpaceBetween sx={{ mb: 1 }}>
                        <TotalDeliveryChip>
                            <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                                {`${numberOfDeliver} / ${totalDelivery}`}
                            </Typography>
                        </TotalDeliveryChip>
                        <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontStyle: 'italic', fontFamily: 'Eina04-LightItalic' }} >
                            {`${data.itemList.length} Products`}
                        </Typography>
                    </DivFlexSpaceBetween>
                )}
                
                <DivFlexSpaceBetween sx={{ marginBottom: 1 }}>
                    <DeliveryChipStatus tourStatus={data.tourStatus} />
                    <StopChipStatus stopStatus={data.stopStatus} />
                </DivFlexSpaceBetween>


                <DivFlexStart>
                    <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Bold' }}>
                        {data.clientName}
                    </Typography>
                </DivFlexStart>

                <DivFlexStart>
                    <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                        {data.address}
                    </Typography>
                </DivFlexStart>

                <DivFlexSpaceBetween sx={{ mt: 1 }}>
                    <DivFlexStart>
                        <CalendarTodayIcon sx={{
                            width: 14,
                            height: 14,
                            mr: 1,
                            color: '#959499'
                        }} />
                        <Typography fontSize={16} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                            {data.date}
                        </Typography>
                    </DivFlexStart>
                </DivFlexSpaceBetween>

                <DivFlexSpaceBetween>
                    <DivFlexStart>
                        <AccessTimeIcon sx={{
                            width: 16,
                            height: 16,
                            mr: 1,
                            color: '#959499'
                        }} />
                        <Typography fontSize={16} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                            {`${data.twStart} - ${data.twEnd}`}
                        </Typography>
                    </DivFlexStart>

                    {isMobile ? (<></>) : (<>
                        <DivFlexEnd onClick={() => setOpenDetail(!openDetail)} sx={{ cursor: 'pointer' }}>
                            {openDetail ? <ArrowDropUp style={{ color: '#959499' }} /> : <ArrowDropDown style={{ color: '#959499' }} />}
                        </DivFlexEnd>
                    </>)}
                </DivFlexSpaceBetween>
            </RootDeliveryCard>

            {
                isMobile ? (<></>) : (<>
                    {openDetail && (
                        <>
                            {data.itemList.map((product, index) => (
                                <ItemList item={product} key={index} index={index} itemLength={data.itemList.length} isMobile={false} />
                            ))}
                        </>
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