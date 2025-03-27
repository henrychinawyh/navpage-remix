/**
 * @name 其他展示
 */

import classNames from "classnames";
import Clock from "../Clock";

export const Other = () => {
  return (
    <div
      className={classNames([
        "flex items-center justify-center flex-1 mx-4",
        "max-sm:hidden",
      ])}
    >
      {/* 时钟 */}
      <Clock type="light" timeFormat="HH:mm:ss" dateFormat="YYYY-MM-DD" />
    </div>
  );
};
