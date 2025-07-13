import React from 'react'
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import PaperPlane from '../components/PaperPlane';
import { NavLink } from 'react-router';
import { Sparkles, MapPin, Plane, icons, SlidersHorizontal, Wallet, CheckCircle, Map } from 'lucide-react';





const Home = () => {

  const features = [
    {
      icon: <Sparkles className='w-8 h-8 text-purple-600' />,
      title: 'AI-Powered Personalization',
      description: 'Every trip istailored using smart AI that adapts to your interests, travel style, and budget',
    },
    {
      icon: <Map className='w-8 h-8 text-purple-600' />,
      title: 'Detailed Daily Plans',
      description: 'Every day is broken down into morning, afternoon, and evening  - no more guesswork',
    },
    {
      icon: <CheckCircle className='w-8 h-8 text-purple-600 shadow-md' />,
      title: 'Budget-Friendly Suggestions',
      description: 'Stay on budget with local recommandations for food, hotels, and experiences'
    }
  ]

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

{/** How It Works Section */}
<section className="bg-gray-50 py-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800">🚀 How It Works</h2>
    <p className="text-gray-600 mt-2">Your trip planning journey, step by step</p>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto px-6">
    {steps.map((step, index) => (
      <div
        key={index}
        className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all space-y-3 text-center"
      >
        <div className="flex justify-center">{step.icon}</div>
        <h3 className="text-lg font-semibold">{step.title}</h3>
        <p className="text-sm text-gray-600">{step.description}</p>
      </div>
    ))}
  </div>
</section>

{/** Why Choose Us Section */}
<section className="bg-white py-16">
  <div className="text-center mb-12">
    <h2 className="text-3xl font-bold text-gray-800">✨ Why Choose Us?</h2>
    <p className="text-gray-600 mt-2">Here’s what makes us different</p>
  </div>
  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
    {features.map((feature, index) => (
      <div
        key={index}
        className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all space-y-3 text-center"
      >
        <div className="flex justify-center">{feature.icon}</div>
        <h3 className="text-lg font-semibold">{feature.title}</h3>
        <p className="text-sm text-gray-600">{feature.description}</p>
      </div>
    ))}
  </div>
</section>

    </>
  );
};

export default Home;
