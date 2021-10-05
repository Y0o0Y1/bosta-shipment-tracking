import React, { useContext } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@material-ui/core';
import { useTranslation } from "react-i18next";

import { LocaleContext } from '../contexts/LocaleContext';
import { MainContext } from './../contexts/MainContext';
import moment from "moment";
import translate from "translate";

function createData(branch, date, time, details) {
    return { branch, date, time, details };
}

const ShipmentDetails = () => {
    const { t } = useTranslation();
    const { textDirection, currentLng } = useContext(LocaleContext)
    const { shipment, shipmentStates } = useContext(MainContext)
    const rows = shipment.TransitEvents.map((event) => {
        const eventState = (shipmentStates.filter((state) => {
            return event.state === state
        })[0].replaceAll("_", " "))
        const branch = event.hub ? event.hub : "Nasr City"
        const date = moment(event.timestamp).format("YYYY-MM-DD");
        const time = moment(event.timestamp).format("hh:mm A");
        return createData(branch, date, time, eventState)
    })
    React.useEffect(() => {
        console.log("Current " + currentLng, textDirection)
    }, [currentLng])
    return (
        <div dir={textDirection}>
            <Typography>{t("table_shipment_details")}</Typography>
            <TableContainer dir="ltr" component={Paper} >
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            {textDirection === "ltr" ? <>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"}>{t("table_branch")}</TableCell>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"}>{t("table_date")}</TableCell>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"} >{t("table_time")}</TableCell>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"}>{t("table_details")}</TableCell>
                            </> : <>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"}>{t("table_details")}</TableCell>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"} >{t("table_time")}</TableCell>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"}>{t("table_date")}</TableCell>
                                <TableCell align={textDirection === "ltr" ? "left" : "right"}>{t("table_branch")}</TableCell>
                            </>
                            }
                        </TableRow>
                    </TableHead>
                    <TableBody dir={textDirection}>
                        {rows.map((row) => (
                            <TableRow dir={textDirection}
                                key={row.name}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {textDirection === "ltr" ? (
                                    <>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"} component="th" scope="row">
                                            {row.branch}
                                        </TableCell>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"}>
                                            {row.date}
                                        </TableCell>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"}>
                                            {row.time}
                                        </TableCell>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"}>
                                            {row.details}
                                        </TableCell></>)
                                    :
                                    <>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"}>
                                            {row.details}
                                        </TableCell>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"}>
                                            {row.time}
                                        </TableCell>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"}>
                                            {row.date}
                                        </TableCell>
                                        <TableCell align={textDirection === "ltr" ? "left" : "right"} component="th" scope="row">
                                            {row.branch}
                                        </TableCell>
                                    </>}
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer >
        </div>
    )
}

export default ShipmentDetails