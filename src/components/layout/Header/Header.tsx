import { FiUsers } from "react-icons/fi";
import styles from "./Header.module.scss";
import { Hamburger } from "../../common/Hamburger/Hamburger";

export const Header = () => {
  return (
    <header className={styles.header}>
      <button>
        <FiUsers color="white" size={30} />
      </button>
      <Hamburger />
    </header>
  );
};
