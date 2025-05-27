"use client";

import React, { useRef, useEffect, FC, useState } from "react";

interface CameraProps {
  MuteButton: FC;
  CamButton: FC<{ HandleCamera: (data: boolean) => void }>;
}

const CamFeed: FC<CameraProps> = ({ CamButton, MuteButton }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isCameraOn, setIsCameraOn] = useState(true);

  useEffect(() => {
    let stream: MediaStream;

    const startCamera = async () => {
      if (!isCameraOn) {
        if (stream) {
          stream.getTracks().forEach((track) => track.stop());
        }
        return;
      }
      try {
        stream = await navigator.mediaDevices.getUserMedia({ video: true });
        if (videoRef.current) {
          videoRef.current.srcObject = stream;
        }
      } catch (err) {
        console.error("Error accessing camera:", err);
      }
    };

    startCamera();

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop());
      }
    };
  }, [isCameraOn]);

  function handleCamera(data: boolean) {
    setIsCameraOn(data);
  }

  return (
    <div className="flex flex-col items-center justify-center w-[410px] h-[308.5px] space-y-8 m-12">
      <video
        ref={videoRef}
        autoPlay
        playsInline
        className="h-full w-full rounded-2xl border-2 border-blue-800 shadow"
        style={{ transform: "scaleX(-1)" }}
      />
      <div className="flex justify-end space-x-6 w-full">
        <MuteButton />
        <CamButton HandleCamera={handleCamera} />
      </div>
    </div>
  );
};

export default CamFeed;
