import { findProjectBySlug, projectsData } from "@/utils/data/projects-data";
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
		<div className="relative min-h-screen px-4 pb-12 pt-28 sm:px-6 lg:px-8">
			<div className="mx-auto w-full max-w-5xl">
				<ProjectBreadcrumb label={project.name} />

				<div className="rounded-2xl border border-[#1b2c68a0] bg-linear-to-r from-[#0d1224] to-[#0a0d37] p-4 lg:p-8">
					<div className="grid gap-6 lg:grid-cols-2 lg:gap-10">
						<div>
							<Image
								src={project.image}
								alt={project.name}
								width={1000}
								height={700}
								className="h-64 w-full rounded-xl border border-[#25213b] object-cover lg:h-88"
							/>
						</div>

						<div>
							<h1 className="text-2xl font-bold text-white lg:text-3xl">{project.name}</h1>
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
										<span>{feature}</span>
									</li>
								))}
							</ul>

							<div className="mt-8 flex flex-wrap items-center gap-3">
								<Link
									href={project.liveUrl}
									target="_blank"
									className="inline-flex rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-5 py-2 text-sm font-medium text-white transition-all hover:from-violet-600 hover:to-pink-500"
								>
									Live preview
								</Link>
								<Link
									href={project.repositoryUrl}
									target="_blank"
									className="inline-flex rounded-full border border-[#2d2b55] px-5 py-2 text-sm font-medium text-slate-100 transition-colors hover:border-[#16f2b3] hover:text-[#16f2b3]"
								>
									Source code
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}