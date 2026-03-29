import Experiences from "./Experiences";
import Resume from "./Resume";

function Experience() {
  return (
    <section className="space-y-3">
      <h3 className="text-text-faint">EXPERIENCE</h3>

      <div className="flex flex-col gap-10 mt-4">
        <Experiences />
      </div>
      <Resume />
    </section>
  );
}

export default Experience;
