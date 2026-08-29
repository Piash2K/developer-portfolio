import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Piash Islam Portfolio",
    short_name: "Piash Islam",
    description:
      "Official portfolio website of Piash Islam, Full Stack Web Developer and Software Engineer.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#0d1224",
    theme_color: "#16f2b3",
    icons: [
      {
        src: "/Favicon.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
