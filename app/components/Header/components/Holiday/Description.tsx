/**
 * @name 描述组件
 */

interface DescriptionProps {
  prefix?: React.ReactNode;
  suffix?: React.ReactNode;
  content?: React.ReactNode;
}

export const Description: React.FC<DescriptionProps> = (props) => {
  const { prefix, suffix, content } = props || {};
  return (
    <div className="flex items-end  w-full  bg-[#fff]">
      {prefix}
      <div
        className={`${
          prefix ? "ml-1" : ""
        }  flex items-center w-full justify-between dark:text-[#000000]`}
      >
        <span>{content}</span>
        {suffix}
      </div>
    </div>
  );
};

interface DescriptionPrefixProps {
  text: string;
  color?: string;
  backgroundColor?: string;
}
export const Prefix: React.FC<DescriptionPrefixProps> = (props) => {
  const { text, color, backgroundColor } = props || {};

  return (
    <span
      style={{
        color: color || "#fff",
        backgroundColor,
      }}
    >
      {text}
    </span>
  );
};
