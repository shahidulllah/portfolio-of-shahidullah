// import { categories } from "@/lib/watchData";
// import { NextResponse } from "next/server";

// export async function GET(
//   req: Request,
//   { params }: { params: { category: string } }
// ) {
//   const category = categories.find((c) => c.slug === params.category);
//   if (!category) return NextResponse.json([], { status: 404 });

//   return NextResponse.json(category.playlists);
// }
