const Functions = () => {
  return (
    <div className="max-container my-12 padding-container">
      <div className="w-5/6 md:grid grid-cols-2 gap-20 text-lg space-y-3 md:space-y-0 md:text-2xl grid-rows-3 mx-auto relative">
        <div className="absolute -left-8 2xl:-left-0 top-2">
          <div className="border border-t border-l-0 border-b-0 border-r hidden xl:block border-black border-solid rounded-tr-[6.25rem] w-[6rem] left-[27rem] top-6 h-[19.0625rem] absolute" />
          <div className="bg-black rounded-[100rem] hidden xl:block w-[0.7rem] h-[0.7rem] absolute left-[32.6rem] -bottom-[21rem]" />
          <div className="bg-[#bbbbbf] w-[1px] h-[12rem] left-[32.92rem] hidden xl:block top-[21rem] absolute" />
        </div>
        <div className="bg-[#bbbbbf] w-[1px] h-[16rem]  -left-7 md:hidden  absolute" />
        <div className="bg-black rounded-[100rem] md:hidden w-[0.7rem] h-[0.7rem] -left-[2.1rem] absolute " />
        <p className="w-5/6">
          <span className="font-bold">Graba la Voz:</span> Captura la voz de tu
          ser querido a través de nuestra aplicación fácil de usar
        </p>
        <p className="row-start-2 row-end-3 self-end col-start-2 col-end-2 w-5/6 justify-self-end	">
          <span className="font-bold">Recopila Experiencias:</span> Subir fotos,
          videos y anécdotas para enriquecer el perfil.
        </p>
        <p className="row-start-3 row-end-4 col-start-1 col-end-2 w-5/6">
          <span className="font-bold">Interactúa:</span> Utiliza la IA para
          conversar y revivir memorias a través de la voz grabada
        </p>
      </div>
    </div>
  );
};

export default Functions;
