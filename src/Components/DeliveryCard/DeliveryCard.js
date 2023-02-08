import React, { useContext, useEffect, useState } from "react";
import { styled, useTheme } from "@mui/material/styles";

// import material component
import { Box, Collapse, Typography } from "@mui/material";

// import AppContext
import { AppContext } from "../../App";

// import Icons
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import ClockIcon from "../../assets/icons/ClockIcon";
import CalendarIcon from "../../assets/icons/CalendarIcon";
import DoneIcon from "../../assets/icons/DoneIcon";

// import components
import ItemList from "../ItemList/ItemList";

// import Reusable Components
import DivFlexSpaceBetween from "../ReusableComponents/DivFlexSpacebetween";
import DivFlexStart from "../ReusableComponents/DivFlexStart";
import DiscrepancyChip from "../ChipStatus/DiscrepancyChip";


const RootDeliveryCard = styled('div')((props) => ({
    backgroundColor: props.isDesktop ? props.data.id == props.deliveryId ? props.theme.palette.background.deliveryCard : props.isOpenItemList ? props.theme.palette.background.deliveryCard : props.theme.palette.background.default : props.theme.palette.background.deliveryCard,
    padding: props.isDesktop ? 16 : props.openDetail ? '16px 24px 16px 24px' :16,
    cursor: props.isDesktop ? props.isOpenItemList ? 'default' : 'pointer' : 'pointer',
    ":hover": {
        backgroundColor: props.isDesktop ? props.isOpenItemList ? undefined : props.theme.palette.background.hoverDeliveryCard : undefined,
    }
}))

const getStatusChip = (data, theme) => {
    return (
        <DivFlexStart>

            {data.itemList.some((v) => { return v.warning == true }) ? (<DiscrepancyChip />) : (<></>)}

            {data.deliveryStatus == 'Done' ?
                (
                    <DivFlexStart sx={{ ml: 1, mt: 0.5, height: 18 }}>
                        <DoneIcon color={theme.palette.text.doneIcon} sx={{ fontSize: 16, mt: -0.4 }} />
                        <Typography fontSize={12} color={theme.palette.text.doneText} sx={{ fontFamily: 'Eina04-Regular' }}>
                            DONE
                        </Typography>
                    </DivFlexStart>
                ) : (
                    <DivFlexStart sx={{ ml: 0, mt: 0.5, height: 18 }} />
                )
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
        <Box sx={{ width: openDetail || isDesktop ? '100%' : 'calc(100% - 48px)' }}  >
            <RootDeliveryCard onClick={isDesktop ? undefined : () => setOpenDetail(!openDetail)} isDesktop={isDesktop} isOpenItemList={isOpenItemList} deliveryId={deliveryId} data={data} openDetail={openDetail} >
                {isMobile &&
                    <DivFlexSpaceBetween sx={{ mb: 1 }}>
                        <Typography fontSize={12} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-RegularItalic' }}>
                            {`${numberOfDeliver} of ${totalDelivery}`}
                        </Typography>
                        {getStatusChip(data, theme)}
                    </DivFlexSpaceBetween>
                }
                <DivFlexSpaceBetween sx={{ mb: isDesktop ? 0 : undefined, flexWrap: 'wrap' }}>
                    <Typography fontSize={12} sx={{ fontFamily: 'RobotoMono-Regular', letterSpacing:'0.15em'}} color={theme.palette.text.primary} >
                        {data.plateDriver}
                    </Typography>
                    <Box sx={{ display: isDesktop ? 'block' : 'none' }} >
                        {getStatusChip(data, theme)}
                    </Box>
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

                {data.deliveryStatus == 'Late' ?
                    (
                        <DivFlexStart sx={{ height: 16, pt: 1 }}>
                            <Typography fontSize={10} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Light', textDecoration: 'line-through', ml: 2.2 }}>
                                {data.twStart} - {data.twEnd}
                            </Typography>
                        </DivFlexStart>
                    ) : (
                        <DivFlexStart sx={{ height: 16 }} />
                    )
                }

                <DivFlexStart sx={{ flexWrap: 'wrap' }}>

                    <DivFlexStart sx={{ mr: 2 }}>
                        <ClockIcon color={'#959499'} sx={{
                            fontSize: 12,
                            mr: 0.5
                        }} />
                        <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-SemiBold' }}>
                            {data.twStart} - {data.twEnd}
                        </Typography>
                        {data.deliveryStatus == 'Late' ? (
                            <DivFlexStart sx={{ width: 40 }}>
                                <ArrowDropDownIcon sx={{ width: 20, height: 20, color: '#da1e28', }} />
                                <Typography fontSize={10} color={'#da1e28'} sx={{ fontFamily: 'Eina04-Light', textTransform: 'uppercase', mt: 0.1 }}>
                                    Late
                                </Typography>
                            </DivFlexStart>
                        ) : data.deliveryStatus == 'Early' ? (<>
                            <DivFlexStart sx={{ width: 40 }}>
                                {/* <ArrowDropUpIcon sx={{ width: 20, height: 20, color: '#58d632' }} />
                            <Typography fontSize={10} color={'#31711e'} sx={{ fontFamily: 'Eina04-Light', textTransform: 'uppercase' }}>
                                Early
                            </Typography> */}
                            </DivFlexStart>
                            <></>
                        </>) : (
                            <DivFlexStart sx={{ width: 40 }} />
                        )}

                    </DivFlexStart>

                    <DivFlexStart sx={{ display: isOpenItemList || openDetail ? '' : 'none' }}>
                        <CalendarIcon sx={{
                            fontSize: 12,
                            mr: 0.5,
                            ml: 0.1,
                            color: '#959499'
                        }} />
                        <Typography fontSize={14} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Light' }}>
                            {data.date}
                        </Typography>
                    </DivFlexStart>
                    
                </DivFlexStart>

                <DivFlexSpaceBetween sx={{ display: isOpenItemList || openDetail ? 'none' : '', flexWrap: 'wrap' }}>
                    <DivFlexStart>
                        <CalendarIcon color={'#959499'} sx={{
                            fontSize: 12,
                            mr: 0.5,
                            ml: 0.1
                        }} />
                        <Typography fontSize={10} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Light' }}>
                            {data.date}
                        </Typography>
                    </DivFlexStart>
                    <Typography fontSize={10} color={theme.palette.text.primary} sx={{ fontFamily: 'Eina04-Light' }}>
                        Click to see detail
                    </Typography>
                </DivFlexSpaceBetween>
            </RootDeliveryCard>

            <Collapse in={openDetail && !isDesktop || isOpenItemList}>
                {data.itemList.map((product, index) => (
                    <ItemList item={product} key={index} index={index} itemLength={data.itemList.length} isOpenItemList={isOpenItemList} />
                ))}
            </Collapse>

        </Box>
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