import React, { useState } from "react";
import { Phone } from "lucide-react";

function FloatingCallButton() {
  const [showInfo, setShowInfo] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      {/* Info Box */}
      <div
        className={`bg-white shadow-xl rounded-2xl px-5 py-3 transition-all duration-300 border
        ${showInfo ? "opacity-100 translate-x-0" : "opacity-0 translate-x-5 pointer-events-none"}`}
      >
        <h3 className="text-gray-700 font-semibold text-lg leading-5">
          Hotline Number
        </h3>

        <p className="text-center text-gray-800 font-bold text-2xl leading-7">
          +8801869967777
        </p>

        <p className="text-gray-500 text-sm text-center">
          (12.00 AM to 12.00 PM)
        </p>
      </div>

      {/* Call Button */}
      <a
        href="tel:+8801869967777"
        onMouseEnter={() => setShowInfo(true)}
        onMouseLeave={() => setShowInfo(false)}
        className="w-16 h-16 rounded-full bg-red-600 hover:bg-red-700 
        flex items-center justify-center shadow-2xl transition-all duration-300"
      >
        <Phone className="text-white w-8 h-8" />
      </a>
    </div>
  );
}

export default FloatingCallButton;
