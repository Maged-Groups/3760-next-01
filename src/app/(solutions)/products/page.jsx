import Link from "next/link";

export default function ProductsPage() {
  return (
    <div>
      <h1>All Products</h1>

      <div className="flex gap-2">
        <Link href="/products/1" className="hover:text-gray-300">
          Product 1
        </Link>
        <Link href="/products/2" className="hover:text-gray-300">
          Product 2
        </Link>
        <Link href="/products/3" className="hover:text-gray-300">
          Product 3
        </Link>
      </div>
      <div className="flex flex-col gap-2">
        <ul>
          <li>Product 1</li>
          <li>Product 2</li>
          <li>Product 3</li>
        </ul>
      </div>
    </div>
  );
}
