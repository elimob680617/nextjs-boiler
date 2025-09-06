"use client";

import React from "react";
import {
  ButtonProps,
  ButtonShape,
} from "@/app/_components/button/button.types";
import classNames from "classnames";
import { Size } from "@/app/_components/types/size.type";
import { Loading } from "@/app/_components/loading";

const sizeClasses: Record<Size, string> = {
  xs: "btn-xs",
  sm: "btn-sm",
  md: "btn-md",
  lg: "btn-lg",
};

const shapeClasses: Record<ButtonShape, string> = {
  wide: "btn-wide",
  full: "btn-block",
  square: "btn-square",
  default: "",
};

export const Button: React.FC<ButtonProps> = ({
  color,
  variant,
  size = "md",
  isDisabled = false,
  isOutline = false,
  isLoading = false,
  loadingType = "spinner",
  loadingText = "در حال ارسال درخواست ...",
  type = "button",
  isLink = false,
  animatedIcon = false,
  shape = "default",
  children,
  className,
  ...rest
}) => {
  const classes = classNames(
    "btn",
    className,
    { [`btn-${color}`]: color },
    { [`btn-${variant}`]: variant },
    { [`${sizeClasses[size]}`]: size },
    { "btn-outline": isOutline },
    { "btn-link": isLink },
    { [`${shapeClasses[shape]}`]: shape },
    { "animated-icon": animatedIcon },
    { "pointer-events-none opacity-80": isLoading },
  );
  return (
    <button type={type} disabled={isDisabled} className={classes} {...rest}>
      {isLoading && <Loading type={loadingType} size="xs" />}
      {isLoading ? loadingText : children}
    </button>
  );
};
