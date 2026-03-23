import { IoClose } from "react-icons/io5";
import cn from "clsx";
import { menu } from "./menu.data";
import { NavLink } from "react-router";
import { useModal } from "../../../store/Modal/useModal";
import { useCloseModal } from "../../../hooks/global/useCloseModal";
import { Button } from "../../ui/Button/Button";
import { useCallback, useId } from "react";
import { blur } from "../../../utils/Blur";
import { useAuth } from "../../../store/Auth/useAuth";

export const Menu = () => {
  const id = useId();
  const { logout, isAuth } = useAuth();
  const { isShow, onCloseModal } = useModal();
  const modalRef = useCloseModal(isShow, onCloseModal);

  const close = useCallback(() => {
    blur(false);
    onCloseModal();
  }, [onCloseModal]);

  const logoutHandler = () => {
    logout();
    close();
  };

  return (
    <nav
      ref={modalRef}
      className="fixed inset-0 inset-s-auto inset-e-0 bg-accent py-6.25! px-5! text-nav-link min-inline-[50%] inline-[50%] flex flex-col z-1000 animate-translate"
    >
      <Button variant="icon" className="self-end" onClick={close}>
        <IoClose color="white" size={45} />
      </Button>
      <ul className="list-none flex flex-col items-center block-full justify-evenly">
        {menu.map((item, idx) => (
          <li key={`${id}_menu_${idx}`}>
            <NavLink
              className={({ isActive }) =>
                cn(
                  "text-white decoration-0 transition-colors duration-200 ease-out hover:text-brown",
                  { "text-brown!": isActive },
                )
              }
              onClick={close}
              to={item.link}
            >
              {item.title}
            </NavLink>
          </li>
        ))}
        {isAuth && (
          <li>
            <Button variant="logout" onClick={logoutHandler}>
              Log out
            </Button>
          </li>
        )}
      </ul>
    </nav>
  );
};
