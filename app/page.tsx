import React from 'react';
import { FeaturedProject } from '@/components/FeaturedProject';
import { ProjectCard } from '@/components/ProjectCard';
import { ExperienceItem } from '@/components/ExperienceItem';

// Placeholder Icons
const EllumLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-white"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
);

const WalPressLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-400"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z"/></svg>
);

const GradificLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-green-400"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
);

const NexproveLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-orange-500"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><path d="M9 3v18"/><path d="M15 3v18"/></svg>
);

const KemukoLogo = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6 text-blue-500"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M12 4v16"/><path d="M4 12h16"/></svg>
);


export default function Home() {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-20 py-16 px-4 md:px-8">
      
      {/* Intro Section */}
      <div className="w-full flex flex-col gap-8 border border-dashed border-[#27272a] p-8 md:p-12 bg-[#09090b]">
        <div className="flex flex-col gap-2">
           <h1 className="text-xl text-zinc-300 font-figtree">
            Hey it's me, <span className="font-irish-grover font-black tracking-tighter text-4xl text-white ml-2">Khai</span>
           </h1>
           <p className="text-zinc-400 font-figtree text-lg max-w-2xl mt-4 leading-relaxed">
             Let's get straight to the point....
           </p>
        </div>
        
        <ul className="flex flex-col gap-4 text-zinc-300 font-figtree text-lg list-disc pl-5 marker:text-zinc-600">
           <li>
             I'm a <b className="text-[#ffa600] font-calistoga">Creative Systems Engineer</b> who is intrigued by Operating Systems, Game development, Animation and Interactive UI.
           </li>
           <li>
             <b>4+</b> years of experience in the industry, specializing in backend development with a focus on performance and scalability.
           </li>
           <li>
             Probably trying out new frameworks, or dabbling in <b className="text-white">Elixir</b>, <b className="text-white">Rust</b> or <b className="text-white">ArkTs</b>.
           </li>
        </ul>
      </div>

      {/* Featured Projects Section */}
      <div className="w-full flex flex-col gap-12" id="features">
        <div className="flex flex-col gap-2">
            <h2 className="font-doto text-5xl md:text-6xl font-bold text-white tracking-tight">
              Featured Projects
            </h2>
            <p className="font-figtree text-zinc-400 text-lg">
              A selection of highlighted projects showcasing my work and expertise.
            </p>
        </div>

        {/* Hero Project */}
        <FeaturedProject 
          title="End-to-End AI Platform Revolution"
          subtitle="Ellum Ai"
          description="ELLUM is a comprehensive AI platform that revolutionizes business operations through intelligent automation, helping companies streamline sales, marketing, and administrative tasks with advanced AI agents."
          linkText="Read About Ellum"
          linkUrl="#"
          logo={<EllumLogo />}
          // Using a colored placeholder since we don't have the image
          imageUrl="" 
        />

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ProjectCard 
            title="Decentralized site-builder for creators"
            subtitle="WalPress"
            category="DECENTRALIZED APP / WEB3..."
            description="A decentralized content management system allowing creators to build and host censorship-resistant websites on the blockchain."
            logo={<WalPressLogo />}
          />
          <ProjectCard 
            title="AI-driven grading and classroom management"
            subtitle="Gradific"
            category="EDTECH / AI AUTOMATION"
            description="Streamlining the educational process with AI-powered grading assistance and comprehensive classroom analytics for teachers."
            logo={<GradificLogo />}
          />
        </div>

      </div>

      {/* Experience Section */}
      <div className="w-full flex flex-col gap-12" id="how-it-works">
        <div className="flex flex-col gap-2">
            <h2 className="font-doto text-5xl md:text-6xl font-bold text-white tracking-tight">
              Experience
            </h2>
            <p className="font-figtree text-zinc-400 text-lg">
              A timeline of my professional journey and key contributions.
            </p>
        </div>

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
