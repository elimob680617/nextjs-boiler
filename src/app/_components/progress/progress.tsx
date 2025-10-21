import { ProgressProps } from "@/app/_components/progress/progress.types";
import { Size } from "@/app/_components/types/size.type";
import classNames from "classnames";

const sizeClasses: Record<Size, string> = {
  xs: "progress-xs",
  sm: "progress-sm",
  md: "progress-md",
  lg: "progress-lg",
};

export const Progress: React.FC<ProgressProps> = ({
  color = "info",
  className,
  size = "sm",
  value,
}) => {
  const classes = classNames("progress", className, {
    [`${sizeClasses[size]}`]: size,
    [`progress--${color}`]: color,
  });
  return <progress value={value} max="100" className={classes} />;
};
