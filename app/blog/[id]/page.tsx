'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { TerminalBlock } from '@/components/TerminalBlock';

// Mock Data (In a real app, this would be fetched from a CMS or markdown files)
const BLOG_CONTENT: Record<string, any> = {
  "1": {
    title: 'Data Replication in Distributed Systems: From CAP Theorem to Multi-Region Architecture',
    date: 'November 29, 2025',
    readTime: '45 min read',
    content: (
      <>
        <p className="lead text-xl text-zinc-300 mb-8 leading-relaxed">
          Distributed systems are the backbone of modern software architecture. At the heart of these systems lies the challenge of data replication—ensuring that data is consistently and reliably copied across multiple nodes.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Challenge of Consistency</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">
           When we talk about replication, we immediately run into the CAP theorem. You can't have it all. Consistency, Availability, Partition Tolerance—pick two (well, really, pick between C and A in the presence of P).
        </p>

        <div className="my-8">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
                src="https://images.unsplash.com/photo-1558494949-ef526b0042a0?q=80&w=2668&auto=format&fit=crop" 
                alt="Server Architecture" 
                className="w-full rounded-xl border border-zinc-800"
            />
            <p className="text-center text-zinc-500 text-sm mt-3">Figure 1: Visualizing data flow across region boundaries.</p>
        </div>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Implementing Raft Consensus</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">
            One of the most popular algorithms for managing a replicated log is Raft. It's designed to be understandable. Here is how you might verify the status of a Raft node in a production cluster.
        </p>

        <TerminalBlock 
            command="curl -X GET http://localhost:8080/raft/status" 
            output={`{
  "state": "Leader",
  "term": 42,
  "commit_index": 1024,
  "applied_index": 1024,
  "peers": ["10.0.0.2", "10.0.0.3"]
}`}
        />

        <p className="text-zinc-400 mb-6 leading-relaxed">
            The output confirms that our node is currently the <code>Leader</code> for term 42. All entries up to index 1024 have been committed and applied to the state machine.
        </p>

        <h2 className="text-3xl font-bold text-white mt-12 mb-6">Multi-Region Strategy</h2>
        <p className="text-zinc-400 mb-6 leading-relaxed">
            Deploying across regions introduces latency. We need to be smart about how we route read vs. write requests. Using a geo-DNS strategy or an anycast IP can help route users to the nearest read replica, while writes might still need to travel to the primary region.
        </p>
      </>
    )
  },
  "2": {
      title: 'Redesigning the User Onboarding Flow: A Case Study',
      date: 'October 15, 2025',
      readTime: '12 min read',
      content: (
          <>
            <p className="lead text-xl text-zinc-300 mb-8 leading-relaxed">
                User onboarding is the most critical phase of the user journey. It's the first impression, and often the last if not done right.
            </p>
             <div className="my-8">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                    src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" 
                    alt="Design System" 
                    className="w-full rounded-xl border border-zinc-800"
                />
            </div>
            <h2 className="text-3xl font-bold text-white mt-12 mb-6">The Problem</h2>
            <p className="text-zinc-400 mb-6 leading-relaxed">
                We noticed a 40% drop-off at the "Profile Setup" screen. It was too asking for too much information upfront.
            </p>
          </>
      )
  }
};

export default function BlogPostPage() {
  const params = useParams();
  const id = params?.id as string;
  const post = BLOG_CONTENT[id];

  if (!post) {
    return (
      <div className="min-h-screen bg-[#09090b] text-white flex items-center justify-center">
        <div className="text-center">
            <h1 className="font-doto text-4xl mb-4">404</h1>
            <p className="text-zinc-400">Post not found.</p>
        </div>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-[#09090b] text-white">
      {/* Hero Section */}
      <div className="max-w-3xl mx-auto px-6 pt-24 pb-12">
        <div className="flex items-center gap-3 text-zinc-500 font-mono text-sm mb-6">
            <span>{post.date}</span>
            <span>•</span>
            <span>{post.readTime}</span>
        </div>
        
        <h1 className="font-figtree text-4xl md:text-6xl font-bold leading-tight tracking-tight text-white mb-8">
          {post.title}
        </h1>

        <div className="flex items-center gap-4 border-b border-zinc-800 pb-12 mb-12">
             <div className="w-10 h-10 rounded-full bg-zinc-800 overflow-hidden">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/404khai.jpeg" alt="Author" className="w-full h-full object-cover" />
             </div>
             <div>
                 <div className="text-white font-medium">Khai</div>
                 <div className="text-zinc-500 text-sm">Systems Engineer</div>
             </div>
        </div>

        {/* Content */}
        <div className="prose prose-invert prose-zinc max-w-none font-figtree">
           {post.content}
        </div>
        
        {/* Footer Navigation */}
        <div className="mt-20 pt-10 border-t border-zinc-800 flex justify-between">
            <a href="/blog" className="text-zinc-400 hover:text-white flex items-center gap-2 transition-colors">
                ← Back to Blog
            </a>
        </div>
      </div>
    </article>
  );
}
