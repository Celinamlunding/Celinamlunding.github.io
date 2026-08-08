const projects = [
  {
    slug: "portfolio",
    title: "MARVEL - Poster",
    year: "2026",
    summary: "En personlig portfolio bygget med React, Vite og GitHub Pages.",
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
    slug: "case-study",
    title: "CTRL - Case Study",
    year: "2026",
    summary:
      "Et projektkort, som du kan kopiere og ændre til dit eget projekt.",
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
];

export default projects;
