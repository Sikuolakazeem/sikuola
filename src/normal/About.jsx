import { data } from "../data/portfolio";

function About() {
  return (
    <section className="flex flex-col gap-6">
      <h3 className=" text-text-faint">{data.about.title}</h3>
      <div className="flex gap-2.5 flex-col">
        <p className="">{data.about.description}</p>
        <p>
          I'm a full-stack developer with 1+ years crafting scalable web
          applications and delightful user experiences. I thrive at the
          intersection of design and engineering — turning complex problems into
          clean, intuitive solutions.
        </p>
        <p>
          Turning ideas into products, i don't just build apps, I build
          solutions.
        </p>
      </div>
    </section>
  );
}

export default About;
