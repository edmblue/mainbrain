import Image from 'next/image';

const Hero = () => {
  return (
    <div className="h-screen mb-12 max-container padding-container">
      <header className=" flex items-center gap-3">
        <Image
          src="/img/logo.png"
          width={100}
          height={80}
          alt="MainBrain logo"
        />
        <nav className="hidden md:block">
          <ul className="flex gap-3 items-center uppercase text-[12px]">
            <li className="cursor-pointer font-[600] text-gray-500 hover:text-gray-900 transition-all duration-500 tracking-wide hover:tracking-wider">
              Cómo Funciona
            </li>
            <li className="cursor-pointer font-[600] text-gray-500 hover:text-gray-900 transition-all duration-500 tracking-wide hover:tracking-wider">
              Beneficios
            </li>
            <li className="cursor-pointer font-[600] text-gray-500 hover:text-gray-900 transition-all duration-500 tracking-wide hover:tracking-wider">
              Testimonios
            </li>
            <li className="cursor-pointer font-[600] text-gray-500 hover:text-gray-900 transition-all duration-500 tracking-wide hover:tracking-wider">
              Preguntas Frecuentes
            </li>
          </ul>
        </nav>
      </header>
      <div className="h-full flex items-center justify-center">
        <div className="lg:w-2/3 space-y-3">
          <h1 className=" text-4xl lg:text-5xl text">
            Revive los recuerdos y conecta con tus seres queridos a través de{' '}
            <span className="font-bold">mainbrain</span>
          </h1>
          <h2 className="w-[90%]">
            La IA que preserva la voz y las experiencias de tus seres queridos
            para que puedas interactuar con ellos en el futuro.
          </h2>
        </div>
        <Image
          src="/img/geometric.png"
          width={600}
          height={600}
          alt="MainBrain logo"
          className="relative left-16 hidden xl:block"
        />
      </div>
    </div>
  );
};

export default Hero;
