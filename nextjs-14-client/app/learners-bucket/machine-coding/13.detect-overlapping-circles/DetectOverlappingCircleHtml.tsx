import React, { useEffect, useState } from 'react'

const Radius = 100
const Diameter = 2 * Radius

type CircleConfig = {
    id: number,
    top: number
    left: number
    right: number
    bottom: number
    clientX: number
    clientY: number,
    fill: "red" | "blue" | "green"
}

const Circle = (config: CircleConfig) => {
    return (<div
        style={{
            width: Diameter,
            height: Diameter,
            position: "absolute",
            top: config.top,
            left: config.left,
            backgroundColor: config.fill,
            borderRadius: '50%'
        }}
    >{config.id}</div>)
}

// Math.sqrt((x1 - x2)^2 + (y1 - y2)^2)

const detectOverLapping = (circleOne: CircleConfig, circleTwo: CircleConfig) => {
    const distanceBetweenCenter = Math.sqrt(Math.pow(circleOne.clientX - circleTwo.clientX, 2) + Math.pow(circleOne.clientY - circleTwo.clientY, 2))
    return distanceBetweenCenter < Diameter
}

export const DetectOverlappingCircleHtml = () => {
    const [circles, setCircles] = useState<CircleConfig[]>([])

    useEffect(() => {
        const draw = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const newCircle: CircleConfig = {
                id: Date.now(),
                top: clientY - Radius,
                left: clientX - Radius,
                right: clientX + Radius,
                bottom: clientY + Radius,
                clientX,
                clientY,
                fill: "red"
            }

            setCircles((circles) => {
                for (let idx = 0; idx < circles.length; idx++) {
                    const circle = circles[idx]
                    const isOverlapping = detectOverLapping(newCircle, circle)
                    if (isOverlapping) {
                        newCircle.fill = "green"
                    }
                }
                return [...circles, newCircle]
            })
        }

        document.addEventListener("click", draw)
        return () => {
            document.removeEventListener("click", draw)
        }
    }, [])

    return (
        <>
            <div>DetectOverlappingCircle</div>
            <div id='container'>
                {circles.map(circle => <Circle key={circle.id} {...circle} />)}
            </div>
        </>
    )
}


export default DetectOverlappingCircleHtml


/*****
 * ClientX and clientY are the coordinates where your mouse clicked
 * 
 * ****/ 