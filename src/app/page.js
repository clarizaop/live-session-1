import Image from "next/image";
import {
  faShoppingCart,
  faSearch,
  faPersonRunning,
  faTableTennisPaddleBall,
  faBasketball,
  faFutbol,
  faTableTennis,
  faPersonSwimming,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const categories = [
  {
    name: "Running",
    icon: faPersonRunning,
  },
  {
    name: "Tennis",
    icon: faTableTennisPaddleBall,
  },
  {
    name: "Basketball",
    icon: faBasketball,
  },
  {
    name: "Football",
    icon: faFutbol,
  },
  {
    name: "Badminton",
    icon: faTableTennis,
  },
  {
    name: "Swimming",
    icon: faPersonSwimming,
  },
];

const products = [
  {
    id: 1,
    name: "SportOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 350.000",
    image: "/images/shoe.png",
  },
  {
    id: 2,
    name: "SportOn Rocket Tennis",
    category: "Tennis",
    price: "Rp. 750.000",
    image: "/images/racket.png",
  },
  {
    id: 3,
    name: "SportOn Slimfit T",
    category: "Running",
    price: "Rp. 199.000",
    image: "/images/product-1.png",
  },
  {
    id: 4,
    name: "SportOn Hyperdiscover",
    category: "Football",
    price: "Rp. 499.000",
    image: "/images/product-4.png",
  },
  {
    id: 5,
    name: "SportOn Hyperdiscover",
    category: "Football",
    price: "Rp. 499.000",
    image: "/images/product-4.png",
  },
  {
    id: 6,
    name: "SportOn Slimfit T",
    category: "Running",
    price: "Rp. 199.000",
    image: "/images/product-1.png",
  },
  {
    id: 7,
    name: "SportOn Hyperfast Shoes",
    category: "Running",
    price: "Rp. 350.000",
    image: "/images/shoe.png",
  },
  {
    id: 8,
    name: "SportOn Rocket Tennis",
    category: "Tennis",
    price: "Rp. 750.000",
    image: "/images/racket.png",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      {/* ================= NAVBAR ================= */}
      <div className="w-full mx-auto">
        <nav className="flex items-center justify-between px-10 py-6">
          {/* Logo */}
          <div className="text-3xl font-extrabold tracking-wide">
            <Image src="/images/logo.svg" width="180" height="300" />
          </div>

          {/* Menu */}
          <ul className="flex items-center gap-12 text-[16px] font-medium">
            <li className="relative cursor-pointer">
              Home
              <span className="absolute left-1/2 -bottom-2 h-[2px] w-8 -translate-x-1/2 rounded-full bg-[#FF5F3F]"></span>
            </li>

            <li className="cursor-pointer transition hover:text-[#FF5F3F]">
              Category
            </li>

            <li className="cursor-pointer transition hover:text-[#FF5F3F]">
              Explore Products
            </li>
          </ul>

          {/* Icon */}
          <div className="flex items-center gap-6">
            <button className="w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-[#FF5F3F] hover:text-white transition">
              <FontAwesomeIcon icon={faSearch} className="text-lg" />
            </button>

            <button className="relative w-8 h-8 rounded-full bg-white shadow-sm flex items-center justify-center hover:bg-[#FF5F3F] hover:text-white transition">
              <FontAwesomeIcon icon={faShoppingCart} className="text-lg" />

              <span className="absolute -top-3 -right-3 bg-[#FF5F3F] text-white text-[18px] w-6 h-6 rounded-full flex items-center justify-center">
                2
              </span>
            </button>
          </div>
        </nav>

        {/* ================= HERO ================= */}
        <section className="max-w-7xl mx-auto px-8 pt-16 pb-24">
          <div className="grid grid-cols-2 items-center">
            {/* LEFT */}

            {/* Ball */}
            <Image
              src="/images/ball.png"
              alt="Ball"
              width={480}
              height={60}
              className="opacity-20"
            />
            <div className="absolute">
              <p className="text-[#FF5F3F] italic text-sm mb-4">
                Friday Sale, 50%
              </p>

              <h1 className="text-7xl font-extrabold leading-none">
                <span className="text-black">WEAR YOUR</span>

                <br />

                <span className="text-gray-600 italic">TOP-QUALITY</span>

                <br />

                <span className="text-gray-400">SPORTSWEAR</span>
              </h1>

              <p className="mt-8 text-gray-600 leading-7 max-w-md">
                Engineered for endurance and designed for speed. Experience gear
                that moves as fast as you do. Premium fabrics. Unmatched
                comfort.
              </p>

              <div className="mt-10 flex items-center gap-8">
                <button className="bg-[#FF5F3F] text-white px-8 py-4 rounded">
                  Explore More
                </button>

                <button className="font-medium">Watch Video ▶</button>
              </div>
            </div>

            {/* RIGHT */}
            <div className="relative h-[600px]">
              {/* Ornament */}
              <Image
                src="/images/img-ornament-hero.svg"
                alt="Ornament"
                width={400}
                height={220}
                className="absolute -right-20 top-20"
              />

              {/* Racket */}
              <Image
                src="/images/racket.png"
                alt="Racket"
                width={470}
                height={360}
                className="absolute top-2 right-16 z-20"
              />

              {/* Shoe */}
              <Image
                src="/images/shoe.png"
                alt="Shoe"
                width={420}
                height={320}
                className="absolute bottom-0 right-2 z-30"
              />
            </div>
          </div>
        </section>

        {/* ================= Categories ================= */}
        <section className="max-w-7xl mx-auto px-8 py-20">
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-2xl font-bold">Browse By Categories</h2>

            <button className="text-[#FF5F3F] text-sm">
              See All Categories →
            </button>
          </div>

          <div className="grid grid-cols-6 gap-6">
            {categories.map((category) => (
              <div
                key={category.name}
                className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 flex flex-col items-center justify-center hover:shadow-lg transition cursor-pointer"
              >
                <FontAwesomeIcon
                  icon={category.icon}
                  className="w-10 h-10 mb-4"
                />

                <p className="font-medium text-[#FF5F3F]">{category.name}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ================= PRODUCTS ================= */}
        <section className="max-w-7xl mx-auto px-8 py-24">
          <h2 className="text-center text-3xl font-extrabold mb-12">
            <span className="text-[#FF5F3F]">OUR</span>{" "}
            <span className="text-black">PRODUCTS</span>
          </h2>

          <div className="grid grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-lg transition"
              >
                <div className="relative">
                  <Image
                    src={product.image}
                    alt={product.name}
                    width={300}
                    height={300}
                    className="w-full h-56 object-contain bg-[#FAFAFA]"
                  />

                  <span className="absolute top-3 right-3 bg-[#FF5F3F] text-white text-xs w-6 h-6 rounded flex items-center justify-center">
                    +
                  </span>
                </div>

                <div className="p-4">
                  <h3 className="font-semibold text-sm">{product.name}</h3>

                  <p className="text-gray-400 text-xs mt-1">
                    {product.category}
                  </p>

                  <p className="text-[#FF5F3F] font-semibold mt-3">
                    {product.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ================= FOOTER ================= */}
        <footer className="bg-[#1B1918] text-white mt-24">
          <div className="max-w-7xl mx-auto px-8 py-16">
            {/* Top Footer */}
            <div className="grid grid-cols-3 gap-16">
              {/* Logo */}
              <div>
                <Image src="/images/logo-white.svg" width="180" height="300" />

                <p className="mt-5 text-gray-400 leading-7 text-sm">
                  Engineered for endurance and designed for speed. Experience
                  gear that moves as fast as you do.
                </p>
              </div>

              {/* Menu */}
              <div className="flex justify-center">
                <ul className="space-y-4 text-sm">
                  <li className="font-semibold mb-6">Menu</li>

                  <li className="hover:text-[#FF5F3F] cursor-pointer">Home</li>

                  <li className="hover:text-[#FF5F3F] cursor-pointer">
                    Categories
                  </li>

                  <li className="hover:text-[#FF5F3F] cursor-pointer">
                    Explore Products
                  </li>

                  <li className="hover:text-[#FF5F3F] cursor-pointer">
                    About Us
                  </li>
                </ul>
              </div>

              {/* Social */}
              <div className="flex justify-end">
                <ul className="space-y-4 text-sm">
                  <li className="font-semibold mb-6">Social</li>

                  <li>Instagram</li>
                  <li>Facebook</li>
                  <li>TikTok</li>
                  <li>YouTube</li>
                </ul>
              </div>
            </div>

            {/* Line */}
            <div className="border-t border-gray-700 my-10"></div>

            {/* Bottom Footer */}
            <div className="flex justify-between text-sm text-gray-400">
              <p>SportOn © 2025 All Rights Reserved.</p>

              <div className="flex gap-10">
                <p className="hover:text-white cursor-pointer">
                  Privacy Policy
                </p>

                <p className="hover:text-white cursor-pointer">
                  Terms Conditions
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </main>
  );
}
