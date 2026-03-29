import { createContext, useContext } from "react";

export const TerminalContext = createContext();

export function useTerminal() {
  const context = useContext(TerminalContext);
  if (!context) {
    throw new Error("Context is used out of useTerminal context provider");
  }
  return context;
}
