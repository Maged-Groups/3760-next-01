"use client";

import productCard from "@/components/organisms/ProductCard";

export default function ProductsGrid({ products }) {
  return products.map(productCard);
}
