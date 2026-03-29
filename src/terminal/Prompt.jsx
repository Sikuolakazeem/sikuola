function Prompt() {
  return (
    <div className="bg-text-faint/5 p-6 mt-6">
      <div className="flex gap-3 items-center">
        <p className="text-[0.95rem] ">Type</p>
        <span className="text text-yellow-600 text-[0.8rem]ml-2">''help''</span>
        <p className="text-[0.95rem]">to see available commands</p>
      </div>
    </div>
  );
}

export default Prompt;
