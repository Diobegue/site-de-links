import type { IconType } from "react-icons";
import {
  FaGithub,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaImage,
  FaFile
} from "react-icons/fa";

// ✏️ Edite apenas este arquivo para personalizar a página.

export const profile = {
  name: "Diobergue Viana",
  role: "Desenvolvedor Full Stack",
  avatar: "/file_2).png", // ex.: "/avatar.jpg" (coloque a foto em /public). Vazio = iniciais.
  verified: true,
};

export type SocialItem = { label: string; href: string; icon: IconType };

export const socials: SocialItem[] = [
  
  { label: "GitHub", href: "https://github.com/seuusuario", icon: FaGithub },
  { label: "LinkedIn", href: "https://linkedin.com/in/seuusuario", icon: FaLinkedinIn },
  { label: "Instagram", href: "https://instagram.com/seuusuario", icon: FaInstagram },
  { label: "WhatsApp", href: "https://wa.me/seuusuario", icon: FaWhatsapp },
  
];

export type LinkItem = {
  title: string;
  subtitle: string;
  href: string;
  icon: IconType;
  /** Classes Tailwind do quadrado do ícone */
  iconClass: string;
  featured?: boolean;
};

export const links: LinkItem[] = [
  {
    title: "galeia de desenhos",
    subtitle: "diobergue.dev",
    href: "https://seusite.dev",
    icon: FaImage,
    iconClass: "bg-white/25 text-white",
    featured: true,
  },
  
  {
    title: "galeria 2",
    subtitle: "@seuusuario",
    href: "https://twitter.com/seuusuario",
    icon: FaImage,
    iconClass: "bg-sky-500 text-white",
  },
  {
    title: "Baixar CV",
    subtitle: "Currículo em PDF",
    href: "/cv.pdf",
    icon: FaFile,
    iconClass: "bg-indigo-600 text-white",
  },
  
];
