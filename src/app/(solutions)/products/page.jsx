import Icon from "@/components/atoms/Icon";
import Link from "next/link";

const api_endpoint = "https://dummyjson.com/products";

const res = await fetch(api_endpoint);

const data = await res.json();

const products = data.products;

console.log(api_endpoint);
console.log(res);
console.log(data);

export default function ProductsPage() {
  console.log(products);

  const productCard = (product) => {
    const stars = Math.ceil(product.rating);

    return (
      <div className="border shadow rounded m-2 bg-gray-100 p-2 max-w-md text-gray-800">
        <div className="flex gap-2">
          <h2 className="text-gray-800 text-xl font-black">{product.title}</h2>
          {stars} <Icon name="star-full" color="gold" />
        </div>

        <img src={product.thumbnail} alt="" />
      </div>
    );
  };

  return (
    <div>
      <h1>All Products</h1>

      <div className="p-4 border border-red-700 flex flex-wrap justify-center">
        {products.map(productCard)}
      </div>
    </div>
  );
}
