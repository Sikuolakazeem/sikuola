function BtnSwitch({ children, onClick }) {
  return (
    <button
      onClick={onClick}
      className="rounded-md px-1 border-2 border-btn-border bg-terminal-header hover:bg-terminal-header/90 duration-500 transition-all text-btn-text md:flex md:items-center gap-1"
    >
      {children}
    </button>
  );
}

export default BtnSwitch;
