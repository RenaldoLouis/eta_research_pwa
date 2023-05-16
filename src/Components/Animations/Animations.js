
/**Animation for sun and moon */
import sunRiseDark from "../../assets/lotties/SUNRISE_DARKMODE.json"
import sunRiseLight from "../../assets/lotties/SUNRISE_LIGHTMODE.json";
import sunLight from "../../assets/lotties/SUN_LIGHTMODE.json";
import sunDark from "../../assets/lotties/SUN_DARKMODE.json";
import moonLight from "../../assets/lotties/MOON_LIGHTMODE.json";
import moonDark from "../../assets/lotties/MOON_DARKMODE.json";


/**Animation for delivery simlation */
import lightModeAnimationFixed from "../../assets/animations/Light Mode_Fixed_1.json";
import darkModeAnimationFixed from "../../assets/animations/Dark Mode_fixed_1.json";



export const sunriseLightAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunRiseLight,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const sunriseDarkAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunRiseDark,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const sunLightAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunLight,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const sunDarkAnimation = {
    loop: true,
    autoplay: true,
    animationData: sunDark,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const moonLightAnimation = {
    loop: true,
    autoplay: true,
    animationData: moonLight,
    renderSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};

export const moonDarkAnimation = {
    loop: true,
    autoplay: true,
    animationData: moonDark,
    renderSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};


export const deliverySimlationLightAnimation = {
    loop: true,
    autoplay: true,
    animationData: lightModeAnimationFixed,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};


export const deliverySimlationDarkAnimation = {
    loop: true,
    autoplay: true,
    animationData: darkModeAnimationFixed,
    rendererSettings: {
        preserveAspectRatio: "xMidYMid slice",
    },
};
