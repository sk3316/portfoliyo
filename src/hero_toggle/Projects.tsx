"use client"
import React from 'react';

const Projects: React.FC = () => {
  const projectsData = [
    {
      name: 'Airbnb Website Clone',
      description: 'Developed a clone of the Airbnb website as a task for the selection process.',
      technologies: 'Next.js, Tailwind CSS',
      link: 'https://airbnb-simpplr.vercel.app/',
      date: 'July 2024'
    },
    {
      name: 'Tic-Tac-Toe',
      description: 'Developed a basic tic-tac-toe game.',
      technologies: 'React.js, Tailwind CSS',
      link: 'https://tic-tac-toefactwise-shitanshu-priyadarshis-projects.vercel.app/',
      date: 'July 2024'
    },
    {
      name: 'Celebrity Factwise',
      description: 'Engineered a TypeScript-driven platform with search, edit, and delete functions, using accordion UI.',
      technologies: 'React.js, Tailwind CSS',
      link: 'https://celebrity-factwise.vercel.app/',
      date: 'July 2024'
    },
    {
      name: 'Brain Cancer Detection',
      description: 'Coded an AI-enabled website for brain cancer detection for an in-house project.',
      technologies: 'Next.js, Tailwind CSS',
      link: 'https://web-static-lime.vercel.app/',
      date: 'April 2024'
    },
    {
      name: 'Power Substation Chatbot',
      description: 'Created a Chatbot GUI for the Smart India Hackathon on the topic Industry 4.0.',
      technologies: 'HTML, Bootstrap, Python',
      link: 'https://sk3316.github.io/SIH-chatbot/',
      date: 'October 2023'
    }
  ];

  return (
    <div className="projects-section p-6 bg-gray-100 rounded-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Projects</h2>
      {projectsData.map((project, index) => (
        <div key={index} className="project-item bg-white p-4 mb-4 rounded-lg shadow-lg">
          <h3 className="text-2xl font-bold text-blue-600 hover:text-blue-800">
            <a href={project.link} target="_blank" rel="noopener noreferrer">{project.name}</a>
          </h3>
          <p className="text-gray-700">{project.description}</p>
          <p className="text-sm text-gray-500">{project.technologies} | {project.date}</p>
        </div>
      ))}
    </div>
  );
};

export default Projects;
