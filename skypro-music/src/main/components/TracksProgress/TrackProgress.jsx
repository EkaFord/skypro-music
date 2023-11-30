import React from "react";
import * as S from "./TrackProgressStyles";

const ProgressInput = ({ type, min, max, value, step, onChange }, ref) => (
  <S.ProgressInput
    type={type}
    min={min}
    max={max}
    value={value}
    step={step}
    onChange={onChange}
    ref={ref}
  />
);

export const ProgressInputTrack = React.forwardRef((props, ref) => {
  return (
    <ProgressInput
      type="range"
      min={0}
      max={ref?.current?.duration || 0}
      value={ref?.current?.currentTime || 0}
      step={0.01}
      onChange={(e) => {
        ref.current.currentTime = e.target.value;
      }}
      ref={ref}
    />
  );
});

export const ProgressInputVolume = React.forwardRef((props, ref) => {
  return (
    <ProgressInput
      type="range"
      min={0}
      max={1}
      value={ref?.current?.volume || 0}
      step={0.01}
      onChange={(e) => {
        ref.current.volume = e.target.value;
      }}
      ref={ref}
    />
  );
});
