import { Headers } from '../components/Headers/page.jsx';
import Footer from '../components/Footer/page.jsx';
import Link from 'next/link';

// Icons for contact info
const MailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const LinkedInIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
);

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-900 text-white">
      <Headers />
      <main className="flex-grow">
        <section className="container mx-auto px-6 py-20">
          <h2 className="text-5xl font-extrabold mb-4 text-center">
            <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
              Ponte en Contacto
            </span>
          </h2>
          <p className="text-slate-400 text-lg text-center mb-16 max-w-2xl mx-auto">
            ¿Tienes una pregunta, una propuesta o simplemente quieres saludar? Me encantaría saber de ti.
          </p>

          <div className="grid md:grid-cols-2 gap-16 items-start">
            {/* Formulario de Contacto */}
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Tu nombre completo"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="tu@email.com"
                />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-slate-300 mb-2">Asunto</label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="¿De qué te gustaría hablar?"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">Mensaje</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  className="w-full px-4 py-3 bg-slate-800/50 border border-slate-700 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                  placeholder="Escribe tu mensaje aquí..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-linear-to-r from-blue-500 to-purple-500 text-white font-bold py-3 px-6 rounded-lg hover:opacity-90 transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-500/20"
              >
                Enviar Mensaje
              </button>
            </form>

            {/* Información de Contacto */}
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 p-8 space-y-8">
              <h3 className="text-2xl font-bold text-white">Otros medios de contacto</h3>
              <div className="flex items-center gap-4">
                <MailIcon />
                <Link href="mailto:juannausan123@gmail.com" className="hover:text-blue-400 transition-colors">juannausan123@gmail.com</Link>
              </div>
              <div className="flex items-center gap-4">
                <LinkedInIcon />
                <Link href="https://www.linkedin.com/in/juan-avila-a36006375/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Conecta en LinkedIn</Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}