import { useEffect, useState } from "react"

/**
 * @description Render a date SSR / CSR
 */
function useDate(props: { time: number }) {
  const [date, setDate] = useState(props.time)
  useEffect(() => {
    setDate(new Date(props.time).toLocaleString())
  }, []);
  return date;
}

export default useDate 