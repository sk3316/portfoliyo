"use client"
import React from 'react';

const TechnicalSkills: React.FC = () => {
  const skillsData = [
    {
      category: 'Languages',
      skills: ['Python', 'C/C++', 'SQL (MySQL)', 'JavaScript', 'TypeScript', 'HTML', 'XML', 'JSON', 'CSS'],
    },
    {
      category: 'Frameworks',
      skills: ['jQuery', 'React.js', 'Next.js', 'Node.js', 'Flask', 'ExpressJS', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'DevOps and API Tools',
      skills: ['Git', 'Docker', 'Kubernetes', 'Postman'],
    },
    {
      category: 'Cloud and Security Tools',
      skills: ['Cloudinary', 'SQL Server', 'SSIS', 'SSRS', 'Linux (Configuring and Managing)'],
    },
    {
      category: 'SDE Tools',
      skills: ['Data Modeling', 'Agile (Scrum)', 'Design Patterns', 'Debugging', 'User Interface Design'],
    },
  ];

  return (
    <div className="technical-skills-section p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Technical Skills</h2>
      {skillsData.map((skill, index) => (
        <div key={index} className="skills-item bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-xl font-bold text-blue-600">{skill.category}</h3>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            {skill.skills.map((item, idx) => ( 
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TechnicalSkills;
