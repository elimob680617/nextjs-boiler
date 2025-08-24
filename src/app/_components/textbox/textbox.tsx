"use client";

import React from "react";
import { styles, TextboxProps } from "@/app/_components/textbox/textbox.types";

export const Textbox: React.FC<TextboxProps> = ({
  size,
  type,
  className,
  variant,
  color,
  disabled,
  hasError,
  onDarkBg,
  ...rest
}) => {
  const { base } = styles({
    size,
    className,
    type,
    variant,
    color,
    disabled,
    hasError,
    onDarkBg,
  });
  return (
    <input type={base({ type })} className={base({ className })} {...rest} />
  );
};
