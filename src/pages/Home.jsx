import React from 'react';
import { Link } from 'react-router-dom';

import { FaLinkedin, FaGithub, FaFilePdf } from 'react-icons/fa';

export default function Home() {
  
  return (
    <>
      {/* Hero Section */}
      <section className="p-16 rounded-lg shadow mb-12 text-center">
        <h1 className="text-5xl font-bold text-text mb-4">Hey, I'm Zack Altschuler</h1>
        <p className="text-secondary text-lg mb-6">
          I’m a software engineer specializing in React and modern JavaScript frameworks.
        </p>
        <Link
          to="/projects"
          className="inline-block bg-green-500 text-background px-6 py-3 rounded-full text-md font-medium hover:opacity-90 transition"
        >
          View My Work
        </Link>
      </section>

      {/* Featured */}
  <section className="bg-surface p-8 rounded-lg shadow mb-8">
      <h2 className="text-3xl font-semibold mb-6 text-accent text-center">
        Let’s Connect
      </h2>

      <div className="grid gap-6 sm:grid-cols-3">
        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/zack-altschuler/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-lg transition"
        >
          <FaLinkedin className="text-accent mb-4" size={48} style={{ color: '#0077B5' }}/>
          <h3 className="text-xl font-medium mb-2">LinkedIn</h3>
          <p className="text-secondary text-center">
            Check out my professional profile and endorsements.
          </p>
        </a>

        {/* GitHub Card */}
        <a
          href="https://github.com/Altzack"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-lg transition"
        >
          <FaGithub className="text-accent mb-4" size={48} />
          <h3 className="text-xl font-medium mb-2">GitHub</h3>
          <p className="text-secondary text-center">
            Browse my open-source projects and contributions.
          </p>
        </a>

        {/* Resume Card */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center p-6 bg-background rounded-lg hover:shadow-lg transition"
        >
          <FaFilePdf className="text-accent mb-4" size={48} style={{ color: '#E53E3E' }}/>
          <h3 className="text-xl font-medium mb-2">Resume</h3>
          <p className="text-secondary text-center">
            Download my latest resume (PDF).
          </p>
        </a>
      </div>
    </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold text-text mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {['React', 'JavaScript', 'Tailwind CSS', 'TypeScript'].map((skill) => (
            <span
              key={skill}
              className="bg-gray-500 px-4 py-2 rounded-full text-secondary text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}