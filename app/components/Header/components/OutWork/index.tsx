/**
 * @name 离下班时间
 */

import { useEffect, useState } from "react";
import dayjs from "dayjs";

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
    <div className="flex flex-col justify-center items-center h-full bg-white bg-[url('/images/clock/general/rest.png')] bg-no-repeat bg-cover bg-center sm:px-4 md:px-8">
      <div className="text-[16px] font-bold text-gray-500">离下班时间</div>
      <div className="text-[20px] font-bold mb-8  text-gray-700">{time}</div>
    </div>
  );
};

export default OutWork;
