"use client";

import { signOut } from "@/actions/auth-action";
import useOutsideClick from "@/hooks/useOutsideClick";
import { useRef, useState } from "react";
import { ImProfile } from "react-icons/im";
import { PiSignOutBold } from "react-icons/pi";

interface GreetingProps {
  name: string;
}

const Greeting = ({ name }: GreetingProps) => {
  const [openPopover, setOpenPopover] = useState(false);
  const wrapperRef = useRef(null);

  let greetingText = "";
  const hour = new Date().getHours();
  if (hour >= 0 && hour < 12) {
    greetingText = "Good morning";
  } else if (hour >= 12 && hour < 18) {
    greetingText = "Good afternoon";
  } else {
    greetingText = "Good evening";
  }

  const handleOpenChange = (currentOpenStatus: boolean) => {
    setOpenPopover(!currentOpenStatus);
  };

  const handleSignOut = () => {
    signOut();
  };

  useOutsideClick(wrapperRef, handleOpenChange, openPopover);

  return (
    <div className="w-1/3 flex justify-end items-center gap-3">
      <h1>
        {`${greetingText}, `}
        <span className="font-bold text-blue">{name}</span>
      </h1>
      <div className="relative flex w-12 h-12 min-w-12">
        <div className="relative bg-blue w-full h-full rounded-3xl flex justify-center items-center text-2xl text-white">
          <h1 className="z-10 pointer-events-none">{name.substring(0, 1)}</h1>
        </div>
        <div
          className={`absolute bg-blue w-full h-full rounded-3xl inline-flex opacity-75 hover:cursor-pointer ${
            openPopover && "pointer-events-none"
          }`}
          onClick={() => {
            handleOpenChange(openPopover);
          }}
        ></div>
        {openPopover && (
          <div
            className="absolute w-40 top-full right-0 mt-2 shadow-md rounded-md py-4 flex flex-col gap-3"
            ref={wrapperRef}
          >
            <div className="flex gap-2 justify-start items-center p-3 hover:bg-slate-300 hover:cursor-pointer">
              <ImProfile className="text-2xl" />
              <p>Profile</p>
            </div>
            <div
              className="flex gap-2 justify-start items-center p-3 hover:bg-slate-300 hover:cursor-pointer"
              onClick={handleSignOut}
            >
              <PiSignOutBold className="text-2xl" />
              <p>Sign out</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Greeting;
