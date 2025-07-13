import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useLocation, useNavigate } from 'react-router';

const TripResult = () => {
    const location = useLocation()
    const navigate = useNavigate()
   const itinerary = location.state?.itinerary;

  return (
    <>
      <section className='max-w-4xl mx-auto px-6 bg-white shadow-md rounded-md mt-10'>
        <div className='flex justify-between items-center mb-6'>
            <h1 className='text-2xl font-semibold text-purple-700'>Your Trip Itinerary</h1>
            <button onClick={() => navigate('/planner')} className='bg-purple-200 hover:bg-purple-300 text-sm font-medium px-4 py-2 rounded'>Plan Another Trip</button>
        </div>

        <div className='prose prose-lg leading-12 max-w-none text-gray-800'>
    <ReactMarkdown>{itinerary}</ReactMarkdown>
        </div>
      </section>
    </>
  )
}

export default TripResult
