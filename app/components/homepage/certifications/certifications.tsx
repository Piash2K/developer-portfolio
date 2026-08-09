import { certificatesData } from "@/utils/data/certificates-data";
import Image from "next/image";
import { FiExternalLink } from "react-icons/fi";
import GlowCard from "../../helper/glow-card";

function CertificationsSection() {
	return (
		<div id="certifications" className="relative z-50 my-10 scroll-mt-18 border-t border-[#25213b] lg:my-16">
			<Image
				src="/section.svg"
				alt="Hero"
				width={1572}
				height={795}
				className="absolute top-0 -z-10"
			/>
			<div className="flex -translate-y-px justify-center">
				<div className="w-3/4">
					<div className="h-px w-full bg-linear-to-r from-transparent via-violet-500 to-transparent" />
				</div>
			</div>

			<div className="my-5 flex justify-center lg:py-8">
				<div className="flex items-center">
					<span className="h-0.5 w-24 bg-[#1a1443]" />
					<span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">Certifications</span>
					<span className="h-0.5 w-24 bg-[#1a1443]" />
				</div>
			</div>

			<div className="py-6">
				<div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:gap-10">
					{certificatesData.map((certificate) => (
						<GlowCard key={certificate.id} identifier={`certificate-${certificate.id}`}>
							<div className="relative p-3 text-white sm:p-5">
								<Image
									src="/blur-23.svg"
									alt="Hero"
									width={1080}
									height={200}
									className="pointer-events-none absolute bottom-0 opacity-80"
								/>
								<div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-[#25213b] bg-[#0f1624]">
									<Image
										src={certificate.image}
										alt={certificate.title}
										fill
										className="object-fit transition-transform duration-500 hover:scale-105"
									/>
								</div>
								<div className="mt-4 flex items-center justify-between gap-2 px-1">
									<div>
										<h3 className="text-base font-semibold text-white sm:text-xl">{certificate.title}</h3>
										<p className="text-xs text-[#16f2b3] sm:text-sm">{certificate.institution}</p>
									</div>
									<a
										href={certificate.link}
										target="_blank"
										rel="noopener noreferrer"
										className="relative z-10 flex shrink-0 items-center gap-1.5 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-3.5 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-violet-600 hover:to-pink-500 sm:text-sm"
									>
										Verify
										<FiExternalLink size={14} />
									</a>
								</div>
							</div>
						</GlowCard>
					))}
				</div>
			</div>
		</div>
	);
}

export default CertificationsSection;
