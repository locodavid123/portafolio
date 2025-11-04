import { IconLinkedIn, IconGitHub, IconEmail } from './components/Footer/icons/SocialIcons';

export const navigationLinks = [
  { href: "/#sobre-mi", label: "Sobre mí", descripcion: "Conóceme mejor" },
  { href: "/#portafolio", label: "Portafolio", descripcion: "Mis proyectos" },
  { href: "/servicios", label: "Servicios", descripcion: "¿Qué puedo hacer por ti?" },
  { href: "/#blog", label: "Blog", descripcion: "Artículos y recursos" }
];

export const socialLinks = [
  {
    href: "https://www.linkedin.com/in/juan-avila-a36006375/",
    label: "LinkedIn",
    descripcion: "Perfil profesional",
    icon: IconLinkedIn,
    hoverColor: "hover:text-blue-400"
  },
  {
    href: "https://github.com/locodavid123",
    label: "GitHub",
    descripcion: "Proyectos y código",
    icon: IconGitHub,
    hoverColor: "hover:text-gray-900"
  },
  {
    href: "mailto:juannausan123@gmail.com",
    label: "Correo",
    descripcion: "Contáctame directamente",
    icon: IconEmail,
    hoverColor: "hover:text-blue-600"
  }
];