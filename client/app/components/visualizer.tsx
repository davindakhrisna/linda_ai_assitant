"use client";

import type React from "react";
import "./custom/ai_visualizer.css";
import { useState, useEffect, useMemo } from "react";

type VisualizerState = "idle" | "listening" | "speaking";

interface VisualizerProps {
  state?: VisualizerState;
  rows?: number;
  cols?: number;
}

type Dot = {
  id: string;
  row: number;
  col: number;
  baseSize: number;
  delay: number;
  angle: number;
  distance: number;
};

const generateDots = (rows: number, cols: number) => {
  const dots = [];
  const centerRow = Math.floor(rows / 2);
  const centerCol = Math.floor(cols / 2);

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const distanceFromCenter = Math.sqrt(
        Math.pow(row - centerRow, 2) + Math.pow(col - centerCol, 2)
      );

      const angle = Math.atan2(row - centerRow, col - centerCol);
      const spiralWave =
        Math.sin(distanceFromCenter * 0.8 + angle * 2) * 0.4 + 0.6;
      const radialWave = Math.cos(distanceFromCenter * 0.3) * 0.3 + 0.7;
      const noisePattern =
        Math.sin(row * 0.5) * Math.cos(col * 0.3) * 0.2 + 0.8;

      const baseSize = (spiralWave + radialWave + noisePattern) / 3;

      const randomOffset = (Math.random() - 0.5) * 0.1;
      const finalSize = Math.max(0.1, Math.min(1, baseSize + randomOffset));

      const delay = distanceFromCenter * 0.1 + (Math.random() - 0.5) * 0.1;

      dots.push({
        id: `${row}-${col}`,
        row,
        col,
        baseSize: finalSize,
        delay: delay,
        angle: angle,
        distance: distanceFromCenter,
      });
    }
  }
  return dots;
};

export default function Visual({
  state = "idle",
  rows = 12,
  cols = 24,
}: VisualizerProps) {
  const [dots, setDots] = useState<Dot[]>([]);

  const dotsMemo = useMemo(() => generateDots(rows, cols), [rows, cols]);

  useEffect(() => {
    setDots(dotsMemo);
  }, [dotsMemo]);

  return (
    <div
      className={`p-6 space-y-4 rounded-2xl shadow-2xl bg-black border-4 ${
        state === "idle"
          ? "border-gray-600"
          : state === "listening"
          ? "border-green-600"
          : "border-blue-600"
      }`}
    >
      <div className="text-center">
        <p
          className={`font-semibold capitalize ${
            state === "idle"
              ? "text-gray-600"
              : state === "listening"
              ? "text-green-600"
              : "text-blue-600"
          }`}
        >
          {state}
        </p>
      </div>
      <div
        className="grid gap-1"
        style={{
          gridTemplateColumns: `repeat(${cols}, 1fr)`,
          gridTemplateRows: `repeat(${rows}, 1fr)`,
        }}
      >
        {dots.map((dot) => (
          <div
            key={dot.id}
            className={`dot ${state}`}
            style={
              {
                "--base-size": dot.baseSize,
                "--delay": `${dot.delay}s`,
                "--row": dot.row,
                "--col": dot.col,
                "--angle": dot.angle,
                "--distance": dot.distance,
              } as React.CSSProperties
            }
          ></div>
        ))}
      </div>
    </div>
  );
}

{
  /* save for later
      <div className="flex flex-col space-y-4">
        <button
          onClick={() => handleStateChange("idle")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentState === "idle"
              ? "bg-gray-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Idle
        </button>
        <button
          onClick={() => handleStateChange("listening")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentState === "listening"
              ? "bg-green-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Listening
        </button>
        <button
          onClick={() => handleStateChange("speaking")}
          className={`px-4 py-2 rounded-lg transition-colors ${
            currentState === "speaking"
              ? "bg-blue-600 text-white"
              : "bg-gray-200 text-gray-700 hover:bg-gray-300"
          }`}
        >
          Speaking
        </button>
      </div>
      */
}
