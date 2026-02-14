import { IoClose } from "react-icons/io5";
import styles from "./Menu.module.scss";
import { menu } from "./menu.data";
import { NavLink } from "react-router";
import { useModal } from "../../../store/useModal";
import { useCloseModal } from "../../../hooks/useCloseModal";
import { Button } from "../../ui/Button/Button";
import { useCallback } from "react";
import { blur } from "../../../utils/Blur";

export const Menu = () => {
  const logoutHandler = () => {};
  const { isShow, onCloseModal } = useModal();
  const modalRef = useCloseModal(isShow, onCloseModal);

  const close = useCallback(() => {
    blur(false);
    onCloseModal();
  }, [onCloseModal]);

  return (
    <nav ref={modalRef} className={styles.menu}>
      <Button variant="icon" onClick={onCloseModal}>
        <IoClose color="white" size={45} />
      </Button>
      <ul>
        {menu.map((item, idx) => (
          <li key={`_menu_${idx}`}>
            <NavLink onClick={close} to={item.link}>
              {item.title}
            </NavLink>
          </li>
        ))}
        <li>
          <Button variant="logout" onClick={logoutHandler}>
            Log out
          </Button>
        </li>
      </ul>
    </nav>
  );
};
