import type { Metadata } from "next";
import { AiFillHome } from "react-icons/ai";
import { FaMarker, FaSignInAlt } from "react-icons/fa";
import { FaRankingStar } from "react-icons/fa6";
import SideBar, { TabItemProps } from "@/components/SideBar/SideBar";
import ResponsiveLogo from "@/components/ResponsiveLogo/ResponsiveLogo";

export const metadata: Metadata = {
  title: "Study Jam | Home",
  description:
    "Study Jam is the annual event organized by GDSC - HCMUTE to help students learn and practice skills related to software development.",
};

export default function OverviewLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const tabItems: TabItemProps[] = [
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
    {
      label: "Sign In",
      icon: <FaSignInAlt className="text-2xl" />,
      path: "/sign-in",
    },
  ];

  return (
    <div className="relative h-full">
      <div className="fixed h-full">
        <ResponsiveLogo />
        <SideBar items={tabItems} />
      </div>
      <div className="ml-[260px] max-md:ml-[104px]">{children}</div>
    </div>
  );
}
