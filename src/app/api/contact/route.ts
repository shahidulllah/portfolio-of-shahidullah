import { connectDB } from "@/lib/mongodb";
import Contact from "@/models/Contact";
import { NextResponse } from "next/server";

// Handle contact form submissions
export async function POST(req: Request) {
  try {
    await connectDB();
    const data = await req.json();
    const newMessage = await Contact.create(data);
    return NextResponse.json(
      { message: "Message sent successfully!", newMessage },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error saving message", error },
      { status: 500 }
    );
  }
}
