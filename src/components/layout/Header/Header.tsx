import { FiUsers } from "react-icons/fi";
import { FaArrowLeft } from "react-icons/fa6";
import { Hamburger } from "../../common/Hamburger/Hamburger";
import { useLocation, useNavigate } from "react-router";
import { Button } from "../../ui/Button/Button";
import { ROUTES } from "../../../constants/routes.const";

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const isProfileIcon = location.pathname === "/";

  const navigateTo = () => {
    if (location.pathname !== "/") {
      navigate(-1);
    }
    navigate(ROUTES.profile);
  };

  return (
    <header className="flex items-center justify-between py-7.5! px-6.25! fixed inset-bs-0 inline-full bg-transparent z-1000">
      <Button variant="icon" onClick={navigateTo}>
        {isProfileIcon ? (
          <FiUsers color="white" size={35} />
        ) : (
          <FaArrowLeft color="white" size={35} />
        )}
      </Button>
      <Hamburger />
    </header>
  );
};
