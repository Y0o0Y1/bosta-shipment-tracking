import React from 'react'

export const LocaleContext = React.createContext()

const LocaleContextProvider = (props) => {
    const [currentLng, setCurrentLng] = React.useState("en");
    const [textDirection, setTextDirection] = React.useState("ltr")
    return <LocaleContext.Provider
        value={{ currentLng, setCurrentLng, textDirection, setTextDirection }}
    >
        {props.children}
    </LocaleContext.Provider>
}
export default LocaleContextProvider;
