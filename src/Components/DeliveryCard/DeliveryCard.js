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
import DoneIcon from '@mui/icons-material/Done';

// import components
import ItemList from "../ItemList/ItemList";

// import Reusable Components
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DiscrepancyChip from "../ChipStatus/DiscrepancyChip";


const RootDeliveryCard = styled('div')((props) => ({
    backgroundColor: props.isDesktop ? props.data.id == props.deliveryId ? props.theme.palette.background.deliveryCard : props.isOpenItemList ? props.theme.palette.background.deliveryCard : props.theme.palette.background.default : props.theme.palette.background.deliveryCard,
    padding: props.isDesktop ? props.data.id == props.deliveryId ? 10 : props.isOpenItemList ? 10 : 0 : props.openDetail ? 20 : 10,
    cursor: 'pointer',
    ":hover": {
        backgroundColor: props.isDesktop ? props.isOpenItemList ? undefined : props.theme.palette.background.hoverDeliveryCard : undefined,
        padding: props.isDesktop ? 10 : undefined
    }
}))

const getStatusChip = (data, theme) => {
    return (
        <DivFlexStart>

            {data.itemList.some((v) => { return v.warning == true }) ? (<DiscrepancyChip />) : (<></>)}

            {
                data.deliveryStatus == 'Done' &&
                <DivFlexStart sx={{ ml: 0.5 }}>
                    <DoneIcon sx={{ fontSize: 14, mt: -0.4, color: theme.palette.text.doneText }} />
                    <Typography fontSize={12} color={theme.palette.text.doneText} sx={{ fontFamily: 'Eina04-Regular' }}>
                        Done
                    </Typography>
                </DivFlexStart>
            }
        </DivFlexStart>
    )
}

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
        <div style={{ width: openDetail && isMobile ? '100%' : 'calc(100% - 40px)' }}  >
            <RootDeliveryCard onClick={isDesktop ? undefined : () => setOpenDetail(!openDetail)} isDesktop={isDesktop} isOpenItemList={isOpenItemList} deliveryId={deliveryId} data={data} openDetail={openDetail} >
                {isMobile &&
                    <DivFlexSpaceBetween sx={{ mb: 1 }}>
                        <Typography fontSize={12} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-RegularItalic', textDecoration: 'underline' }}>
                            {`${numberOfDeliver} of ${totalDelivery}`}
                        </Typography>
                        {getStatusChip(data, theme)}
                    </DivFlexSpaceBetween>
                }
                <DivFlexSpaceBetween sx={{ mb: isDesktop ? 1 : undefined, flexWrap: 'wrap' }}>
                    <Typography fontSize={12} sx={{ fontFamily: 'RobotoMono-Light', }} color={theme.palette.text.primary} >
                        {data.plateDriver}
                    </Typography>
                    <div style={{ display: isDesktop ? 'block' : 'none' }} >
                        {getStatusChip(data, theme)}
                    </div>
                </DivFlexSpaceBetween>
                <DivFlexStart>
                    <Typography fontSize={14} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                        {data.clientName}
                    </Typography>
                </DivFlexStart>

                <DivFlexStart>
                    <Typography fontSize={12} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-Regular' }}>
                        {data.address}
                    </Typography>
                </DivFlexStart>

                {data.deliveryStatus == 'Late' &&
                    <DivFlexStart sx={{ mt:1 }}>
                        <Typography fontSize={10} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-Light', textDecoration:'line-through' }}>
                            {data.twStart} - {data.twEnd}
                        </Typography>
                    </DivFlexStart>
                }

                <DivFlexStart sx={{ width: 160, mt:data.deliveryStatus == 'Late'? 0 : 1 }}>

                    <AccessTimeIcon sx={{
                        width: 13,
                        height: 13,
                        mr: 0.5,
                        color: '#959499'
                    }} />
                    <Typography fontSize={14} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                        {data.twStart} - {data.twEnd}
                    </Typography>
                    {data.deliveryStatus == 'Late' ? (
                        <DivFlexStart>
                            <ArrowDropDownIcon sx={{ width: 20, height: 20, color: '#da1e28',  }} />
                            <Typography fontSize={10} color={'#da1e28'} sx={{ fontFamily: 'Eina04-Light', textTransform: 'uppercase', mt:0.1 }}>
                                Late
                            </Typography>
                        </DivFlexStart>
                    ) : data.deliveryStatus == 'Early' ? (<>
                        {/* <DivFlexStart>
                            <ArrowDropUpIcon sx={{ width: 20, height: 20, color: '#58d632' }} />
                            <Typography fontSize={10} color={'#31711e'} sx={{ fontFamily: 'Eina04-Light', textTransform: 'uppercase' }}>
                                Early
                            </Typography>
                        </DivFlexStart> */}
                        <></>
                    </>) : (<></>)}
                </DivFlexStart>

                <DivFlexSpaceBetween>
                    <DivFlexStart>
                        <CalendarTodayIcon sx={{
                            width: 10,
                            height: 10,
                            mr: 0.8,
                            ml: 0.1,
                            mt: -0.3,
                            color: '#959499'
                        }} />
                        <Typography fontSize={10} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-Light' }}>
                            {data.date}
                        </Typography>
                    </DivFlexStart>
                    {isMobile && !openDetail &&
                        <Typography fontSize={10} color={theme.palette.text.secondary} sx={{ fontFamily: 'Eina04-Light' }}>
                            Click to see detail
                        </Typography>
                    }
                </DivFlexSpaceBetween>
            </RootDeliveryCard>

            <Collapse in={openDetail && isMobile || isOpenItemList}>
                {data.itemList.map((product, index) => (
                    <ItemList item={product} key={index} index={index} itemLength={data.itemList.length} isOpenItemList={isOpenItemList} />
                ))}
            </Collapse>

        </div>
    )

}

DeliveryCard.defaultProps = {
    data: {
        deliveryStatus: '',
        stopStatus: '',
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