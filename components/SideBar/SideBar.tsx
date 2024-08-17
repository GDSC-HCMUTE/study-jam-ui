"use client";

import { Tabs } from "antd";
import { ReactNode } from "react";
import { usePathname, useRouter } from "next/navigation";
import "./style.css";

export interface TabItemProps {
  label: string;
  icon: ReactNode;
  path: string;
}

interface CustomTabsProps {
  items: TabItemProps[];
}

const SideBar = ({ items }: CustomTabsProps) => {
  const router = useRouter();
  const pathname = usePathname();

  let activeKey = "Home";
  if (pathname !== "/") {
    const name = pathname.substring(1);
    activeKey = name.charAt(0).toUpperCase() + name.slice(1);
  }

  const handleTabChange = (key: string) => {
    const activeTabPath = items.find((item) => item.label === key)?.path ?? "/";
    router.push(activeTabPath);
  };

  return (
    <Tabs
      className="bg-blue h-full px-3"
      tabPosition="left"
      items={items.map((item) => ({ ...item, key: item.label }))}
      activeKey={activeKey}
      onChange={handleTabChange}
    />
  );
};

export default SideBar;
