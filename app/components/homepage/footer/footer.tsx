import Link from "next/link";

function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#353951] bg-[#0d1224] text-white">
      <div className="mx-auto w-full max-w-screen-2xl px-4 py-6 sm:px-6 lg:px-8 lg:py-10">
        <div className="pointer-events-none absolute left-1/2 top-0 flex w-full -translate-x-1/2 justify-center overflow-hidden">
          <div className="h-px w-1/2 bg-linear-to-r from-transparent via-violet-500 to-transparent" />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-slate-300 sm:text-base md:text-left">
            © Developer Portfolio by{" "}
            <Link
              target="_blank"
              href="https://www.linkedin.com/in/piash-islam-2k/"
              className="font-semibold transition-colors duration-300 hover:text-pink-400 sm:text-lg"
              style={{ color: "#16f2b3" }}
            >
              Piash Islam
            </Link>
          </p>

          <p className="text-center text-xs uppercase tracking-[0.2em] text-slate-400 md:text-left md:tracking-[0.3em]">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
