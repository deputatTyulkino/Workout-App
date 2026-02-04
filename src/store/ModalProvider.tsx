import { useState, type ReactNode } from "react";
import { ModalContext } from "./contextModal";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState(false);

  const handleShow = () => {
    setIsShow((prev) => !prev);
  };

  return (
    <ModalContext.Provider value={{ isShow, handleShow }}>
      {children}
    </ModalContext.Provider>
  );
};
