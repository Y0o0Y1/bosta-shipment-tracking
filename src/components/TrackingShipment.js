import React, { useContext } from 'react'
import { LocaleContext } from "../contexts/LocaleContext";
import { useTranslation } from "react-i18next";

import { MainContext } from '../contexts/MainContext';

import { Typography, Grid, makeStyles, Card, CardContent } from '@material-ui/core';

import TextField from '@mui/material/TextField';
import { Search } from '@material-ui/icons';

const useStyles = makeStyles((theme) => ({
    trackShipmentWrapper: {
        display: "grid",
        alignContent: "center",
        justifyContent: "center",
        border: "3px solid #f0f0f0",
        borderRadius: "30px",
        width: "460px",
        height: "10rem",
        margin: "2rem",
        padding: "50px",
        transition: "all 1s",
        backgroundColor: "#FAFAFA",
        [theme.breakpoints.down(919)]: {
            width: "75%",
            height: "10rem",
            transition: "all 1s",
        }
    },
    typo: {
        color: "#FF0000",
        fontWeight: "650",
        margin: "5% 0",
        transition: "all 1s",
        [theme.breakpoints.down('xs')]: {
            width: "80%",
            transition: "all 1s",
        }
    },
    textField: {
        width: "250px",
        margin: "5% 0",
        padding: "50%",
        transition: "all 1s",
        [theme.breakpoints.down('xs')]: {
            width: "80%",
            margin: "25%",
            transition: "all 1s",
        }
    },
    searchIconWrapper: {
        width: "100%",
        height: "80%",
        backgroundColor: "#FAFAFA",
        display: "grid",
        alignContent: "center",
        justifySelf: "center",
        borderRadius: "20",
        margin: "0 5%",
        cursor: "pointer"
    },
    searchIcon: {
        fontSize: "2rem",
        margin: "0 15%",
        color: "Red",
        justifySelf: "center"
    }
}))

const TrackingShipment = () => {
    const classes = useStyles()
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
            <Grid dir={textDirection} direction="column" container className={classes.trackShipmentWrapper}>
                <Grid item>
                    <Typography className={classes.typo}>
                        {t("track_shipment_header")}
                    </Typography>
                </Grid>
                <Grid item container>
                    <TextField
                        className={classes.textField}
                        id="outlined-name"
                        label={t("track_shipment_field")}
                        value={shipmentNumber}
                        onChange={handleChange}
                        placeholder={t("track_shipment_field")}
                        required
                    >
                    </TextField>
                    <Grid item >
                        <div className={classes.searchIconWrapper} onClick={handleClick}>
                            <Search className={classes.searchIcon} />
                        </div>
                    </Grid>
                </Grid>
            </Grid>
        </>

    )
}

export default TrackingShipment