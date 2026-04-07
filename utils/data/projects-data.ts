import blogWebsite1 from "@/app/assets/project-image/BlogWebsite1 (1).png";
import chillGamer1 from "@/app/assets/project-image/ChillGamer1.png";
import estateEase1 from "@/app/assets/project-image/EstateEase1.png";
import mediStore1 from "@/app/assets/project-image/MediStore1.png";

export type ProjectItem = {
	slug: string;
	name: string;
	overview: string;
	description: string;
	technologies: string[];
	features: string[];
	image: string | { src: string };
	repositoryUrl: string;
	liveUrl: string;
};

export const projectsData: ProjectItem[] = [
	{
		slug: "medistore",
		name: "MediStore",
		overview:
			"A full-stack multi-role e-commerce platform for purchasing Over-The-Counter (OTC) medicines online.",
		description:
			"MediStore is a full-stack multi-role e-commerce platform for purchasing Over-The-Counter (OTC) medicines online. It is built with secure authentication, role-based authorization, and a scalable relational database architecture using PostgreSQL.",
		technologies: [
			"Next.js",
			"Node.js",
			"Express.js",
			"PostgreSQL",
			"Prisma",
			"Shadcn UI",
			"Tailwind CSS",
			"SSLCommerz",
		],
		features: [
			"Secure authentication and authorization",
			"Multi-role user experience",
			"Medicine listing and order management",
			"Scalable PostgreSQL data model",
		],
		image: mediStore1,
		repositoryUrl: "https://github.com/Piash2K",
		liveUrl: "#",
	},
	{
		slug: "estateease",
		name: "EstateEase",
		overview:
			"A modern web-based Building Management System for apartment rentals, tenant/member operations, and payments.",
		description:
			"EstateEase is a modern, web-based Building Management System designed to streamline apartment rentals, tenant/member management, payment handling, and administrative control. With secure authentication, role-based dashboards, and Stripe-powered payments, it brings efficiency and ease to property management.",
		technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe", "Tailwind CSS", "DaisyUI"],
		features: [
			"Role-based dashboards",
			"Tenant and member management",
			"Stripe-powered rent and fee payment",
			"Administrative controls and reports",
		],
		image: estateEase1,
		repositoryUrl: "https://github.com/Piash2K",
		liveUrl: "#",
	},
	{
		slug: "blog-website",
		name: "Blog Website",
		overview:
			"A dynamic platform where users can create, explore, and manage blogs with interactive community features.",
		description:
			"Blog Website Client is a dynamic and interactive platform where users can create, explore, and manage blogs effortlessly. The platform supports commenting, wishlist management, and authentication, ensuring an engaging experience for bloggers and readers alike.",
		technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "DaisyUI"],
		features: [
			"Create, edit, and manage blog posts",
			"Commenting for reader interaction",
			"Wishlist management",
			"Authentication and user accounts",
		],
		image: blogWebsite1,
		repositoryUrl: "https://github.com/Piash2K",
		liveUrl: "#",
	},
	{
		slug: "chill-gamer",
		name: "chill gamer",
		overview:
			"An interactive project experience focused on content exploration and user engagement.",
		description:
			"Blog Website Client is a dynamic and interactive platform where users can create, explore, and manage blogs effortlessly. The platform supports commenting, wishlist management, and authentication, ensuring an engaging experience for bloggers and readers alike.",
		technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Tailwind CSS", "DaisyUI"],
		features: [
			"Interactive user experience",
			"Content exploration flow",
			"Authentication support",
			"Responsive interface design",
		],
		image: chillGamer1,
		repositoryUrl: "https://github.com/Piash2K",
		liveUrl: "#",
	},
];

export function findProjectBySlug(slug: string): ProjectItem | undefined {
	return projectsData.find((project) => project.slug === slug);
}