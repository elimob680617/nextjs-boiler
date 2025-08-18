import { Variant } from "@/app/_components/types/variant.type";
import { Size } from "@/app/_components/types/size.type";
import { Color } from "@/app/_components/types/color.type";

export type RefinedMerge<T, U> = Omit<T, keyof U> & U;

export type ComponentBase = {
  isDisabled?: boolean;
  className?: string;
  variant?: Variant;
  size?: Size;
  color?: Color;
};
