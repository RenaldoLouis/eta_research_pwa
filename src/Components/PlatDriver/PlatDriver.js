import React from "react";
import { styled } from "@mui/system";

// import material component
import { Typography } from "@mui/material";

const RootPlatDriver = styled('div')((props) => ({
    display: 'flex',
    border:'0.5px solid rgb(151, 151, 151)'
}));

const Plat = styled('div')((props) => ({
    height: 24,
    width: 5,
    background: '#7464eb',
    boxShadow: `0px 0px 2px 0px rgba(0, 0, 0, 0.5)`,
}));

const PlatNumber = styled('div')((props) => ({
    padding: '0px 6px 0px 6px',
    backgroundColor:'#fdf6f6',
    alignItems:'center',
    display:'flex',
    justifyContent:'center'
}));



const PlatDriver = props => {

    const { vehicle } = props

    return (
        <RootPlatDriver>
            <Plat />

            <PlatNumber>
                <Typography
                    sx={{
                        fontFamily: 'RobotoMono-Regular',
                    }}
                    color={'#26242e'} fontSize={14}
                >
                    {vehicle}
                </Typography>
            </PlatNumber>
        </RootPlatDriver>
    )
}

PlatDriver.defaultProps = {
    vehicle: `Unknown Driver`
}

export default PlatDriver;

