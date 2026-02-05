import { useState, type ReactNode } from "react";
import { ModalContext } from "./contextModal";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState(false);

  const onShowModal = () => {
    setIsShow(true);
  };

  const onCloseModal = () => {
    setIsShow(false);
  };

  return (
    <ModalContext.Provider value={{ isShow, onShowModal, onCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};
