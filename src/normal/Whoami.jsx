import SocialIcons from "./SocialIcons";
import { data } from "../data/portfolio";
import AnimatedText from "./AnimatedText";

function Whoami() {
  return (
    <section className="md:fixed left-[10%] md:w-[calc(38%-2rem)] page-transition mb-15">
      <div className="flex flex-col gap-1">
        <h1 className="text-text-faint text-[3rem] tracking-wider lg:text-[3.3rem]">
          {data.name}
        </h1>

        <h3>
          <AnimatedText />
        </h3>

        <div className="mt-3">
          <p className="whitespace=wrap w-[95%] md:w-[90%]">{data.bio}</p>
        </div>

        <div className="self-start mt-1">
          <SocialIcons />
        </div>
      </div>
    </section>
  );
}

export default Whoami;
