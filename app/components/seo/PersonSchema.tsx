export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": ["Person", "WebSite"],
    "@id": "https://piash-islam.vercel.app/#person",
    name: "Piash Islam",
    url: "https://piash-islam.vercel.app/",
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
    ],
    sameAs: [
      "https://www.linkedin.com/in/piash-islam-2k/",
      "https://github.com/Piash2K",
      "https://x.com/PiashIslam2K",
      "https://www.facebook.com/piash.islam.2000/",
    ],
    mainEntityOfPage: "https://piash-islam.vercel.app/",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(personSchema),
      }}
    />
  );
}