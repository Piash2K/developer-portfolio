import cssIcon from "@/app/assets/svg/skills/css.svg";
import figmaIcon from "@/app/assets/svg/skills/figma.svg";
import firebaseIcon from "@/app/assets/svg/skills/firebase.svg";
import gitIcon from "@/app/assets/svg/skills/git.svg";
import goIcon from "@/app/assets/svg/skills/go.svg";
import htmlIcon from "@/app/assets/svg/skills/html.svg";
import jsIcon from "@/app/assets/svg/skills/javascript.svg";
import mongodbIcon from "@/app/assets/svg/skills/mongoDB.svg";
import nextIcon from "@/app/assets/svg/skills/nextJS.svg";
import nodejsIcon from "@/app/assets/svg/skills/nodejs.webp";
import postgresqlIcon from "@/app/assets/svg/skills/postgresql.svg";
import reactIcon from "@/app/assets/svg/skills/react.svg";
import shadcnIcon from "@/app/assets/svg/skills/shadcn.png";
import tailwindIcon from "@/app/assets/svg/skills/tailwind.svg";
import tsIcon from "@/app/assets/svg/skills/typescript.svg";
import expressIcon from "@/app/assets/svg/skills/express-js.svg";
import placeholderIcon from "@/public/png/placeholder.png";

type SkillImage = {
	src: string;
};

const fallbackImage = placeholderIcon.src;

const skillImageMap: Record<string, SkillImage> = {
	HTML: { src: htmlIcon.src },
	CSS: { src: cssIcon.src },
	Javascript: { src: jsIcon.src },
	Typescript: { src: tsIcon.src },
	React: { src: reactIcon.src },
	"Next JS": { src: nextIcon.src },
	"Node JS": { src: nodejsIcon.src },
	"Express JS": { src: expressIcon.src },
	Tailwind: { src: tailwindIcon.src },
	"Shadcn UI": { src: shadcnIcon.src },
	MongoDB: { src: mongodbIcon.src },
	PostgreSQL: { src: postgresqlIcon.src },
	Git: { src: gitIcon.src },
	Go: { src: goIcon.src },
	Figma: { src: figmaIcon.src },
	Firebase: { src: firebaseIcon.src },
};

export function skillsImage(skill: string): SkillImage {
	return skillImageMap[skill] ?? { src: fallbackImage };
}