import { FeaturedProducts } from "@/components/featured-products";
import { HeroBanner } from "@/components/hero-banner";
import { Suspense } from "react";

export default async function Home() {
  return (
    <main>
      <Suspense fallback={<div>Chargement...</div>}>
        <HeroBanner />
      </Suspense>

      <Suspense fallback={<div>Chargement des produits...</div>}>
        <FeaturedProducts />
      </Suspense>
    </main>
  );
}
