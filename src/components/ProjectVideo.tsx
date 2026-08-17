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
  return (
    <figure className="case-study-video">
      <video
        controls
        playsInline
        preload="metadata"
        poster={poster}
        aria-label={caption ?? "Project video"}
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      {caption ? <figcaption>{caption}</figcaption> : null}
    </figure>
  );
}
