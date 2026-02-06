import { CgMenuRight } from "react-icons/cg";
import { createPortal } from "react-dom";
import { Menu } from "../../layout/Menu/Menu";
import { useModal } from "../../../store/useModal";
import { Button } from "../../ui/Button/Button";

export const Hamburger = () => {
  const { isShow, onShowModal } = useModal();

  return (
    <>
      <Button isIcon={true} onClick={onShowModal}>
        <CgMenuRight color="white" size={40} />
      </Button>
      {isShow && createPortal(<Menu />, document.body)}
    </>
  );
};
