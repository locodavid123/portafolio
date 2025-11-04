import Link from 'next/link';
import { IconLinkedIn, IconGitHub, IconEmail } from './icons/SocialIcons';

export function Footer() {
  const enlacesNavegacion = [
    { href: "/#sobre-mi", label: "Sobre mí", descripcion: "Conóceme mejor" },
    { href: "/#portafolio", label: "Portafolio", descripcion: "Mis proyectos" },
    { href: "/servicios", label: "Servicios", descripcion: "¿Qué puedo hacer por ti?" },
    { href: "/#blog", label: "Blog", descripcion: "Artículos y recursos" }
  ];

  const redesSociales = [
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

  return (
    <footer className="relative bg-white/80 backdrop-blur-md border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center lg:text-left">
          {/* Columna 1: Información Personal */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              JUAN DAVID AVILA
            </h3>
            <p className="mt-3 text-gray-600 max-w-sm mx-auto lg:mx-0 leading-relaxed">
              Desarrollador de Software apasionado por crear soluciones digitales eficientes y elegantes.
            </p>
            <div className="mt-6 flex justify-center lg:justify-start space-x-4">
              {redesSociales.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative text-gray-500 ${social.hoverColor} transition-all duration-300 ease-in-out`}
                  aria-label={social.label}
                >
                  <social.icon className="h-6 w-6 transform group-hover:scale-110 transition-transform duration-200" />
                  <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                    {social.descripcion}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Columna 2: Enlaces Rápidos */}
          <div className="lg:col-span-2 grid grid-cols-2 gap-8">
            <div>
              <ul className="space-y-3">
                {enlacesNavegacion.slice(0, 2).map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="group relative text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center lg:justify-start"
                    >
                      <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">•</span>
                      {link.label}
                      <span className="ml-2 text-xs text-gray-500 group-hover:text-gray-600">
                        {link.descripcion}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul className="space-y-3">
                {enlacesNavegacion.slice(2).map((link) => (
                  <li key={link.href}>
                    <Link 
                      href={link.href} 
                      className="group relative text-gray-600 hover:text-blue-600 transition-colors duration-200 flex items-center justify-center lg:justify-start"
                    >
                      <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200">•</span>
                      {link.label}
                      <span className="ml-2 text-xs text-gray-500 group-hover:text-gray-600">
                        {link.descripcion}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Columna 3: Contacto */}
          <div className="lg:col-span-1 text-center">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">¿Trabajamos juntos?</h4>
            <p className="text-gray-600 mb-4">
              ¿Tienes un proyecto en mente? Me encantaría escucharte y ayudarte a hacerlo realidad.
            </p>
            <Link
              href="mailto:jdavila.dev@gmail.com"
              className="inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium text-xl px-10 py-4 rounded-lg hover:opacity-90 transition-all duration-300 transform hover:-translate-y-1 shadow-lg hover:shadow-xl shadow-purple-500/20"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}