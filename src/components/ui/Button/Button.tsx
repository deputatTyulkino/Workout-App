import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "clsx";

type Props = {
  children: ReactNode;
  onClick: () => void;
  variant: "icon" | "main" | "normal" | "logout";
};

export const Button = ({ children, onClick, variant }: Props) => {
  return (
    <button className={cn(styles[variant])} onClick={onClick}>
      {children}
    </button>
  );
};
