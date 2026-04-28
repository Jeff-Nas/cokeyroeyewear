import { Products } from "../Products";

export default function Home() {
  return (
    <main className="p-4">
      {/*Card */}
      <div className="mb-16 shadow-xl rounded-2xl">
        {/*Banner */}
        <img
          src="/assets/banner/banner-home.png"
          alt="imagem do banner"
          className="w-full h-auto overflow-hidden rounded-t-xl"
        />
        {/*Descrição - Banner */}
        <div className="flex flex-col items-start text-left space-y-4 mt-4 p-4">
          <span className="uppercase font-semibold text-[10px] text-orange-800/65">
            sumer collection
          </span>
          <div className="max-w-40">
            <h1 className="text-3xl font-playfair-display font-semibold text-slate-800/90">
              Viva a Hora Dourada
            </h1>
          </div>
          <p className="text-slate-600">
            Descubra óculos premium projetados para clareza, conforto e o máximo
            do estilo de vida litorâneo.
          </p>
          <button className="bg-orange-800/95 rounded-2xl px-3 py-1 text-gray-100 text-sm font-semibold hover:cursor-pointer font-display">
            Comprar coleção
          </button>
        </div>
      </div>

      <Products />
    </main>
  );
}
