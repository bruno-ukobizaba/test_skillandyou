import ProductGrid from "@/components/product-grid";
import fetchContentType from "@/lib/strapi/fetch-content-type";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nos Produits | MonEcommerce",
  description: "Découvrez notre sélection de produits de qualité",
};

const ProductsPage = async () => {
  const products = await fetchContentType("produits", `&populate=image`);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Nos Produits</h1>
      <ProductGrid products={products} />
    </div>
  );
};

export default ProductsPage;
