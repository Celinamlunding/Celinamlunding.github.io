const projects = [
  {
    slug: "portfolio",
    title: "MARVEL- Civil War Poster",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
    description:
      "Portfolioen viser udvalgte projekter og fungerer som et udgangspunkt for at arbejde med komponenter, routing, styling og deployment.",
    tags: ["Adobe Photoshop", "Adobe Lightroom"],
    image: `${import.meta.env.BASE_URL}billeder/poster.svg`,
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
    slug: "case-study",
    title: "CTRL - Case Study",
    year: "2026",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
    description:
      "Beskriv problemet, processen, din rolle, de vigtigste valg og hvad du lærte. Gør projektet konkret, så andre kan forstå dit arbejde.",
    tags: ["User Research", "Figma", "Brand Design/Visual Identity"],
    image: `${import.meta.env.BASE_URL}billeder/ctrl.logo.svg`,
    links: [
      {
        label: "Eksempel-link",
        href: "https://github.com",
      },
    ],
  },
];

export default projects;
