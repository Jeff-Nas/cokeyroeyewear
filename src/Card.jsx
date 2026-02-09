import { formatCurrency } from "./utils/formatCurrency";
import { calculateDiscount } from "./utils/calculateDiscount";

export function Card({ image, model, currentPrice, defaultPrice }) {
  const discount = calculateDiscount(currentPrice, defaultPrice);

  return (
    <div className="relative">
      <div>
        <div className="aspect-3/4 overflow-hidden">
          <img
            src={image}
            alt={`Óculos modelo ${model}`}
            className="h-full w-full object-cover rounded"
          />
        </div>
        {/* PROMO */}
        {discount.hasDiscount && (
          <span className="bg-[#ececa875] p-1 md:p-1.5 rounded absolute top-2 left-2 text-sm md:text-base text-gray-900 font-light">
            -{discount.percenntage}%
          </span>
        )}
      </div>

      <h2 className="text-gray-700 md:text-xl">{model}</h2>
      <div className="flex leading-3 items-center">
        <p className="font-bold md:text-xl text-[#2b2700fd]">
          {formatCurrency(
            discount.hasDiscount
              ? discount.priceCurrent
              : discount.priceOriginal,
          )}
        </p>
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
