import { Card } from "./Card";
import { useProducts } from "./ProductsProvider";

export function Products() {
  const { displayed } = useProducts();
  return (
    <div className="grid grid-cols-2 gap-y-8 gap-x-4 lg:gap-x-4 p-4 md:grid-cols-3 lg:grid-cols-4 lg:mx-30  font-cairo-style">
      {displayed.map((eyewear) => (
        <Card
          key={`glasses-${eyewear.id}`}
          image={eyewear.images.cover}
          model={eyewear.name}
          currentPrice={eyewear.price.toFixed(2)}
          defaultPrice={eyewear.originalPrice}
        />
      ))}
    </div>
  );
}
