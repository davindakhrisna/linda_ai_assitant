"use client";
import { useEffect, useState } from "react";

const CamButton = ({
  setIsCameraOn,
}: {
  setIsCameraOn: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const [isPlay, setIsPlay] = useState(true);
  const [pauseSvg, setPauseSvg] = useState<string | null>(null);
  const [playSvg, setPlaySvg] = useState<string | null>(null);

  useEffect(() => {
    const fetchIcons = async () => {
      const muteRes = await fetch("https://api.iconify.design/mdi:play.svg");
      setPauseSvg(await muteRes.text());
      const unmuteRes = await fetch("https://api.iconify.design/mdi:pause.svg");
      setPlaySvg(await unmuteRes.text());
    };
    fetchIcons();
  }, []);

  const handleClick = async () => {
    const newState = !isPlay;
    setIsPlay(newState);
    setIsCameraOn(newState);
  };

  const icon = !isPlay ? pauseSvg : playSvg;

  return (
    <button
      className={`rounded-4xl  p-5 cursor-pointer ${
        !isPlay ? "bg-gray-700" : "bg-blue-700"
      }`}
      onClick={handleClick}
    >
      {icon && <span dangerouslySetInnerHTML={{ __html: icon }} />}
    </button>
  );
};

export default CamButton;
