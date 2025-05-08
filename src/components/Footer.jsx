import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-background text-text text-center py-4">
      <div className="container mx-auto text-sm text-secondary">
        &copy; {new Date().getFullYear()} Zack Altschuler All rights reserved.
      </div>
    </footer>
  );
}