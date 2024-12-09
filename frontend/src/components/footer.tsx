import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Liens utiles</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/produits"
                  className="hover:underline">
                  Produits
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="hover:underline">
                  À propos
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:underline">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <p>Email: contact@monecommerce.com</p>
            <p>Téléphone: +33 1 23 45 67 89</p>
            <p>Adresse: 123 Rue de Commerce, Paris, France</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Mentions légales</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/terms"
                  className="hover:underline">
                  Conditions d&apos;utilisation
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="hover:underline">
                  Politique de confidentialité
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 text-center text-sm text-gray-400">
          © 2024 MonEcommerce. Tous droits réservés.
        </div>
      </div>
    </footer>
  );
}
