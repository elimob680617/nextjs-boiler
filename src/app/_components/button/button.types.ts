import { ButtonHTMLAttributes, ReactNode } from "react";
import {
  ComponentBase,
  RefinedMerge,
} from "@/app/_components/types/component-base.type";

import type { VariantProps } from "tailwind-variants";
import { styles } from "@/app/_components/button/button";

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
