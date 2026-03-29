import { FaPhone, FaWhatsapp } from "react-icons/fa";
import { HiOutlineArrowDown } from "react-icons/hi";

function Content() {
  return (
    <section className="space-y-5 mb-5">
      <p className="flex items-center gap-2">
        Always open for collaboration and business opportunities want to know
        more, contact me directly on call or Whatsapp now.
      </p>

      <span>
        <HiOutlineArrowDown className="w-5 h-5 animate-bounce text-completed-bg" />
      </span>

      <div className="text-text-faint flex flex-col gap-3 mt-10">
        <div className="flex items-center gap-3">
          <FaWhatsapp className="w-10 h-10  p-1 bg-completed-text rounded-full text-bg-dark" />
          <p className=" text-[1rem]">+234 - 070 - 5837 - 2171</p>
        </div>
        <div className="flex items-center gap-3">
          <FaPhone className="w-10 h-10  p-1  bg-completed-text rounded-full text-bg-dark" />
          <p className="text-[1rem]">+234 - 070 - 7018 - 2497</p>
        </div>
      </div>
    </section>
  );
}

export default Content;
