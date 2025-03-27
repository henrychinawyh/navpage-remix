/**
 * @name 头部组件
 */

// import Clock from "./components/Clock";
// import Holiday from "./components/Holiday";
// import OutWork from "./components/OutWork";
import NavBar from "./components/NavBar";
// import HeaderItem from "./components/HeaderItem";
import { NavBarProps } from "~/typings/nav";
import { Top } from "./components/Top";
import classNames from "classnames";
import SearchEngine from "./components/Search";

export default function Header(props: NavBarProps) {
  const { navData, activeNavId } = props || {};

  return (
    <div
      className={classNames([
        // 基础样式
        "flex flex-col w-full mb-4 bg-[#ffffff]",
        // 暗黑模式样式
        "dark:bg-[#0f0f0f]",
      ])}
    >
      {/* <div className="flex items-center w-full mb-4">
        <HeaderItem className="w-full sm:w-[200px]">
          <Clock />
        </HeaderItem>
        <HeaderItem className="hidden sm:block">
          <Holiday />
        </HeaderItem>
        <HeaderItem className="hidden sm:block">
          <OutWork />
        </HeaderItem>
      </div> */}
      <Top />

      {/* 搜索框 */}
      <SearchEngine />

      <NavBar navData={navData} activeNavId={activeNavId} />
    </div>
  );
}
