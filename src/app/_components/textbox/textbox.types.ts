import { InputHTMLAttributes } from "react";
import {
  ComponentBase,
  RefinedMerge,
} from "@/app/_components/types/component-base.type";

export type TextboxType = "text" | "number" | "email" | "password";

export type TextboxProps = InputHTMLAttributes<HTMLInputElement> &
  RefinedMerge<TextboxVariants, ComponentBase> & {
    type?: TextboxType;
  };
