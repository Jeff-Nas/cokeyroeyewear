import { formatCurrency } from "./utils/formatCurrency";

export function Card({ image, model, currentPrice, defaultPrice }) {
  const priceCurrent = Number(currentPrice);
  const priceDefault = Number(defaultPrice);
  const hasDiscount = priceCurrent && priceCurrent < priceDefault;

  const discountAmount = hasDiscount ? priceDefault - priceCurrent : 0;
  const discountPercent = hasDiscount
    ? Math.floor((discountAmount * 100) / priceDefault)
    : 0;

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
        {hasDiscount && (
          <span className="bg-[#ececa875] p-1 md:p-1.5 rounded absolute top-2 left-2 text-sm md:text-base text-gray-900 font-light">
            -{discountPercent}%
          </span>
        )}
      </div>

      <h2 className="text-gray-700 md:text-xl">{model}</h2>
      <div className="flex leading-3 items-center">
        <p className="font-bold md:text-xl text-[#2b2700fd]">
          {formatCurrency(hasDiscount ? priceCurrent : priceDefault)}
        </p>
        {currentPrice && (
          <span className="text-gray-400 text-sm font-sans font-light line-through px-2">
            {formatCurrency(defaultPrice)}
          </span>
        )}
      </div>
      {/*Link > criar rota */}
    </div>
  );
}
