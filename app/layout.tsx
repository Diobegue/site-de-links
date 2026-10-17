import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import ThemeProvider from "@/components/ThemeProvider";
import { profile } from "@/lib/data";
import "./globals.css";

const font = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.role}`,
  description: profile.bio,
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#07061a" },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${font.variable} font-sans`}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
