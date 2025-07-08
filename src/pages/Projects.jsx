import React from "react";
import { FaGithub } from "react-icons/fa";
import cryptoPic from "../assets/crypto.png";
import trustfam from "../assets/trustfam.png";

const projects = [
  {
    title: "CryptoTrack",
    description:
      "A real-time crypto tracker with interactive charts and price data visualizations built with React.",
    image: cryptoPic,
    url: "https://cryptotrack-eight.vercel.app",
    github: "https://github.com/Altzack/cryptotrack",
  },
  {
    title: "MovieGeek",
    description:
      "Browse trending movies and shows powered by TMDB API. Built with React.",
    image: trustfam,
    url: "https://trustfam.netlify.app/",
    github: "https://github.com/Altzack/moviegeek",
  },
];

export default function Projects() {
  return (
    <section className="bg-surface p-8 rounded-lg shadow mb-12">
      <h2 className="text-3xl font-bold mb-10 text-center">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((p) => (
          <div
            key={p.title}
            className="bg-background rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <a href={p.url} target="_blank" rel="noopener noreferrer">
              <img
                src={p.image}
                alt={`Screenshot of ${p.title}`}
                className="w-full h-48 object-cover"
              />
            </a>
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{p.title}</h3>
              <p className="text-sm text-secondary mb-4 flex-grow">
                {p.description}
              </p>

              <div className="flex items-center gap-3 mt-auto">
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary text-sm font-medium hover:underline rounded bg-[#38BDF8] px-3 py-1.5 transition"
                >
                  Live Demo →
                </a>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm px-3 py-1.5 bg-gray-900 text-white rounded hover:opacity-90 transition"
                >
                  <FaGithub size={16} />
                  GitHub
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
