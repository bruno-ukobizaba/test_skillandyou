import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";

export function ProductCard({ product }: { product: Product }) {
  const imageURL = "http://localhost:1337" + product.image.url;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/produits/${product.id}`}>
        <div className="relative h-64">
          <Image
            src={imageURL ? imageURL : "/placeholder.jpg"} // Placeholder image}
            alt={
              product.image.alternativeText
                ? product.image.alternativeText
                : "Product image"
            }
            fill
            className="object-cover"
          />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold mb-2">{product.nom}</h3>
          <p className="text-gray-600 mb-4 line-clamp-2">
            {product.description}
          </p>
          <p className="text-xl font-bold">{product.prix.toFixed(2)} €</p>
        </div>
      </Link>
    </div>
  );
}
