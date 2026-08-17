import ProductsGrid from "@/components/templates/ProductsGrid";

export default async function ProductsPage() {
  const api_endpoint = "https://dummyjson.com/products";

  const res = await fetch(api_endpoint);

  const data = await res.json();

  const { total, products, limit } = data;

  return (
    <div>
      <h1>All Products</h1>

      <div className="p-4 border border-red-700 flex flex-wrap justify-center gap-4">
        <ProductsGrid products={products} />
      </div>

      <div className="my-5 text-center text-3xl">
        {limit}/{total}
      </div>
    </div>
  );
}
