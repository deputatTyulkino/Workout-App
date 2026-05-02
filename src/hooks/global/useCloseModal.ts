import { useEffect, useRef, type RefObject } from "react";

export const useCloseModal = <T extends HTMLElement>(
  isOpen: boolean,
  onClose: () => void,
): RefObject<T | null> => {
  const modalRef = useRef<T | null>(null);
  const root = document.querySelector<HTMLDivElement>("#root");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isOpen &&
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      root?.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen, onClose, root]);

  return modalRef;
};
