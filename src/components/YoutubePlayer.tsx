"use client";

export default function YouTubePlayer({ youtubeId }: { youtubeId: string }) {
  return (
    <iframe
      className="w-full h-[420px] rounded"
      src={`https://www.youtube.com/embed/${youtubeId}`}
      allow="accelerometer; autoplay; encrypted-media"
      allowFullScreen
    />
  );
}
