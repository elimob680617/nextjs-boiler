import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "@/app/_components/types/component-base.type";
import { Loading } from "@/app/_components/types/loading.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  Loading & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "square";
export type RefinedMerge<T, U> = Omit<T, keyof U> & U;
