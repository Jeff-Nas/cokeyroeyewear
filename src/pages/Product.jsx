import { ProductSlider } from "../ProductSlider";
import { useProducts } from "../ProductsProvider";
import { useParams } from "react-router-dom";
import { calculateDiscount } from "../utils/calculateDiscount";
import { formatCurrency } from "../utils/formatCurrency";
import { ShoppingCart } from "lucide-react";
import { WhatsAppIcon } from "../Icons";

export default function Product() {
  const { id } = useParams();
  const { displayed } = useProducts();
  const product = displayed.find((item) => item.id === Number(id)); //o router entrega id em string
  const gallery = product.images.gallery;
  const discount = calculateDiscount(product.price, product.originalPrice);

  return (
    <main className="min-h-screen flex flex-col">
      <div className="flex flex-col flex-1 lg:flex-row lg:justify-evenly">
        {/* SLIDER */}
        <div className="overflow-hidden md:max-h-[50vh]">
          <ProductSlider gallery={gallery} />
        </div>
        {/* CARD DESCRIÇÃO DO PRODUTO */}
        <div className="flex flex-col  lg:w-112.5">
          <div className="ml-4 mr-4 flex flex-col justify-end h-full lg:mb-6">
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-cairo-style mb-3">
              {product.name}
            </h2>
            <span className="text-2xl md:text-3xl font-bold font-cairo-style">
              {formatCurrency(discount.priceCurrent)}
            </span>
            <div className="flex flex-col gap-3">
              <p className="text-[#55c405] font-display mt-2">
                Você está economizando{" "}
                {formatCurrency(Math.floor(discount.discountAmount))}
              </p>
              {/* CALL TO ACTION BUTTONS */}
              <div className="flex gap-2 mt-4 mb-4 max-w-96 lg:max-w-none lg:w-full">
                <button className="font-display flex-1 text-white bg-gray-900 px-4 py-2.5 rounded">
                  <div className="flex justify-between items-center lg:p-1.5">
                    <span className="lg:text-xl">PEDIR NO WHATSAPP</span>
                    <WhatsAppIcon size={28} />
                  </div>
                </button>
                {/* WISH LIST */}
                <button className="text-white bg-gray-900 px-4 py-2.5 rounded ">
                  <ShoppingCart size={24} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
