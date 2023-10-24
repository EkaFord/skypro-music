import React from "react";

const TrackSkeleton = () => {
    return (
        <div className="playlist__item">
        <div className="playlist__track-skeleton track">
          <div className="track__title-image track__title-image-skeleton"></div>
          <div className="track__author-skeleton"></div>
          <div className="track__album-skeleton"></div>
          <div className="track__time-skeleton"></div>
        </div>
      </div>  
    );
};

export default TrackSkeleton