import { IoClose } from "react-icons/io5";
import styles from "./Menu.module.scss";
import { menu } from "./menu.data";
import { NavLink } from "react-router";
import { useModal } from "../../../store/useModal";
import { useCloseModal } from "../../../hooks/useCloseModal";

// type Props = {
//   onClick: TModalContext["handleShow"];
// };

export const Menu = () => {
  const logoutHandler = () => {};
  const { isShow, onCloseModal } = useModal();
  const modalRef = useCloseModal(isShow, onCloseModal);

  return (
    <nav ref={modalRef} className={styles.menu}>
      <button className={styles.close} onClick={onCloseModal}>
        <IoClose color="white" size={40} />
      </button>
      <ul>
        {menu.map((item, idx) => (
          <li key={`_menu_${idx}`}>
            <NavLink to={item.link}>{item.title}</NavLink>
          </li>
        ))}
        <li>
          <button className={styles.logout} onClick={logoutHandler}>
            Log out
          </button>
        </li>
      </ul>
    </nav>
  );
};
