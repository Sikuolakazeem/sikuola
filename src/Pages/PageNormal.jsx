import Header from "../normal/Header";
import Whoami from "../normal/Whoami";
import About from "../normal/About";
import Education from "../normal/Education";
import Experience from "../normal/Experience";
import Project from "../normal/Project";
import Skill from "../normal/Skill";
import Content from "../normal/Content";
import Footer from "../normal/Footer";

function PageNormal() {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <main className="max-w-[80%] mx-auto md:mt-1 md:flex md:gap-4">
        <div className="md:sticky md:top-1 md:self-start md:w-1/2">
          <Whoami />
        </div>
        <div className="space-y-10 md:mt-14 md:mt-0 md:w-1/2 page-transition  ">
          <About />
          <Education />
          <Experience />
          <Project />
          <Skill />
          <Content />
        </div>
      </main>
      <Footer />
    </div>
  );
}
export default PageNormal;
