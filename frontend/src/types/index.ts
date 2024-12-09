interface Image {
  id: number;
  documentId: string;
  url: string;
  alternativeText: string | null;
}

export interface Product {
    id: string;
    nom: string;
    description: string;
    image: Image;
    prix: number;
    gtmId?: string;
    seo?: {
        metaTitle: string;
        metaDescription: string;
    }
}

export interface HeroSection {
  titre: string;
  sousTitre: string;
  image: string;
  buttonText: string;
  buttonLink: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  image: string;
}