import React from "react";
import * as S from "./ProgressInputStyles"
import { forwardRef } from 'react';
import  { useEffect, useState } from 'react'


export const ProgresInputTrack = forwardRef((props, aRef) => {

  const [currentTime, setCurrentTime] = useState(0)

  const handleCurrentTime = (value) => {
    setCurrentTime(value)
    aRef.current.currentTime = value
  }

  useEffect(() => {
    
    setCurrentTime(aRef.current.currentTime)
  }, [aRef.current.currentTime])

  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={aRef.current.duration ? aRef.current.duration : 0}
      value={currentTime}
      step={0.01}
      onChange={(e) => handleCurrentTime(e.target.value)}
    />
  )
});

export const ProgresInputVolume = forwardRef((props, aRef) => {

  const [volume, setVolume] = useState(0.5)
  const handleVolume = (value) => {
    setVolume(value)
    aRef.current.volume = value
  }
  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={1}
      value={volume}
      step={0.01}
      onChange={(e) => handleVolume(e.target.value)}
    />)
});