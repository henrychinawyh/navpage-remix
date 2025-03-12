/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @name 导航栏
 */

import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useState } from "react";

export interface NavGroupDataProps {
  id: number;
  groupName: string;
  groupIcon: string;
  links: [];
}

export interface NavBarProps {
  navData: NavGroupDataProps[];
  activeNavId: number;
}

const NavBar: React.FC<NavBarProps> = (props) => {
  const { navData, activeNavId } = props || {};
  const [activeId, setActiveId] = useState<number>(activeNavId);

  return (
    <div className="flex w-full flex-wrap md:overflow-x-auto md:flex-nowrap">
      {navData?.map((item: any, index: number) => (
        <NavLink
          replace
          to={`/${index === 0 ? "" : item.id}`}
          key={item.id}
          className={classNames([
            "block cursor-pointer py-[2px] px-[8px] text-[14px] border-[1px] mb-2  border-[#333333] whitespace-nowrap rounded-[6px] mr-2 hover:text-[#ffffff] hover:bg-[#333333] hover:font-bold 2xl:text-[14px] 2xl:px-[12px]",
            activeId === item.id && "bg-[#333333]",
            activeId === item.id && "border-[#333333]",
            activeId === item.id && "font-bold",
            activeId === item.id && "text-[#fbfbfb]",
          ])}
          onClick={() => {
            setActiveId(item.id);
          }}
        >
          {item?.groupName}
        </NavLink>
      ))}
    </div>
  );
};

export default NavBar;
