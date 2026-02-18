import { ProductSlider } from "../ProductSlider";
import { useProducts } from "../ProductsProvider";
import { useParams } from "react-router-dom";
import { calculateDiscount } from "../utils/calculateDiscount";
import { formatCurrency } from "../utils/formatCurrency";
import { ShoppingCart } from "lucide-react";
import { ShoppingCartIcon } from "lucide-react";

export default function Product() {
  const { id } = useParams();
  const { displayed } = useProducts();
  const product = displayed.find((item) => item.id === Number(id)); //o router entrega id em string
  const gallery = product.images.gallery;
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <main>
      {/* SLIDER */}
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="overflow-hidden">
          <ProductSlider gallery={gallery} />
        </div>
        {/* CARD DO PRODUTO */}
        <div className="flex flex-col flex-1 lg:max-w-96">
          <div className="ml-8 mr-4 flex flex-col justify-end h-full lg:mb-6">
            <h2 className="text-2xl md:text-4xl font-cairo-style mb-3">
              {product.name}
            </h2>
            <span className="text-2xl font-bold font-cairo-style">
              {formatCurrency(discount.priceCurrent)}
            </span>
            <div className="flex flex-col gap-3">
              <p className="text-[#55c405] font-display">
                Você está economizando{" "}
                {formatCurrency(Math.floor(discount.discountAmount))}
              </p>
              <div className="flex gap-2">
                <button className="font-display flex-1 text-white bg-[#6c6c07] p-2 rounded">
                  ADICIONAR AO CARRINHO
                </button>
                <button>
                  <ShoppingCart className="text-white bg-[#6c6c07] p-2 rounded w-full h-full" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
