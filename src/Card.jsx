import { formatCurrency } from "./utils/formatCurrency";
import { calculateDiscount } from "./utils/calculateDiscount";

export function Card({ image, model, currentPrice, defaultPrice }) {
  const discount = calculateDiscount(currentPrice, defaultPrice);

  return (
    <div className="relative">
      <div>
        {/*Imagem do produto */}
        <div className="aspect-square overflow-hidden">
          <img
            src={image}
            alt={`Óculos modelo ${model}`}
            className="h-full w-full object-cover rounded-lg"
          />
        </div>
        {/* Tag de promoção */}
        {discount.hasDiscount && (
          <span className="bg-orange-800/90 py-1 px-2 md:p-1.5 rounded-xl absolute top-2 right-2 text-[10px] md:text-base text-gray-100 font-light">
            -{discount.percenntage}%
          </span>
        )}
      </div>
      {/*Nome do produto */}
      <h2 className="text-gray-700 font-bold md:text-xl my-2">{model}</h2>
      <div className="flex leading-3 items-center">
        {/*Preço do produto com desconto */}
        <p className="font-bold md:text-xl text-orange-900">
          {formatCurrency(
            discount.hasDiscount
              ? discount.priceCurrent
              : discount.priceOriginal,
          )}
        </p>
        {/*Preço original do produto */}
        {currentPrice && (
          <span className="text-gray-400 text-sm font-sans font-light line-through px-2">
            {formatCurrency(discount.priceOriginal)}
          </span>
        )}
      </div>
      {/*Link > criar rota */}
    </div>
  );
}
