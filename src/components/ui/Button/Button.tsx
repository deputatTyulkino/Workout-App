import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "clsx";

type Props = {
  children: ReactNode;
  onClick: () => void;
  variant: "icon" | "main" | "normal" | "logout";
  disabled?: boolean;
  type?: "submit" | "button";
};

export const Button = ({
  children,
  onClick,
  variant,
  disabled = false,
  type = "button",
}: Props) => {
  return (
    <button
      disabled={disabled}
      className={cn(styles[variant], { [styles.disabled]: disabled })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
