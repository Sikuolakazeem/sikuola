import { PROMPT_USER } from "../hooks/usePromptUser";
import { TerminalOutput } from "./TerminalOutput";

function History({ history }) {
  return (
    <div>
      {history.map((entry) => (
        <div key={entry.id} className="mb-4 mt-8">
          {entry.type === "welcome" && (
            <div className="mb-6 space-y-1 flex flex-col md:flex-row items-center gap-3">
              {entry.lines.map((line, i) => (
                <>
                  <p
                    key={i}
                    className="font-semibold text-text-dark self-start md:self-center text[0.4rem] animate-pulse"
                  >
                    {line}@portfolio:~$
                  </p>
                  <div className="flex gap-2 items-center">
                    <p className="text-[0.95rem] text-text">Type</p>
                    <em className="text text-yellow-600 text-[0.95rem] ">
                      ''help''
                    </em>
                    <p className="text-[0.95rem] text-text">
                      to see available commands
                    </p>
                  </div>
                </>
              ))}
              <div className="mt-2 h-px w-24 opacity-20" />
            </div>
          )}

          <div>
            {entry.type === "cmd" && (
              <>
                <div className="flex items-center gap-2 mb-2">
                  <span>
                    {PROMPT_USER}
                    @portfolio:~$
                  </span>

                  <span>{entry.cmd}</span>
                </div>

                <div className="pl-4  pt-6 border-l border-opacity-10  transition-all duration 300 hover:translate-x-1.5 hover:bg-text/5">
                  <TerminalOutput result={entry.result} />
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}

export default History;
