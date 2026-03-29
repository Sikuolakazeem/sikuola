import { TypeAnimation } from "react-type-animation";

export default function AnimatedText() {
  return (
    <TypeAnimation
      sequence={["Software Engineer", 2000, "FullStack Developer", 2000]}
         speed={50}
      repeat={Infinity}
      className="text-text-dark uppercase lg:text[3rem] tracking-wider"
    />
  );
}
