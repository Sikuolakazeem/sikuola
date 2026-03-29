import { useEffect, useRef } from "react";
import { useTerminal } from "../hooks/useTerminal";

function TerminalFooter() {
  const { count } = useTerminal();

  const tabRef = useRef();

  useEffect(() => {
    function callback(e) {
      if (e.code === "Tab") tabRef.current?.focus();
    }
    document.addEventListener("keydown", callback);
    return document.addEventListener("keydown", callback);
  }, []);

  return (
    <footer className=" border-t border-border bg-terminal-header p-1 sm:p-3">
      <div className="flex justify-center sm:justify-between items-center w-full md:w-[90%] mx-auto gap-2  sm:flex-row">
        <p className="text-[0.95rem] flex gap-1 items-center invisible sm:visible">
          Press
          <span
            className="text-text-faint text-[0.8rem] bg-text-faint/20 p-2 rounded-full cursor-pointer hover:bg-text-faint/10 duration-300 transition-all tracking-widest"
            onClick={() => tabRef}
          >
            Tab
          </span>
          to focus
        </p>

        <div className="self-center flex justify-center gap-2 items-center mr-7">
          <p className="text-[0.95rem]">Type</p>
          <p className="text text-yellow-600 text-[0.8rem] ">"help"</p>
          <p className="text-[0.95rem]">for</p>
          <p className="text-[0.95rem]">commands</p>
        </div>

        <p className="text-[0.95rem] invisible sm:visible">
          <span className="text-orange-500 text-[0.9rem]">{count}</span> command
        </p>
      </div>
    </footer>
  );
}

export default TerminalFooter;
