import { ProductSlider } from "../ProductSlider";
import { useProducts } from "../ProductsProvider";
import { useParams } from "react-router-dom";

export default function Product() {
  const { id } = useParams();
  const { displayed } = useProducts();
  const product = displayed.find((item) => item.id === Number(id)); //o router entrega id em string
  const gallery = product.images.gallery;
  console.log(gallery);

  return (
    <main>
      <div className="flex flex-col md:flex-row justify-evenly">
        <div className="overflow-hidden">
          <ProductSlider gallery={gallery} />
        </div>
        <div>
          <h2 className="ml-3 text-2xl md:text-4xl font-cairo-style">
            {product.name}
          </h2>
          <div className="flex flex-col gap-3"></div>
        </div>
      </div>
    </main>
  );
}
