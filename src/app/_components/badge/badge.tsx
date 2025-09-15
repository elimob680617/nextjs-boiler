import { BadgeProps } from "@/app/_components/badge/badge.types";
import classNames from "classnames";
import { Size } from "@/app/_components/types/size.type";

const sizeClasses: Record<Size, string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

export const Badge: React.FC<BadgeProps> = ({
  color,
  className,
  children,
  size = "xs",
}) => {
  const classes = classNames("badge", className, {
    [`badge-${color}`]: color,
    [`${sizeClasses[size]}`]: size,
  });
  return <span className={classes}>{children}</span>;
};
