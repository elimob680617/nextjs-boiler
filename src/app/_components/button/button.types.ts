import { ButtonHTMLAttributes, ReactNode } from "react";
import {
  ComponentBase,
  RefinedMerge,
} from "@/app/_components/types/component-base.type";

import { tv, VariantProps } from "tailwind-variants";
import { Color } from "@/app/_components/types/color.type";
import { Size } from "@/app/_components/types/size.type";

export const styles = tv({
  slots: {
    base: "font-semibold cursor-pointer py-2 border-2 bg-transparent px-4 rounded-lg transition-all hover:opacity-80 flex items-center justify-center gap-2",
  },
  variants: {
    color: {
      default: "",
      primary: "",
    } as Record<Color, string>,
    variant: {
      filled: "",
      outlined: "",
    },
    size: {
      xs: "text-sm py-0.5 px-3 *:w-4 *:h-4 rounded-sm",
      sm: "text-sm py-1.5 px-3 *:w-4 *:h-4 xl:py-2 xl:px-4 xl:text-base",
    } as Record<Size, string>,
    loading: {
      true: "pointer-events-none ",
    },
    disabled: {
      true: "pointer-events-none",
    },
  },
  compoundVariants: [
    {
      variant: "outlined",
      color: "default",
      className: "border-secondary-400 text-secondary-300",
    },
    {
      variant: "filled",
      color: "primary",
      className: "opacity-90 border-primary bg-primary text-white",
    },
    {
      variant: "filled",
      color: "secondary",
      className: "opacity-90 border-secondary-700 bg-secondary-700 text-white",
    },
    {
      variant: "filled",
      color: "error",
      className: "opacity-90 border-error bg-error text-white",
    },
    {
      variant: "filled",
      color: "default",
      className: "bg-secondary-850 border-secondary-850 text-secondary-300",
    },
    {
      variant: "outlined",
      color: "primary",
      className: "border-primary text-primary",
    },
    {
      variant: "outlined",
      color: "error",
      className: "border-error text-error hover:bg-error hover:text-white",
    },
    {
      variant: "outlined",
      color: "primary",
      disabled: true,
      className: "border-secondary-850 text-secondary-600",
    },
  ],
  defaultVariants: {
    color: "primary",
    variant: "filled",
  },
});

type ButtonVariants = VariantProps<typeof styles>;
export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  RefinedMerge<ButtonVariants, ComponentBase> & {
    icon?: ReactNode;
    iconDir?: "start" | "end";
    loading?: boolean;
    href?: string;
    iconSize?: number;
    isDownload?: boolean;
    linkClassName?: string;
  };
