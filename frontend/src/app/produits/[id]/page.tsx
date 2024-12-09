import { notFound } from "next/navigation";
import Image from "next/image";
import { Metadata } from "next";
import fetchContentType from "@/lib/strapi/fetch-content-type";

type Props = {
  params: { id: string };
};

// Génération des métadonnées
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!params?.id) {
    notFound();
  }

  const { id } = await params;

  const product = await fetchContentType(
    "produits",
    `filters[id]=${id}&populate=image`,
    true,
  );

  if (!product) {
    return {
      title: "Produit non trouvé",
      description: "Le produit que vous recherchez n'existe pas",
    };
  }

  return {
    title: "product.seo.metaTitle",
    description: "product.seo.metaDescription",
  };
}

export default async function ProductPage({ params }: Props) {
  if (!params?.id) {
    notFound();
  }
  const { id } = await params;

  const product = await fetchContentType(
    "produits",
    `filters[id]=${id}&populate=image`,
    true,
  );

  if (!product) {
    notFound();
  }

  const imageUrl = `http://localhost:1337${product.image.url}`;
  const altText = product.image.alternativeText;

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative aspect-square">
          <Image
            src={imageUrl}
            alt={altText}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>

        <div>
          <h1 className="text-3xl font-bold mb-4">{product.nom}</h1>
          <p className="text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-bold mb-6">{product.prix.toFixed(2)} €</p>

          <button
            className="w-full bg-black text-white py-3 px-6 rounded-md hover:bg-gray-800 transition"
            data-gtm-id={product.gtmId}>
            Ajouter au panier
          </button>
        </div>
      </div>
    </div>
  );
}
