import React from "react";
import axios from "axios"

export const MainContext = React.createContext()

const MainContextProvider = (props) => {
    const [isSearching, setIsSearching] = React.useState(true);
    const [shipment, setShipment] = React.useState();
    const [currentShipmentState, setCurrentShipmentState] = React.useState();
    const shipmentStates = [
        "TICKET_CREATED", "PACKAGE_RECEIVED", "IN_TRANSIT", "NOT_YET_SHIPPED", "OUT_FOR_DELIVERY",
        "WAITING_FOR_CUSTOMER_ACTION", "DELIVERED"
    ]
    const handleSearch = (shipmentNumber) => {
        axios.get(`https://tracking.bosta.co/shipments/track/${shipmentNumber}`).then((response) => {
            setShipment(response.data)
            setIsSearching(false)
        }).catch((error) => {
            console.log(error)
        })
    }
    return <MainContext.Provider
        value={{ handleSearch, isSearching, setIsSearching, shipment, shipmentStates }}
    >
        {props.children}
    </MainContext.Provider>
}

export default MainContextProvider;