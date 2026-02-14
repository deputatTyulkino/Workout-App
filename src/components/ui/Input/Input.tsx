import { useFormContext } from "react-hook-form";
import styles from "./Input.module.scss";
import cn from "clsx";

type Props = {
  name: string;
  type: string;
  placeholder: string;
};

export const Input = (props: Props) => {
  const { register, getFieldState } = useFormContext();
  const { invalid } = getFieldState(props.name);
  return (
    <input
      {...props}
      {...register(props.name)}
      className={cn(styles.input, { [styles.error]: invalid })}
    />
  );
};
