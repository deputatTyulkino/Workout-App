import { useContext } from "react";
import { ModalContext } from "./contextModal";

export const useModal = () => {
  const { isShow, handleShow } = useContext(ModalContext);
  return { isShow, handleShow };
};
