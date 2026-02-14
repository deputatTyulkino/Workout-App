import { useCallback, useState, type ReactNode } from "react";
import { ModalContext } from "./contextModal";
import { blur } from "../utils/Blur";

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isShow, setIsShow] = useState(false);

  const onShowModal = useCallback(() => {
    blur(true);
    setIsShow(true);
  }, []);

  const onCloseModal = useCallback(() => {
    blur(false);
    setIsShow(false);
  }, []);

  return (
    <ModalContext.Provider value={{ isShow, onShowModal, onCloseModal }}>
      {children}
    </ModalContext.Provider>
  );
};
