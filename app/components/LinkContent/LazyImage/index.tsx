/**
 * @name 懒加载图片
 */

import classNames from "classnames";
import { useEffect, useState } from "react";
interface LazyImageProps {
  src?: string;
  alt?: string;
}

export const LazyImage = (props: LazyImageProps) => {
  const { src, alt } = props || {};
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;

      img.onload = () => {
        setIsLoaded(true);
      };
    }
  }, [src]);
  return (
    <img
      src={(isLoaded && src) || ""}
      alt={alt}
      className={classNames([
        // 基础样式
        "w-12 h-12",
        "max-lg:mb-4",
        // 状态样式
        isLoaded ? "opacity-100" : "opacity-0",
      ])}
    />
  );
};
