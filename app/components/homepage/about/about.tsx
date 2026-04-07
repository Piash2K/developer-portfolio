import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";

function AboutSection() {
	return (
		<section id="about" className="relative my-12 lg:my-16">
			<div className="absolute -right-8 top-16 hidden flex-col items-center lg:flex">
				<span className="w-fit rotate-90 rounded-md bg-[#1a1443] px-5 py-2 text-xl text-white">
					ABOUT ME
				</span>
				<span className="h-36 w-0.5 bg-[#1a1443]"></span>
			</div>

			<div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
				<div className="order-2 lg:order-1">
					<p className="mb-5 text-xl font-medium uppercase text-[#16f2b3]">Who I am?</p>
					<p className="text-sm text-gray-200 lg:text-lg">{personalData.description}</p>
				</div>

				<div className="order-1 flex justify-center lg:order-2">
					<Image
						src={personalData.profile}
						width={280}
						height={280}
						alt={personalData.name}
						className="cursor-pointer rounded-lg grayscale transition-all duration-700 hover:scale-105 hover:grayscale-0"
					/>
				</div>
			</div>
		</section>
	);
}

export default AboutSection;
