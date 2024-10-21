import React from 'react';

const Hobbies: React.FC = () => {
  const hobbiesData = [
    'Reading tech blogs',
    'Playing outdoor games',
    'Workout',
    'Gardening',
    'Driving'
  ];

  return (
    <div className="hobbies-section p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Hobbies</h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        {hobbiesData.map((hobby, index) => (
          <li key={index} className="mb-2">{hobby}</li>
        ))}
      </ul>
    </div>
  );
};

export default Hobbies;
