/* eslint-disable react/display-name */
/**
 * @name 搜索引擎框-选项
 */

import classNames from "classnames";
import { forwardRef, useImperativeHandle, useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "~/components/ui/select";

// 搜索引擎列表
const searchEngines = [
  {
    label: "百度一下",
    value: "baidu",
    url: "https://www.baidu.com/s?wd=",
    icon: "/baidu.ico",
  },
  {
    label: "搜狗搜索",
    value: "sogou",
    url: "https://www.sogou.com/web?query=",
    icon: "/sougou.ico",
  },
  {
    label: "Bing必应",
    value: "bing",
    url: "https://cn.bing.com/search?q=",
    icon: "/bing.ico",
  },
  {
    label: "哔哩哔哩",
    value: "bilibili",
    url: "https://search.bilibili.com/all?keyword=",
    icon: "/bilibili.ico",
  },
  {
    label: "谷歌搜索",
    value: "google",
    url: "https://www.google.com/search?q=",
    icon: "/google.ico",
  },
];

export const SelectEngine = forwardRef((props, ref) => {
  const [value, setValue] = useState(searchEngines[0].url);
  useImperativeHandle(ref, () => ({
    engine: value,
  }));

  return (
    <Select
      defaultValue={value}
      name="search-engine"
      onValueChange={(val) => {
        setValue(val);
      }}
    >
      <SelectTrigger
        className={classNames([
          "w-fit border-none shadow-none",
          "focus-visible:ring-0 focus-visible:border-0 focus:ring-0 focus::border-0",
          "max-lg:text-xs",
        ])}
      >
        <SelectValue placeholder="Select a fruit" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          {searchEngines.map((item) => {
            return (
              <SelectItem key={item.value} value={item.url}>
                <div className="flex  items-center cursor-pointer">
                  <img
                    className="w-4 h-4"
                    src={item.icon || ""}
                    alt={item.label}
                  />
                  <span className={classNames(["pl-2 mr-4", "max-lg:text-xs"])}>
                    {item.label}
                  </span>
                </div>
              </SelectItem>
            );
          })}
        </SelectGroup>
      </SelectContent>
    </Select>
  );
});
