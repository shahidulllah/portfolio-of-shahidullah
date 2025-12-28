/* eslint-disable @typescript-eslint/no-explicit-any */
import YouTubePlayer from "@/components/YoutubePlayer";
import Image from "next/image";

export default async function PlaylistPage({ params }: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BASE_URL}/api/watch/videos/${params.category}/${params.playlist}`
  );
  const videos = await res.json();

  const current = videos[0];

  return (
    <div className="flex flex-col lg:flex-row gap-6">
      {/* Player */}
      <div className="flex-1">
        <YouTubePlayer youtubeId={current.youtubeId} />
        <h2 className="mt-3 text-xl font-semibold">{current.title}</h2>
      </div>

      {/* Sidebar */}
      <aside className="w-full lg:w-80 space-y-3">
        {videos.map((v: any) => (
          <div key={v.id} className="flex gap-3 cursor-pointer">
            <Image
              className="w-28 rounded"
              src={`https://img.youtube.com/vi/${v.youtubeId}/mqdefault.jpg`}
              alt="Video"
            />
            <p>{v.title}</p>
          </div>
        ))}
      </aside>
    </div>
  );
}
