import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <header className="bg-background text-text shadow">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Zack Altschuler</Link>
        <nav className="space-x-4">
          <Link to="/" className="text-text hover:text-accent">Home</Link>
          <Link to="/projects" className="text-text hover:text-accent">Projects</Link>
          <Link to="/about" className="text-text hover:text-accent">About</Link>
          <Link to="/contact" className="text-text hover:text-accent">Contact</Link>
        </nav>
      </div>
    </header>
  );
}