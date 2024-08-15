"use client";

import { BREAKPOINT_WIDTH } from "@/common/constants";
import useViewport from "@/hooks/useViewPort";
import Image from "next/image";
import studyJamLogo from "@/public/images/study-jam-logo.png";

const ResponsiveLogo = () => {
  const width = useViewport() ?? BREAKPOINT_WIDTH;

  return (
    <div className="h-1/5 w-60 flex justify-center items-center bg-blue max-md:w-[84px]">
      {width >= BREAKPOINT_WIDTH ? (
        <div className="w-40">
          <Image src={studyJamLogo} alt="Study Jam logo" priority />
        </div>
      ) : (
        // TODO: just a placeholder, need to change to another logo
        <div></div>
      )}
    </div>
  );
};

export default ResponsiveLogo;
