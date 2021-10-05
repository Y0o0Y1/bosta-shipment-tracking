import React, { useContext } from 'react'
import { LocaleContext } from "../contexts/LocaleContext";
import { useTranslation } from "react-i18next";

import { MainContext } from '../contexts/MainContext';

import { TextField, Typography, Grid, Card, CardContent } from '@mui/material';
import { Search } from '@material-ui/icons';

const TrackingShipment = () => {
    const { t } = useTranslation();
    const { textDirection } = useContext(LocaleContext)
    const { handleSearch } = useContext(MainContext);
    const [shipmentNumber, setShipmentNumber] = React.useState("");
    const handleClick = () => {
        if (shipmentNumber)
            handleSearch(shipmentNumber);
    }
    const handleChange = (event) => {
        setShipmentNumber(event.target.value);
    };
    return (
        <>
            <Card variant="outlined" sx={{
                bgcolor: "#F9F9F9"
            }}>
                <CardContent>
                    <Grid dir={textDirection} container direction="column" spacing={2} wrap>
                        <Grid item xs>
                            <Typography sx={{
                                color: "#FF0000"
                            }} >
                                {t("track_shipment_header")}
                            </Typography>
                        </Grid>
                        <Grid item container justifyContent="center" alignContent="center" spacing={1} xs wrap>
                            <Grid item alignSelf="center" justifySelf="center">
                                <TextField
                                    id="outlined-name"
                                    label={t("track_shipment_field")}
                                    value={shipmentNumber}
                                    onChange={handleChange}
                                    placeholder={t("track_shipment_field")}
                                    required
                                >
                                </TextField>
                            </Grid>
                            <Grid item alignSelf="center" justifySelf="center" onClick={handleClick}>
                                <Search style={{
                                    color: "red",
                                    cursor: "pointer",
                                    fontSize: "2rem",
                                    border: "1px solid white"
                                }} />
                            </Grid>
                        </Grid>
                    </Grid>
                </CardContent>
            </Card>
        </>)
}

export default TrackingShipment