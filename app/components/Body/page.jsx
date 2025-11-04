import Image from 'next/image';
import Link from 'next/link';

// --- Iconos SVG para el Body ---
const UserIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
  </svg>
);
const QuoteIcon = () => (
  <svg className="w-12 h-12 mx-auto mb-6 text-blue-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 14">
    <path d="M6 0H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3H2a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Zm10 0h-4a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4v1a3 3 0 0 1-3 3h-1a1 1 0 0 0 0 2h1a5.006 5.006 0 0 0 5-5V2a2 2 0 0 0-2-2Z" />
  </svg>
);

// Componente reutilizable para títulos de sección
const SectionTitle = ({ children, id }) => (
  <h2 id={id} className="text-4xl font-extrabold mb-12 text-center scroll-mt-20 relative pb-4">
    <span className="relative z-10 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">{children}</span>
    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
  </h2>
);

// Componente reutilizable para tarjetas (proyectos, blog, etc.)
const Card = ({ title, description, link, linkText, imageSrc }) => (
  <div className="group bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden transform hover:-translate-y-2 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
    {imageSrc && (
      <div className="h-48 bg-slate-900/50 rounded-t-xl overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          width={400} 
          height={300} 
          className="h-full w-full object-cover rounded-t-xl transform group-hover:scale-110 transition-transform duration-500" 
        />
      </div>
    )}
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      {link && (
        <a 
          href={link} 
          className="inline-flex items-center bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold hover:opacity-80 transition-opacity"
        >
          {linkText || 'Ver más →'}
        </a>
      )}
    </div>
  </div>
);

