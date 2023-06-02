import { useContext } from "react";

import { AppContext } from "../../App";

import DialogBlanket from "./DialogContainer/DialogBlanket";

import { CircularProgress, circularProgressClasses } from "@mui/material";

import { useTheme } from "@mui/styles";
import DivFlexCenter from "../DivFlexCenter";

const LoadingDialog = () => {

    const { isMobile } = useContext(AppContext)

    const theme = useTheme()

    return (
        <DialogBlanket open={true} height={'100%'}>
            <DivFlexCenter sx={{ height: '100%', }}>
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
            </DivFlexCenter>
        </DialogBlanket>
    )
}

export default LoadingDialog