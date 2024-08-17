import type { Metadata } from "next";
import { AiFillHome } from "react-icons/ai";
import { FaMarker } from "react-icons/fa";
import { FaRankingStar, FaUsers } from "react-icons/fa6";
import SideBar, { TabItemProps } from "@/components/SideBar/SideBar";
import Greeting from "@/components/Greeting/Greeting";
import ResponsiveLogo from "@/components/ResponsiveLogo/ResponsiveLogo";
import Image from "next/image";
import Link from "next/link";
import { PiSignInBold } from "react-icons/pi";
import gdscLogo from "@/public/images/gdsc-logo.png";
import { getCurrentUser } from "@/actions/user-action";

export const metadata: Metadata = {
  title: "Study Jam | Home",
  description:
    "Study Jam is the annual event organized by GDSC - HCMUTE to help students learn and practice skills related to software development.",
};

export default async function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let tabItems: TabItemProps[] = [
    {
      label: "Home",
      icon: <AiFillHome className="text-2xl" />,
      path: "/",
    },
    {
      label: "Marking",
      icon: <FaMarker className="text-2xl" />,
      path: "/marking",
    },
    {
      label: "Ranking",
      icon: <FaRankingStar className="text-2xl" />,
      path: "/ranking",
    },
  ];
  const currentUser = await getCurrentUser();
  if (currentUser) {
    // TODO: update the if statement below with other roles
    if (currentUser.role === "SUPER_ADMIN") {
      tabItems.push({
        label: "Users",
        icon: <FaUsers className="text-2xl" />,
        path: "/users",
      });
    }
  }

  return (
    <div className="relative h-full">
      <div className="fixed h-full">
        <ResponsiveLogo />
        <SideBar items={tabItems} />
      </div>
      <div className="pt-5 pr-5 ml-[260px] max-md:ml-[104px]">
        <div className="flex justify-between items-center">
          {/* TODO: use another logo with no padding */}
          <Link
            className="w-1/2"
            href="https://www.facebook.com/gdsc.hcmute"
            target="blank"
          >
            <Image src={gdscLogo} alt="GDSC - HCMUTE logo" />
          </Link>
          {currentUser ? (
            <Greeting name={currentUser.fullName} />
          ) : (
            <Link
              className="w-1/3 flex justify-end gap-2 hover:text-blue hover:cursor-pointer"
              href="/sign-in"
            >
              <h1 className="">Sign In</h1>
              <PiSignInBold className="text-2xl" />
            </Link>
          )}
        </div>
        {children}
      </div>
    </div>
  );
}
