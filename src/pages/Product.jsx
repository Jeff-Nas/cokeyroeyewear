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
      <div>
        <h2>{product.name}</h2>
        <ProductSlider gallery={gallery} />
      </div>
    </main>
  );
}
