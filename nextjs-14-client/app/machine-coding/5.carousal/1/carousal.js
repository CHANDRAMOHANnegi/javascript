import React, { useEffect, useRef } from "react";
import Image from "next/image";

const width = 500;

export const Carousal = ({ data }) => {
  const totalImages = data.length

  const [activeIndex, setActiveIndex] = React.useState(0);

  const timerRef = useRef(null)

  useEffect(() => {
    start()
    return () => clearInterval(timerRef.current);
  },[]);

  const start = () => {
    timerRef.current = setInterval(() => {
      console.log('=-=-');
      setActiveIndex(idx => {
        if (idx === totalImages - 1) {
          return 0
        } else {
          return idx + 1
        }
      })
    }, 4000);
  }

  const stop = () => {
    if (timerRef.current) clearInterval(timerRef.current)
  }

  const onPrev = () => {
    stop();
    let idx = activeIndex
    if (idx <= 0) {
      idx = totalImages - 1
    } else {
      idx--
    }
    setActiveIndex(idx)
  }

  const onNext = () => {
    stop();
    let idx = activeIndex
    if (idx >= totalImages - 1) {
      idx = 0
    } else {
      idx++
    }
    setActiveIndex(idx)
  }

  return (
    <>
      <div className={`flex w-[500px] bg-slate-800 relative`}>
        <span onClick={onPrev} className="absolute left-0 top-[50%]">{"<-"}</span>
        {data.map((d, idx) => (
          <div key={idx} className={`w-[500px] min-w-[500px] min-h-[100%] ${idx === activeIndex ? "block" : "hidden"}`}>
            <Image
              src={d.image}
              width={500}
              height={500}
              alt={idx}
              loading="lazy"
              className="min-h-[100%] h-[500px]"
            />
          </div>
        ))}
        <span onClick={onNext} className="absolute right-0 top-[50%]">{"->"}</span>
      </div>
    </>
  );
};

export default Carousal;
