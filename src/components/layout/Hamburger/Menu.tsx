import styles from "./Hamburger.module.scss";
import cn from "clsx";
import { menu } from "./menu.data";
import { Link } from "react-router";

type Props = {
  isShow: boolean;
};

export const Menu = ({ isShow }: Props) => {
  const logoutHandler = () => {}

  return (
    <nav
      className={cn(styles.menu, {
        [styles.show]: isShow,
      })}
    >
      <ul>
        {menu.map((item, idx) => (
          <li key={`_menu_${idx}`}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <button onClick={logoutHandler}>Log out</button>
        </li>
      </ul>
    </nav>
  );
};
