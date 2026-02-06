import type { ReactNode } from "react";
import styles from "./Heading.module.scss";

export const Heading = ({ children }: { children: ReactNode }) => {
  return <h1 className={styles.heading}>{children}</h1>;
};
