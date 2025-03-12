/**
 * @name HeaderItem组件
 */

import classNames from "classnames";

interface HeaderItemProps {
  children: React.ReactNode;
  className?: string;
}

const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const { children, className } = props || {};
  return (
    <div
      className={classNames([
        "shadow-[rgba(0,0,0,0.35)_0px_5px_15px] h-[120px] rounded-[16px] overflow-hidden padding-[0_!important] sm:mr-4",
        className,
      ])}
    >
      {children}
    </div>
  );
};

export default HeaderItem;
