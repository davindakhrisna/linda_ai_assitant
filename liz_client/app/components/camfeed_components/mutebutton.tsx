"use client";
import { useEffect, useState } from "react";

export default function MuteButton() {
  const [isMuted, setIsMuted] = useState(false);
  const [muteSvg, setMuteSvg] = useState<string | null>(null);
  const [unmuteSvg, setUnmuteSvg] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcons = async () => {
      const muteRes = await fetch(
        "https://api.iconify.design/bxs:microphone-off.svg"
      );
      setMuteSvg(await muteRes.text());
      const unmuteRes = await fetch(
        "https://api.iconify.design/mdi:microphone.svg"
      );
      setUnmuteSvg(await unmuteRes.text());
    };
    fetchIcons();
  }, []);

  const handleClick = async () => {
    setIsMuted((prev) => !prev);
    const status = isMuted ? "You're Speaking" : "You're Muted";
    alert(status);
  };

  const icon = isMuted ? muteSvg : unmuteSvg;

  return (
    <button
      className={`rounded-4xl  p-4 cursor-pointer ${
        isMuted ? "bg-gray-700" : "bg-blue-700"
      }`}
      onClick={handleClick}
    >
      {icon && <span dangerouslySetInnerHTML={{ __html: icon }} />}
    </button>
  );
}
