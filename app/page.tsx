import React from 'react';

export default function Home() {
  return (
    <div className="w-full max-w-5xl flex flex-col items-center gap-20 py-16 px-4 md:px-8 min-h-[80vh] justify-center">
      
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
             Probably trying out new frameworks, or dabbling in <b className="text-white">Lua</b>, <b className="text-white">Rust</b> or <b className="text-white">ArkTs</b>.
           </li>
        </ul>
      </div>

    </div>
  );
}
