/* eslint-disable react/prop-types */
/**
 * @name HeaderItem组件
 */

import classNames from "classnames";

interface HeaderItemProps {
  children: React.ReactNode;
  className?: string;
}

const HeaderItem: React.FC<HeaderItemProps> = (props) => {
  const { className } = props || {};
  return (
    <div
      className={classNames([
        "shadow-[rgba(0,0,0,0.35)_0px_5px_15px] h-[120px] rounded-[16px] overflow-hidden padding-[0_!important] sm:mr-4",
        className,
      ])}
    >
      {props?.children ? (
        props.children
      ) : (
        <div className="text-red-500 text-sm">内容加载失败</div>
      )}
    </div>
  );
};

export default HeaderItem;
