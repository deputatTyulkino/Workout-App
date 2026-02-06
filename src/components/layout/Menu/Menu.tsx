import { IoClose } from "react-icons/io5";
import styles from "./Menu.module.scss";
import { menu } from "./menu.data";
import { NavLink } from "react-router";
import { useModal } from "../../../store/useModal";
import { useCloseModal } from "../../../hooks/useCloseModal";
import { Button } from "../../ui/Button/Button";

export const Menu = () => {
  const logoutHandler = () => {};
  const { isShow, onCloseModal } = useModal();
  const modalRef = useCloseModal(isShow, onCloseModal);

  return (
    <nav ref={modalRef} className={styles.menu}>
      <Button isClose={true} isIcon={true} onClick={onCloseModal}>
        <IoClose color="white" size={45} />
      </Button>
      <ul>
        {menu.map((item, idx) => (
          <li key={`_menu_${idx}`}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </li>
        ))}
        <li>
          <Button isLogout={true} onClick={logoutHandler}>
            Log out
          </Button>
        </li>
      </ul>
    </nav>
  );
};
