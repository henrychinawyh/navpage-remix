import classNames from "classnames";

export const TopIcon = () => {
  return (
    <div
      className={classNames([
        // 布局样式
        "flex items-center",
      ])}
    >
      <img
        src="/icon.svg"
        alt="顶部Icon"
        className={classNames([
          // 基础样式
          "w-8 h-8",
        ])}
      />
      <span
        className={classNames([
          // 布局样式
          "ml-2",
          // 文本样式
          "font-serif",
        ])}
      >
        翔子的杂货铺
      </span>
    </div>
  );
};
