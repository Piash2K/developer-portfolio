import { findProjectBySlug, projectsData } from "@/utils/data/projects-data";
import ProjectImageSlider from "@/app/components/projects/project-image-slider";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import ProjectBreadcrumb from "./project-breadcrumb";

type ProjectDetailsPageProps = {
	params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
	return projectsData.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailsPage({ params }: ProjectDetailsPageProps) {
	const { slug } = await params;
	const project = findProjectBySlug(slug);

	if (!project) {
		notFound();
	}

	return (
		<div className="relative min-h-screen overflow-x-hidden px-4 pb-12 pt-16 sm:px-6 lg:px-8 lg:pt-20">
			<Image
				src="/hero.svg"
				alt="Hero"
				width={1572}
				height={795}
				className="pointer-events-none absolute left-1/2 top-0 -z-10 w-[124%] max-w-none -translate-x-1/2 sm:-top-8 lg:-top-12 lg:w-[118%]"
			/>
			<div className="mx-auto w-full max-w-screen-2xl">
				<ProjectBreadcrumb label={project.name} />

				<div className="px-0 py-4 sm:p-4 lg:p-8">
					<div className="grid gap-6 lg:grid-cols-5 lg:gap-10">
						<div className="min-w-0 lg:col-span-3">
							<ProjectImageSlider slug={project.slug} projectName={project.name} fallbackImage={project.image} />
						</div>

						<div className="min-w-0 lg:col-span-2">
							<h1 className="wrap-break-word text-2xl font-bold text-white lg:text-3xl">{project.name}</h1>
							<p className="mt-4 text-sm leading-7 text-slate-300 lg:text-base">{project.description}</p>

							<h2 className="mt-6 text-lg font-semibold text-[#16f2b3]">Technologies used</h2>
							<div className="mt-3 flex flex-wrap gap-2">
								{project.technologies.map((tech) => (
									<span key={tech} className="rounded-full border border-[#2d2b55] px-3 py-1 text-xs text-slate-200 sm:text-sm">
										{tech}
									</span>
								))}
							</div>

							<h2 className="mt-6 text-lg font-semibold text-[#16f2b3]">Feature highlights</h2>
							<ul className="mt-3 space-y-2 text-sm text-slate-200 lg:text-base">
								{project.features.map((feature) => (
									<li key={feature} className="flex items-start gap-3">
										<span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#16f2b3]" />
										<span className="wrap-break-word">{feature}</span>
									</li>
								))}
							</ul>

							<div className="mt-8 flex flex-wrap items-center gap-3">
								<Link
									href={project.liveUrl}
									target="_blank"
										className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-5 py-2 text-sm font-medium text-white transition-all hover:from-violet-600 hover:to-pink-500 sm:w-auto"
									>
										🚀 Live preview
									</Link>
									<Link
										href={project.frontendRepositoryUrl}
										target="_blank"
										className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#16f2b3]/40 bg-[#0f1624] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(22,242,179,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#16f2b3] hover:bg-[#111b2b] hover:text-[#16f2b3] hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:w-auto"
									>
										💻 Frontend
									</Link>
									<Link
										href={project.backendRepositoryUrl}
										target="_blank"
										className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#16f2b3]/40 bg-[#0f1624] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_0_0_1px_rgba(22,242,179,0.12)] transition-all hover:-translate-y-0.5 hover:border-[#16f2b3] hover:bg-[#111b2b] hover:text-[#16f2b3] hover:shadow-[0_10px_24px_rgba(0,0,0,0.35)] sm:w-auto"
									>
										⚙️ Backend
									</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}