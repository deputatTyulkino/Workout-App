import { CgMenuRight } from "react-icons/cg";
import styles from "./Hamburger.module.scss";
import { createPortal } from "react-dom";
import { Menu } from "../../layout/Menu/Menu";
import { useModal } from "../../../store/useModal";
import cn from "clsx";

export const Hamburger = () => {
  const { isShow, onShowModal } = useModal();

  return (
    <>
      <button className={cn({ [styles.close]: isShow })} onClick={onShowModal}>
        <CgMenuRight color="white" size={30} />
      </button>
      {isShow && createPortal(<Menu />, document.body)}
    </>
  );
};
