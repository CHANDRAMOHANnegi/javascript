import { useEffect, useRef } from "react"

type Props = Record<string, any>

export const useWhyDidYouUpdate = (name:String,props: Props) => {

    const prevProps = useRef<Props>()

    const checkDiffs = (prevProps: Props | undefined, newProps: Props) => {
        const diffs: Record<string, { from?: Props, to?: Props }> = {}

        if (prevProps) {
            /*****
             * Here we are merging all the props
             * **/ 
            const keys = Object.keys({...prevProps,...newProps})

            for (const key of keys) {
                // both are object
                if (typeof prevProps[key] === "object" && typeof newProps[key] === "object") {
                    if (JSON.stringify(prevProps[key]) !== JSON.stringify(newProps[key])) {
                        diffs[key] = {
                            from: prevProps[key],
                            to: newProps[key]
                        }
                    }
                } else {
                    // both are non-object
                    if (prevProps[key] != newProps[key]) {
                        diffs[key] = {
                            from: prevProps[key],
                            to: newProps[key]
                        }
                    }
                }

            }
        }

        return diffs
    }

    useEffect(() => {
        const diffs = checkDiffs(prevProps.current, props)
        console.log('re-render occurs because',name,diffs);

        prevProps.current = props
    })

}