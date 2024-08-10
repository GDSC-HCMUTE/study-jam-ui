"use client";

import { Tabs } from "antd";
import { ReactNode } from "react";
import { useRouter } from "next/navigation";
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

  const handleTabChange = (key: string) => {
    const activeTabPath = items.find((item) => item.label === key)?.path ?? "/";
    router.push(activeTabPath);
  };

  return (
    <Tabs
      className="bg-blue h-full px-3"
      tabPosition="left"
      items={items.map((item) => ({ ...item, key: item.label }))}
      onChange={handleTabChange}
    />
  );
};

export default SideBar;
