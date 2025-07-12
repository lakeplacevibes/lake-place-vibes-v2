import React from "react";

export default function LakePlaceVibesHome() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <header className="relative w-full h-[70vh] bg-cover bg-center" style={{ backgroundImage: "url('/hero-lake-banner.jpg')" }}>
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-6xl font-bold drop-shadow-md">Lake Place Vibes</h1>
            <p className="mt-4 text-xl font-light drop-shadow">Fishing • Boating • Family Time</p>
          </div>
        </div>
      </header>

      <section className="max-w-4xl mx-auto py-16 px-4">
        <h2 className="text-4xl font-semibold text-blue-800 mb-6 text-center">About Us</h2>
        <p className="text-lg text-gray-700 text-center">
          We’re a small family brand inspired by dockside coffee, sunset cruises, fishing poles,
          and floating the day away. We design laid-back apparel that celebrates everything we love:
          boating, fishing, pontoon life, and making memories with the people who matter most.
        </p>
      </section>

      <section className="bg-blue-50 py-16 px-4">
        <h2 className="text-4xl font-semibold text-blue-800 mb-10 text-center">Shop Our Vibes</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src="/mockup-dock-days.png" alt="Dock Days Shirt" className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">Dock Days Tee</h3>
              <p className="text-blue-600">$24.99</p>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src="/mockup-pontoon-happy-hour.png" alt="Pontoon Shirt" className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">Happy Hour Pontoon Tee</h3>
              <p className="text-blue-600">$24.99</p>
            </div>
          </div>
          <div className="bg-white shadow-xl rounded-2xl overflow-hidden">
            <img src="/mockup-lake-fishing.png" alt="Fishing Shirt" className="w-full h-64 object-cover" />
            <div className="p-4 text-center">
              <h3 className="text-xl font-bold">Lake Place Fishing Tee</h3>
              <p className="text-blue-600">$24.99</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-gradient-to-t from-blue-100 to-white text-center">
        <h2 className="text-4xl font-semibold text-blue-800 mb-4">Join the Crew</h2>
        <p className="text-gray-700 mb-6 text-lg">
          Stay updated with new designs, lake memes, and special offers.
        </p>
        <div className="flex justify-center">
          <input
            type="email"
            placeholder="Your email address"
            className="px-4 py-2 rounded-xl border w-64"
          />
          <button className="ml-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700">
            Sign Up
          </button>
        </div>
      </section>

      <footer className="text-center text-blue-600 py-8 bg-white border-t">
        © 2025 Lake Place Vibes. All rights reserved.
      </footer>
    </div>
  );
}
