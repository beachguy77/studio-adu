"use client";

import { useEffect, useRef } from "react";

type ProjectVideoProps = {
  src: string;
  poster?: string;
  caption?: string;
};

export default function ProjectVideo({
  src,
  poster,
  caption,
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const label = caption ?? "Project video";

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = () => {
      video.muted = true;
      video.defaultMuted = true;
      if (media.matches) {
        video.pause();
      } else {
        video.play().catch(() => {
          /* Autoplay can still be blocked; poster remains. */
        });
      }
    };

    applyMotionPreference();
    media.addEventListener("change", applyMotionPreference);
    return () => media.removeEventListener("change", applyMotionPreference);
  }, []);

  return (
    <figure className="case-study-media case-study-video">
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={label}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </figure>
  );
}
