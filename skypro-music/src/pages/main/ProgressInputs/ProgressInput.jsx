import React from "react";
import * as S from "./ProgressInputStyles"
import { forwardRef } from 'react';

export const ProgresInputTrack = forwardRef((props, ref) => {

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={ref.current.duration}
      value={ref.current.currentTime}
      step={0.01}
      onChange={(a) => { ref.current.currentTime = a.target.value }}
    />)
});

export const ProgresInputVolume = forwardRef((props, ref) => {
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