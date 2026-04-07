import type { ProjectItem } from "@/utils/data/projects-data";
import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
	project: ProjectItem;
};

function ProjectCard({ project }: ProjectCardProps) {
	return (
		<div className="relative w-full rounded-xl border border-[#1b2c68a0] bg-linear-to-r from-[#0d1224] to-[#0a0d37]">
			<div className="flex flex-row">
				<div className="h-px w-full bg-linear-to-r from-transparent via-pink-500 to-violet-600" />
				<div className="h-px w-full bg-linear-to-r from-violet-600 to-transparent" />
			</div>

			<div className="relative px-4 py-4 lg:px-8 lg:py-5">
				<div className="absolute top-1/2 flex -translate-y-1/2 flex-row space-x-2">
					<div className="h-2 w-2 rounded-full bg-red-400 lg:h-3 lg:w-3" />
					<div className="h-2 w-2 rounded-full bg-orange-400 lg:h-3 lg:w-3" />
					<div className="h-2 w-2 rounded-full bg-green-200 lg:h-3 lg:w-3" />
				</div>
				<p className="ml-3 text-center text-base text-[#16f2b3] lg:text-xl">{project.name}</p>
			</div>

			<div className="grid gap-6 border-t-2 border-indigo-900 px-4 py-4 lg:grid-cols-5 lg:px-8 lg:py-8">
				<div className="lg:col-span-2">
					<Image
						src={project.image}
						alt={project.name}
						width={900}
						height={600}
						className="h-44 w-full rounded-lg border border-[#25213b] object-cover"
					/>
				</div>

				<div className="lg:col-span-3">
					<p className="text-sm leading-7 text-slate-300 lg:text-base">{project.overview}</p>
					<div className="mt-4 flex flex-wrap gap-2">
						{project.technologies.map((tech) => (
							<span key={tech} className="rounded-full border border-[#2d2b55] px-3 py-1 text-xs text-[#16f2b3] sm:text-sm">
								{tech}
							</span>
						))}
					</div>
					<div className="mt-6">
						<Link
							href={`/projects/${project.slug}`}
							className="inline-flex rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-5 py-2 text-sm font-medium text-white transition-all duration-300 hover:from-violet-600 hover:to-pink-500"
						>
							View details
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ProjectCard;