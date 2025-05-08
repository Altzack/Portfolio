import React from 'react';
import cryptoPic from '../assets/crypto.png'
const projects = [
  {
    title: 'Crypto Tracker',
    description: 'A real-time crypto tracker with interactive charts.',
    image: cryptoPic,
    url: 'https://cryptotrack-eight.vercel.app'
  },
];

export default function Projects() {
  return (
    <section className="bg-surface p-8 rounded-lg shadow mb-8">
      <h2 className="text-2xl font-semibold mb-6">Projects</h2>
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
  );
}