import React, { useRef, useState } from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";

const AudioPlayer = () => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (!isPlaying) {
        audioRef.current.currentTime = 5;  // Start 5 seconds in
        audioRef.current.play();
      } else {
        audioRef.current.pause();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div className="absolute flex w-full justify-end items-center pr-8">
      <audio ref={audioRef} src="/music/lofi.mp3" preload="auto" />
      <button
        className="text-4xl text-mocha-400 hover:scale-110 transition-transform duration-200 focus:outline-none"
        onClick={togglePlayPause}
      >
        {isPlaying ? <FaRegPauseCircle /> : <FaRegPlayCircle />}
      </button>
    </div>
  );
};

export default AudioPlayer;
