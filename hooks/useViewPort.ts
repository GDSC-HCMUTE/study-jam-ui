"use client";

import { useEffect, useState } from "react";

const useViewport = () => {
  if (typeof window !== "undefined") {
    const [width, setWidth] = useState(window.innerWidth);

    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);

    return width;
  }
};

export default useViewport;
