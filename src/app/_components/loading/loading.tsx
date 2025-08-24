"use client";
import { LoadingProps } from "@/app/_components/loading/loading.type";
import React from "react";
import { tv } from "tailwind-variants";
import { Color } from "@/app/_components/types/color.type";
import { Size } from "@/app/_components/types/size.type";

export const styles = tv({
  slots: {
    base: "pointer-events-none aspect-square loading inline-block rounded-full border-2 border-t-transparent",
  },
  variants: {
    color: {
      default: "text-white",
      primary: "text-primary",
      secondary: "text-secondary",
      error: "text-error",
    } as Record<Color, string>,
    size: {
      xs: "w-4 h-4",
      sm: "w-5 h-5",
      md: "w-6 h-6",
      lg: "w-10 h-10",
    } as Record<Size, string>,
    type: {
      spinner: "animate-spin",
      ring: "animate-ping",
    },
  },

  defaultVariants: {
    type: "spinner",
    color: "default",
    size: "sm",
  },
});

export const Loading: React.FC<LoadingProps> = ({
  color,
  size,
  className,
  type,
  ...rest
}: LoadingProps) => {
  const { base } = styles({ color, size, type });
  return <div className={base({ className })} {...rest}></div>;
};
