export default function PersonSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@graph": [
      {
        "@type": "Person",
        "@id": "https://piash-islam.vercel.app/#person",

        name: "Piash Islam",

        alternateName: [
          "Piash Islam 2K",
          "Piash2K",
          "PiashIslam2K",
        ],

        givenName: "Piash",
        familyName: "Islam",
        identifier: "PiashIslam2K",

        url: "https://piash-islam.vercel.app/",
        image: "https://piash-islam.vercel.app/profile.png",

        mainEntityOfPage: {
          "@id": "https://piash-islam.vercel.app/#profile",
        },

        jobTitle: "Full Stack Web Developer",

        worksFor: {
          "@type": "Organization",
          name: "Codex IT Service Ltd.",
        },

        description:
          "Piash Islam is a Full Stack Web Developer and Software Engineer specializing in React, Next.js, TypeScript, Node.js, API development, database design, and modern web applications.",

        knowsAbout: [
          "React.js",
          "Next.js",
          "TypeScript",
          "JavaScript",
          "Node.js",
          "Express.js",
          "PostgreSQL",
          "MongoDB",
          "Prisma",
          "Tailwind CSS",
          "REST API",
          "API Development",
          "Database Design",
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

        alternateName: [
          "Piash Islam Portfolio",
          "Piash Islam Official Portfolio",
        ],

        inLanguage: "en-US",

        description:
          "Official website of Piash Islam, a Full Stack Web Developer and Software Engineer.",

        about: {
          "@id": "https://piash-islam.vercel.app/#person",
        },

        mainEntity: {
          "@id": "https://piash-islam.vercel.app/#person",
        },

        publisher: {
          "@id": "https://piash-islam.vercel.app/#person",
        },
      },

      {
        "@type": "ProfilePage",
        "@id": "https://piash-islam.vercel.app/#profile",

        url: "https://piash-islam.vercel.app/",

        name: "Piash Islam",

        headline: "Piash Islam - Full Stack Web Developer",

        description:
          "Official profile and portfolio website of Piash Islam, a Full Stack Web Developer and Software Engineer.",

        inLanguage: "en-US",

        about: {
          "@id": "https://piash-islam.vercel.app/#person",
        },

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