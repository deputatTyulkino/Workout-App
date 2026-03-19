import type { ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode;
  className?: string;
};

export const Heading = ({ children, className = "" }: Props) => {
  return (
    <h1
      className={cn("font-bold text-4xl uppercase text-center", {
        [className]: !!className,
      })}
    >
      {children}
    </h1>
  );
};