export default function Body() {
  return (
    <main className="relative">
      {/* Fondo adicional para profundidad */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--tw-gradient-stops))] from-blue-900/20 via-slate-900/0 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-16 relative">
      {/* 1. Hero Section con Foto */}
      <section className="min-h-[80vh] flex flex-col md:flex-row items-center justify-center gap-12 md:gap-16">
        {/* Columna de la Imagen */}
        <div className="w-56 h-56 md:w-72 md:h-72 shrink-0 relative group">
          <div className="absolute inset-0 bg-linear-to-br from-blue-400 to-purple-600 rounded-full blur-xl opacity-50 animate-pulse group-hover:opacity-60 transition-opacity"></div>
          <div className="relative w-full h-full bg-linear-to-br from-blue-500 to-purple-500 rounded-full shadow-2xl flex items-center justify-center overflow-hidden backdrop-blur-sm border border-slate-700/50">
            <Image
              src="https://scontent.fvvc3-1.fna.fbcdn.net/v/t1.6435-9/99123250_10158361674883808_6736650525829234688_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=a5f93a&_nc_eui2=AeHUd2qJQg2ApaaVCe5JEi8I0P_PEpqRo4fQ_88SmpGjh7lqsXq6FNk_-Vpuf40Wy1k&_nc_ohc=7l47WvFOK5EQ7kNvwGQp8TM&_nc_oc=Adm9Z1i6fwhZ-V_ttLQgYG7R-_byAKC89ZAZTKHv39lO6-oXc-0XQmPjPJ6KdxpDTBw&_nc_zt=23&_nc_ht=scontent.fvvc3-1.fna&_nc_gid=AccgGt7J7ftXWSi4gZ-XTg&oh=00_Afe_DCNsedxAsP-8bHge3iE6DZZhyRNlklgGb9v3vFTapA&oe=6925C090"
              alt="Foto de perfil de Juan David Avila"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        {/* Columna de Texto */}
        <div className="text-center md:text-left max-w-2xl">
          <div className="relative mb-6 inline-block">
            <span className="absolute -inset-1 rounded-lg bg-linear-to-r from-blue-500 to-purple-500 opacity-30 blur"></span>
            <h1 className="relative text-5xl md:text-6xl font-extrabold leading-tight">
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                JUAN DAVID AVILA
              </span>
            </h1>
          </div>
          <p className="mt-2 text-2xl bg-linear-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent font-semibold">
            Desarrollador de Software
          </p>
          <p className="mt-6 text-2xl text-slate-300 max-w-2xl leading-relaxed text-justify">
            Como desarrollador de software, me especializo en convertir ideas complejas en soluciones digitales intuitivas, eficientes y escalables.
            Mi enfoque combina arquitectura modular, validación robusta y diseño centrado en el usuario para crear productos que resuelven problemas reales.
            Este espacio profesional refleja mi compromiso con la innovación, la claridad técnica y la mejora continua.
          </p>
          <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
            <Link 
              href="#portafolio" 
              className="inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium text-lg px-11 py-6 rounded-lg hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/20"
            >
              Explora mis Proyectos
            </Link>
            <Link 
              href="/contact" 
              className="inline-block px-8 py-3 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all transform hover:-translate-y-1"
            >
              Contáctame
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Resumen Profesional (Sobre mí) */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <SectionTitle id="sobre-mi">Sobre Mí</SectionTitle>
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8">
              <div className="flex flex-col items-center mb-8">
                <QuoteIcon />
              </div>
              <p className="max-w-3xl mx-auto text-justify text-slate-300 text-2xl leading-relaxed">
                Soy un desarrollador de software apasionado por la creación de soluciones digitales robustas y escalables. Mi especialidad es transformar las necesidades del negocio en funcionalidades técnicas efectivas, utilizando un stack tecnológico moderno que incluye React, Next.js, Node.js, y bases de datos como PostgreSQL, MySQL y MongoDB. Me obsesiona escribir código limpio y mantenible que no solo funcione, sino que también aporte un valor real y duradero al usuario final.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                {["React", "Next.js", "Node.js", "Python", "TypeScript", "PostgreSQL", "MySQL", "MongoDB", "Tailwind CSS"].map((tech) => (
                  <span key={tech} className="px-4 py-2 rounded-full bg-slate-700/50 text-slate-300 text-sm border border-slate-600">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-10 text-center">
                <a 
                  href="/Hoja de Vida.pdf" // La ruta debe coincidir con el nombre exacto del archivo en /public
                  download="Hoja de Vida.pdf"
                  className="inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium text-lg px-8 py-4 rounded-lg hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/20"
                >
                  Descargar Hoja de Vida
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Secciones Destacadas (Portafolio) */}
      <section className="py-24">
        <SectionTitle id="portafolio">Proyectos Destacados</SectionTitle>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <Card 
            title="E-commerce Platform"
            description="Plataforma de comercio electrónico completa con carrito de compras, pasarela de pagos y panel de administración."
            link="https://github.com/locodavid123/iniciodele-commerce.git"
            linkText="Ver Proyecto"
            imageSrc="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?q=80&w=800"
          />
          <Card 
            title="Dashboard Analytics"
            description="Dashboard interactivo para visualización de datos en tiempo real con gráficos personalizables y reportes."
            link="https://github.com/yourusername/dashboard"
            linkText="Explorar Demo"
            imageSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
          />
          <Card 
            title="Task Manager Pro"
            description="Aplicación de gestión de tareas con características avanzadas como Kanban, filtros y colaboración en tiempo real."
            link="https://github.com/yourusername/taskmanager"
            linkText="Ver Código"
            imageSrc="https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=800"
          />
        </div>
        <div className="mt-12 text-center">
          <Link 
            href="/portafolio" 
            className="inline-flex items-center space-x-2 bg-slate-800 text-slate-300 hover:text-white px-6 py-3 rounded-lg border border-slate-700 hover:border-slate-600 transition-all transform hover:-translate-y-1"
          >
            <span>Ver todos los proyectos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </section>

      {/* 4. Sección de Contacto */}
      <section className="py-24">
        <SectionTitle id="contacto">¿Listo para Colaborar?</SectionTitle>
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute -inset-1 rounded-lg bg-linear-to-r from-blue-500/20 to-purple-500/20 blur-xl"></div>
            <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8 text-center">
              <h3 className="text-2xl font-bold text-white mb-4">¡Hagamos algo increíble juntos!</h3>
              <p className="text-slate-300 mb-8 text-lg">
                ¿Tienes un proyecto en mente? ¿Buscas un desarrollador para tu equipo? 
                Me encantaría escuchar tus ideas y ver cómo puedo ayudarte.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link 
                  href="mailto:jdavila.dev@gmail.com"
                  className="inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium px-8 py-3 rounded-lg hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/20"
                >
                  Envíame un correo
                </Link>
                <Link 
                  href="https://www.linkedin.com/in/juan-avila-a36006375/"
                  className="inline-block px-8 py-3 rounded-lg border border-slate-700 text-slate-300 hover:text-white hover:border-slate-600 transition-all transform hover:-translate-y-1"
                >
                  Conéctemos en LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </main>
  );
}