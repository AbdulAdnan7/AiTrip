import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PaperPlane from '../components/PaperPlane';
import { NavLink } from 'react-router';
import { Sparkles, MapPin, Plane, icons, SlidersHorizontal } from 'lucide-react';





const Home = () => {

  const steps = [
    {
      title: 'Enter Trip Details',
      description: 'Tell us where you want to go, your travel dates, budget, and interests',
      icon: <MapPin className='w-8 h-8 text-purple-600' />
    }, 
    {
      title: 'AI Plans Your Itinerary',
      description: 'Our AI analyzes your preferences and budget to craft a personalized plan.',
      icon: <Sparkles className='w-8 h-8 text-purple-600' />
    },
    {
      title: 'Get Daily Breakdown',
      description: 'See a day-by-day itinerary with places, food, and local experiences.',
      icon: <Plane className='w-8 h-8 text-purple-600' />
    },
    {
      title: 'Customize Your Preferences',
      description: 'Select your travel interests, group size, and budget --- the AI tailors the plan just foryou',
      icon: <SlidersHorizontal className='w-8 h-8 text-purple-600' />
    }
  ]


  return (
    <>
    {/** For Hero Section */}
      <section className="relative h-[500px] overflow-hidden bg-white px-4 py-20">


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

{/** For How it Works Section */}
      <section className='bg-white shadow-md h-[400px]'>
        <div className='flex justify-center mt-4'>
          <h1 className='text-2xl font-semibold'>How it Works</h1>
        </div>
        <div className='grid md:grid-cols-2 lg:grids-cols-4 gap-6 max-w-6xl mx-auto'>
          {
            steps.map((step, index) => (
              <div key={index} className='bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition-all space-y-3 text-center'>
                <div className='flex justify-center'>
                  {step.icon}
                </div>
                  <h3 className='text-lg font-semibold'>{step.title}</h3>
                  <p className='text-sm text-gray-600'>{step.description}</p>
                </div>
            ))

          }
        </div>

       
      </section>

      {/** For Testimonals */}
        <section className='bg-white shadow-md h-[400px]'>

        </section>
    </>
  );
};

export default Home;
