import { Product } from "@/types";
import { ProductCard } from "./product-card";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function ProductGrid(productsData: any) {
  const { products } = productsData;
  const list_products = products.data;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {list_products.map((product: Product) => (
        <ProductCard
          key={product.id}
          product={product}
        />
      ))}
    </div>
  );
}
