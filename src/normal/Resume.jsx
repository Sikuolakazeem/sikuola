import { HiOutlineArrowRightCircle } from "react-icons/hi2";
import { Link } from "react-router-dom";

function Resume() {
  return (
    <Link
      to="/resume"
      target="_blank"
      className="flex items-center gap-3 text-[1.3rem] font-bold text-text-faint"
    >
      View Full Resume
      <span>
        <HiOutlineArrowRightCircle className="w-19 h-16 text-completed-bg  duration-700 transition-colors" />
      </span>
    </Link>
  );
}

export default Resume;
