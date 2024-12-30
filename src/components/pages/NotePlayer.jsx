import React, { useState, useRef } from "react";

const NotePlayer = ({ audioSrc }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }

    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    const audio = audioRef.current;
    const progressPercentage = (audio.currentTime / audio.duration) * 100;
    setProgress(progressPercentage);
  };

  return (
    <div className="max-w-sm mx-auto p-4 bg-slate-100 shadow-md rounded-lg flex items-center gap-4">
      {/* Play/Pause Button */}
      <button
        onClick={handlePlayPause}
        className="w-12 h-12 flex items-center justify-center bg-black text-white rounded-full transition-transform duration-200 transform active:scale-90"
      >
        <span className="material-icons-round text-xl">
          {isPlaying ? "pause" : "play_arrow"}
        </span>
      </button>

      {/* Progress Bar */}
      <div className="flex-1 relative">
        {/* Track Wrapper */}
        <div className="w-full bg-slate-300 rounded-full h-2">
          {/* Active Progress */}
          <div
            style={{ width: `${progress}%` }}
            className="bg-black h-full rounded-full transition-all duration-300"
          ></div>
        </div>

        {/* Circular Indicator */}
        <div
          style={{ left: `calc(${progress}% - 8px)` }}
          className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-white border border-slate-300 rounded-full transition-transform duration-300"
        ></div>
      </div>

      {/* Hidden Audio Element */}
      <audio
        ref={audioRef}
        src={audioSrc}
        onTimeUpdate={handleTimeUpdate}
      />
    </div>
  );
};

export default NotePlayer;
