import React, { useContext, useEffect, useState } from 'react'
import CustomDialog from './DialogContainer/CustomDialog'
import { Box, FormControl, FormControlLabel, FormGroup, Grid, RadioGroup, Typography } from '@mui/material'
import CustomDialogContent from './DialogContainer/CustomDialogContent'
import { Outlet } from 'react-router-dom'
import { AppContext } from '../../App'
import { useTheme } from "@mui/material/styles";
import DivFlexCenter from '../DivFlexCenter'
import { FontFamily } from '../../Constants/FontFamily'
import Checkbox from '../Checkbox'
import Radio from '../Radio'
import DivFlexStart from '../DivFlexStart'
import Form from '../Form'
import DivFlexSpaceBetween from '../DivFlexSpacebetween'
import Button from '../Button'



const EmailNotificationDialog = (props) => {

    const { isMobile, isDesktop, handleCloseDialog, addNewEmail } = useContext(AppContext)
    const { isOpen } = props;
    const theme = useTheme()

    const dummyData = {
        isDeliveryTimeFinalized: true,
        isDeliveryCanceled: true,
        isChangeInETA: false,
        isOneHourBeforeArrival: false,
        isDeliveryOnTheWay: false,
        changeInETA: null,
        etaTime: null
    }

    const [emailNotification, setEmailNotification] = useState(dummyData)

    const [radio, setRadio] = useState(dummyData?.changeInETA ? dummyData.changeInETA : '');
    const [etaTime, setEtaTime] = useState(dummyData?.etaTime ? dummyData.etaTime : 0);

    const [initialData, setInitialData] = useState({});

    const [isSetToDefaultDisabled, setIsSetToDefaultDisabled] = useState(true);

    useEffect(() => {
        setInitialData(dummyData)
    }, [])

    useEffect(() => {
        if (JSON.stringify(initialData) === JSON.stringify(emailNotification)) {
            setIsSetToDefaultDisabled(true)
        } else {
            setIsSetToDefaultDisabled(false)
        }
    }, [emailNotification])

    const handleIsChecked = (data) => () => {
        const value = emailNotification[data]

        setEmailNotification({
            ...emailNotification,
            [data]: !value
        })
    }

    const handleRadio = (event) => {
        setRadio(event.target.value);
    }

    const handleChangeSelect = (e) => {
        setEtaTime(e.target.value)
    }

    const options = [
        {
            value: 10,
            label: '10 min',
        },
        {
            value: 20,
            label: '20 min',
        },
        {
            value: 30,
            label: '30 min',
        },
        {
            value: 40,
            label: '40 min',
        },
        {
            value: 50,
            label: '50 min',
        },
        {
            value: 60,
            label: '60 min',
        },
    ];



    const handleSetToDefault = () => {
        setEmailNotification(initialData)
        setRadio(initialData.changeInETA);
        setEtaTime(initialData.etaTime)
    }

    const handleSubmit = (e) => {
        handleCloseDialog();
    }



    return (
        <>
            <CustomDialog width={900} open={isOpen} onClose={handleCloseDialog} theme={theme} >
                <Box sx={{ backgroundColor: theme.palette.background.dialog }}>
                    <CustomDialogContent isMobile={isMobile}>
                        <DivFlexCenter sx={{ height: isMobile ? 20 : 48, mb: isMobile ? 3 : 8 }}>
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 20 : 40, fontFamily: FontFamily.EINA04REGULAR }}>
                                ETA Email Notification
                            </Typography>
                        </DivFlexCenter>
                        <DivFlexStart>
                            <Typography sx={{ color: theme.palette.text.heading1, fontSize: isMobile ? 12 : 21, fontFamily: FontFamily.EINA04SEMIBOLD }}>
                                The latest email ETA information will be sent when:
                            </Typography>
                        </DivFlexStart>
                        <Box>
                            <FormGroup>
                                <Grid sx={{ marginTop: 0 }} container rowSpacing={isMobile ? 2 : 3}>
                                    <Grid item xs={12}>
                                        <Checkbox
                                            disabled
                                            checked={emailNotification.isDeliveryTimeFinalized}
                                            onChange={handleIsChecked('isDeliveryTimeFinalized')}
                                            label={"After the delivery time is finalized"}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox
                                            disabled
                                            checked={emailNotification.isDeliveryCanceled}
                                            onChange={handleIsChecked('isDeliveryCanceled')}
                                            label={"Delivery is canceled"}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox
                                            checked={emailNotification.isChangeInETA}
                                            onChange={handleIsChecked('isChangeInETA')}
                                            label={"Change in ETA"}
                                        />
                                        {emailNotification.isChangeInETA &&
                                            <Box sx={{ marginTop: 1, marginLeft: 2 }}>
                                                <RadioGroup
                                                    name={"etaGroup"}
                                                    value={radio}
                                                    onChange={handleRadio}
                                                >
                                                    <Radio checked={radio === 'any'} value={"any"} label="Any" />
                                                    <Radio checked={radio === 'custom'} value={"custom"} label="Custom" />
                                                </RadioGroup>
                                                {radio === 'custom' &&
                                                    <>
                                                        <Box sx={{ marginTop: 1 }} />
                                                        <Form select label={'Time'} options={options} selectDefaultValue={30} handleChangeSelect={handleChangeSelect} />
                                                    </>
                                                }
                                            </Box>
                                        }
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox
                                            checked={emailNotification.isOneHourBeforeArrival}
                                            onChange={handleIsChecked('isOneHourBeforeArrival')}
                                            label={"1 hour before arrival"}
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Checkbox
                                            checked={emailNotification.isDeliveryOnTheWay}
                                            onChange={handleIsChecked('isDeliveryOnTheWay')}
                                            label={"Delivery is on the way to your destination"}
                                        />
                                    </Grid>
                                </Grid>


                                <Typography sx={{
                                    textDecoration: 'underline',
                                    marginTop: isMobile ? 3 : 5,
                                    fontFamily: FontFamily.EINA04REGULAR,
                                    cursor: 'pointer',
                                    fontSize: isMobile ? 12 : 16,
                                    color: isSetToDefaultDisabled ? theme.palette.text.setToDefaultDisabled : theme.palette.text.setToDefault
                                }} onClick={handleSetToDefault} >
                                    Set To Default
                                </Typography>
                            </FormGroup>

                        </Box>
                        <DivFlexSpaceBetween sx={{ mt: isMobile ? 3 : 8 }}>
                            <Button style={{ width: '100%' }} onClick={handleSubmit}>
                                {`Save`}
                            </Button>
                        </DivFlexSpaceBetween>

                    </CustomDialogContent>
                </Box>
            </CustomDialog>
            <Outlet />
        </>
    )
}

export default EmailNotificationDialog