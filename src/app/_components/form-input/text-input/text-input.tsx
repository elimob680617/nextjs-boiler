import { TextInputProps } from "@/app/_components/form-input/text-input/text-input.types";
import { FieldValues, get } from "react-hook-form";
import { Textbox } from "@/app/_components/textbox";

export const TextInput = <TFormValues extends FieldValues>({
  register,
  name,
  rules,
  errors,
  variant,
  type,
  ...rest
}: TextInputProps<TFormValues>) => {
  const error = get(errors, name);
  const hasError = !!error;

  return (
    <>
      <Textbox
        {...(register(name, rules) && register)}
        {...rest}
        variant={variant}
        type={type}
        hasError={hasError}
      />
      {hasError && <p className="mt-1 text-sm text-error">{error.message}</p>}
    </>
  );
};
