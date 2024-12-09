import fetchContentType from "@/lib/strapi/fetch-content-type";
import { ProductCard } from "./product-card";
import { Product } from "@/types";

export async function FeaturedProducts() {
  const products = await fetchContentType("produits", `&populate=image`);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Produits à la une</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.data.map((product: Product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
