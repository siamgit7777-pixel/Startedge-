import React, { useRef, useState } from "react";
import { FaDroplet, FaUserPlus } from "react-icons/fa6";
import BloodRequestForm from "./BloodRequestForm";

export default function CTA() {
  const [showForm, setShowForm] = useState(false);

  const formRef = useRef(null);

  const handleShowForm = () => {
    setShowForm(true);

    setTimeout(() => {
      formRef.current?.scrollIntoView({
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <>
      {/* CTA Section */}
      <section id="donor-section" className="py-20 px-5 bg-gray-900">
        <div className="max-w-2xl mx-auto text-center">
          <FaDroplet className="text-red-500 text-4xl mx-auto mb-5" />

          <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4 uppercase">
            READY TO SAVE A LIFE?
          </h2>

          <p className="text-gray-400 mb-10">
            Join our growing network of voluntary blood donors across
            Bangladesh.
          </p>

          <button
            onClick={handleShowForm}
            className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-xl font-semibold flex items-center gap-2 mx-auto transition-all duration-300"
          >
            <FaUserPlus />
            Register as Donor
          </button>
        </div>
      </section>

      {/* Form Section */}
      {showForm && (
        <div ref={formRef}>
          <BloodRequestForm />
        </div>
      )}
    </>
  );
}
