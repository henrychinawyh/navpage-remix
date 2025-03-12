/**
 * @name 头部组件
 */

import { Row, Space } from "antd";
import Clock from "./components/Clock";
import Holiday from "./components/Holiday";
import OutWork from "./components/OutWork";
import NavBar, { NavGroupDataProps } from "./components/NavBar";
import HeaderItem from "./components/HeaderItem";

interface HeaderProps {
  navData: NavGroupDataProps[];
  activeNavId: number;
}

export default function Header(props: HeaderProps) {
  const { navData, activeNavId } = props || {};

  return (
    <Space direction="vertical" className="w-full mb-4">
      <div className="flex items-center w-full">
        <HeaderItem className="w-full sm:w-[200px]">
          <Clock />
        </HeaderItem>
        <HeaderItem className="hidden sm:block sm:px-0 md:px-8 xl:px-4">
          <Holiday />
        </HeaderItem>
        <HeaderItem className="hidden sm:block">
          <OutWork />
        </HeaderItem>
      </div>

      {/* 搜索栏 */}
      <div></div>
      {/* 导航栏 */}
      <NavBar navData={navData} activeNavId={activeNavId} />
    </Space>
  );
}
