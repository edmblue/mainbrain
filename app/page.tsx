import Image from 'next/image';
import Hero from '@/components/Hero';
import Functions from '@/components/Functions';
import Features from '@/components/Features';
import Questions from '@/components/Questions';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="bg-primary-cream space-y-6">
      <Hero />
      <Functions />
      <Features />
      <Questions />
      <div className="max-container padding-container">
        <div className="py-12 px-6 lg:px-20 lg:w-1/2 mx-auto text-center space-y-2">
          <p className="uppercase text-gray-600 text-sm font-semibold tracking-wide">
            Comienza a preservar tus recuerdos hoy
          </p>
          <p className="text-3xl lg:text-5xl font-semibold">
            ¡No esperes más para mantener vivas las voces y memorias de tus
            seres queridos!
          </p>
        </div>
        <div className="flex flex-col md:flex-row justify-center gap-3">
          <button className="py-2 px-3 border-2 rounded-md font-semibold hover:text-gray-600 hover:bg-gray-200 relative group">
            Suscribirse
            <span className="arrow ml-2 transition-transform duration-300 group-hover:translate-x-1"></span>
          </button>
          <button className="py-2 px-3 border-2 rounded-md font-semibold text-gray-600 bg-gray-200 hover:text-black hover:bg-transparent">
            Conoce nuestros planes
          </button>
        </div>
      </div>
      <Footer />
    </main>
  );
}
