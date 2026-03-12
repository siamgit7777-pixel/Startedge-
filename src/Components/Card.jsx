import React from "react";
import canvaImg from "../assets/WhatsApp Image 2026-03-09 at 12.38.48 AM.jpeg";

export default function Card({ prod }) {
  console.log(prod);

  return (
    <div className="border border-gray-200 p-5 items-center rounded-lg mb-5 mx-2 flex flex-col items-center justify-center">
      <img
        className="w-3xs rounded-lg object-cover mb-3 "
        src={canvaImg}
        alt=""
      />
      <p className="text-center line-clamp-2" title={prod.prodTitle}>
        {prod.prodTitle}
      </p>
      <div className="flex items-center space-x-2">
        <span className="text-md md:text-lg font-bold">{prod.prodPrice}</span>
        <span className="text-gray-500 line-through">{prod.prodOldPrice}</span>
      </div>
      <button className="w-full bg-orange-500 text-white py-2 rounded mb-2 cursor-pointer">
        <a
          href={`https://wa.me/8801625239776?text=আমি%20এই%20প্রোডাক্টটি%20অর্ডার%20করতে%20চাই:%20${encodeURIComponent(prod.prodTitle)}`}
          target="_blank"
        >
          অর্ডার করুন
        </a>
      </button>
      {/* <button className="w-full border border-orange-500 text-orange-500 py-2 rounded cursor-pointer">
        আরও দেখুন
      </button> */}
    </div>
  );
}
