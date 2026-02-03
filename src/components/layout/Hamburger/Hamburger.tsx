import { useState } from "react";
import { CgMenuRight } from "react-icons/cg";
import styles from "./Hamburger.module.scss";
import { IoClose } from "react-icons/io5";
import { Menu } from "./Menu";

export const Hamburger = () => {
  const [isShow, setIsShow] = useState(false);

  return (
    <div className={styles.wrapper}>
      <button onClick={() => setIsShow(!isShow)}>
        {isShow ? (
          <IoClose color="white" size={40} />
        ) : (
          <CgMenuRight color="white" size={30} />
        )}
      </button>
      <Menu isShow={isShow} />
    </div>
  );
};
