/**
 * @name 节日倒计时
 */

import { useState } from "react";
import { Description, Prefix } from "./Description";
import classNames from "classnames";

interface HolidayDataProps {
  name: string;
  date: string;
  distance: string;
}

const Holiday = () => {
  const [holiday] = useState<HolidayDataProps[]>([
    {
      name: "元旦节",
      date: "01-01",
      distance: "28",
    },
    {
      name: "春节",
      date: "02-14",
      distance: "23",
    },
    {
      name: "清明节",
      date: "04-04",
      distance: "28",
    },
    {
      name: "劳动节",
      date: "05-01",
      distance: "28",
    },
  ]);

  return (
    <div
      className={classNames([
        // 基础样式
        "bg-[#fff]",
        // 布局样式
        "flex items-center h-full py-4 sm:px-4 md:px-8 xl:px-4",
      ])}
    >
      <div
        className={classNames([
          // 布局样式
          "flex flex-col h-full justify-between max-[1280px]:w-full max-[1280px]:items-center",
        ])}
      >
        <div
          className={classNames([
            // 文本样式
            "text-base text-[#666]",
          ])}
        >
          距离{`xx`}节
        </div>
        <div
          className={classNames([
            // 文本样式
            "text-2xl text-center font-medium text-[#000]",
          ])}
        >
          28天
        </div>
        {/* 调休日期日期 */}
        <div
          className={classNames([
            // 布局样式
            "flex flex-col",
            // 文本样式
            "text-xs",
          ])}
        >
          <Description
            prefix={
              <Prefix
                text="班"
                color="#f00000"
                backgroundColor="rgba(240, 0, 0, 0.4)"
              />
            }
            content="04.04, 04.06"
          />
          <Description
            prefix={
              <Prefix
                text="休"
                color="#55aa6f"
                backgroundColor="rgba(85,170,111,0.4)"
              />
            }
            content="04.04 - 04.06"
          />
        </div>
      </div>
      {/* 节日日历 */}
      <div
        className={classNames([
          // 布局样式
          "flex-1 flex-col h-full justify-between ml-4 hidden xl:flex",
          // 文本样式
          "text-xs",
        ])}
      >
        {holiday.map((item) => (
          <Description
            key={item.date}
            prefix={
              <Prefix
                text="休"
                color="#55aa6f"
                backgroundColor="rgba(85,170,111,0.4)"
              />
            }
            content={`${item.name} ${item.date}`}
            suffix={<div className="ml-4">{`${item.distance}天`}</div>}
          />
        ))}
      </div>
    </div>
  );
};

export default Holiday;
