import { Outlet } from "react-router";
import { Header } from "../../components/layout/Header/Header";
import { ModalProvider } from "../../store/ModalProvider";
import styles from "./Layout.module.scss";

export const Layout = () => {
  return (
    <>
      <ModalProvider>
        <Header />
      </ModalProvider>
      <section id="home" className={styles.layout}>
        <Outlet />
      </section>
    </>
  );
};
