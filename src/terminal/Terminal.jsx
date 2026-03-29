import { PROMPT_USER } from "../hooks/usePromptUser";
import { useTerminal } from "../hooks/useTerminal";
import History from "./History";

export default function Terminal() {
  const { input, inputRef, bottomRef, handleKeyDown, setInput, history } =
    useTerminal();

  return (
    <div
      className="flex-1 mt-20  overflow-hidden px-4 md:px-8 py-6 text-sm leading-relaxed cursor-text 
]"
      onClick={() => inputRef.current?.focus()}
    >
      <div className="max-w-3xl mx-auto">
        <History history={history} />
        <div className="flex items-center gap-2">
          <span className="text-green-600 font-semibold text-[1rem]">
            {PROMPT_USER}@portfolio:~$
          </span>
          <div className="flex items-center gap-2">
            <div className="relative flex-1 flex items-center">
              <input
                ref={inputRef}
                id="input"
                placeholder="Type a command..."
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="w-full cursor-text border-0 outline-0 placeholder:text-placeholder/25"
              />
            </div>
          </div>
        </div>
        <div ref={bottomRef} />
      </div>
    </div>
  );
}
