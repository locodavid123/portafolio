'use client';
import Link from 'next/link';
import { useState } from 'react';

export function Headers() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "/#sobre-mi", label: "Sobre mí" },
    { href: "/portafolio", label: "Portafolio" },
    { href: "/servicios", label: "Servicios" },
    { href: "/#blog", label: "Blog" },
    { href: "/contact", label: "Contacto", isButton: true },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md shadow-sm transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center p-4 h-20">
        {/* Logo / Nombre */}
        <div>
          <h1 className="text-2xl font-bold text-gray-900">
            <Link href="/" className="hover:text-blue-600 transition-colors">JUAN DAVID AVILA</Link>
          </h1>
          <h3 className=' text-gray-900'>Desarrollador de Software</h3>
        </div>

        {/* Navegación para PC */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={link.isButton
                ? "bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-all"
                : "text-gray-600 font-medium hover:text-blue-600 transition-colors"}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Botón de Hamburguesa para Móvil */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-900 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú desplegable para Móvil */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md">
          <ul className="flex flex-col items-center space-y-4 py-4">
            {navLinks.map(link => (
              <li key={link.href}>
                <Link href={link.href} onClick={() => setIsOpen(false)} className={link.isButton ? "bg-blue-500 text-white px-6 py-2 rounded-md hover:bg-blue-600 transition-all" : "text-gray-700 font-medium text-lg"}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}