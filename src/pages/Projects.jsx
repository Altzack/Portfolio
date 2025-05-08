import React from 'react';

const projects = [
  {
    title: 'Aurora Dashboard',
    description: 'A real-time data visualization dashboard with interactive charts.',
    image: 'https://via.placeholder.com/400x200.png?text=Aurora+Dashboard',
    url: '#',
  },
  {
    title: 'Echo Chat App',
    description: 'A sleek chat application featuring live messaging and themes.',
    image: 'https://via.placeholder.com/400x200.png?text=Echo+Chat+App',
    url: '#',
  },
  {
    title: 'Nova Blog',
    description: 'A markdown-powered blog platform with syntax highlighting.',
    image: 'https://via.placeholder.com/400x200.png?text=Nova+Blog',
    url: '#',
  },
  {
    title: 'Luma E-commerce',
    description: 'A modern online store with smooth animations and cart flow.',
    image: 'https://via.placeholder.com/400x200.png?text=Luma+E-commerce',
    url: '#',
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
            className="block bg-background rounded-lg overflow-hidden shadow hover:shadow-lg transition"
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