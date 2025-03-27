/**
 * @name 离下班时间
 */

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import classNames from "classnames";

const OutWork = () => {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = dayjs();
      const target = dayjs().hour(18).minute(0).second(0);

      if (now.isAfter(target)) {
        setTime("已下班");
        return;
      }

      const diff = target.diff(now, "minute");
      const hours = Math.floor(diff / 60);
      const minutes = diff % 60;

      setTime(`${hours}小时${minutes}分钟`);
    };

    // 立即执行一次
    updateTime();

    // 设置定时器每分钟更新一次
    const timer = setInterval(updateTime, 60000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div
      className={classNames([
        // 基础样式
        "bg-white bg-[url('/images/clock/general/rest.png')] bg-no-repeat bg-cover bg-center",
        // 布局样式
        "flex flex-col justify-center items-center h-full",
        // 响应式样式
        "sm:px-4 md:px-8",
      ])}
    >
      <div
        className={classNames([
          // 文本样式
          "text-[16px] font-bold text-gray-500",
        ])}
      >
        离下班时间
      </div>
      <div
        className={classNames([
          // 文本样式
          "text-[20px] font-bold text-gray-700",
          // 布局样式
          "mb-8",
        ])}
      >
        {time}
      </div>
    </div>
  );
};

export default OutWork;
