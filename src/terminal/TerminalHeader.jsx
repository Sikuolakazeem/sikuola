import { useNavigate } from "react-router-dom";
import BtnSwitch from "../ui/BtnSwitch";
import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { Timer } from "./Timer";

function TerminalHeader() {
  const navigate = useNavigate();
  return (
    <header className="w-full fixed bg-terminal-header z-40 border-b border-border">

      <div className="w-[90%] md:w-[75%] mx-auto flex justify-between items-center bg-terminal-header">

        <div className="flex justify-between gap-2 items-center">
          <div className="w-3 h-3 rounded-full bg-terminal-lime"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-amber"></div>
          <div className="w-3 h-3 rounded-full bg-terminal-emerald"></div>
        </div>

        <span>
          <Timer />
        </span>

        <div className="mt-3 z-10 pb-2 self-end">
          <BtnSwitch onClick={() => navigate("/page", { replace: true })}>
            <span>
              <HiOutlineComputerDesktop className="h-8 w-6 text-text-faint" />
            </span>
            <p className="hidden text-[0.85rem] md:block  text-text-faint">
              Normal Mode
            </p>
          </BtnSwitch>
        </div>

      </div>
    </header>
  );
}

export default TerminalHeader;
