import { categories } from "@/lib/watchData";
import { NextResponse } from "next/server";

export async function GET(
  req: Request,
  { params }: { params: { category: string; playlist: string } }
) {
  const category = categories.find((c) => c.slug === params.category);
  const playlist = category?.playlists.find((p) => p.slug === params.playlist);

  return NextResponse.json(playlist?.videos || []);
}
