import type { ReactNode } from "react";
import styles from "./Button.module.scss";
import cn from "clsx";

type Props = {
  children: ReactNode;
  onClick: () => void;
  isButton?: boolean;
  isMain?: boolean;
  isIcon?: boolean;
  isClose?: boolean;
  isLogout?: boolean;
};

export const Button = ({
  children,
  onClick,
  isButton = false,
  isMain = false,
  isIcon = false,
  isClose = false,
  isLogout = false,
}: Props) => {
  return (
    <button
      className={cn(
        { [styles.button]: isButton },
        { [styles.main]: isMain },
        { [styles.icon]: isIcon },
        { [styles.close]: isClose },
        { [styles.logout]: isLogout },
      )}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
