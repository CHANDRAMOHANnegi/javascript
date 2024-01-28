"use client";
import React, { useRef, useState } from "react";

const OverlayModal = ({ open, component, data, onClick }) => {
  if (!open) return null;

  const modalRef = useRef();

  const handleOverlayClick = (evt) => {
    console.log(evt);
    if (modalRef.current && !modalRef.current.contains(evt.target)) {
      onClick();
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOverlayClick);
    return () => {
      document.removeEventListener("click", handleOverlayClick);
    };
  }, [open]);

  return (
    <section ref={modalRef} style={{ position: "fixed" }}>
      {component}
    </section>
  );
};

export const Page = () => {
  const [show, setShow] = useState(false);
  return (
    <>
      <div>page</div>
      <OverlayModal open={show} onClick={() => setShow(false)} />
    </>
  );
};

export default Page;
