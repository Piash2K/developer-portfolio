"use client";

import { useRouter } from "next/navigation";

type ProjectBreadcrumbProps = {
	label: string;
};

function ProjectBreadcrumb({ label }: ProjectBreadcrumbProps) {
	const router = useRouter();

	const handleBackToProjects = () => {
		router.back();
	};

	return (
		<div className="mb-4 flex w-full min-w-0 flex-wrap items-center gap-2 text-sm text-slate-300 lg:mb-5">
			<button
				type="button"
				onClick={handleBackToProjects}
				className="inline-flex shrink-0 items-center gap-2 rounded-md border border-[#2d2b55] bg-[#11152c]/70 px-3 py-1.5 transition-colors hover:border-[#16f2b3] hover:text-[#16f2b3]"
			>
				<span aria-hidden="true">&larr;</span>
				Projects
			</button>
			<span className="shrink-0 text-slate-500">/</span>
			<span className="min-w-0 rounded-md border border-[#2d2b55] bg-[#0f1328]/70 px-3 py-1.5 text-[#16f2b3] wrap-break-word">
				{label}
			</span>
		</div>
	);
}

export default ProjectBreadcrumb;