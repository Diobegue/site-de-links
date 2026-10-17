import { MdVerified } from "react-icons/md";
import AnimatedBackground from "@/components/AnimatedBackground";
import LinkCard from "@/components/LinkCard";
import ThemeToggle from "@/components/ThemeToggle";
import { links, profile, socials } from "@/lib/data";

export default function Home() {
  const initials = profile.name
    .split(" ")
    .map((p) => p[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <>
      <AnimatedBackground />

      <main className="relative mx-auto flex min-h-screen w-full max-w-xl flex-col items-center px-5 pb-6 pt-20 sm:pt-24">
        <ThemeToggle />

        <header className="flex animate-rise flex-col items-center text-center">
          <div className="rounded-full bg-gradient-to-tr from-blue-800 via-indigo-900 to-slate-950 p-[3px] shadow-xl shadow-blue-950/25 dark:from-blue-950 dark:via-indigo-950 dark:to-slate-950 dark:shadow-blue-950/40">
            <div className="grid h-28 w-28 place-items-center overflow-hidden rounded-full border-[3px] border-white bg-slate-200 text-3xl font-bold text-slate-600 dark:border-[#0b0a24] dark:bg-slate-800 dark:text-slate-300 sm:h-32 sm:w-32">
              {profile.avatar ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img
                  src={profile.avatar}
                  alt={`Foto de ${profile.name}`}
                  className="h-full w-full object-cover"
                />
              ) : (
                initials
              )}
            </div>
          </div>

          <h1 className="mt-5 flex items-center gap-2 text-2xl font-bold sm:text-3xl">
            {profile.name}
            {profile.verified && (
              <MdVerified
                className="text-blue-500 dark:text-blue-400"
                size={22}
                aria-label="Perfil verificado"
              />
            )}
          </h1>
          <p className="mt-1 font-medium text-violet-600 dark:text-violet-300">
            {profile.role}
          </p>
          <p className="mt-3 max-w-sm text-balance text-[15px] leading-relaxed text-slate-600 dark:text-slate-200">
           
          </p>
        </header>

        <nav
          aria-label="Redes sociais"
          className="mt-6 flex flex-wrap justify-center gap-3 animate-rise"
          style={{ animationDelay: "120ms" }}
        >
          {socials.map(({ label, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="grid h-12 w-12 place-items-center rounded-full border border-slate-900/5 bg-white/70 text-slate-800 shadow-sm backdrop-blur transition hover:scale-110 hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 dark:border-white/10 dark:bg-white/5 dark:text-white dark:hover:bg-white/10 sm:h-14 sm:w-14"
            >
              <Icon size={22} />
            </a>
          ))}
        </nav>

        <section className="mt-7 flex w-10/12 flex-col gap-3">
          {links.map((link, i) => (
            <LinkCard key={link.title} link={link} index={i} />
          ))}
        </section>

        <footer className="mt-6 text-center text-sm text-slate-500 dark:text-slate-400">
          <p>
            Feito com  por {profile.name.split(" ")[0]}
          </p>
          <p className="mt-1">© {new Date().getFullYear()} Todos os direitos reservados</p>
        </footer>
      </main>
    </>
  );
}
