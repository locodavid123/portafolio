import {Headers} from '../components/Headers/page.jsx';
import Footer from '../components/Footer/page.jsx';
import Image from 'next/image';

// Componente reutilizable para las tarjetas de proyecto
const ProjectCard = ({ imgSrc, title, description, link }) => (
  <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 overflow-hidden transform hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10">
    <Image 
      src={imgSrc} 
      alt={title} 
      width={400} 
      height={300} 
      className="w-full h-48 object-cover" 
    />
    <div className="p-6">
      <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
      <p className="text-slate-400 mb-4">{description}</p>
      <a href={link} className="inline-block bg-linear-to-r from-blue-500 to-purple-500 text-white font-medium px-6 py-2 rounded-lg hover:opacity-90 transition-opacity duration-200">
        Ver Más
      </a>
    </div>
  </div>
);

export default function PortafolioPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Headers />
      <main className="flex-grow container mx-auto px-6 py-20">
        <h2 className="text-4xl font-extrabold mb-16 text-center relative pb-4">
          <span className="relative z-10 bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
            Mi Portafolio
          </span>
          <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-1 bg-linear-to-r from-blue-500 to-purple-500 rounded-full"></span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=800"
            title="Plataforma E-commerce"
            description="Desarrollo de una tienda online completa con carrito de compras, pasarela de pago y panel de administración."
            link="#"
          />
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800"
            title="Dashboard de Analíticas"
            description="Aplicación web para visualizar datos en tiempo real con gráficos interactivos y reportes personalizados."
            link="#"
          />
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=800"
            title="Blog Personal con CMS"
            description="Creación de un blog dinámico integrado con un sistema de gestión de contenidos para una fácil publicación."
            link="#"
          />
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?q=80&w=800"
            title="Aplicación de Tareas"
            description="Una aplicación de lista de tareas (To-Do) con funcionalidades de colaboración en tiempo real y notificaciones."
            link="#"
          />
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=800"
            title="Sitio Web Corporativo"
            description="Diseño y desarrollo de un sitio web moderno y responsivo para una empresa de tecnología."
            link="#"
          />
          <ProjectCard
            imgSrc="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=800"
            title="Herramienta de Diseño UI"
            description="Prototipo de una herramienta online para crear interfaces de usuario de forma colaborativa."
            link="#"
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}