"use client";

import { MutableRefObject, useEffect } from "react";

const useOutsideClick = (
  ref: MutableRefObject<any>,
  onClick: (...params: any[]) => void,
  ...params: any[]
) => {
  useEffect(() => {
    const handleClickOutside = (event: any) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClick(...params);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, params]);
};

export default useOutsideClick;
