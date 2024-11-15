"use client"
import React from 'react';

const Education: React.FC = () => {
  const educationData = [
    {
      degree: 'B.Tech in Computer Science and Engineering',
      institution: 'SRM Institute of Science and Technology',
      date: 'August 2021 – July 2025',
      grade: 'CGPA: 9.42'
    },
    {
      degree: 'Class XII',
      institution: 'BRIO PODDAR INTERNATIONAL',
      date: 'August 2021',
      grade: 'Percentage: 85.4%'
    },
    {
      degree: 'Class X',
      institution: 'BVB LLOYDS VIDYA NIKETAN',
      date: 'June 2019',
      grade: 'Percentage: 90.6%'
    }
  ];

  return (
    <div className="education-section p-6 bg-white rounded-2xl shadow-2xl flex flex-col md:flex-row items-start md:items-center gap-6">
      
      {/* Education Content Section */}
      <div className="flex-1">
        <h2 className="text-3xl font-semibold text-gray-800 mb-4">Education</h2>
        {educationData.map((education, index) => (
          <div key={index} className="education-item bg-gray-100 p-4 mb-4 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-blue-600">{education.degree}</h3>
            <p className="text-xl text-gray-800">{education.institution}</p>
            <p className="text-sm text-gray-500 mb-1">{education.date}</p>
            <p className="text-sm text-gray-700">{education.grade}</p>
          </div>
        ))}
      </div>

      {/* Video Section */}
      <video
        className="w-full md:w-1/3 rounded-lg shadow-lg"
        src="/education.mp4"  
        loop
        autoPlay
        muted
      />
    </div>
  );
};

export default Education;
