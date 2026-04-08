import { experiences } from "@/utils/data/experience";
import Image from "next/image";
import { BsPersonWorkspace } from "react-icons/bs";
import { FiExternalLink } from "react-icons/fi";
import experience from "../../../assets/lottie/code.json";
import AnimationLottie from "../../helper/animation-lottie";
import GlowCard from "../../helper/glow-card";

function Experience() {
  return (
    <div id="experience" className="relative z-50 my-12 scroll-mt-18 border-t border-[#25213b] lg:my-24">
      <Image
        src="/section.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="absolute top-0 -z-10"
      />

      <div className="my-5 flex justify-center lg:py-8">
        <div className="flex items-center">
          <span className="h-0.5 w-24 bg-[#1a1443]"></span>
          <span className="w-fit rounded-md bg-[#1a1443] p-2 px-5 text-xl text-white">
            Experiences
          </span>
          <span className="h-0.5 w-24 bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="py-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
          <div className="flex items-start justify-center">
            <div className="h-full w-full">
              <AnimationLottie animationPath={experience} />
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-6">
              {experiences.map((item) => (
                <GlowCard key={item.id} identifier={`experience-${item.id}`}>
                  <div className="relative p-3">
                    <Image
                      src="/blur-23.svg"
                      alt="Hero"
                      width={1080}
                      height={200}
                      className="pointer-events-none absolute bottom-0 opacity-80"
                    />
                    <div className="flex justify-center">
                      <p className="text-xs text-[#16f2b3] sm:text-sm">{item.duration}</p>
                    </div>
                    <div className="flex items-center gap-x-8 px-3 py-5">
                      <div className="text-violet-500 transition-all duration-300 hover:scale-125">
                        <BsPersonWorkspace size={36} />
                      </div>
                      <div>
                        <p className="mb-2 text-base font-medium uppercase sm:text-xl">
                          {item.title}
                        </p>
                        <p className="text-sm sm:text-base">{item.organization}</p>
                        <p className="mt-1 text-xs uppercase tracking-wide text-slate-300 sm:text-sm">
                          {item.projectType}
                        </p>
                        <a
                          href={item.liveLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="relative z-10 mt-3 inline-flex items-center gap-2 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-4 py-1.5 text-xs font-semibold text-white transition-all duration-300 hover:scale-105 hover:from-violet-600 hover:to-pink-500 sm:text-sm"
                        >
                          Live Link
                          <FiExternalLink size={14} />
                        </a>
                      </div>
                    </div>
                  </div>
                </GlowCard>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
