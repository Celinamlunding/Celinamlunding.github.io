const projects = [
  {
    slug: "posters",
    title: "Posters",
    year: "2026",
    summary: "Posters der er lavet til begivenheder eller som hygge projekter.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
    tags: ["Adobe Photoshop", "Adobe Lightroom"],
    image: `${import.meta.env.BASE_URL}billeder/marvel.png`,

    links: [
      {
        label: "Live site",
        href: "https://username.github.io",
      },
      {
        label: "GitHub repo",
        href: "https://github.com/username/username.github.io",
      },
    ],
  },
  {
    slug: "ctrl",
    title: "CTRL - Case Study",
    year: "2026",
    summary: "En fiktiv tøjretailer der er udviklet igennem et Case study.",
    description:
      "Ctrl er et fiktivt brand jeg kreerede som en del af et case study. Jeg arbejdede her med brugerreasearch for at forstå vores målgruppe, er derved finde frem til deres brandidentitet, samt hvordan man kunne markedsføre brandet på sociale medier, her Instagram. Jeg arbejdede i både Figma og forskellige Adobe programmer, for at komme frem til resulatet",
    tags: ["User Research", "Figma", "Brand Design/Visual Identity"],
    image: `${import.meta.env.BASE_URL}billeder/ctrl.logo.svg`,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },

  {
    slug: "2Gather",
    title: "2Gather - Case Study",
    year: "2026",
    summary: "En fiktionel app der er udviklet igennem et Case study.",
    description:
      "YATA er et fiktivt brand, hvor jeg udviklede identitet og layout til sociale medier. Projektet fokuserer på visuel storytelling, simple ikoner og et sammenhængende farveunivers.",
    tags: ["Brand Design", "Illustration", "Social Media"],
    image: `${import.meta.env.BASE_URL}billeder/LOGO.svg`,
    links: [
      {
        label: "Se projekt",
        href: "https://github.com",
      },
    ],
  },
];

export default projects;
