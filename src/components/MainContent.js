import React, { useContext } from 'react'

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
    return (
        <div className="main-content">
            {isSearching ?
                <>
                    <TrackingShipment
                    />
                </>
                : <>
                    <Grid container direction="row-reverse" wrap spacing={5}>
                        <Grid item sm={12}>
                            <ShipmentStatus />
                        </Grid>
                        <Grid item sm={12} md={8} lg={7} container justifyContent="flex-end" >
                            <Grid item sm={12} >
                                <ShipmentDetails />
                            </Grid>
                        </Grid>
                        <Grid item container sm={12} md={4} lg={5} direction="column" alignContent="center" spacing={2}>
                            <Grid item>
                                <ShipmentAdress />
                            </Grid>
                            <Grid item>
                                <TrackingShipment />
                            </Grid>
                        </Grid>

                    </Grid>
                </>
            }
        </div>
    )
}

export default MainContent
