"use client"
import React from 'react';

const CoCurricularActivities: React.FC = () => {
  const activitiesData = [
    'Participated in Smart India Hackathon (November 2023)',
    'Finalist in IOCL Sustainathon (April-May 2024)',
    'Pixel X Competitor (October 2023)',
    'Mentored junior developers in web development projects',
    'Actively participated in technical workshops and coding competitions'
  ];

  return (
    <div className="co-curricular-section p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Co-curricular Activities</h2>
      <ul className="list-disc list-inside text-lg text-gray-700">
        {activitiesData.map((activity, index) => (
          <li key={index} className="mb-2">{activity}</li>
        ))}
      </ul>
    </div>
  );
};

export default CoCurricularActivities;
