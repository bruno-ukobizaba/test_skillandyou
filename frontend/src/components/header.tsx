import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold text-gray-800">
          MonEcommerce
        </Link>

        <nav className="hidden md:flex space-x-6">
          <Link
            href="/produits"
            className="text-gray-600 hover:text-gray-800">
            Produits
          </Link>
          <Link
            href="/about"
            className="text-gray-600 hover:text-gray-800">
            À propos
          </Link>
          <Link
            href="/contact"
            className="text-gray-600 hover:text-gray-800">
            Contact
          </Link>
        </nav>

        <div className="md:hidden">
          <button className="text-gray-600 focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
