/**
 * @name HeaderItem组件
 */

import classNames from "classnames";

interface HeaderItemProps {
  children: React.ReactNode;
  className?: string;
}

export const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const { children, className } = props || {};

  return (
    <div
      className={classNames([
        // 基础样式
        "h-[120px] bg-[#fff] rounded-lg shadow-sm",
        // 响应式样式
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default HeaderItem;
