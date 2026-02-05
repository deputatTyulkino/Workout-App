import { useContext } from "react";
import { ModalContext } from "./contextModal";

export const useModal = () => {
  const context = useContext(ModalContext);
  return context;
};
