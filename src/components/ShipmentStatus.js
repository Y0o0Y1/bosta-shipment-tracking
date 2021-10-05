import React, { useContext } from 'react'
import { useTranslation } from "react-i18next";


import { LocaleContext } from '../contexts/LocaleContext';
import { Box, Paper, Grid, Typography, Divider, Step, Stepper, StepLabel, Card, CardContent } from "@mui/material"
import { MainContext } from './../contexts/MainContext';

import moment from 'moment';

import { LocalShipping } from "@material-ui/icons"

const ShipmentStatus = () => {
    const { t } = useTranslation();
    const { textDirection } = useContext(LocaleContext)
    const { shipment } = useContext(MainContext)
    console.log(shipment.CurrentStatus);
    const steps = [
        t("state1"),
        t("state2"),
        t("state3"),
        t("state4"),
    ];
    return (
        <Card variant="outlined" sx={{
            bgcolor: "#F9F9F9"
        }} >
            <CardContent>
                <Grid dir={textDirection} item container spacing={12} wrap>
                    <Grid item sm={3}>
                        <Typography>{t("shipment_number")} {shipment.TrackingNumber}</Typography>
                        <Typography>{shipment.CurrentStatus.state}</Typography>
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
                </Grid>
                <Divider />
                <Divider />
                <Grid item container dir={textDirection}>
                    <Grid item sm={12} sx={{
                        padding: "20px"
                    }}>
                        <Stepper dir={textDirection} alternativeLabel activeStep={0}>
                            {steps.map((step) => {
                                return <Step >
                                    <StepLabel>{step}</StepLabel>
                                </Step>
                            })}
                        </Stepper>
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}

export default ShipmentStatus
