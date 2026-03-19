import type { ReactNode } from "react";

export const Heading = ({ children }: { children: ReactNode }) => {
  return (
    <h1 className="font-bold text-4xl uppercase text-center">{children}</h1>
  );
};
