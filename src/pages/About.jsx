import React from "react";

export default function About() {
  return (
    <section className="bg-surface p-8 rounded-lg shadow mb-8">
      <div className="max-w-2xl mx-auto space-y-6 text-text leading-relaxed">
        <h2 className="text-3xl font-semibold mb-6 text-accent">About Me</h2>

        <p>
          I’m a full-stack engineer with 5 years of experience shipping React,
          GraphQL, and TypeScript applications with a strong focus on front-end
          polish and performance. I thrive on translating design into
          production-quality code: building component systems, optimizing load
          times, and delivering responsive UIs that users can rely on. I’ve
          helped platforms scale from 30K to 100K+ users, and I’m always
          thinking about both the dev experience and the end user. You can find
          me refining flows, squashing bugs, and tweaking pixel spacing until
          it’s just right.
        </p>

        <h2 className="text-3xl font-semibold mb-6 text-accent">
          Beyond the Code
        </h2>

        <p>
          When I’m not tweaking pixel spacing or untangling state bugs, I’m
          probably debating whether to refactor something that technically works
          just fine. I enjoy good UI, clean code, and the occasional overuse of
          console.log (for... peace of mind). Fueled by caffeine, curiosity, and
          way too many open tabs.
        </p>
      </div>
    </section>
  );
}
