"use client";
import { useRef, useState } from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play().catch(() => setIsPlaying(false));
      setIsPlaying(true);
    }
  };

  return (
    <div className="absolute flex w-full justify-end items-center pr-8">
      <audio ref={audioRef} src="/music/lofi.mp3" preload="auto" />
      <button
        className="text-4xl text-mocha-400 hover:scale-110 hover:text-mocha-300 transition-transform duration-200 focus:outline-none"
        onClick={togglePlayPause}
      >
        {isPlaying ? <FaRegPauseCircle /> : <FaRegPlayCircle />}
      </button>
    </div>
  );
};

export default AudioPlayer;
