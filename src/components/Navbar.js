import React, { useContext } from "react";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import {
    Grid,
    AppBar,
    Box,
    Toolbar,
    Button,
    makeStyles,
    useMediaQuery,
    Menu,
    Typography,
    MenuItem
} from "@material-ui/core";

import { LocaleContext } from "../contexts/LocaleContext";

const useStyles = makeStyles({
    root: {
        margin: "0 2%"
    },
    label: {
        textTransform: 'capitalize',
    },
});

const Navbar = () => {
    const classes = useStyles();
    const { t } = useTranslation();
    const { currentLng, setCurrentLng, textDirection, setTextDirection } = useContext(LocaleContext);
    const [logoURL, setLogoURL] = React.useState();
    React.useEffect(() => {
        setLogoURL(process.env.PUBLIC_URL + `/assets/locales/${currentLng}/logo.svg`)
    }, [currentLng]);
    const [anchor, setAnchor] = React.useState(null);
    const open = Boolean(anchor);
    const handleMenu = (event) => {
        setAnchor(event.currentTarget);
    };
    // const isMobile = useMediaQuery((theme) => theme.breakpoints.down("sm"));
    const isMobile = useMediaQuery('(max-width:850px)')
    const handleLngChange = () => {
        console.log("handling")
        if (currentLng === "ar") {
            console.log(logoURL)
            i18next.changeLanguage("en")
            setCurrentLng("en")
            setTextDirection("ltr")
        }
        else {
            i18next.changeLanguage("ar")
            setTextDirection("rtl")
            setCurrentLng("ar")
            console.log(currentLng)
        }
    }
    return (
        <AppBar style={{ background: 'white' }} position="static">
            <Toolbar>
                {isMobile ? (<>
                    <Grid container>
                        <Grid item xs={6}>
                            <img src={logoURL} alt="logo" />
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                classes={{ root: classes.root }}
                            >
                                {t("main_button_navbar")}
                            </Button>
                        </Grid>
                        <Grid item xs={3}>
                            <Button
                                classes={{ root: classes.root }}
                                style={{ color: "red" }}
                                onClick={handleLngChange}
                            >{t("change_lang_button_navbar")}</Button>
                        </Grid>
                    </Grid>
                </>) :
                    <>
                        <img src={logoURL} alt="logo" />
                        <Grid sx
                            style={{
                                margin: "0 5%",
                            }}
                            direction="row"
                            container
                            alignItems="flex-start"
                            justifyContent="flex-start"
                        >
                            <Grid item xs={1.7}>
                                <Button
                                    classes={{ root: classes.root }}
                                >
                                    {t("main_button_navbar")}
                                </Button>
                            </Grid>
                            <Grid item xs={3}>
                                <Button
                                    classes={{ root: classes.root }}
                                >{t("pricing_button_navbar")}</Button>
                            </Grid>
                            <Grid item xs={5}>
                                <Button
                                    classes={{ root: classes.root }}
                                >{t("contact_sales_button_navbar")}</Button>
                            </Grid>
                        </Grid>
                        <Grid
                            direction="row"
                            container
                            alignItems="flex-end"
                            justifyContent="flex-end">
                            <Button
                                classes={{ root: classes.root }}
                            >{t("signIn_button_navbar")}</Button>
                            <Button
                                classes={{ root: classes.root }}
                                style={{ color: "red" }}
                                onClick={handleLngChange}
                            >{t("change_lang_button_navbar")}</Button>
                        </Grid>
                    </>}
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;
