"use client";
import React from 'react';
import { FaCode, FaToolbox, FaCloud, FaServer, FaCogs } from 'react-icons/fa';

const TechnicalSkills: React.FC = () => {
  const skillsData = [
    {
      category: 'Languages',
      icon: <FaCode className="text-blue-500" />,
      skills: ['Python', 'C/C++', 'SQL (MySQL)', 'JavaScript', 'TypeScript', 'HTML', 'XML', 'JSON', 'CSS'],
    },
    {
      category: 'Frameworks',
      icon: <FaToolbox className="text-green-500" />,
      skills: ['jQuery', 'React.js', 'Next.js', 'Node.js', 'Flask', 'ExpressJS', 'Bootstrap', 'Tailwind CSS'],
    },
    {
      category: 'DevOps and API Tools',
      icon: <FaCogs className="text-purple-500" />,
      skills: ['Git', 'Docker', 'Kubernetes', 'Postman'],
    },
    {
      category: 'Cloud and Security Tools',
      icon: <FaCloud className="text-indigo-500" />,
      skills: ['Cloudinary', 'SQL Server', 'SSIS', 'SSRS', 'Linux (Configuring and Managing)'],
    },
    {
      category: 'SDE Tools',
      icon: <FaServer className="text-red-500" />,
      skills: ['Data Modeling', 'Agile (Scrum)', 'Design Patterns', 'Debugging', 'User Interface Design'],
    },
  ];

  return (
    <section className="technical-skills-section p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl shadow-2xl">
      <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {skillsData.map((skill, index) => (
          <div key={index} className="skills-item bg-white p-6 rounded-lg shadow-md hover:shadow-lg transform hover:scale-105 transition duration-200 ease-in-out">
            <div className="flex items-center mb-4">
              {skill.icon}
              <h3 className="ml-3 text-2xl font-semibold text-gray-800">{skill.category}</h3>
            </div>
            <ul className="list-none ml-0 mt-2 text-gray-700 space-y-2">
              {skill.skills.map((item, idx) => (
                <li key={idx} className="flex items-center">
                  <span className="inline-block w-2 h-2 rounded-full bg-gray-400 mr-2"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnicalSkills;
