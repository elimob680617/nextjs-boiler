import { ButtonHTMLAttributes } from "react";
import { ComponentBase } from "@/app/_components/types/component-base.type";

import { LoadingBehaviour } from "@/app/_components/types/loading-behaviour.type";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  ComponentBase &
  LoadingBehaviour & {
    isOutline?: boolean;
    isLink?: boolean;
    animatedIcon?: boolean;
    shape?: ButtonShape;
  };

export type ButtonShape = "default" | "wide" | "full" | "square";
