import { Link } from "react-router-dom";

function Project() {
  return (
    <section className="space-y-3">
      <h3 className="text-text-faint">PROJECTS</h3>
      <div className="flex flex-col gap-10 mt-4">
        <a
          href="https://fummsa-payment-system-n7f6-qhiwf02xr-oluwasikuolas-projects.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col gap-2 rounded-md border border-border py-4 px-3"
        >
          <span className="flex items-center justify-between">
            <h2 className="text-text-faint ">Payment Approval Workflow</h2>
            <small className="py-1 px-2 outline-0 rounded-full">
              completed
            </small>
          </span>
          <p className="mt-2">
            Multi role payment approval workflow for university finance
            department.
          </p>

          <div className="flex items-center gap-2 flex-wrap ">
            <p className="bg-text-dark text-bg-dark rounded-full px-2   text-[1rem]  font-mono py-0.5">
              Javascript
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full px-2   text-[1rem]  font-mono py-0.5">
              React
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full px-2  text-[1rem]  font-mono py-0.5">
              Html
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full px-2  text-[1rem]  font-mono py-0.5">
              Tailwind
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full px-2  text-[1rem]   font-mono py-0.5">
              Zod
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full px-2 font-mono  text-[1rem]  py-0.5">
              Css
            </p>
          </div>
        </a>
        <button
          className="flex flex-col gap-2 rounded-md border  border-border py-4 px-3"
          onClick={() => alert("Coming live soon")}
        >
          <span className="flex items-center justify-between">
            <h2 className="text-text-faint ">Equideacore Website</h2>
            <small className="py-1 px-2 outline-0 rounded-full bg-pending-bg text-pending-text font-bold">
              pending
            </small>
          </span>
          <p className="mt-2 text-left">
            Equideacore landing page (brochure) that display's all you need to
            know about Equidaecore integrated nigeria limited.
          </p>

          <div className="flex items-center gap-2 flex-wrap ">
            <p className="bg-text-dark text-bg-dark rounded-full px-2   text-[1rem]  font-mono py-0.5">
              React
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full px-2  text-[1rem]  font-mono py-0.5">
              Javascript
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full  text-[1rem]   px-2 font-mono py-0.5">
              Tailwind
            </p>
          </div>
        </button>{" "}
        <div className="flex flex-col gap-2 rounded-md border  border-border py-4 px-3">
          <span className="flex items-center justify-between">
            <h2 className="text-text-faint ">Portfolio app</h2>
            <small className="py-1 px-2 outline-0 rounded-full bg-completed-bg text-completed-text font-bold">
              completed
            </small>
          </span>
          <p className="mt-2">
            Portfolio website built with nice command interface, this exact one
            you're exploring.
          </p>

          <div className="flex items-center gap-2 flex-wrap ">
            <p className="bg-text-dark text-bg-dark rounded-full px-2   text-[1rem]  font-mono py-0.5">
              React
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full px-2  text-[1rem]  font-mono py-0.5">
              Javascript
            </p>
            <p className="bg-text-dark text-bg-dark rounded-full  text-[1rem]   px-2 font-mono py-0.5">
              Tailwind
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
