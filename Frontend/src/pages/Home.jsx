import React from 'react'

const Home = () => {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-slate-100 px-4 py-20">
        {/* Grid Background Lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] [background-size:40px_40px] z-0" />

        {/* Content */}
        <div className="relative z-10 text-left space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800">Plan Smarter, Travel Further</h1>
          <h4 className="text-md text-gray-600">
            Let AI craft your perfect itinerary — Personalized, Optimized, and Stress-free
          </h4>

          {/* Sunken Button */}
   <div className="inline-block p-2 rounded-xl bg-[#d4d4d8] shadow-[inset_6px_6px_10px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.6)]">
  <button className="px-5 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition-all duration-300 text-base">
    ✨ Build My Trip Now
  </button>
</div>



        </div>
      </section>
    </>
  );
};

export default Home;
