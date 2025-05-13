import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-surface p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-secondary mb-4">
        Have a question or want to collaborate? Reach out via email or find me on LinkedIn and GitHub:
      </p>

      <div className="flex flex-wrap gap-4">
        {/* Email button */}
        <a
          href="mailto:altschulerzack@yahoo.com?subject=Contact%20from%20Portfolio"
          className="inline-block bg-gray-500 text-background px-4 py-2 rounded hover:opacity-90"
        >
          Email Me
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/zack-altschuler/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-500 text-background px-4 py-2 rounded hover:opacity-90"
        >
          <FaLinkedin className="mr-2" size={20} />
          LinkedIn
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Altzack"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-gray-500 text-background px-4 py-2 rounded hover:opacity-90"
        >
          <FaGithub className="mr-2" size={20} />
          GitHub
        </a>
      </div>
    </section>
);
}
