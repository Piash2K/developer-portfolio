export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://piash-islam.vercel.app/#person",
        name: "Piash Islam",
        url: "https://piash-islam.vercel.app/",
        image: "https://piash-islam.vercel.app/profile.png",
        jobTitle: "Full Stack Web Developer",
        description:
          "Piash Islam is a Full Stack Web Developer and Software Engineer specializing in React, Next.js, TypeScript, Node.js, database design, and modern web applications.",
        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "MongoDB",
          "Prisma",
          "Tailwind CSS",
          "Full Stack Web Development",
          "Software Engineering",
          "Web Development",
        ],
        sameAs: [
          "https://www.linkedin.com/in/piash-islam-2k/",
          "https://github.com/Piash2K",
          "https://x.com/PiashIslam2K",
          "https://www.facebook.com/piash.islam.2000/",
        ],
      },

      {
        "@type": "WebSite",
        "@id": "https://piash-islam.vercel.app/#website",
        url: "https://piash-islam.vercel.app/",
        name: "Piash Islam",
        alternateName: "Piash Islam Portfolio",
        description:
          "Official portfolio website of Piash Islam, a Full Stack Web Developer and Software Engineer.",
        publisher: {
          "@id": "https://piash-islam.vercel.app/#person",
        },
      },

      {
        "@type": "ProfilePage",
        "@id": "https://piash-islam.vercel.app/#profile",
        url: "https://piash-islam.vercel.app/",
        name: "Piash Islam",
        isPartOf: {
          "@id": "https://piash-islam.vercel.app/#website",
        },
        mainEntity: {
          "@id": "https://piash-islam.vercel.app/#person",
        },
      },
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}