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
      label,
      description,
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
    const { base, input, wrapper, labelStyle, descriptionStyle } = styles({
      size,
      className,
      variant,
      color,
      disabled,
      hasError,
      onDarkBg,
    });
    return (
      <div className={wrapper({ className })}>
        {label && <label className={labelStyle()}>{label}</label>}
        <div className={base()}>
          <input ref={ref} type={type} className={input()} {...rest} />
        </div>
        {description && <p className={descriptionStyle()}>{description}</p>}
      </div>
    );
  },
);

Textbox.displayName = "Textbox";

export default Textbox;
