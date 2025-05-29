"use client";

import React, { useRef, useEffect, FC } from "react";

interface CamfeedProps {
  isCameraOn: boolean;
}

const AiCamfeed: FC<CamfeedProps> = ({ isCameraOn }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

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

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="h-full w-full rounded-2xl border-2 border-blue-800 shadow"
      style={{ transform: "scaleX(-1)" }}
    />
  );
};

export default AiCamfeed;
