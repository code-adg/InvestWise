import React, { useState } from 'react';
import { InvestmentDetails } from '../types/investment'

interface Props {
  onSubmit: (details: InvestmentDetails) => void;
}

export const InvestmentForm: React.FC<Props> = ({ onSubmit }) => {
  const [details, setDetails] = useState<InvestmentDetails>({
    amount: 0,
    age: 0,
    duration: 0,
    type: 'short-term'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(details);
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-xl shadow-lg mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div>
          <label className="block text-gray-400 mb-2">Investment Amount</label>
          <input
            type="number"
            value={details.amount}
            onChange={(e) => setDetails({...details, amount: Number(e.target.value)})}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter amount"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Your Age</label>
          <input
            type="number"
            value={details.age}
            onChange={(e) => setDetails({...details, age: Number(e.target.value)})}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter age"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Investment Duration (years)</label>
          <input
            type="number"
            value={details.duration}
            onChange={(e) => setDetails({...details, duration: Number(e.target.value)})}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
            placeholder="Enter duration"
          />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">Investment Type</label>
          <select
            value={details.type}
            onChange={(e) => setDetails({...details, type: e.target.value as 'short-term' | 'long-term'})}
            className="w-full bg-gray-700 text-white rounded-lg p-3 focus:ring-2 focus:ring-blue-500"
          >
            <option value="short-term">Short Term</option>
            <option value="long-term">Long Term</option>
          </select>
        </div>
      </div>
      <button
        type="submit"
        className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
      >
        Calculate Returns
      </button>
    </form>
  );
};