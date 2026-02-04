import { IoClose } from "react-icons/io5";
import type { TModalContext } from "../../../store/store.type";
import styles from "./Menu.module.scss";
import { menu } from "./menu.data";
import { NavLink } from "react-router";

type Props = {
  onClick: TModalContext["handleShow"];
};

export const Menu = ({ onClick }: Props) => {
  const logoutHandler = () => {};

  return (
    <nav className={styles.menu}>
      <button className={styles.close} onClick={onClick}>
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
