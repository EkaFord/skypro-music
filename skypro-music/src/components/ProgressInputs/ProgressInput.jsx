import React from "react";
import * as S from "./ProgressInputStyles"
import { forwardRef } from 'react';

export const ProgressInputTrack = forwardRef((props, ref) => {
  const duration = ref.current && !isNaN(ref.current.duration) ? ref.current.duration : 0;
  const currentTime = ref.current && !isNaN(ref.current.currentTime) ? ref.current.currentTime : 0;

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration}
      value={currentTime}
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
  const volume = ref.current ? ref.current.volume : 0;

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={1}
      value={volume}
      step={0.01}
      onChange={(event) => {
        const newVolume = parseFloat(event.target.value);
        if (ref.current && !isNaN(newVolume)) {
          ref.current.volume = newVolume;
        }
      }}
    />
  );
});
