import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { Link } from "react-router-dom";

const socials = [
  {
    name: "GitHub",
    icon: <FaGithub />,
    link: "https://github.com/Sikuolakazeem",
  },
  {
    name: "Email",
    icon: <MdEmail />,
    link: "mailto:sikuola16@gmail.com",
  },
  {
    name: "LinkedIn",
    icon: <FaLinkedin />,
    link: "https://linkedin.com/in/sikuola-kazeem",
  },
];

export default function SocialLinks() {
  return (
    <div className="flex items-center justify-center gap-6 py-10">
      {socials.map((social) => (
        <Link
          key={social.name}
          to={social.link}
          target="_blank"
          rel="noreferrer"
          className={`group relative flex h-11 w-11 items-center justify-center rounded-full  bg-bg-dark text-2xl text-text-dark shadow-md transition-all duration-300 hover:-translate-y-1 hover:text-text-faint  border border-text-faint cursor-pointer`}
        >
          {social.icon}

          <span className="pointer-events-none absolute -top-10 scale-0 rounded-md bg-text-dark px-3 py-1 text-sm text-bg-dark transition-all duration-300 group-hover:scale-100  tracking-wide">
            {social.name}
          </span>
        </Link>
      ))}
    </div>
  );
}
