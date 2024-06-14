import Image from 'next/image';

const Features = () => {
  return (
    <>
      <div className="max-container py-24 px-6 lg:px-20 lg:w-1/2 mx-auto text-center space-y-2">
        <p className="uppercase text-gray-600 text-sm font-semibold tracking-wide">
          MainBrain utiliza tecnología avanzada de
        </p>
        <p className="text-3xl lg:text-5xl font-semibold">
          Inteligencia Artificial para capturar y almacenar la voz y las
          memorias de tus seres queridos
        </p>
      </div>
      <div>
        <div className="max-container padding-container grid md:grid-cols-2 items-center  gap-12">
          <p className="text-lg md:w-3/5 text-gray-600 justify-self-center">
            MainBrain preserva las voces de tus seres queridos, permitiéndote
            escuchar y recordar sus palabras y relatos siempre que lo desees.
            Esto crea una conexión emocional duradera y te ayuda a mantener
            vivos sus recuerdos.
          </p>
          <div className="relative">
            <Image
              src="/img/family.png"
              width={450}
              height={450}
              alt="Family Picture"
              className="rounded-md opacity-90"
            />
          </div>
          <p className="text-lg md:w-3/5 justify-self-center items-center   text-gray-600">
            Gracias a la inteligencia artificial avanzada, puedes interactuar
            con las voces grabadas de tus seres queridos, recreando
            conversaciones y reviviendo momentos especiales como si estuvieran
            allí contigo.
          </p>
          <Image
            src="/img/family-02.png"
            width={450}
            height={450}
            alt="Family Picture"
            className="rounded-md opacity-90 md:col-start-1 md:row-start-2 "
          />
        </div>
      </div>
    </>
  );
};

export default Features;
