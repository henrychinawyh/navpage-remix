/**
 * @name 时钟组件
 */

import { useEffect, useState } from "react";
import HeaderItem from "../HeaderItem";
import dayjs from "dayjs";

let timer: NodeJS.Timeout | null = null;

export enum DAY {
  "日",
  "一",
  "二",
  "三",
  "四",
  "五",
  "六",
}

const Clock = () => {
  const [time, setTime] = useState(dayjs().format("HH:mm"));
  const [day, setDay] = useState(dayjs().day()); // 0-6 代表周日到周六
  const [date, setDate] = useState(dayjs().format("MM/DD"));

  useEffect(() => {
    if (!timer) {
      timer = setInterval(() => {
        const newTime = dayjs().format("HH:mm");
        if (newTime === "00:00") {
          // 如果是00:00，更新日期和星期
          setDate(dayjs().format("MM/DD"));
          setDay(dayjs().day());
        }
        setTime(newTime);
      }, 1000);
    }

    return () => {
      clearInterval(timer!);
      timer = null;
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-evenly h-full bg-[url(/images/clock/general/general_1.png)] bg-cover">
      <div className="font-sans text-[#fff] text-[50px] font-medium">
        {time}
      </div>
      <div className="flex text-base">
        <div className="font-sans text-[#fff] font-medium mr-1">{date}</div>
        <div className="flex items-center">
          <span className="font-sans text-[#fff] mr-[4px] font-medium">周</span>
          <span className="block rounded-[50%] bg-blue-500 w-[20px] h-[20px] leading-[18px] text-center">
            <span className="font-sans text-[#fff] text-[12px]  font-medium ">
              {DAY[day]}
            </span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Clock;
