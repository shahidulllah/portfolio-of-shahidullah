import { connectDB } from "@/lib/mongodb";
import Blog from "@/models/Blog";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find();
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching projects", error },
      { status: 500 }
    );
  }
}
