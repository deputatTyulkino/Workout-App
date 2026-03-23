import { Outlet } from "react-router";
import { Header } from "../../components/layout/Header/Header";
import { ModalProvider } from "../../store/Modal/ModalProvider";
import { AuthProvider } from "../../store/Auth/AuthProvider";

export const Layout = () => {
  return (
    <AuthProvider>
      <ModalProvider>
        <Header />
      </ModalProvider>
      <section id="base" className="grid inline-full block-full">
        <Outlet />
      </section>
    </AuthProvider>
  );
};
