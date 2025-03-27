import classNames from "classnames";

interface LoadingProps {
  loading?: boolean;
  className?: string;
  children?: React.ReactNode;
}

export function Loading({
  loading = false,
  className,
  children,
}: LoadingProps) {
  return (
    <div className="relative">
      {children}
      {loading && (
        <div
          className={classNames([
            "absolute inset-0 flex items-center justify-center bg-background/80 backdrop-blur-sm transition-all",
            className,
          ])}
        >
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
        </div>
      )}
    </div>
  );
}
