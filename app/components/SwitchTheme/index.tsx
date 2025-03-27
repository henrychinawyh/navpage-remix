/**
 * @name 修改主题色
 */

import { useEffect, useState } from "react";
import { Label } from "../ui/label";
import { Switch } from "../ui/switch";
import classNames from "classnames";

export enum THEME_MODE {
  light = "亮光模式",
  dark = "暗黑模式",
}

const SwitchTheme = () => {
  const [mode, setMode] = useState<keyof typeof THEME_MODE>("light");

  useEffect(() => {
    window.addEventListener("storage", listenStorage);

    return () => {
      window.removeEventListener("storage", listenStorage);
    };
  }, []);

  useEffect(() => {
    window.localStorage.setItem("theme", mode);
  }, [mode]);

  // 监听storage的变化
  const listenStorage = (e: StorageEvent) => {
    console.log(e);
  };

  return (
    <div
      className={classNames([
        // 布局样式
        "flex space-x-2 items-center mr-4",
      ])}
    >
      <Switch
        checked={mode === "dark"}
        id="switchTheme"
        onCheckedChange={(bool) => {
          setMode(bool ? "dark" : "light");

          document.documentElement.classList.toggle(
            "dark",
            (bool ? "dark" : "light") === "dark" ||
              window.matchMedia("(prefers-color-scheme: dark)").matches
          );
        }}
      />
      <Label htmlFor="switchTheme">{THEME_MODE[mode]}</Label>
    </div>
  );
};

export default SwitchTheme;
