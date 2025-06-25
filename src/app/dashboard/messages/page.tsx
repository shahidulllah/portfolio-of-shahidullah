"use client";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Loader2, Trash2 } from "lucide-react";
import { IContact } from "@/types/contact.type";

export default function MessageManagement() {
  const [messages, setMessages] = useState<IContact[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchMessages() {
      setLoading(true);
      const res = await fetch("/api/contact");
      const data = await res.json();
      setMessages(data);
      setLoading(false);
    }
    fetchMessages();
  }, []);

  const handleDelete = async (id: string) => {
    const res = await fetch("/api/contact", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      setMessages(messages.filter((msg) => msg._id !== id));
      toast.success("Message deleted successfully!");
    } else {
      toast.error("Failed to delete message.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white px-4 py-8 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-6">Contact Messages</h1>

      {loading && (
        <div className="text-center mt-12">
          <p className="text-white mb-4 text-center">
            <Loader2 />
          </p>
          <p className="text-white mb-4 text-center">Loading messages...</p>
        </div>
      )}

      {messages.length === 0 && !loading ? (
        <p className="text-center text-gray-400">No messages found.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {messages.map((msg) => (
            <div
              key={msg._id}
              className="bg-gray-800 p-6 rounded-lg shadow-lg flex flex-col"
            >
              <div>
                <div className="flex justify-between">
                  <h2 className="text-xl text-gray-300 font-semibold">
                    <span className="">Name: </span>
                    {""} <span>{msg.name}</span>
                  </h2>
                  <button
                    onClick={() => handleDelete(msg._id)}
                    className="text-white rounded flex items-center"
                  >
                    <Trash2 size={20} />
                  </button>
                </div>
                <p className="text-gray-400 mb-3 text-sm">
                  <span className="font-semibold">From: </span>
                  {""}
                  <span className="">{msg.email}</span>
                </p>
                <p className="pb-1 text-gray-400">Message:</p>
                <div className="bg-gray-700 min-h-20 rounded-lg p-2">
                  <p className="text-gray-300 ">{msg.message}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
