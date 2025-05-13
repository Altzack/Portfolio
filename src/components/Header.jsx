import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-background text-text shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center border-b-1 border-gray-400 border-accent">
      <Link to="/" className="text-2xl font-bold hover:text-gray-400">Zack 2025</Link>
      <nav className="space-x-4">
      <Link to="/projects" className="text-text hover:text-gray-400">Projects</Link>
          <Link to="/about" className="text-text hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-text hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}