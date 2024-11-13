"use client"
import React from 'react';

const SocialLinks: React.FC = () => {
  const socialData = [
    {
      platform: 'LinkedIn',
      url: 'https://www.linkedin.com/in/shitanshu-priyadarshi-6b3902227/',
    },
    {
      platform: 'GitHub',
      url: 'https://github.com/sk3316',
    },
    {
      platform: 'LeetCode',
      url: 'https://leetcode.com/u/SHITU26/',
    },
    {
      platform: 'HackerRank',
      url: 'https://www.hackerrank.com/profile/RA2111033010107',
    },
  ];

  return (
    <div className="social-links-section p-6 bg-gray-100 rounded-lg shadow-lg">
      <h2 className="text-3xl font-semibold text-gray-800 mb-4">Social Links</h2>
      <ul className="list-none text-lg text-gray-700">
        {socialData.map((social, index) => (
          <li key={index} className="mb-2">
            <a
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition duration-300"
            >
              {social.platform}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
