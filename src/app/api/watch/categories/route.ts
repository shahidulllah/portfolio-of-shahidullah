import { categories } from "@/lib/watchData";
import { NextResponse } from "next/server";


export async function GET() {
  return NextResponse.json(categories.map(({ playlists, ...rest }) => rest));
}
