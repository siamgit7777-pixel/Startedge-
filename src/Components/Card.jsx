import React from "react";

export default function Card() {
  return (
    <div className="border border-gray-200 p-5 items-center rounded-lg mb-5 mx-2">
      <img
        className="w-3xs rounded-lg object-cover mb-3"
        src="https://adobebazar.com.bd/wp-content/uploads/2025/05/Canva.png"
        alt=""
      />
      <p>Canva pro (edu) for 6 month official all device support </p>
      <div className="flex items-center space-x-2">
        <span className="text-md md:text-lg font-bold">৳59</span>
        <span className="text-gray-500 line-through">৳500</span>
      </div>
      <button className="w-full bg-orange-500 text-white py-2 rounded mb-2 cursor-pointer">
        অর্ডার করুন
      </button>
      <button className="w-full border border-orange-500 text-orange-500 py-2 rounded cursor-pointer">
        আরও দেখুন
      </button>
    </div>
  );
}
