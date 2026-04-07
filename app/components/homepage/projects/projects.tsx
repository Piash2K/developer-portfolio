import { projectsData } from "@/utils/data/projects-data";
import ProjectCard from "./project-card";

function ProjectsSection() {
	return (
		<section id="projects" className="relative z-10 my-12 scroll-mt-32 lg:my-24">
			<div className="sticky top-10 z-10">
				<div className="absolute -top-3 left-0 h-20 w-20 translate-x-1/2 rounded-full bg-violet-100 opacity-30 blur-3xl" />
				<div className="relative flex items-center justify-start">
					<span className="absolute left-0 w-fit rounded-md bg-[#1a1443] px-5 py-3 text-xl text-white">PROJECTS</span>
					<span className="h-0.5 w-full bg-[#1a1443]" />
				</div>
			</div>

			<div className="pt-24">
				<div className="flex flex-col gap-6">
					{projectsData.slice(0, 4).map((project, index) => (
						<div
							id={`sticky-card-${index + 1}`}
							key={project.slug}
							className="sticky mx-auto w-full max-w-4xl"
							style={{ top: `${88 + index * 24}px` }}
						>
							<div className="box-border rounded-xl shadow-2xl transition-all duration-500">
								<ProjectCard project={project} />
							</div>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}

export default ProjectsSection;