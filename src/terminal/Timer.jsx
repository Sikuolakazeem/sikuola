import { TypeAnimation } from "react-type-animation";

export function Timer() {
  // write a code that greet the user based on the current season of the day when the app
  function greeting() {
    const hour = new Date().getHours();
    if (hour < 12) return "Hey, Good morning";
    if (hour < 17) return "Hey, Good afternoon";
    return "Hey, Good evening";
  }

  return (
    <TypeAnimation
      sequence={[`${greeting()}`, 4000, "Terminal based portfolio app"]}
      speed={50}
      repeat={Infinity}
    />
  );
}
