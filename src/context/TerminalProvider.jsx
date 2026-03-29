import { useEffect, useRef, useState } from "react";
import { TerminalContext } from "../hooks/useTerminal";
import { data } from "../data/portfolio";
import { COMMANDS } from "../hooks/useCommands";
const WELCOME = [`${data.name}`.split(" ")[0].toLowerCase()];
console.log(WELCOME);
export function TerminalProvider({ children }) {
  const [history, setHistory] = useState([
    { id: 0, type: "welcome", lines: WELCOME },
  ]);
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const [count, setCount] = useState(0);

  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const runCommand = (raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setCmdHistory((prev) => [cmd, ...prev]);
    setHistoryIdx(-1);

    if (cmd === "clear") {
      setHistory([{ id: Date.now(), type: "welcome", lines: WELCOME }]);
      setInput("");
      return;
    }

    const handler = COMMANDS[cmd];
    const result = handler ? handler() : { type: "error", cmd };

    setHistory((prev) => [
      ...prev,
      { id: Date.now(), type: "cmd", cmd: raw, result },
    ]);
    setInput("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setCount((count) => count + 1);
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : (cmdHistory[next] ?? ""));
    }
  };
  return (
    <TerminalContext.Provider
      value={{
        history,
        input,
        setInput,
        inputRef,
        bottomRef,
        handleKeyDown,
        count,
      }}
    >
      {children}
    </TerminalContext.Provider>
  );
}
