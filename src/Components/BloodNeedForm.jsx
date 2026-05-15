import React from "react";
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiDroplet,
  FiCalendar,
  FiClock,
  FiHome,
  FiFileText,
} from "react-icons/fi";

const BloodNeedForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-700 to-red-500 px-8 py-7 text-white">
          <h1 className="text-3xl font-bold">Blood Request Form</h1>

          <p className="text-red-100 mt-2">
            Fill up the form to request emergency blood support
          </p>
        </div>

        {/* Form */}
        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Patient Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Patient Name
            </label>

            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="text"
                placeholder="Enter patient name"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Required Blood Group
            </label>

            <div className="relative">
              <FiDroplet className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <select className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all appearance-none bg-white">
                <option>Select blood group</option>
                <option>A+</option>
                <option>A-</option>
                <option>B+</option>
                <option>B-</option>
                <option>AB+</option>
                <option>AB-</option>
                <option>O+</option>
                <option>O-</option>
              </select>
            </div>
          </div>

          {/* Contact Number */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Contact Number
            </label>

            <div className="relative">
              <FiPhone className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="tel"
                placeholder="+8801XXXXXXXXX"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Hospital */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hospital Name
            </label>

            <div className="relative">
              <FiHome className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="text"
                placeholder="Enter hospital name"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Hospital Location
            </label>

            <div className="relative">
              <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="text"
                placeholder="City / Area"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Date */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Needed Date
            </label>

            <div className="relative">
              <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="date"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Time */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Needed Time
            </label>

            <div className="relative">
              <FiClock className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="time"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Extra Notes */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Extra Notes
            </label>

            <div className="relative">
              <FiFileText className="absolute left-4 top-5 text-red-500" />

              <textarea
                rows="1"
                placeholder="Write important information..."
                className="w-full pl-12 pr-4 py-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-red-700 to-red-500 hover:from-red-800 hover:to-red-600 text-white font-semibold text-lg shadow-lg transition-all duration-300"
            >
              Submit Blood Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodNeedForm;
