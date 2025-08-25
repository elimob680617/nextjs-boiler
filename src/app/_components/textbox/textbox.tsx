"use client";

import React, { forwardRef } from "react";
import { styles, TextboxProps } from "@/app/_components/textbox/textbox.types";

export const Textbox: React.FC<TextboxProps> = forwardRef<
  HTMLInputElement,
  TextboxProps
>(
  (
    {
      size,
      type,
      className,
      variant,
      color,
      disabled,
      hasError,
      onDarkBg,
      ...rest
    },
    ref,
  ) => {
    const { base, input } = styles({
      size,
      className,
      variant,
      color,
      disabled,
      hasError,
      onDarkBg,
    });
    return (
      <div className={base()}>
        <input ref={ref} type={type} className={input()} {...rest} />
      </div>
    );
  },
);
