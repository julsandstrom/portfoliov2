export type Project = {
  title: string;
  image: string;
  overlayTitle: string;
  overlayBody: string;
  url: string;

  tags: string[];
};

export const projects: Project[] = [
  {
    title: "Cartlag",
    image: "/images/cartlag-page.png",
    overlayTitle: "A body measurement app",
    overlayBody:
      "Generate a personal size card you can download, update, and reuse across brands for accurate fit.",
    url: "/cartlag",

    tags: ["React"],
  },
  {
    title: "Puppeteer Me",
    image: "/images/puppeteerme-page.png",
    overlayTitle: "A quiz about someone you know",
    overlayBody:
      "A quiz about someone you know in a minimalist yet carnival-inspired quiz on perception and identity.",
    url: "/puppeteerme",

    tags: ["React"],
  },
  {
    title: "Perfect Parry",
    image: "/images/perfect-parry-desktop.png",
    overlayTitle: "A timing-based combat game",
    overlayBody:
      "A turn-based combat game built in Next.js, without any game libraries.",
    url: "/perfectparry",

    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Driftus",
    image: "/images/driftus-page.png",
    overlayTitle: "A chat app",
    overlayBody:
      "A chat app showing only the latest message, with AI stepping in when words run out.",
    url: "/driftus",

    tags: ["React", "TypeScript"],
  },
  {
    title: "Mekoja",
    image: "/images/mekoja-page.png",
    overlayTitle: "A digital reflection platform",
    overlayBody:
      "Choose three values, place them in balance, and reflect on what grounds you versus what drives you forward.",
    url: "/mekoja",

    tags: ["React"],
  },
  {
    title: "Auralize",
    image: "/images/auralize.png",
    overlayTitle: "Web accessibility tool",
    overlayBody:
      "Paste HTML/JSX and preview screen reader output + accessible name computation + warnings.",
    url: "/auralize",

    tags: ["Next.js", "React", "TypeScript"],
  },
  {
    title: "Return Cascade",
    image: "/images/returncascade-page.png",
    overlayTitle: "A juggling-inspired FPS in the snow",
    overlayBody:
      "A juggling-inspired FPS set in the snow, where you push enemies and solve puzzles.",
    url: "/returncascade",

    tags: ["C#"],
  },
];
