'use client';

import React from 'react';
import { ExperienceItem } from '@/components/ExperienceItem';

const NexproveLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
);

const KemukoLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M12 4v16"/><path d="M4 12h16"/></svg>
);

export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-[#09090b] text-white p-8 md:p-16 flex flex-col items-center">
      <div className="max-w-4xl w-full flex flex-col gap-12">
        
        {/* Header */}
        <div className="flex flex-col gap-4">
          <h1 className="font-irish-grover text-6xl md:text-8xl font-bold tracking-tight text-white">
            Experience
          </h1>
          <p className="font-figtree text-zinc-400 text-xl md:text-2xl max-w-2xl">
            A timeline of my professional journey and key contributions.
          </p>
        </div>

        {/* Experience List */}
        <div className="flex flex-col gap-0 border-t border-[#27272a] border-dashed">
            <ExperienceItem 
                company="Nexprove"
                role="Senior Software Engineer & Web3 Developer"
                type="Remote | Full-time"
                period="04.2024 - Present"
                logo={<NexproveLogo />}
                contributions={[
                    "Architected and deployed high-performance smart contracts on Ethereum and Polygon networks, handling over $5M in transaction volume.",
                    "Led a team of 4 engineers in developing a decentralized identity solution, reducing user onboarding time by 40%.",
                    "Optimized gas usage for core protocol functions, resulting in a 25% reduction in transaction costs for users.",
                    "Integrated Chainlink oracles for real-time price feeds and automated execution of DeFi strategies."
                ]}
                skills={["Solidity", "React", "Node.js", "Web3.js", "Hardhat", "TypeScript"]}
            />
            <ExperienceItem 
                company="Kemuko"
                role="Full-stack Developer"
                type="Remote | Full-time"
                period="08.2022 - 03.2024"
                logo={<KemukoLogo />}
                contributions={[
                    "Developed and maintained a scalable e-commerce platform serving 50k+ monthly active users.",
                    "Implemented real-time inventory management utilizing Redis and WebSockets, preventing overselling during high-traffic events.",
                    "Migrated legacy monolithic architecture to microservices using Docker and Kubernetes, improving system reliability by 99.9%.",
                    "Collaborated with UX designers to implement a responsive, mobile-first design system using Tailwind CSS."
                ]}
                skills={["Next.js", "PostgreSQL", "Docker", "AWS", "Redis", "Tailwind CSS"]}
            />
        </div>

      </div>
    </div>
  );
}
