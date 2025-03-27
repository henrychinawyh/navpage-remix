/**
 * @name 顶部栏
 */

import SwitchTheme from "~/components/SwitchTheme";
import { TopIcon } from "./TopIcon";
import { Other } from "./Other";

export const Top = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2">
      <TopIcon />
      <Other />
      <SwitchTheme />
    </div>
  );
};
