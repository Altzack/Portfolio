import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-background text-text shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
      <Link to="/" className="text-2xl font-bold hover:text-gray-400">Home</Link>
      <nav className="space-x-4">
          <Link to="/about" className="text-text hover:text-gray-400">About</Link>
          <Link to="/contact" className="text-text hover:text-gray-400">Contact</Link>
        </nav>
      </div>
    </header>
  );
}