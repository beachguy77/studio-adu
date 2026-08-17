"use client";

import { useEffect, useRef } from "react";

type ProjectVideoProps = {
  src: string;
  poster?: string;
  caption?: string;
  variant?: "player" | "backdrop";
};

export default function ProjectVideo({
  src,
  poster,
  caption,
  variant = "player",
}: ProjectVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const isBackdrop = variant === "backdrop";
  const label = caption ?? "Project video";

  useEffect(() => {
    const video = videoRef.current;
    if (!video || !isBackdrop) return;

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const applyMotionPreference = () => {
      video.muted = true;
      video.defaultMuted = true;
      if (media.matches) {
        video.pause();
        video.removeAttribute("autoplay");
      } else {
        video.play().catch(() => {
          /* Autoplay can still be blocked; poster remains. */
        });
      }
    };

    applyMotionPreference();
    media.addEventListener("change", applyMotionPreference);
    return () => media.removeEventListener("change", applyMotionPreference);
  }, [isBackdrop]);

  return (
    <figure
      className={
        isBackdrop ? "case-study-video case-study-video--backdrop" : "case-study-video"
      }
    >
      <video
        ref={videoRef}
        autoPlay={isBackdrop}
        muted
        loop={isBackdrop}
        playsInline
        controls={!isBackdrop}
        preload={isBackdrop ? "auto" : "metadata"}
        poster={poster}
        aria-hidden={isBackdrop}
        aria-label={isBackdrop ? undefined : label}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {caption && !isBackdrop ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
