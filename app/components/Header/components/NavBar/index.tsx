/* eslint-disable import/no-unresolved */
/* eslint-disable @typescript-eslint/no-explicit-any */
/**
 * @name 导航栏
 */

import { NavLink } from "@remix-run/react";
import classNames from "classnames";
import { useEffect, useRef, useState } from "react";
import { NavBarProps } from "~/typings/nav";
import "./index.css";

const NavBar: React.FC<NavBarProps> = (props) => {
  const { navData, activeNavId } = props || {};
  const [activeId, setActiveId] = useState<number>(activeNavId!);
  const navRef = useRef<HTMLDivElement>(null);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // 监听navBar组件与可视区域的交叉位置
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.intersectionRatio <= 0) {
            navRef.current?.classList.add(
              "fixed",
              "left-0",
              "right-0",
              "bg-[#fbfbfb]",
              "z-[1000]",
              "shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]",
              "dark:bg-[#121212]",
              "dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]"
            );
          } else {
            navRef.current?.classList.remove(
              "fixed",
              "left-0",
              "right-0",
              "bg-[#fbfbfb]",
              "z-[1000]",
              "shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]",
              "dark:bg-[#121212]",
              "dark:shadow-[0_1px_2px_0_rgba(0,0,0,0.1)]"
            );
          }
        });
      },
      {
        threshold: 0, // 当 0% 的元素可见时触发
      }
    );

    observer.observe(ref.current!);

    return () => {
      observer.disconnect();
    };
  }, []);

  // 滚动到viewport中
  const handleScrollIntoView = (id: number) => {
    setActiveId(id);
    const dom = document.getElementById(`nav-${id}`);
    dom?.scrollIntoView({
      behavior: "smooth",
      block: "center",
      inline: "center",
    });
  };

  return (
    <>
      <div ref={ref} />
      <div
        ref={navRef}
        className={classNames([
          "flex w-full px-4 py-2 scrollbar",
          "md:overflow-x-auto md:flex-nowrap sm:px-8 md:px-16 lg:px-32",
          "max-sm:whitespace-nowrap max-sm:overflow-x-auto scroll",
        ])}
      >
        {navData?.map((item: any, index: number) => {
          const isActive = activeId ? activeId === item.id : index === 0;

          return (
            <NavLink
              replace
              to={`/${index === 0 ? "" : item.id}`}
              key={item.id}
              id={`nav-${item.id}`}
              className={classNames([
                "block cursor-pointer py-[2px] px-[8px]  text-[14px]  border-[1px]  border-[#333333] whitespace-nowrap rounded-[4px] mr-2 hover:text-[#ffffff] hover:bg-[#333333] hover:font-bold 2xl:text-[14px] 2xl:px-[12px]",
                isActive &&
                  "bg-[#2a2a2a] border-[#2a2a2a] font-bold text-[#fbfbfb]",
                "sm:px-[16px] sm:py-[6px]",
                "dark:border-[#0f0f0f]",
              ])}
              onClick={() => {
                handleScrollIntoView(item.id);
              }}
            >
              {item.groupName}
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default NavBar;
