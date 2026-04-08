"use client";

import { personalData } from "@/utils/data/personal-data";
import Image from "next/image";
import Link from "next/link";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaFacebook, FaTwitterSquare } from "react-icons/fa";
import { MdDownload } from "react-icons/md";
import { RiContactsFill } from "react-icons/ri";
import { Typewriter } from "react-simple-typewriter";

function HeroSection() {
  return (
    <section className="relative overflow-x-clip flex flex-col items-center justify-between pt-28 pb-8 lg:pt-32 lg:pb-14">
      <Image
        src="/hero.svg"
        alt="Hero"
        width={1572}
        height={795}
        className="pointer-events-none absolute left-1/2 -top-12 -z-10 w-[124%] max-w-none -translate-x-1/2 sm:-top-16 lg:-top-20 lg:w-[118%]"
      />

      <div className="grid grid-cols-1 items-start gap-y-8 lg:grid-cols-2 lg:gap-12">
        <div className="order-2 flex flex-col items-start justify-center p-2 pb-20 md:pb-10 lg:order-1 lg:pt-8">
          <p className="mb-3 text-base font-semibold uppercase tracking-[0.3em] text-cyan-300/90 sm:text-lg">
            Software Engineer
          </p>

          <h1 className="text-[2rem] font-extrabold leading-tight text-white sm:text-[2.5rem] lg:text-[3.25rem] lg:leading-[1.15]">
            Hello, I&apos;m <span className="text-pink-500">{personalData.name}</span>
          </h1>

          <p className="mt-5 text-lg font-semibold text-slate-200 sm:text-xl lg:text-2xl">
            I build as a
            <span className="ml-2 text-[#16f2b3]">
              <Typewriter
                words={[
                  "Full-Stack Developer",
                  "Frontend Specialist",
                  "Backend & API Developer",
                  "Database Design Engineer",
                  "Performance-Focused Problem Solver",
                ]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={80}
                deleteSpeed={45}
                delaySpeed={1600}
              />
            </span>
          </p>

          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 sm:text-base">
            I design and develop modern, scalable web applications with clean UI,
            robust backend architecture, and production-ready performance.
          </p>

          <div className="my-12 flex items-center gap-5">
            <Link
              href={personalData.github}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <BsGithub size={30} />
            </Link>
            <Link
              href={personalData.linkedIn}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <BsLinkedin size={30} />
            </Link>
            <Link
              href={personalData.facebook}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaFacebook size={30} />
            </Link>
            <Link
              href={personalData.twitter}
              target="_blank"
              className="text-pink-500 transition-all duration-300 hover:scale-125"
            >
              <FaTwitterSquare size={30} />
            </Link>
          </div>

          <div className="flex items-center gap-3">
            <Link
              href="#contact"
              className="rounded-full bg-linear-to-r from-violet-600 to-pink-500 p-px transition-all duration-300 hover:from-pink-500 hover:to-violet-600"
            >
              <button className="flex items-center gap-1 rounded-full border-none bg-[#0d1224] px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-[#ffff] no-underline transition-all duration-200 ease-out hover:gap-3 md:px-8 md:py-4 md:text-sm md:font-semibold">
                <span>Contact me</span>
                <RiContactsFill size={16} />
              </button>
            </Link>

            <Link
              className="flex items-center gap-1 rounded-full bg-linear-to-r from-pink-500 to-violet-600 px-3 py-3 text-center text-xs font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:gap-3 hover:no-underline hover:text-white md:px-8 md:py-4 md:text-sm md:font-semibold"
              role="button"
              target="_blank"
              href={personalData.resume}
            >
              <span>Get Resume</span>
              <MdDownload size={16} />
            </Link>
          </div>
        </div>
        <div className="relative order-1 rounded-lg border border-[#1b2c68a0] bg-linear-to-r from-[#0d1224] to-[#0a0d37] lg:order-2">
          <div className="flex flex-row">
            <div className="h-px w-full bg-linear-to-r from-transparent via-pink-500 to-violet-600"></div>
            <div className="h-px w-full bg-linear-to-r from-violet-600 to-transparent"></div>
          </div>
          <div className="px-4 py-5 lg:px-8">
            <div className="flex flex-row space-x-2">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-orange-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-200"></div>
            </div>
          </div>
          <div className="overflow-hidden border-t-2 border-indigo-900 px-4 py-4 lg:px-8 lg:py-8">
            <code className="font-mono text-xs md:text-sm lg:text-base">
              <div className="blink">
                <span className="mr-2 text-pink-500">const</span>
                <span className="mr-2 text-white">coder</span>
                <span className="mr-2 text-pink-500">=</span>
                <span className="text-gray-400">{'{'}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">name:</span>
                <span className="text-gray-400">{`'`}</span>
                <span className="text-amber-300">Piash Islam</span>
                <span className="text-gray-400">{"',"}</span>
              </div>
              <div className="ml-4 mr-2 lg:ml-8">
                <span className=" text-white">skills:</span>
                <span className="text-gray-400">{"['"}</span>
                <span className="text-amber-300">ReactJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NextJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">NodeJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">ExpressJS</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">TypeScript</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">PostgreSQL</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">MongoDB</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Prisma</span>
                <span className="text-gray-400">{"', '"}</span>
                <span className="text-amber-300">Tailwind CSS</span>
                <span className="text-gray-400">{"'],"}</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">hardWorker:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">quickLearner:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-white lg:ml-8">problemSolver:</span>
                <span className="text-orange-400">true</span>
                <span className="text-gray-400">,</span>
              </div>
              <div>
                <span className="ml-4 mr-2 text-green-400 lg:ml-8">hireable:</span>
                <span className="text-orange-400">function</span>
                <span className="text-gray-400">{'() {'}</span>
              </div>
              <div>
                <span className="ml-8 mr-2 text-orange-400 lg:ml-16">return</span>
                <span className="text-gray-400">{'('}</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                <span className="mr-2 text-white">hardWorker</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                <span className="mr-2 text-white">problemSolver</span>
                <span className="text-amber-300">&amp;&amp;</span>
              </div>
              <div>
                <span className="ml-12 text-cyan-400 lg:ml-24">this.</span>
                <span className="mr-2 text-white">skills.length</span>
                <span className="mr-2 text-amber-300">&gt;=</span>
                <span className="text-orange-400">5</span>
              </div>
              <div><span className="ml-8 mr-2 text-gray-400">{`);`}</span></div>
              <div><span className="ml-4 text-gray-400">{`};`}</span></div>
              <div><span className="text-gray-400">{`};`}</span></div>
            </code>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;