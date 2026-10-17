import { HiChevronRight } from "react-icons/hi2";
import type { LinkItem } from "@/lib/data";

export default function LinkCard({ link, index }: { link: LinkItem; index: number }) {
  const { title, subtitle, href, icon: Icon, iconClass, featured } = link;
  const external = href.startsWith("http");

  const base =
    "group flex animate-rise items-center gap-4 rounded-full border px-2 py-2 transition duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent";

  const look = featured
    ? "border-transparent bg-gradient-to-r from-blue-800 via-fuchsia-600 to-violet-700 text-white shadow-lg shadow-fuchsia-500/30 hover:shadow-xl hover:shadow-fuchsia-500/40 dark:border-fuchsia-800/60 dark:from-fuchsia-950 dark:via-violet-950 dark:to-indigo-950 dark:shadow-fuchsia-950/40 dark:hover:border-fuchsia-700/70 dark:hover:shadow-fuchsia-950/50"
    : "border-slate-900/5 bg-white/70 shadow-sm backdrop-blur hover:bg-white hover:shadow-md dark:border-white/10 dark:bg-white/[0.04] dark:shadow-none dark:hover:bg-white/[0.08]";

  return (
    <a
      href={href}
      download={href === "/cv.pdf" ? true : undefined}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      style={{ animationDelay: `${200 + index * 70}ms` }}
      className={`${base} ${look}`}
    >
      <span className={`grid h-10 w-10 shrink-0 place-items-center rounded-full ${iconClass}`}>
        <Icon size={20} />
      </span>

      <span className="min-w-0 flex-1">
        <span className="block truncate text-base font-semibold">{title}</span>
        <span
          className={`block truncate text-sm ${
            featured ? "text-white/80" : "text-slate-500 dark:text-slate-400"
          }`}
        >
          {subtitle}
        </span>
      </span>

      <HiChevronRight
        size={20}
        className={`shrink-0 transition-transform group-hover:translate-x-1 ${
          featured ? "text-white" : "text-slate-400 dark:text-slate-300"
        }`}
      />
    </a>
  );
}
