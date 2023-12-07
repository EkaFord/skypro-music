import React from "react";
import * as S from "./ProgressInputStyles"
import { forwardRef } from 'react';

export const ProgressInputTrack = forwardRef((props, ref) => {
  // Using 0 as default if duration or currentTime is NaN or undefined
  const duration = ref.current && !isNaN(ref.current.duration) ? ref.current.duration : 0;
  const currentTime = ref.current && !isNaN(ref.current.currentTime) ? ref.current.currentTime : 0;

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration} // Using the checked duration
      value={currentTime} // Using the checked currentTime
      step={0.01}
      onChange={(event) => {
        const newTime = parseFloat(event.target.value);
        if (!isNaN(newTime)) {
          ref.current.currentTime = newTime;
        }
      }}
    />
  );
});

export const ProgressInputVolume = forwardRef((props, ref) => {
  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={1}
      value={ref.current.volume}
      step={0.01}
      onChange={(a) => { ref.current.volume = a.target.value }}
    />)
});