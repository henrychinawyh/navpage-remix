/**
 * @name Link卡片
 */

import { toast } from "sonner";
import classNames from "classnames";
import { NavHomeLinkDataProps } from "~/typings/nav";
import "./index.css";
import { LazyImage } from "./LazyImage";

interface LinkContentProps {
  data: NavHomeLinkDataProps[];
}

export const LinkContent = (props: LinkContentProps) => {
  const { data } = props || {};

  return (
    <div
      className={classNames([
        // 基础样式
        "grid justify-center text-[#000] gap-4",
        "grid-cols-[repeat(auto-fill,minmax(320px,1fr))]",
        // 响应式样式
        "max-lg:grid-cols-4 max-lg:text-sm max-sm:grid-cols-3 max-sm:text-xs",
      ])}
    >
      {data?.length === 0
        ? null
        : data?.map(
            ({ id, icon, name, linkDesc, url }: NavHomeLinkDataProps) => (
              <div
                key={id}
                className={classNames([
                  // 基础样式
                  "flex flex-col p-4 justify-between rounded-md cursor-pointer bg-[#ffffff] transition-all duration-300",
                  // 暗黑模式样式
                  "dark:lg:bg-[#1a1a1a] dark:text-[#ffffff]",
                  // 响应式样式
                  "max-lg:bg-transparent max-lg:p-0",
                  "lg:hover:shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:hover:-translate-y-1",
                ])}
                onClick={() => {
                  if (document?.body.clientWidth < 1024) {
                    window?.open(url, "_blank");
                  }
                }}
              >
                <div
                  className={classNames([
                    // 基础样式
                    "flex items-start",
                    // 响应式样式
                    "max-lg:flex-col max-lg:justify-center max-lg:items-center",
                  ])}
                >
                  {/* <div
                    className={classNames([
                      "w-[90px] h-[60px] overflow-hidden flex justify-center items-center mr-2",
                      "link-content-image",
                    ])}
                    dangerouslySetInnerHTML={{
                      __html: icon || "",
                    }}
                  /> */}
                  <LazyImage src={icon} alt={name} />
                  <div className="flex flex-col flex-1 justify-between px-4">
                    <p
                      className={classNames([
                        "font-bold mb-1 whitespace-nowrap",
                        "max-lg:font-normal  max-sm:text-xs max-sm:text-[#1a1a1a]",
                        "dark:max-sm:text-[#ffffff]",
                      ])}
                    >
                      {name}
                    </p>
                    <p
                      className={classNames([
                        "text-[14px] text-[#4B5563] line-clamp-3",
                        "max-lg:hidden  max-lg:line-clamp-2",
                        "dark:text-gray-400",
                      ])}
                    >
                      {linkDesc}
                    </p>
                  </div>
                </div>
                <div
                  className={classNames([
                    "flex  w-full justify-end",
                    "max-sm:hidden",
                  ])}
                >
                  <div
                    className={classNames([
                      "text-xs w-fit font-bold text-center p-2 rounded cursor-pointer",
                      "max-lg:hidden",
                      "hover:bg-gray-100",
                      "dark:hover:bg-gray-800",
                    ])}
                    onClick={() => {
                      window?.open(url, "_blank");
                    }}
                  >
                    访问链接
                  </div>
                  <div
                    className={classNames([
                      "text-xs w-fit font-bold text-center p-2 rounded cursor-pointer",
                      "max-lg:hidden",
                      "hover:bg-gray-100",
                      "dark:hover:bg-gray-800",
                    ])}
                    onClick={(e) => {
                      e.stopPropagation();
                      if (url) {
                        navigator.clipboard
                          .writeText(url)
                          .then(() => {
                            toast("复制成功", {
                              duration: 1000,
                              icon: "🔗",
                              description: "链接已复制到剪贴板",
                              position: "top-center",
                            });
                          })
                          .catch(() => {
                            toast("复制失败，请手动复制");
                          });
                      }
                    }}
                  >
                    复制链接
                  </div>
                </div>
              </div>
            )
          )}
    </div>
  );
};
