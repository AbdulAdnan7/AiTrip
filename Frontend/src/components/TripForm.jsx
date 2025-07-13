import React, { useState } from 'react';
import TripResult from './TripResult';

const TripForm = ({ onSubmit }) => {
  // State for all form fields
  const [formData, setFormData] = useState({
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    travelers: 1,
    interests: [],
  });

  // Interest options
  const interestOptions = ['Beaches', 'Mountains', 'Food', 'Culture', 'Shopping', 'Adventure'];

  // Handle text/number input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle checkbox change
  const handleCheckbox = (interest) => {
    setFormData(prev => {
      const isSelected = prev.interests.includes(interest);
      const updated = isSelected
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest];
      return { ...prev, interests: updated };
    });
  };

  // Submit handler
  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Send data to parent (like Planner component)
  };

  return (
    <>
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-xl font-semibold">Plan Your Trip</h2>

      {/* Destination */}
      <div>
        <label className="block font-medium">Destination</label>
        <input
          type="text"
          name="destination"
          value={formData.destination}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="e.g. Paris, Tokyo"
          required
        />
      </div>

      {/* Start & End Dates */}
      <div className="flex gap-4">
        <div className="flex-1">
          <label className="block font-medium">Start Date</label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
        <div className="flex-1">
          <label className="block font-medium">End Date</label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      {/* Budget */}
      <div>
        <label className="block font-medium">Budget (in USD)</label>
        <input
          type="number"
          name="budget"
          value={formData.budget}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          placeholder="e.g. 1500"
        />
      </div>

      {/* Travelers */}
      <div>
        <label className="block font-medium">Number of Travelers</label>
        <input
          type="number"
          name="travelers"
          value={formData.travelers}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          min="1"
        />
      </div>

      {/* Interests */}
      <div>
        <label className="block font-medium mb-1">Interests</label>
        <div className="flex flex-wrap gap-3">
          {interestOptions.map((interest) => (
            <label key={interest} className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={formData.interests.includes(interest)}
                onChange={() => handleCheckbox(interest)}
              />
              <span>{interest}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Submit */}
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Generate Trip Plan
      </button>
    </form>
    <TripResult />

</>
  );
};

export default TripForm;
