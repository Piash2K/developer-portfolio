import Link from "next/link";

function Footer() {
  return (
    <footer className="relative border-t border-[#353951] bg-[#0d1224] text-white">
      <div className="mx-auto max-w-368 px-6 py-6 sm:px-12 lg:max-w-280 lg:py-10 xl:max-w-304">
        <div className="flex justify-center -z-40">
          <div className="absolute top-0 h-px w-1/2 bg-linear-to-r from-transparent via-violet-500 to-transparent" />
        </div>

        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-slate-300 sm:text-base">
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

          <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
