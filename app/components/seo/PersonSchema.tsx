export default function PersonSchema() {
  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": "https://piash-islam.vercel.app/#person",
    name: "Piash Islam",
    jobTitle: "Software Engineer",
    description:
      "Piash Islam is a Software Engineer and Web Developer specializing in React, Next.js, TypeScript, Node.js, and modern web development.",
    url: "https://piash-islam.vercel.app/",
    sameAs: [
      "https://www.linkedin.com/in/piash-islam-2k/",
      "https://github.com/Piash2K",
    ],
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