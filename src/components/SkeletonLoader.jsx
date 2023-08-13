import React from "react";
import "../styles/skeletonLoader.css";

const SkeletonLoader = () => {
  return (
    <div className="skeleton-loader">
      <div className="skeleton-card-top"></div>
      <div className="skeleton-card-bottom">
        <div className="skeleton-card-buttom-c1"></div>
        <div className="skeleton-card-buttom-c2"></div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
