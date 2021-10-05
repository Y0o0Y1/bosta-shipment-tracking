import React, { useContext } from 'react'
import { LocaleContext } from '../contexts/LocaleContext';

import { MainContext } from '../contexts/MainContext'
import { Grid } from '@material-ui/core'
//-------------------------------------------------------
import TrackingShipment from './TrackingShipment'

//-------------------------------------------------------

import ShipmentStatus from './ShipmentStatus'
import ShipmentDetails from './ShipmentDetails'
import ShipmentAdress from './ShipmentAdress'

const MainContent = () => {
    const { isSearching } = useContext(MainContext)
    const { textDirection } = useContext(LocaleContext)

    return (
        <div className="main-content" dir={textDirection}>
            {isSearching ?
                <>
                    <Grid container justifyContent="center" alignContent="center">
                        <Grid item sm={12} md={6} alignSelf="center" justifySelf="center">
                            <TrackingShipment />
                        </Grid>
                    </Grid>
                </>
                : <>
                    <Grid container direction="row-reverse" wrap spacing={5}>
                        <Grid item xs={12}>
                            <ShipmentStatus />
                        </Grid>
                        <Grid item container spacing={3} direction="column" alignContent="center"
                            sm={12} md={4} lg={4} wrap>
                            <Grid item alignSelf="center">
                                <ShipmentAdress />
                            </Grid>
                            <Grid item alignSelf="center" >
                                <TrackingShipment />
                            </Grid>
                        </Grid>
                        <Grid item sm={12} md={8} lg={8} container justifyContent="flex-end" >
                            <Grid item sm={12} >
                                <ShipmentDetails />
                            </Grid>
                        </Grid>
                    </Grid>
                </>
            }
        </div>
    )
}

export default MainContent
