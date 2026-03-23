import type { ReactNode } from "react";
import cn from "clsx";

type Props = {
  children: ReactNode;
  variant: "icon" | "main" | "normal" | "logout";
  onClick?: () => void;
  disabled?: boolean;
  type?: "submit" | "button";
  className?: string;
};

export const Button = ({
  children,
  onClick,
  variant,
  disabled = false,
  type = "button",
  className = "",
}: Props) => {
  const styles = {
    main: "hover:bg-accent hover:text-white focus:outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-solid block-15 border-none outline-none text-button bg-button-bg inline-37.5 cursor-pointer transition-colors duration-300 ease-out font-normal text-2xl rounded-[15px]",
    icon: "bg-transparent opacity-100 border-none outline-none cursor-pointer",
    normal:
      "disabled:pointer-events-none disabled:opacity-70 focus:outline-none focus-visible:outline-1 focus-visible:outline-accent focus-visible:outline-solid hover:bg-accent border-none outline-none text-white bg-light-brown inline-37.5 block-12.5 cursor-pointer transition-colors duration-300 ease-out font-normal text-xl rounded-[15px]",
    logout:
      "hover:text-brown text-nav-link text-white transition-colors duration-200 ease-out border-none outline-none bg-transparent cursor-pointer",
  }[variant];
  return (
    <button
      disabled={disabled}
      className={cn(styles, { [className]: !!className })}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
