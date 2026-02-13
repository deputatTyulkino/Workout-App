import type { UseFormRegister } from "react-hook-form";
import styles from "./Input.module.scss";
import cn from "clsx";
import type { TLoginForm } from "../../../hooks/useLoginForm";

type Props = {
  register: UseFormRegister<TLoginForm>;
  name: string;
  type: string;
  isValid: boolean;
};

export const Input = ({ register, name, type, isValid }: Props) => {
  return (
    <input
      {...register(name)}
      className={cn(styles.input, { [styles.error]: !isValid })}
      name={name}
      type={type}
    />
  );
};
