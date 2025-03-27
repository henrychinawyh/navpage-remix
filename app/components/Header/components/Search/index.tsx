/* eslint-disable jsx-a11y/no-autofocus */
/**
 * @name 搜索引擎框
 */
import classNames from "classnames";
import { Input } from "~/components/ui/input";
import { SelectEngine } from "./components/SelectEngine";
import { MutableRefObject, useRef, useState } from "react";

export default function SearchEngine() {
  const engineRef = useRef<{ engine: string }>();
  const [value, setValue] = useState("");

  return (
    <div
      className={classNames([
        "flex w-3/5 px-4 py-2 self-center ",
        "md:overflow-x-auto md:flex-nowrap sm:px-8 md:px-16 lg:px-32 max-lg:w-full",
      ])}
    >
      {/* <SelectEngine /> */}
      <div
        className={classNames([
          "flex items-center w-full border-[1px] border-[#0f0f0f] rounded-md shadow-md",
          "dark:border-[#ffffff]",
        ])}
      >
        <SelectEngine ref={engineRef} />
        <Input
          value={value || undefined}
          type="search"
          className={classNames([
            "outline-none border-none shadow-none",
            "focus-visible:outline-none focus-visible:ring-0",
          ])}
          autoFocus
          onChange={(e) => {
            setValue(e.target.value);
          }}
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              window.open(engineRef.current?.engine + value);
            }
          }}
        />
      </div>
    </div>
  );
}
