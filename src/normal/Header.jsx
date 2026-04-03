import { useNavigate } from "react-router-dom";
import BtnSwitch from "../ui/BtnSwitch";

function Header() {
  const navigate = useNavigate();
  return (
    <header className="w-[80%] flex mx-auto items-center justify-end mt-20">
      <div className=" mt-3 fixed top-1 z-10 cursor-pointer">
        <BtnSwitch onClick={() => navigate("/terminal", { replace: true })}>
          <span className="text-3xl text-text-faint">&gt;</span>
          <p className="hidden md:block text-[0.85rem] text-text-faint">
            Switch to Terminal
          </p>
        </BtnSwitch>
      </div>
    </header>
  );
}

export default Header;
