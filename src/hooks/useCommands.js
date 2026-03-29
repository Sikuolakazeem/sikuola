import { data } from "../data/portfolio";

export const COMMANDS = {
  help: () => ({
    type: "table",
    rows: [
      ["about", "Who I am"],
      ["education", "Schools and qualifications"],
      ["experience", "My years of experience"],
      ["projects", "Things I've built"],
      ["skills", "Tech I work with"],
      ["contact", "Get in touch"],
      ["clear", "Clear the terminal"],
      ["help", "Show this list"],
    ],
  }),

  about: () => ({
    type: "lines",
    lines: [
      { text: data.about.title, style: "label" },
      { text: "" },
      { text: data.about.description, style: "normal" },
      { text: "" },
      { text: `📍 ${data.location}`, style: "muted" },
    ],
  }),

  education: () => ({
    type: "entries",
    items: data.education.map((ed) => ({
      desc: ed.degree,
      title: ed.school,
      period: ed.year,
    })),
  }),

  experience: () => ({
    type: "entries",
    items: data.experience.map((e) => ({
      title: e.role,
      company: e.company,
      period: e.period,
      desc: e.desc,
    })),
  }),

  projects: () => ({
    type: "projects",
    items: data.projects.map((p) => ({
      name: p.name,
      desc: p.desc,
      stack: p.techStack,
      url: p.url,
    })),
  }),

  skills: () => ({
    type: "tags",
    groups: [
      { label: "Frontend", items: data.skills.frontend },
      { label: "Backend", items: data.skills.backend },
      { label: "Tools", items: data.skills.tools },
    ],
  }),

  contact: () => ({
    type: "contact",
    items: [
      { label: "Email", value: data.contact.email },
      { label: "GitHub", value: data.contact.github },
      { label: "LinkedIn", value: data.contact.linkedin },
    ],
  }),
};

console.log(COMMANDS.education.items);
