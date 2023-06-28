import { useContext } from "react";

import { AppContext } from "../../App";

// import style and theme
import { useTheme } from "@mui/styles";

import { useTranslation } from "react-i18next";

// import components
import DialogBlanket from "./DialogContainer/DialogBlanket";
import { CircularProgress, circularProgressClasses, Typography } from "@mui/material";
import DivFlexCenter from "../DivFlexCenter";

// import constants
import { FontFamily } from "../../Constants/FontFamily";

const LoadingDialog = () => {

    const { isMobile } = useContext(AppContext)

    const theme = useTheme()

    const { t } = useTranslation()

    return (
        <DialogBlanket open={true} height={'100%'}>
            <DivFlexCenter sx={{ height: '100%', flexDirection: 'column' }}>
                <CircularProgress
                    size={isMobile ? "56px" : "72px"}
                    sx={{
                        color: theme.palette.background.circularLoading,
                        // animationDuration: "0ms",
                        [`& .${circularProgressClasses.circle}`]: {
                            strokeLinecap: "round",
                        },
                    }}
                />
                <Typography sx={{ mt: isMobile ? 3 : 5, fontFamily: FontFamily.EINA04SEMIBOLD, fontSize: isMobile ? 16 : 18, color: theme.palette.text.loadingText }}>
                    {t('common.loading')}..
                </Typography>
            </DivFlexCenter>
        </DialogBlanket>
    )
}

export default LoadingDialog