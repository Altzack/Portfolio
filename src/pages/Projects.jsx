import React from 'react';

const projects = [
  { title: 'Project One', url: 'https://github.com/username/project1' },
  { title: 'Project Two', url: 'https://github.com/username/project2' },
];

export default function Projects() {
  return (
    <section>
      <h2 className="text-3xl font-semibold mb-6">Projects</h2>
      <ul className="space-y-4">
        {projects.map((p) => (
          <li key={p.title}>
            <a
              href={p.url}
              className="text-indigo-600 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              {p.title}
            </a>
          </li>
        ))}
      </ul>
    </section>
  );
}