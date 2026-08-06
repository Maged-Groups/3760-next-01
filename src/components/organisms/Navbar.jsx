import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center gap-4">
      <Link href="/" className="hover:text-gray-300">Home</Link>
      <Link href="/about" className="hover:text-gray-300">About</Link>
      <Link href="/products" className="hover:text-gray-300">Products</Link>
      <Link href="/services" className="hover:text-gray-300">Services</Link>
      <Link href="/contact-us" className="hover:text-gray-300">Contact</Link>
    </nav>
  );
}
