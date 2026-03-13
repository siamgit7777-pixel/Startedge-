export default function Card({ prod }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 mb-5 mx-2">
      <img className="w-full h-48 object-cover" src={prod.prodImg} alt="" />

      <div className="p-5">
        <p
          className="text-lg font-semibold mb-2 line-clamp-2"
          title={prod.prodTitle}
        >
          {prod.prodTitle}
        </p>

        <div className="flex items-center space-x-2 mb-4">
          <span className="text-lg font-bold text-gray-900">
            {prod.prodPrice}
          </span>
          <span className="text-gray-400 line-through">
            {prod.prodOldPrice}
          </span>
        </div>

        <div className="">
          <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg cursor-pointer w-full">
            <a
              href={`https://wa.me/8801625239776?text=আমি%20এই%20প্রোডাক্টটি%20অর্ডার%20করতে%20চাই:%20${encodeURIComponent(prod.prodTitle)}`}
              target="_blank"
            >
              অর্ডার করুন
            </a>
          </button>
        </div>
      </div>
    </div>
  );
}
