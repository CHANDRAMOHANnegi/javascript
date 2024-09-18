import React, { useEffect, useState } from 'react'

const Radius = 100
const Diameter = 2 * Radius

type CircleConfig = {
    id: number,
    cy: number
    cx: number
    r: number
    fill: "red" | "blue" | "green"
}

const Circle = ({ r, cx, cy, fill, id }: CircleConfig) => {
    return (<circle
        cx={cx}
        cy={cy}
        r={r}
        fill={fill}
    >{id}</circle>)
}

// Math.sqrt((x1 - x2)^2 + (y1 - y2)^2)

const detectOverLapping = (circleOne: CircleConfig, circleTwo: CircleConfig) => {
    const distanceBetweenCenter = Math.sqrt(Math.pow(circleOne.cx - circleTwo.cx, 2) + Math.pow(circleOne.cy - circleTwo.cy, 2))
    return distanceBetweenCenter < Diameter
}

export const DetectOverlappingCircleSvg = () => {
    const [circles, setCircles] = useState<CircleConfig[]>([])

    useEffect(() => {
        const draw = (e: MouseEvent) => {
            const { clientX, clientY } = e
            const newCircle: CircleConfig = {
                id: Date.now(),
                r: Radius,
                cy: clientY,
                cx: clientX,
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
            <div className='absolute'>DetectOverlappingCircle svg</div>
            <svg id='container' width={1000} height={1000}>
                {circles.map(circle => <Circle key={circle.id} {...circle} />)}
            </svg>
        </>
    )
}


export default DetectOverlappingCircleSvg


/*****
 * ClientX and clientY are the coordinates where your mouse clicked
 * 
 * ****/ 