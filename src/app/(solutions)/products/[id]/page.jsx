import {
  FiShoppingCart,
  FiHeart,
  FiStar,
  FiCheck,
  FiTruck,
  FiRefreshCw,
  FiPlus,
  FiMinus,
} from "react-icons/fi";

export default async function ProductPage({ params, searchParams }) {
  const { id } = await params;

  const { comments, photos, allow_comment } = await searchParams;

  console.log(id, comments, photos, allow_comment);

  // const api_endpoint = `https://dummyjson.com/products/${id}`;
  const api_endpoint = "https://dummyjson.com/products/" + id;
  console.log({ api_endpoint });

  const res = await fetch(api_endpoint);
  console.log({ res });

  const product = await res.json();
  console.log({ product });

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-500 via-yellow-500 to-pink-500 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Image Section */}
          <div className="relative p-6">
            <div className="absolute top-4 left-4 bg-gradient-to-r from-orange-400 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg">
              -{product.discountPercentage}%
            </div>
            <img
              src={product.thumbnail}
              alt={product.title}
              className="w-full h-80 object-cover rounded-2xl shadow-lg transition-transform duration-300 hover:scale-105"
            />
            <div className="flex gap-3 mt-4">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`${product.title} ${index + 1}`}
                  className="w-16 h-16 object-cover rounded-lg cursor-pointer border-2 border-transparent hover:border-purple-500 transition-all"
                />
              ))}
            </div>
          </div>

          {/* Details Section */}
          <div className="p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                {product.brand && (
                  <span className="text-sm font-medium text-purple-600 bg-purple-100 px-3 py-1 rounded-full">
                    {product.brand}
                  </span>
                )}

                {product.category && (
                  <span className="text-sm font-medium text-indigo-600 bg-indigo-100 px-3 py-1 rounded-full">
                    {product.category}
                  </span>
                )}
              </div>
              <h1 className="text-3xl font-extrabold text-gray-800 mb-3">
                {product.title}
              </h1>
              <div className="flex items-center gap-2 mb-4">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <FiStar
                      key={i}
                      className={
                        i < Math.round(product.rating)
                          ? "fill-current"
                          : "text-gray-300"
                      }
                      size={18}
                    />
                  ))}
                </div>
                <span className="text-sm text-gray-500">
                  ({product.rating})
                </span>
              </div>
              <p className="text-gray-600 leading-relaxed mb-5">
                {product.description}
              </p>

              <div className="flex items-end gap-3 mb-5">
                <span className="text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
                  ${product.price}
                </span>
                <span className="text-lg text-gray-400 line-through">
                  $
                  {(
                    product.price /
                    (1 - product.discountPercentage / 100)
                  ).toFixed(2)}
                </span>
              </div>

              <div className="flex items-center gap-2 mb-6">
                <span
                  className={`px-3 py-1 rounded-full text-sm font-semibold ${product.stock > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
                >
                  {product.stock > 0
                    ? `In Stock (${product.stock})`
                    : "Out of Stock"}
                </span>
                <span className="px-3 py-1 rounded-full text-sm font-semibold bg-blue-100 text-blue-700">
                  Free Shipping
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-6">
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                  <FiMinus />
                </button>
                <span className="text-xl font-bold text-gray-800">1</span>
                <button className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-200 hover:bg-gray-300 transition-colors">
                  <FiPlus />
                </button>
              </div>

              {/* Add to cart + Wish list */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button className="flex-1 flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold py-3 px-6 rounded-xl shadow-lg hover:shadow-xl transition-all hover:scale-[1.02]">
                  <FiShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="flex items-center justify-center gap-2 bg-white border-2 border-purple-200 text-purple-600 font-bold py-3 px-6 rounded-xl hover:bg-purple-50 transition-all">
                  <FiHeart size={20} />
                  Wishlist
                </button>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 grid grid-cols-3 gap-4 text-center">
              <div className="flex flex-col items-center gap-1 text-gray-600">
                <FiTruck size={24} className="text-purple-500" />
                <span className="text-xs font-medium">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-gray-600">
                <FiRefreshCw size={24} className="text-pink-500" />
                <span className="text-xs font-medium">Easy Returns</span>
              </div>
              <div className="flex flex-col items-center gap-1 text-gray-600">
                <FiCheck size={24} className="text-indigo-500" />
                <span className="text-xs font-medium">2-Year Warranty</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
