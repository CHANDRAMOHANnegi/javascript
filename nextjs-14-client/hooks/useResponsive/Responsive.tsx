"use client"
import React from "react";
import { useResponsive } from "./index";

export const Responsive = () => {

    const { isDesktop, isMobile, isTablet } = useResponsive()

    console.log({ isDesktop, isMobile, isTablet });

    return <>
        {isDesktop}
        {isMobile}
        {isTablet}
    </>
};

export default Responsive;
