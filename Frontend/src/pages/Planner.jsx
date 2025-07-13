import { useScroll } from '@react-three/drei'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const Planner = () => {
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        destination: '',
        startDate: '',
        endDate: '',
        budget: '',
        travelers: 1,
        interests: [],
        days: 0,
    });


    const navigate = useNavigate()

    // A universal function to handle changes for all input fields (like destination, dates, amount etc)
    const handleInputChange = (e) => {
        //Destructuring the 'name' and 'value' of the input fields that trigereed an event
        //for Example, if user types in destination input field
        // name = 'destination', value = 'paris'
        const { name, value } = e.target;

        //updating the formDate with new input values
        setFormData((prev) => ({
            // Spreading the previous formData to keep all other values unchanged
            ...prev,
            //Dynamically update only the field that changed using the 'name' as key
            //This means if name = 'budget', it updates the budget field
            [name]: value,
        }))
    }

    const handleInterestClicks = (interest) => {
        //created a function named handleInterestClicks where we a passing a parameter named interest which is the checkbox varibale name

        //fetching setFormData latest values
        setFormData((prev) => {

            //then checking if the latest setForm.interests have interest checkbox checked values
            const alreadySelected = prev.interests.includes(interest);

            //if it already has
            if (alreadySelected) {
                //then we are using filter to create a new array that don't have checked interest. then it will be removed bcz of filter
                const updated = prev.interests.filter(i => i !== interest);
                //then we are returning whole formData then in interests we are replacing old one which are filtered
                return { ...prev, interests: updated };
            } else {
                //if not included then we are creating new array with ...prev.interests and then replacing the selected or checked checkbox
                const updated = [...prev.interests, interest];
                //then we are returning a object where we are spreading prev formData values and replacing interests value with updated array
                return { ...prev, interests: updated }
            }

        })
    }

    //for formSubmit 
    const handleSubmit = async (e) => {
        e.preventDefault(); //prevent page from loading
        setLoading(true)

        try {


            const start = new Date(formData.startDate);
            const end = new Date(formData.endDate);
            const daysDiff = Math.ceil((end - start) / (1000 * 60 * 60 * 24) + 1);

            if (daysDiff <= 0 || isNaN(daysDiff)) {
                alert('Please select valid start and end dates,')
                return
            }

            //preparing the payload (so we can stringify interests if backend excepts strings from us)
            const payload = {
                ...formData,
                days: daysDiff,
                budget: Number(formData.budget),
                travelers: Number(formData.travelers)
            };


            //Sending POST request to our backend route
            const res = await fetch('http://localhost:5000/api/plan-trip', {
                method: 'POST', //using POSt method to send api req
                headers: {
                    'Content-Type': 'application/json' //sending content in json format
                },
                body: JSON.stringify(payload) //converting whole content into String as JSON excepts strings
            });

            //waiting for res to be converted into json
            const data = await res.json()

            console.log('Received response', data)

            if (data.itinerary) {
                navigate('/tripresult', { state: { itinerary: data.itinerary } })
            } else {
                alert('No itenary found. please try again')
            }
        } catch (error) {
            setLoading(false)
            //catching error if the api becomes unavilable
            console.error('Failed to plan trip: ', error);

            alert('Something went wrong. Try again later')
        }
    }

    return (
        <>
            <section className='px-6 mt-20 bg-white shadow-md space-y-2 pb-10'>
                <div className='py-2'>
                    <h1 className='text-2xl'>Plan your perfect trip</h1>
                </div>
                <form onSubmit={handleSubmit} >

                    {loading && (
                        <div className="flex justify-center my-4">
                            <div className="w-12 h-12 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
                        </div>
                    )}

                    <div>
                        {/** for Destination input field */}
                        <label className='text-md font-semibold'>Destination</label>
                        <input
                            name='destination'
                            value={formData.destination}
                            onChange={handleInputChange}
                            placeholder='enter your destination..'
                            type="text"
                            className='border w-full px-3 py-1'
                        />
                        {/**For Start and end dates */}
                        <div className='flex items-center gap-4 mt-3'>
                            <div className='flex flex-col w-1/2'>
                                <label className='mb-1'>Start Date</label>
                                <input
                                    name='startDate'
                                    value={formData.startDate}
                                    onChange={handleInputChange}
                                    type="date"
                                    className='w-full border px-2 py-2'
                                />
                            </div>
                            {/** for endDate */}
                            <div className='flex flex-col w-1/2'>
                                <label className='mb-1'>End Date</label>
                                <input
                                    name='endDate'
                                    value={formData.endDate}
                                    onChange={handleInputChange}
                                    type="date"
                                    className='border px-2 py-2'
                                />
                            </div>
                        </div>

                        <div className='flex flex-col'>
                            {/** for Budget */}
                            <label className='mt-2 text-md font-semibold'>Budget</label>
                            <input
                                type="number"
                                name='budget'
                                value={formData.budget}
                                onChange={handleInputChange}
                                className='w-full border px-2 py-2'
                                placeholder='enter amount in USD'
                            />
                            {/** for Travelers */}
                            <label className='mt-2 text-md font-semibold'>Travelers</label>
                            <input
                                name='travelers'
                                value={formData.travelers}
                                onChange={handleInputChange}
                                type="number"
                                className='border w-full px-2 py-2'
                                placeholder='enter travelers'
                            />
                            <div>
                                <label className='block mb-2 text-md'>Interests</label>
                                <div className='flex flex-wrap gap-4'>
                                    {['Nature', 'Food', 'History', 'Shopping', 'Culture', 'Adventure'].map((interest) => (
                                        <label key={interest} className='flex items-center gap-2'>
                                            <input
                                                type='checkbox'
                                                value={interest}
                                                checked={formData.interests.includes(interest)}
                                                onChange={() => handleInterestClicks(interest)}
                                                className='accent-purple-500'
                                            />
                                            <span>{interest}</span>
                                        </label>
                                    ))}

                                </div>

                                <div className='flex justify-center mt-6'>
                                    <button type='submit' className='bg-purple-600 w-full px-2 py-2 text-white'>Plan Trip</button>
                                </div>

                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </>
    )
}

export default Planner
