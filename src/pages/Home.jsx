import React from 'react';
import { Link } from 'react-router-dom';
import cryptoPic from '../assets/crypto.png'



const projects = [
  {
    title: 'Crypto Tracker',
    description: 'A real-time crypto tracker with interactive charts.',
    image: cryptoPic,
    url: 'https://cryptotrack-eight.vercel.app'
  },
];


export default function Home() {
  
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gray-900 p-16 rounded-lg shadow mb-12 text-center">
        <h1 className="text-5xl font-bold text-text mb-4">Hey, I'm Zack Altschuler</h1>
        <p className="text-secondary text-lg mb-6">
          I’m a software engineer specializing in React and modern JavaScript frameworks. I build sleek, performant web applications.
        </p>
        <Link
          to="/projects"
          className="inline-block bg-gray-600 text-background px-6 py-3 rounded-full text-md font-medium hover:opacity-90 transition"
        >
          View My Work
        </Link>
      </section>

      {/* Featured Projects */}
      <section className="bg-surface p-8 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-semibold mb-6">Featured Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <a
            key={p.title}
            href={p.url}
            className="block bg-background rounded-lg overflow-hidden shadow hover:shadow-gray-800 transition"
          >
            <img
              src={p.image}
              alt={p.title}
              className="w-full h-40 object-cover"
            />
            <div className="p-4">
              <h3 className="text-xl font-bold text-text mb-2">{p.title}</h3>
              <p className="text-secondary text-sm">{p.description}</p>
            </div>
          </a>
        ))}
      </div>
    </section>

      {/* Skills Section */}
      <section>
        <h2 className="text-3xl font-semibold text-text mb-6">Skills</h2>
        <div className="flex flex-wrap gap-4">
          {['React', 'JavaScript', 'Tailwind CSS', 'Node.js', 'TypeScript'].map((skill) => (
            <span
              key={skill}
              className="bg-gray-600 px-4 py-2 rounded-full text-secondary text-sm"
            >
              {skill}
            </span>
          ))}
        </div>
      </section>
    </>
  );
}