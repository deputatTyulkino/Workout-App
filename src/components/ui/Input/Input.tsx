import styles from "./Input.module.scss";
import cn from "clsx";

type Props = {
  name: string;
  type: string;
  isValid: boolean;
};

export const Input = ({ name, type, isValid }: Props) => {
  return (
    <input
      className={cn(styles.input, { [styles.error]: !isValid })}
      name={name}
      type={type}
    />
  );
};
