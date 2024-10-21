import React from 'react';

const Certifications: React.FC = () => {
  const certificationsData = [
    {
      title: 'Introduction to Database Systems',
      organization: 'NPTEL',
      date: 'May 2024',
    },
    {
      title: 'Oracle Cloud Associate',
      organization: 'Oracle',
      date: 'May 2024',
    },
    {
      title: 'Software Testing Automation',
      organization: 'Katalon',
      date: 'February 2024',
    },
    {
      title: 'Machine Learning Onramp',
      organization: 'Matlab',
      date: 'January 2024',
    },
    {
      title: 'Juniper JUNOS Associate',
      organization: 'Juniper',
      date: 'November 2023',
    },
    {
      title: 'Supervised Machine Learning: Regression and Classification',
      organization: 'DeepLearning AI',
      date: 'October 2023',
    },
    {
      title: 'AWS Machine Learning',
      organization: 'Amazon',
      date: 'May 2022',
    },
    {
      title: 'AWS Cloud Foundations',
      organization: 'Amazon',
      date: 'May 2022',
    },
  ];

  return (
    <div className="certifications-section p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Certifications</h2>
      {certificationsData.map((certification, index) => (
        <div key={index} className="certification-item bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600">{certification.title}</h3>
          <p className="text-lg text-gray-800">{certification.organization}</p>
          <p className="text-sm text-gray-500">{certification.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Certifications;
