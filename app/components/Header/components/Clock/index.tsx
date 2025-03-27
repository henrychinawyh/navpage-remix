/**
 * @name 时钟组件
 */

import { useEffect, useState } from "react";
import dayjs from "dayjs";
import classNames from "classnames";
import { ClockProps } from "~/typings/nav";

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

const Clock: React.FC<ClockProps> = (props) => {
  const {
    type = "default",
    timeFormat = "HH:mm",
    dateFormat = "MM/DD",
  } = props || {};
  const [time, setTime] = useState(dayjs().format(timeFormat));
  const [day, setDay] = useState(dayjs().day()); // 0-6 代表周日到周六
  const [date, setDate] = useState(dayjs().format(dateFormat));

  useEffect(() => {
    if (!timer) {
      timer = setInterval(() => {
        const newTime = dayjs().format(timeFormat);
        if (newTime === "00:00") {
          // 如果是00:00，更新日期和星期
          setDate(dayjs().format(dateFormat));
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

  return type === "default" ? (
    <div
      className={classNames([
        // 基础样式
        "h-full bg-[url(/images/clock/general/general_1.png)] bg-cover",
        // 布局样式
        "flex flex-col items-center justify-evenly",
      ])}
    >
      <div
        className={classNames([
          // 文本样式
          "font-sans text-[#fff] text-[50px] font-medium",
        ])}
      >
        {time}
      </div>
      <div className="flex text-base">
        <div
          className={classNames([
            // 文本样式
            "font-sans text-[#fff] font-medium",
            // 布局样式
            "mr-1",
          ])}
        >
          {date}
        </div>
        <div className="flex items-center">
          <span
            className={classNames([
              // 文本样式
              "font-sans text-[#fff] font-medium",
              // 布局样式
              "mr-[4px]",
            ])}
          >
            周
          </span>
          <span
            className={classNames([
              // 基础样式
              "rounded-[50%] bg-blue-500 w-[20px] h-[20px]",
              // 文本样式
              "leading-[18px] text-center",
            ])}
          >
            <span
              className={classNames([
                // 文本样式
                "font-sans text-[#fff] text-[12px] font-medium",
              ])}
            >
              {DAY[day]}
            </span>
          </span>
        </div>
      </div>
    </div>
  ) : (
    <div className={classNames(["flex items-center", "max-md:text-sm"])}>
      <div className="mr-1">{date}</div>
      <div className="mr-1">{time}</div>
      <div className="mr-1">周{DAY[day]}</div>
    </div>
  );
};

export default Clock;
