import React, { useRef, useState } from "react";
import { FaUserPlus, FaMagnifyingGlass, FaCircleCheck } from "react-icons/fa6";

import BloodRequestForm from "./BloodRequestForm";
import BloodNeedForm from "./BloodNeedForm";

const heroStats = [
  { number: "2,439", label: "Registered Donors" },
  { number: "64", label: "Districts Covered" },
  { number: "8", label: "Blood Groups" },
];

export default function Hero() {
  const [showRegisterForm, setShowRegisterForm] = useState(false);

  const [showBloodForm, setShowBloodForm] = useState(false);

  const formRef = useRef(null);

  // Show Register Form
  const handleRegisterClick = () => {
    setShowRegisterForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  // Show Blood Need Form
  const handleContinue = () => {
    setShowBloodForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden py-20 px-5"
        style={{
          background:
            "linear-gradient(135deg, #8B0000 0%, #C62828 55%, #B71C1C 100%)",
        }}
      >
        {/* Background Circles */}
        <div className="absolute -top-1/3 -right-10 w-[600px] h-[600px] rounded-full bg-white opacity-[0.03]" />

        <div className="absolute -bottom-1/3 -left-10 w-[400px] h-[400px] rounded-full bg-white opacity-[0.03]" />

        <div className="max-w-6xl mx-auto relative z-10">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-6">
            <FaCircleCheck className="text-red-200 text-xs" />

            <span className="text-red-100 text-xs font-medium">
              Bangladesh's #1 Blood Donation Platform
            </span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl lg:text-6xl font-extrabold text-white leading-tight mb-5 max-w-4xl">
            CONNECT BLOOD SEARCHERS WITH DONORS
          </h1>

          {/* Description */}
          <p className="text-white/80 text-lg leading-relaxed mb-10 max-w-2xl">
            Startedge is a real-time free platform to help blood searchers
            connect voluntary blood donors around Bangladesh — 24×7, always
            free.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 mb-14">
            {/* Donor Button */}
            <button className="bg-white text-red-600 font-bold px-8 py-4 rounded-xl hover:shadow-xl transition-all duration-300 flex items-center gap-2">
              <FaUserPlus />
              Join as a Donor
            </button>

            {/* Search Button */}
            <button
              onClick={handleRegisterClick}
              className="border border-white/40 text-white font-semibold px-8 py-4 rounded-xl hover:bg-white/10 transition-all duration-300 flex items-center gap-2"
            >
              <FaMagnifyingGlass />
              Search Donors
            </button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-12">
            {heroStats.map((stat) => (
              <div key={stat.label}>
                <h3 className="text-5xl font-extrabold text-white">
                  {stat.number}
                </h3>

                <p className="text-white/70 mt-2">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Registration Form */}
      {showRegisterForm && !showBloodForm && (
        <div ref={formRef}>
          <BloodRequestForm onContinue={handleContinue} />
        </div>
      )}

      {/* Blood Need Form */}
      {showBloodForm && (
        <div ref={formRef}>
          <BloodNeedForm />
        </div>
      )}
    </>
  );
}
