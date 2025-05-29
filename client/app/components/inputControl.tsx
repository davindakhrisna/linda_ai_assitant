"use client";

import React, { FC, useState } from "react";

interface InputProps {
  Camfeed: FC<{ isCameraOn: boolean }>;
  CamButton: FC<{
    setIsCameraOn: React.Dispatch<React.SetStateAction<boolean>>;
  }>;
  MicButton: FC;
}

const InputControl: FC<InputProps> = ({ Camfeed, CamButton, MicButton }) => {
  const [isCameraOn, setIsCameraOn] = useState(true);

  return (
    <div className="flex flex-col items-center justify-center w-[410px] h-[308.5px] space-y-8 m-12">
      <Camfeed isCameraOn={isCameraOn} />
      <div className="flex justify-end space-x-6 w-full">
        <CamButton setIsCameraOn={setIsCameraOn} />
        <MicButton />
      </div>
    </div>
  );
};

export default InputControl;
