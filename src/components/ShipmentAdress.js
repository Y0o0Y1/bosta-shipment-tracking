import React, { useContext } from 'react'

import { useTranslation } from "react-i18next";
import { LocaleContext } from '../contexts/LocaleContext';

import { Box, Typography, Card, CardContent } from "@mui/material"

const ShipmentAdress = () => {
    const { t } = useTranslation();
    const { textDirection } = useContext(LocaleContext)
    return (
        <Box dir={textDirection}>
            <Typography sx={{ fontSize: 24 }}>
                {t("delivery_address")}
            </Typography>
            <Card variant="outlined" sx={{
                bgcolor: "#F9F9F9"
            }}>
                <CardContent>{t("delivery_address_content")}</CardContent>
            </Card>
        </Box>
    )
}

export default ShipmentAdress
