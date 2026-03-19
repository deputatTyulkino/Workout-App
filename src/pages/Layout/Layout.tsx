import { Outlet } from "react-router";
import { Header } from "../../components/layout/Header/Header";
import { ModalProvider } from "../../store/Modal/ModalProvider";

export const Layout = () => {
  return (
    <>
      <ModalProvider>
        <Header />
      </ModalProvider>
      <section id="home" className="grid inline-full block-full">
        <Outlet />
      </section>
    </>
  );
};
