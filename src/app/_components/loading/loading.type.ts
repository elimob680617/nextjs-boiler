import {
  ComponentBase,
  RefinedMerge,
} from "@/app/_components/types/component-base.type";
import type { VariantProps } from "tailwind-variants";
import { styles } from "@/app/_components/loading/loading";

type LoadingVariants = VariantProps<typeof styles>;

export type LoadingProps = LoadingVariants &
  Omit<ComponentBase, "isDisabled"> & {
    type?: "spinner" | "ring";
  };
