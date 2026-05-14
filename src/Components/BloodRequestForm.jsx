import React from "react";
import {
  FiUser,
  FiPhone,
  FiMapPin,
  FiDroplet,
  FiBriefcase,
  FiCalendar,
  FiMail,
  FiLock,
} from "react-icons/fi";

const BloodRequestForm = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-red-100 flex items-center justify-center p-6">
      <div className="w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-red-100 overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-red-600 to-red-500 px-8 py-7 text-white">
          <h1 className="text-3xl font-bold">Blood Donor Information</h1>

          <p className="text-red-100 mt-2">
            Fill up the form to request blood donation support
          </p>
        </div>

        {/* Form */}
        <form className="p-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Full Name
            </label>

            <div className="relative">
              <FiUser className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="text"
                placeholder="Enter full name"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Location
            </label>

            <div className="relative">
              <FiMapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="text"
                placeholder="City, Area"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Phone Number
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

          {/* Email */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Email Address
            </label>

            <div className="relative">
              <FiMail className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Password
            </label>

            <div className="relative">
              <FiLock className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="password"
                placeholder="Enter password"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Blood Group */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Blood Group
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

          {/* Occupation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Occupation
            </label>

            <div className="relative">
              <FiBriefcase className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="text"
                placeholder="Student, Business etc."
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Last Donation */}
          <div>
            <label className="block text-sm font-semibold text-gray-700 mb-2">
              Last Donation Date
            </label>

            <div className="relative">
              <FiCalendar className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" />

              <input
                type="date"
                className="w-full h-14 pl-12 pr-4 rounded-xl border border-gray-200 focus:border-red-500 focus:ring-4 focus:ring-red-100 outline-none transition-all"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="md:col-span-2 pt-4">
            <button
              type="submit"
              className="w-full h-14 rounded-xl bg-gradient-to-r from-red-600 to-red-500 hover:from-red-700 hover:to-red-600 text-white font-semibold text-lg shadow-lg hover:shadow-red-200 transition-all duration-300"
            >
              Submit Blood Request
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BloodRequestForm;
