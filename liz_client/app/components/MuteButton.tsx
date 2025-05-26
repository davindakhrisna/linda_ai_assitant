"use client";
import { useEffect, useState } from "react";

export default function MuteButton() {
  const [isMuted, setIsMuted] = useState(false);
  const [muteSvg, setMuteSvg] = useState<string | null>(null);
  const [unmuteSvg, setUnmuteSvg] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcons = async () => {
      const muteRes = await fetch(
        "https://api.iconify.design/mdi:volume-mute.svg"
      );
      setMuteSvg(await muteRes.text());
      const unmuteRes = await fetch(
        "https://api.iconify.design/mdi:volume-high.svg"
      );
      setUnmuteSvg(await unmuteRes.text());
    };
    fetchIcons();
  }, []);

  const handleClick = async () => {
    setIsMuted((prev) => !prev);
    const status = isMuted ? "You Speaking" : "You Are Muted";
    alert(status);
  };

  const icon = isMuted ? muteSvg : unmuteSvg;

  return (
    <button
      className="rounded-4xl bg-blue-700 p-4 m-8 cursor-pointer"
      onClick={handleClick}
    >
      {icon && <span dangerouslySetInnerHTML={{ __html: icon }} />}
    </button>
  );
}
