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

// Fetch all messages
export async function GET() {
  try {
    await connectDB();
    const messages = await Contact.find();
    return NextResponse.json(messages, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Error fetching messages", error },
      { status: 500 }
    );
  }
}

// Delete a message
export async function DELETE(req: Request) {
  try {
    await connectDB();
    const { id } = await req.json();
    await Contact.findByIdAndDelete(id);
    return NextResponse.json(
      { message: "Message deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Error deleting message", error },
      { status: 500 }
    );
  }
}
