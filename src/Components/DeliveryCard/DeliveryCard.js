import React, { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

// import material component
import { Collapse, Typography } from "@mui/material";

import { AppContext } from "../../App";

// import Icons
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';

// import components
import StopChipStatus from "../ChipStatus/StopChipStatus";
import ItemList from "../ItemList/ItemList";

// import Reusable Components
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexStart from "../ReusableComponents/DivFlexStart";


const RootDeliveryCard = styled('div')((props) => ({
    backgroundColor: props.isDesktop ? props.theme.palette.background.default : props.theme.palette.background.deliveryCard,
    padding: 20,
    cursor: 'pointer',
    ":hover": {
        backgroundColor: props.isDesktop ? props.isOpenItemList ? undefined : props.theme.palette.background.hoverDeliveryCard : undefined,
    }
}))


const DeliveryCard = (props) => {

    const {
        totalDelivery,
        numberOfDeliver,
        data,
        isOpenItemList,
        deliveryId
    } = props

    const { isMobile, isTablet, isDesktop } = useContext(AppContext)

    // theme color
    const theme = useTheme()

    // local state for open itemlist
    const [openDetail, setOpenDetail] = useState(false)

    useEffect(() => {
        if (totalDelivery == 1) {
            setOpenDetail(true)
        } else {
            setOpenDetail(false)
        }
    }, [totalDelivery])

    return (
        <div style={{ width: openDetail ? '100%' : 'calc(100% - 40px)' }}  >
            <RootDeliveryCard onClick={isDesktop ? undefined : () => setOpenDetail(!openDetail)} isDesktop={isDesktop} sx={{ backgroundColor: isDesktop ? data.id == deliveryId ? theme.palette.background.deliveryCard : theme.palette.background.default : theme.palette.background.deliveryCard }} isOpenItemList={isOpenItemList}   >
                {isDesktop ? (<></>) : (
                    <>
                        {totalDelivery > 1 && (
                            <DivFlexSpaceBetween sx={{ mb: 1 }}>
                                <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-RegularItalic', textDecoration: 'underline' }}>
                                    {`${numberOfDeliver} of ${totalDelivery}`}
                                </Typography>
                                <StopChipStatus stopStatus={data.stopStatus} />
                            </DivFlexSpaceBetween>
                        )}
                    </>
                )}
                <DivFlexSpaceBetween sx={{ mb: isDesktop ? 1 : undefined, flexWrap: 'wrap' }}>
                    <Typography fontSize={12} sx={{ fontFamily: 'RobotoMono-Light' }} >
                        {data.plateDriver}
                    </Typography>
                    <div style={{ display: isDesktop ? 'block' : 'none' }} >
                        <StopChipStatus stopStatus={data.stopStatus} />
                    </div>
                </DivFlexSpaceBetween>
                <DivFlexStart>
                    <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                        {data.clientName}
                    </Typography>
                </DivFlexStart>

                <DivFlexStart>
                    <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Regular' }}>
                        {data.address}
                    </Typography>
                </DivFlexStart>

                <DivFlexSpaceBetween sx={{ mt: 1, flexWrap: 'wrap' }}>
                    <DivFlexStart sx={{ width: 160 }}>
                        <AccessTimeIcon sx={{
                            width: 13,
                            height: 13,
                            mr: 0.3,
                            color: '#959499'
                        }} />
                        <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                            {data.twStart} - {data.twEnd}
                        </Typography>
                        {data.stopStatus == 'Discrepancy' ? (
                            <DivFlexStart>
                                <ArrowDropDownIcon sx={{ width: 20, height: 20, color: '#ea0000' }} />
                                <Typography fontSize={10} color={'#ea0000'} sx={{ fontFamily: 'Eina04-Light', textTransform: 'uppercase' }}>
                                    Late
                                </Typography>
                            </DivFlexStart>
                        ) : data.stopStatus == 'Early' ? (<>
                            <DivFlexStart>
                                <ArrowDropUpIcon sx={{ width: 20, height: 20, color: '#58d632' }} />
                                <Typography fontSize={10} color={'#31711e'} sx={{ fontFamily: 'Eina04-Light', textTransform: 'uppercase' }}>
                                    Early
                                </Typography>
                            </DivFlexStart>
                        </>) : (<></>)}


                    </DivFlexStart>

                    <DivFlexStart>
                        <CalendarTodayIcon sx={{
                            width: 11,
                            height: 11,
                            mr: 0.5,
                            ml: 0.1,
                            color: '#959499'
                        }} />
                        <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Light' }}>
                            {data.date}
                        </Typography>
                    </DivFlexStart>
                </DivFlexSpaceBetween>

            </RootDeliveryCard>
            <Collapse in={openDetail || isOpenItemList}>
                {data.itemList.map((product, index) => (
                    <ItemList item={product} key={index} index={index} itemLength={data.itemList.length} isOpenItemList={isOpenItemList} />
                ))}
            </Collapse>
        </div>
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
        clientName: '-',
        plateDriver: '-'
    }

}

export default DeliveryCard