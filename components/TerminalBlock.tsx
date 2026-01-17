import React from 'react';

interface TerminalBlockProps {
  command: string;
  output?: string;
  title?: string;
}

export const TerminalBlock: React.FC<TerminalBlockProps> = ({ command, output, title = "terminal" }) => {
  return (
    <div className="w-full my-8 rounded-lg overflow-hidden border border-zinc-800 bg-[#0e0e11] font-mono text-sm shadow-2xl">
      {/* Window Title Bar */}
      <div className="flex items-center px-4 py-2 bg-[#18181b] border-b border-zinc-800">
        <div className="flex gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
          <div className="w-3 h-3 rounded-full bg-green-500/80" />
        </div>
        <div className="ml-4 text-zinc-500 text-xs">{title}</div>
      </div>

      {/* Content */}
      <div className="p-4 md:p-6 overflow-x-auto">
        <div className="flex gap-2 text-zinc-300">
          <span className="text-green-400">➜</span>
          <span className="text-blue-400">~</span>
          <span>{command}</span>
        </div>
        
        {output && (
          <div className="mt-2 text-zinc-400 whitespace-pre-wrap leading-relaxed">
            {output}
          </div>
        )}
      </div>
    </div>
  );
};
