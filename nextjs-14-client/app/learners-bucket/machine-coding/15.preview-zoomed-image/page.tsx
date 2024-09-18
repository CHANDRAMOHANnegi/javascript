"use client";

import React, { useRef, useState } from "react";
import CSS from "csstype";

type SizeProp = { width: number; height: number };

type ImageZoomProp = {
    imageUrl: string;
    zoomImageURL?: string;
    placement: "top-left" | "top-right" | "bottom-left" | "bottom-right" | "center";
    imageSize: SizeProp;
    zoomedImageSize: SizeProp;
    isActive: boolean;
    zoomType: "click" | "hover";
    onZoom?: () => void;
    onClose?: () => void;
};

export const PreviewZoomedImage = (props: ImageZoomProp) => {
    const {
        imageUrl = "https://cdn.pixabay.com/photo/2023/08/11/08/29/highland-cattle-8183107_1280.jpg",
        zoomImageURL,
        imageSize = { width: 300, height: 300 },
        zoomedImageSize = { width: 600, height: 600 },
        placement = "bottom-right",
        isActive = true,
        zoomType = "hover",
    } = props;

    const normalImageRef = useRef<HTMLDivElement>(null);
    const zoomedImageRef = useRef<HTMLDivElement>(null);
    const [zoomVisible, setZoomVisible] = useState(false);

    const normalImageStyle: CSS.Properties = {
        backgroundImage: `url(${imageUrl})`,
        backgroundSize: `${imageSize.width}px ${imageSize.height}px`,
        width: `${imageSize.width}px`,
        height: `${imageSize.height}px`,
        position: "relative",
    };

    const zoomedImageStyle: CSS.Properties = {
        backgroundImage: `url(${zoomImageURL || imageUrl})`,
        backgroundSize: `${zoomedImageSize.width}px ${zoomedImageSize.height}px`,
        width: `${imageSize.width}px`,
        height: `${imageSize.height}px`,
        display: zoomVisible ? "block" : "none",
        position: "absolute",
        zIndex: 100,
        pointerEvents: "none",
    };

    const getCursorPos = (e: MouseEvent) => {
        let x = 0, y = 0;

        const a = normalImageRef.current?.getBoundingClientRect();
        console.log(a,e);
        
        if (!a) return { x, y };
        x = e.pageX - a.left;
        y = e.pageY - a.top;

        return { x, y };
    };

    const moveLens = (e: MouseEvent) => {
        const viewArea = zoomedImageRef.current;
        e.preventDefault();

        const { x, y } = getCursorPos(e);
        console.log(x);

        const zoomX = (x / imageSize.width) * 100;
        const zoomY = (y / imageSize.height) * 100;

        if (viewArea) {
            viewArea.style.backgroundPosition = `${zoomX}% ${zoomY}%`;
        }
    };

    const openZoom = (e: MouseEvent) => {
        !zoomVisible && setZoomVisible(true);
        moveLens(e);
        props.onZoom?.();
    };

    const closeZoom = () => {
        setZoomVisible(false);
        props.onClose?.();
    };

    const eventType =
    // zoomType === "click"
    //     ? {
    //         onClick: isActive ? closeZoom : openZoom,
    //     }
    //     : 
    {
        onMouseMove: isActive ? openZoom : undefined,
        onMouseLeave: closeZoom,
        // onTouchMove: isActive ? openZoom : undefined,
        // onTouchEnd: closeZoom,
        // onTouchCancel: closeZoom,
    };

    return (
        <div className="flex justify-center flex-col items-center">
            <div>PreviewZoomedImage</div>
            <div
                className="normalImage zoomOutCursor"
                style={normalImageStyle}
                ref={normalImageRef}
                {...eventType}
            >
                <div
                    className={`zoomedImage ${placement}`}
                    style={zoomedImageStyle}
                    ref={zoomedImageRef}
                ></div>
            </div>
        </div>
    );
};

export default PreviewZoomedImage;
