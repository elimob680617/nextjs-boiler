"use client";

import { LoadingProps } from "@/app/_components/loading/loading.types";
import React from "react";
import classNames from "classnames";
import { Size } from "@/app/_components/types/size.type";

const sizeClasses: Record<Size, string> = {
  xs: "loading-xs",
  sm: "loading-sm",
  md: "loading-md",
  lg: "loading-lg",
};

export const Loading: React.FC<LoadingProps> = ({
  color,
  size = "sm",
  className,
  type = "spinner",
  ...rest
}: LoadingProps) => {
  const classes = classNames(
    "loading",
    className,
    { [`loading-${type}`]: type },
    { [`${sizeClasses[size]}`]: size },
    { [`loading-${color}`]: color },
  );
  return <span className={classes} {...rest}></span>;
};
