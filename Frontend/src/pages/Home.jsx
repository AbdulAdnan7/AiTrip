import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PaperPlane from '../components/PaperPlane';
import { NavLink } from 'react-router';




const Home = () => {
  return (
    <>
      <section className="relative h-[500px] overflow-hidden bg-slate-100 px-4 py-20">


        <div className=' z-100 inset-0'>
          <Canvas camera={{ position: [0, 0, 5], fov: 60 }} >
            <ambientLight intensity={0.5} />
            <directionalLight position={[3, 3, 3]} />
            <PaperPlane position={[0, 0, 0]} />
            <OrbitControls />
          </Canvas>
        </div>

        {/* Content */}
        <div className="relative z-10 text-left space-y-4 max-w-2xl">
          <h1 className="text-4xl font-bold text-gray-800">Plan Smarter, Travel Further</h1>
          <h4 className="text-md text-gray-600">
            Let AI craft your perfect itinerary — Personalized, Optimized, and Stress-free
          </h4>

          {/* Sunken Button */}
          <div className="inline-block p-2 rounded-xl bg-[#d4d4d8] shadow-[inset_6px_6px_10px_rgba(0,0,0,0.2),inset_-4px_-4px_8px_rgba(255,255,255,0.6)]">
             <NavLink to='/planner'>
            <button className="px-5 py-2 bg-purple-600 text-white font-medium rounded-lg shadow hover:bg-purple-700 transition-all duration-300 text-base">
              ✨ Build My Trip Now
            </button>
            </NavLink>
          </div>
        </div>
      </section>

    </>
  );
};

export default Home;
