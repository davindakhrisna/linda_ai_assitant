"use client";
import { useState } from "react";

const MicButton = () => {
  const [isMuted, setIsMuted] = useState(false);

  const handleClick = async () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <button
      className={`rounded-4xl  p-4 cursor-pointer ${
        isMuted ? "bg-gray-700" : "bg-lime-700"
      }`}
      onClick={handleClick}
    >
      {isMuted ? "Stop" : "Speak"}
    </button>
  );
};

export default MicButton;
