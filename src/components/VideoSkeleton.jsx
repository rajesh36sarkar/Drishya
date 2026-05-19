import React from 'react';

const VideoSkeleton = () => {
  return (
    <div className="w-full flex flex-col space-y-3 pointer-events-none select-none">
      {/* Thumbnail shimmer template slot box */}
      <div className="relative aspect-video w-full rounded-2xl bg-zinc-200 dark:bg-zinc-900/60 overflow-hidden border border-zinc-100 dark:border-zinc-900/40">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-zinc-800/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
      </div>
      
      {/* Details meta item template row blocks */}
      <div className="flex gap-3 px-1 w-full">
        <div className="w-9 h-9 rounded-xl bg-zinc-200 dark:bg-zinc-900 flex-shrink-0 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-zinc-800/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
        </div>
        <div className="flex flex-col flex-1 space-y-2 mt-1">
          <div className="h-3.5 bg-zinc-200 dark:bg-zinc-800 rounded-md w-[85%] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-zinc-800/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>
          <div className="h-2.5 bg-zinc-200 dark:bg-zinc-800 rounded-md w-[50%] relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 dark:via-zinc-800/30 to-transparent -translate-x-full animate-[shimmer_1.5s_infinite]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoSkeleton;