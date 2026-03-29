import { BrowserRouter, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import { TerminalProvider } from "./context/TerminalProvider";

import "./index.css";

const PageNormal = lazy(() => import("./Pages/PageNormal"));
const PageTerminal = lazy(() => import("./Pages/PageTerminal"));
const Resume = lazy(() => import("./Pages/Resume"));
const SpinnerFull = lazy(() => import("./ui/SpinnerFull"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFull />}>
        <Routes>
          <Route
            path="/"
            element={
              <TerminalProvider>
                <PageTerminal />
              </TerminalProvider>
            }
          />
          <Route path="/page" element={<PageNormal />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
