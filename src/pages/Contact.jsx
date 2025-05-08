import React from 'react';

export default function Contact() {
  return (
    <section className="bg-surface p-8 rounded-lg shadow">
      <h2 className="text-2xl font-semibold mb-4">Contact</h2>
      <p className="text-secondary mb-4">Have a question or want to collaborate? Click below to email me directly:</p>
      <a
        href="mailto:altschulerzack@yahoo.com?subject=Contact%20from%20Portfolio"
        className="inline-block bg-accent text-background px-4 py-2 rounded hover:opacity-90"
      >
        Email Me
      </a>
    </section>
  );
}