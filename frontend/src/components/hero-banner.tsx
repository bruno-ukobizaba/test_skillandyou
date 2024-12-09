import Image from "next/image";
import Link from "next/link";
import { HeroSection } from "@/types";
import { heroData } from "@/data/mock";

export async function HeroBanner() {
  const hero: HeroSection = heroData;

  return (
    <section className="relative h-[600px]">
      <Image
        src="/hero.webp"
        alt="Hero Banner"
        fill
        priority
        className="object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40">
        <div className="container mx-auto px-4 h-full flex items-center">
          <div className="max-w-xl text-white">
            <h1 className="text-5xl font-bold mb-6">{hero.titre}</h1>
            <p className="text-xl mb-8">{hero.sousTitre}</p>
            <Link
              href={hero.buttonLink}
              className="bg-white text-black px-8 py-3 rounded-md hover:bg-gray-100 transition">
              {hero.buttonText}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
