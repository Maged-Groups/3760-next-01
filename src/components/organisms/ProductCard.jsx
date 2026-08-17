"use client";

import { useState } from "react";

import Link from "next/link";
import {
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiEye,
  FiArrowUpRight,
} from "react-icons/fi";

const productCard = ({
  rating,
  id,
  title,
  category,
  price,
  thumbnail,
  brand,
  image,
  description,
}) => {
  const [count, setCount] = useState(0);
  const stars = Math.ceil(rating);

  const increase = () => setCount(count + 1);
  const decrease = () => setCount(count - 1);

  return (
    <article
      key={id}
      className="group relative w-full max-w-sm overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-purple-200/40"
    >
      {/* Gradient Glow */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full bg-purple-400/20 blur-3xl transition-all duration-700 group-hover:bg-pink-400/30" />

      {/* Image Section */}
      <div className="relative mx-3 mt-3 overflow-hidden rounded-2xl bg-gradient-to-br from-slate-50 via-white to-purple-50">
        {/* Category */}
        <div className="absolute left-4 top-4 z-10 rounded-full bg-white/80 px-3 py-1.5 text-xs font-bold uppercase tracking-wider text-purple-600 shadow-sm backdrop-blur-md">
          {category}
        </div>

        {/* Favorite */}
        <button
          type="button"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/80 text-slate-500 shadow-sm backdrop-blur-md transition-all duration-300 hover:scale-110 hover:bg-pink-50 hover:text-pink-500"
        >
          <FiHeart className="text-lg transition-transform duration-300 group-hover:scale-110" />
        </button>

        {/* Product Image */}
        <div className="flex h-72 items-center justify-center p-8">
          <img
            src={thumbnail}
            alt={title}
            className="h-full w-full object-contain drop-shadow-xl transition-all duration-700 ease-out group-hover:scale-110 group-hover:-rotate-3"
          />
        </div>

        {/* Hover Actions */}
        <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 translate-y-16 gap-2 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <Link
            href={`/products/${id}`}
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-white text-slate-700 shadow-lg transition-all duration-300 hover:scale-110 hover:bg-purple-600 hover:text-white"
          >
            <FiEye />
          </Link>

          <button
            type="button"
            className="flex h-11 w-11 items-center justify-center rounded-full bg-purple-600 text-white shadow-lg transition-all duration-300 hover:scale-110 hover:bg-purple-700"
          >
            <FiShoppingBag />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Rating */}
        <div className="mb-3 flex items-center gap-2">
          <div className="flex items-center gap-0.5 rounded-full bg-amber-50 px-2.5 py-1 text-amber-500">
            <FiStar className="fill-current text-sm" />
            <span className="ml-1 text-xs font-bold">{rating.rate}</span>
          </div>

          <span className="text-xs text-slate-400">
            ({rating.count} reviews)
          </span>
        </div>

        {/* Title */}
        <div className="flex items-start justify-between gap-3">
          <h2 className="line-clamp-2 min-h-[3.5rem] text-lg font-bold leading-7 text-slate-800 transition-colors duration-300 group-hover:text-purple-600">
            {title}
          </h2>

          <FiArrowUpRight className="mt-1 shrink-0 text-xl text-slate-300 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-500" />
        </div>

        {/* Description */}
        <p className="mt-2 line-clamp-2 text-sm leading-6 text-slate-500">
          {description}
        </p>

        {/* Bottom */}
        <div className="mt-5 flex items-end justify-between border-t border-slate-100 pt-5">
          <div>
            <span className="block text-xs font-medium uppercase tracking-wider text-slate-400">
              Price
            </span>

            <div className="mt-1 flex items-baseline gap-1">
              <span className="text-2xl font-black text-slate-900">
                ${price}
              </span>
            </div>
          </div>
          {/* Add to Cart */}

          {count === 0 ? (
            <button
              onClick={increase}
              className="px-3 py-1 rounded text-white bg-sky-700 hover:brightness-50"
            >
              Add to Cart
            </button>
          ) : (
            <div className="p-3 flex gap-4">
              <button
                onClick={increase}
                className="px-3 py-1 rounded text-white bg-green-700 hover:brightness-50"
              >
                +
              </button>
              <span className="text-sky-700">{count}</span>
              <button
                onClick={decrease}
                className="px-3 py-1 rounded text-white bg-red-700 hover:brightness-50"
              >
                -
              </button>
            </div>
          )}
        </div>
      </div>
    </article>
  );
};

export default productCard;
