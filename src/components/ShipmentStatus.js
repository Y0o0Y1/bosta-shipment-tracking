import React, { useContext } from 'react'
import { useTranslation } from "react-i18next";
import { LocaleContext } from '../contexts/LocaleContext';
import { styled } from '@mui/material/styles';

import StepIcon from "./StepIcon"
import { Box, Paper, Grid, Typography, Divider, Step, Stepper, StepLabel, Card, CardContent } from "@mui/material"
import { MainContext } from './../contexts/MainContext';
import { StepConnector, stepConnectorClasses } from "@mui/material"
import moment from 'moment';

import { LocalShipping, CheckCircle } from "@material-ui/icons"

// #36B600
// #F40105
// #F9BA02
const ShipmentStatus = () => {
    const { t } = useTranslation();
    const { textDirection } = useContext(LocaleContext)
    const { shipment, currentShipmentState } = useContext(MainContext)
    const [currentStep, setCurrentStep] = React.useState(0);
    const shipmentStatuses = {
        TICKET_CREATED: {
            step: 0,
            color: "#3DB2FF"
        },
        PACKAGE_RECEIVED: {
            step: 1,
            color: "#36B600"
        },
        IN_TRANSIT: {
            step: 2,
            color: "#F9BA02"
        },
        DELIVERED: {
            step: 3,
            color: "#36B600"
        }
    }
    const steps = [
        t("TICKET_CREATED"),
        t("PACKAGE_RECEIVED"),
        t("IN_TRANSIT"),
        t("DELIVERED"),
    ];
    const QontoConnector = styled(StepConnector)(({ theme }) => ({
        [`&.${stepConnectorClasses.alternativeLabel}`]: {
            top: 10,
            left: 'calc(-50% + 16px)',
            dir: "rtl",
            right: 'calc(50% + 16px)',
        },
        [`&.${stepConnectorClasses.active}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: currentStep.color,
            },
        },
        [`&.${stepConnectorClasses.completed}`]: {
            [`& .${stepConnectorClasses.line}`]: {
                borderColor: currentStep.color,
            },
        },
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: theme.palette.mode === 'dark' ? theme.palette.grey[800] : '#eaeaf0',
            borderTopWidth: 3,
            borderRadius: 1,
        },
    }));
    function ColorlibStepIcon(props) {
        const { active, completed, className } = props;
        const icons = {
            1: currentStep.step < 1 ? <CheckCircle fontSize="large" /> : <CheckCircle fontSize="large" />,
            2: currentStep.step < 2 ? <CheckCircle fontSize="large" /> : <CheckCircle fontSize="large" />,
            3: currentStep.step < 3 ? <LocalShipping fontSize="large" /> : <CheckCircle fontSize="large" />,
            4: currentStep.step < 4 ? <CheckCircle fontSize="large" /> : <CheckCircle fontSize="large" />,
        };
        let iconState = {
            color: currentStep.color,
            active: active,
            completed: completed
        }
        return (
            <StepIcon iconState={iconState} className={className}>
                {icons[String(props.icon)]}
            </StepIcon>
        );
    }
    React.useEffect(() => {
        setCurrentStep(shipmentStatuses[shipment.CurrentStatus.state])
        console.log("current  ", currentStep)
    }, [shipment])
    return (
        <Card variant="outlined" sx={{
            bgcolor: "#F9F9F9"
        }} >
            <CardContent>
                <Grid container>
                    <Grid dir={textDirection} item container spacing={5} wrap>
                        <Grid item sm={3}>
                            <Typography>{t("shipment_number")} {shipment.TrackingNumber}</Typography>
                            <Typography color={currentStep.color} fontSize="large" fontWeight="bold">
                                {t(`${shipment.CurrentStatus.state}`)}</Typography>
                        </Grid >
                        <Grid item sm={4}>
                            <Typography>{t("latest_update")}</Typography>
                            <Typography>
                                {moment(shipment.CurrentStatus.timestamp).format("dddd, MMMM Do YYYY, h:mm:ss A")}
                            </Typography>
                        </Grid>
                        <Grid item sm={2}>
                            <Typography>{t("merchant_name")}</Typography>
                            <Typography>SOUQ.COM</Typography>
                        </Grid>
                        <Grid item sm={3}>
                            <Typography>{t("estimated_delievery_date")}</Typography>
                            <Typography>
                                {moment(shipment.CurrentStatus.timestamp).format("d, MMMM YYYY")}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Divider orientation="horizontal" flexItem />
                        </Grid>
                    </Grid>
                    <Grid item container>
                        <Grid item sm={12} sx={{
                            padding: "20px"
                        }}>
                            <Stepper
                                connector={<QontoConnector />}
                                alternativeLabel
                                activeStep={currentStep.step}>
                                {steps.map((step) => {
                                    return <Step dir={textDirection}>
                                        <StepLabel StepIconComponent={ColorlibStepIcon}>{step}</StepLabel>
                                    </Step>
                                })}
                            </Stepper>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ShipmentStatus
