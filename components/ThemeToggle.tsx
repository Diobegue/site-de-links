"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { HiMoon, HiSun } from "react-icons/hi2";

export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label={isDark ? "Ativar tema claro" : "Ativar tema escuro"}
      className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full border border-slate-900/10 bg-white/70 text-slate-800 backdrop-blur transition hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-fuchsia-500 dark:border-white/10 dark:bg-white/10 dark:text-white"
    >
      {mounted && (isDark ? <HiSun size={20} /> : <HiMoon size={20} />)}
    </button>
  );
}
