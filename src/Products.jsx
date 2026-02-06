import { Card } from "./Card";
import { Link } from "react-router-dom";
import { useProducts } from "./ProductsProvider";

export function Products() {
  const { displayed } = useProducts();
  return (
    <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-4 p-4 md:grid-cols-3 lg:grid-cols-4 lg:mx-30  font-cairo-style">
      {displayed.map((eyewear) => (
        <Link
          key={`glasses-${eyewear.id}`}
          to={`/product/${eyewear.id}`}
          className="hover:scale-105 transition-transform"
        >
          <Card
            image={eyewear.images.cover}
            model={eyewear.name}
            currentPrice={eyewear.price.toFixed(2)}
            defaultPrice={eyewear.originalPrice}
          />
        </Link>
      ))}
    </div>
  );
}
