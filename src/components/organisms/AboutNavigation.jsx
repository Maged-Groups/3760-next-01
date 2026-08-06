import Link from "next/link";

export default function AboutNavigation() {
  return (
    <nav className="bg-indigo-500 text-white p-4 flex justify-between items-center gap-4">
        <Link href="/about" className="hover:text-gray-300">About</Link>
        <Link href="/about/mission" className="hover:text-gray-300">Mission</Link>
        <Link href="/about/vision" className="hover:text-gray-300">Vision</Link>
    </nav>
  );
}