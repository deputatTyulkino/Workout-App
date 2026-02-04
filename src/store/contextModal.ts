import { createContext } from "react";
import type { TModalContext } from "./store.type";

const initialValue = {
  isShow: false,
  handleShow: () => {},
};

export const ModalContext = createContext<TModalContext>(initialValue);