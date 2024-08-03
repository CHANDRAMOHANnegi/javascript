"use client"
import React, { memo,  } from "react";
import { useWhyDidYouUpdate } from "./index";

export const Child = memo((props: any) => {
    useWhyDidYouUpdate('Counter', props)

    return <>
        {props.count}
    </>
});

export default Child;


