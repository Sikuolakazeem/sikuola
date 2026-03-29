import Terminal from "../terminal/Terminal";
import TerminalFooter from "../terminal/TerminalFooter";
import TerminalHeader from "../terminal/TerminalHeader";

function PageTerminal() {
  return (
    <div className="h-screen flex flex-col overflow-hidden page-transition">
      <TerminalHeader />
      <main className="h-full flex-1 overflow-y-auto custom-scrollbar">
        <Terminal />
      </main>
      <TerminalFooter />
    </div>
  );
}

export default PageTerminal;
