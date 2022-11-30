import React from "react";
import { styled } from '@mui/system'

// import material components
import { Typography } from "@mui/material";

// import icon
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';

// import reusable component
import DivFlexCenter from "../ReusableComponents/DivFlexCenter";

const RootWarningComponent = styled('div')((props) => ({
    display:'flex',
    justifyContent:'center',
    position:'sticky',
    zIndex:1000,
}));

const Warning = styled('div')((props) => ({
    width:'100%',
    maxHeight:150,
    maxWidth:590,
    backgroundColor:'#af1d1d',
}));

const WarningComponent = (props) => {

    const { isMobile } = props

    return (
        <RootWarningComponent sx={{ top : isMobile == true  ? 56 :70 }}>
            <Warning>
                <DivFlexCenter sx={{ width: '90%', padding: 2 }}>
                    <ErrorOutlineIcon style={{ color: '#959499', width: 26, height: 26, marginRight: 10 }} />

                    <Typography sx={{ color: '#ffffff', fontSize: 12, fontFamily:'Eina04-SemiBold' }}>
                       {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`}
                    </Typography>

                </DivFlexCenter>
            </Warning>
        </RootWarningComponent>
    )
}

export default WarningComponent