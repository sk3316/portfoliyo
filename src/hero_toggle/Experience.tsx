import React from 'react';

const Experience: React.FC = () => {
  const experienceData = [
    {
      title: 'Product Engineer',
      company: 'ReelsN\'Shorts',
      date: 'November 2023 – January 2024',
      description: [
        'Designed the landing and dashboard page using Next.js 13 and Tailwind CSS.',
        'The product is focused on generating auto-captions for reels and shorts under 60 seconds in the required dimensions.',
        'Mastered the Atlassian Web Scrum model, reducing sprint planning time by 20% and increasing team productivity by 15%.'
      ],
      reference: 'Govardhan Sir (+91 90258 17537)'
    },
    {
      title: 'Web Developer & Content Writer',
      company: 'Think Digital',
      date: 'November 2022 – Present',
      description: [
        'Acquired front-end development skills and applied them to over 10 web projects, enhancing user engagement by 20%.',
        'Engineered a responsive web interface in collaboration with a team of 5, boosting page views by 50% and improving user retention by 30%.',
        'Mentored first-year students to create their first website and helped set up coding environments.',
        'Produced content that improved reader engagement by 35%, and authored 15+ technical write-ups.'
      ]
    }
  ];

  return (
    <div className="experience-section p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Experience</h2>
      {experienceData.map((experience, index) => (
        <div key={index} className="experience-item bg-white p-4 mb-4 rounded-lg shadow-md">
          <h3 className="text-2xl font-bold text-blue-600">{experience.title} <span className="text-gray-500">@ {experience.company}</span></h3>
          <p className="text-sm text-gray-500 mb-2">{experience.date}</p>
          <ul className="list-disc ml-5 text-gray-700">
            {experience.description.map((point, idx) => (
              <li key={idx}>{point}</li>
            ))}
          </ul>
          {experience.reference && <p className="mt-2 text-sm text-gray-500">Reference: {experience.reference}</p>}
        </div>
      ))}
    </div>
  );
};

export default Experience;
