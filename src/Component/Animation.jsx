import React, { useEffect, useState } from "react";
import introVideo from "../assets/Image/animation.mp4";

function SplashScreen({ onFinish }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFinish();
    }, 5000); 

    return () => clearTimeout(timer);
  }, [onFinish]);

  return (
    <div className="fixed inset-0 bg-black flex items-center justify-center z-index-9999">
      <video
        src={introVideo}
        autoPlay
        muted
        onEnded={onFinish} 
        className="w-full h-full object-cover z-index-9999"
      />
    </div>
  );
}

export default SplashScreen;