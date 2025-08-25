import { tv, VariantProps } from "tailwind-variants";
import { Color } from "@/app/_components/types/color.type";
import { Size } from "@/app/_components/types/size.type";
import { Variant } from "@/app/_components/types/variant.type";
import { InputHTMLAttributes } from "react";
import {
  ComponentBase,
  RefinedMerge,
} from "@/app/_components/types/component-base.type";

export type TextboxType = "text" | "number" | "email" | "password";

export const styles = tv({
  slots: {
    base: "self-stretch h-12 px-4 text-sm leading-loose flex-shrink placeholder-base-content placeholder-opacity-50 border bg-transparent rounded-lg text-base",
    input:
      "flex-1 text-sm xl:text-base outline-none leading-[0px] h-full w-full",
  },
  variants: {
    color: {
      primary:
        "bg-secondary-850 text-secondary-300 focus-within:border-primary outline-primary",
    } as Record<Color, string>,
    size: {
      xs: "h-6 px-2 text-xs loading-relax",
      sm: "h-8 px-3 text-sm loading-8",
      md: "h-12 px-4 text-md loading-loose ",
      lg: "h-16 px-6 text-lg loading-loose",
    } as Record<Size, string>,
    variant: {
      outlined: "",
      filled:
        "border-transparent bg-base-content focus:outline focus:outline-2 focus:outline-blue-400 focus:outline-offset-2",
    } as Record<Variant, string>,
    type: {
      text: "text",
      number: "number",
      email: "email",
      password: "password",
    } as Record<TextboxType, string>,
    hasError: {
      true: {
        base: "outline-error dark:bg-error/10 border-error",
        labelStyle: "text-error",
      },
    },
    disabled: {
      true: {
        base: "dark:bg-base-100 cursor-not-allowed text-opacity-20 dark:placeholder-base-content placeholder-opacity-20",
        labelStyle: "opacity-40",
        input: "pointer-events-none tab",
      },
    },

    onDarkBg: {
      true: {
        base: "bg-secondary-800",
      },
    },
  },
  compoundVariants: [
    {
      variant: "outlined",
      color: "primary",
    },
  ],
  defaultVariants: {
    color: "primary",
    variant: "filled",
  },
});

type TextboxVariants = VariantProps<typeof styles>;

export type TextboxProps = Omit<InputHTMLAttributes<HTMLInputElement>, "size"> &
  RefinedMerge<TextboxVariants, ComponentBase> & {
    type?: TextboxType;
  };
