import Link from "next/link";
import Icon from "../atoms/Icon";

export default function Navbar() {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-between items-center gap-4">
      <Link href="/" className="hover:text-gray-300 flex gap-2 items-center">
        <Icon name="home" color="blue" size={30} className="border" />
        Home
      </Link>

      <Link href="/about" className="hover:text-gray-300">
        About
      </Link>

      <Link href="/products" className="hover:text-gray-300">
        <Icon name="shop" />
        Products
      </Link>

      <Link href="/services" className="hover:text-gray-300">
        Services
      </Link>

      <Link href="/contact-us" className="hover:text-gray-300">
        Contact
      </Link>
    </nav>
  );
}
