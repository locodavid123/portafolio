import { Headers } from "../components/Headers/page";
import { Footer } from "../components/Footer/page";
import Image from "next/image";

// --- Iconos SVG para los servicios ---

const IconCode = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const IconApi = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
  </svg>
);

const IconDatabase = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4" />
  </svg>
);

const IconHtml = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M12 6V3m0 18v-3" />
  </svg>
);

const IconBackend = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
  </svg>
);

// Componente reutilizable para las tarjetas de servicio
const ServiceCard = ({ icon, title, description, imageSrc }) => (
    <div className="group relative h-80 w-full rounded-2xl shadow-xl overflow-hidden">
        {/* Imagen de fondo */}
        <Image
            src={imageSrc}
            alt={title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
        />
        
    {/* Superposición de gradiente */}
    <div className="absolute inset-0 bg-gradient from-black/80 via-black/50 to-transparent transition-opacity duration-300"></div>
    
    {/* Contenido de la tarjeta */}
    <div className="relative h-full flex flex-col justify-end p-6 text-white transform transition-transform duration-500 ease-in-out group-hover:-translate-y-4">
      <div className="mb-4 text-blue-400">{icon}</div>
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300 h-0 group-hover:h-auto leading-relaxed">
        {description}
      </p>
    </div>
  </div>
);

export default function Servicios() {
  return (
    <div className="relative min-h-screen w-full bg-gray-900 text-white">
      {/* Fondo decorativo con gradiente y rejilla */}
      <div className="absolute inset-0 -z-0">
        <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]"></div>
        <div className="absolute left-0 right-0 top-[-10%] h-[1000px] w-[1000px] rounded-full bg-[radial-gradient(circle_400px_at_50%_300px,#3b82f633,transparent)]"></div>
      </div>

      {/* Contenido principal de la página */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Headers />
        <main className="flex-grow">
          <section className="container mx-auto px-6 py-20">
            <h2 className="text-5xl font-extrabold mb-16 text-center scroll-mt-20 relative pb-4">
              <span className="relative z-10 bg-gradient-to-r from-blue-400 to-sky-400 bg-clip-text text-transparent">
                Mis Servicios
              </span>
              <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full"></span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            <ServiceCard
              icon={<IconCode />}
              title="Desarrollo Web a Medida"
              description="Creación de sitios y aplicaciones web modernas, rápidas y responsivas utilizando las últimas tecnologías como React y Next.js."
              imageSrc="https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800"
            />
            <ServiceCard
              icon={<IconApi />}
              title="Desarrollo de APIs RESTful"
              description="Diseño y construcción de APIs robustas y escalables con Node.js y Express para conectar tus aplicaciones con servicios de backend."
              imageSrc="https://images.unsplash.com/photo-1587620962725-abab7fe55159?q=80&w=800"
            />
            <ServiceCard
              icon={<IconDatabase />}
              title="Gestión de Bases de Datos"
              description="Diseño e implementación de bases de datos eficientes y escalables, tanto relacionales (MySQL, PostgreSQL) como NoSQL (MongoDB)."
              imageSrc="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=800"
            />
            <ServiceCard
              icon={<IconHtml />}
              title="Maquetación Web con HTML y CSS"
              description="Estructuración de contenido web utilizando HTML5 semántico y diseño visual atractivo y responsivo con CSS3 y frameworks como Tailwind CSS."
              imageSrc="https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=800"
            />
            <ServiceCard
              icon={<IconBackend />}
              title="Desarrollo Backend y Scripting"
              description="Experiencia en la construcción de lógica de servidor y automatización de tareas con lenguajes versátiles como Node.js, Python y JavaScript (ES6+)."
              imageSrc="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?q=80&w=800"
            />
            </div>
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}