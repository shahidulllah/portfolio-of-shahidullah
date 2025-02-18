"use client";

import { IContact } from "@/types/contact.type";
import { useEffect, useState } from "react";

export default function MessageManagement() {
  const [messages, setMessages] = useState<IContact[]>([]);

  useEffect(() => {
    async function fetchMessages() {
      const res = await fetch(`${process.env.BASE_URL}/api/contact`);
      const data = await res.json();
      setMessages(data);
    }
    fetchMessages();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center text-white">Messages</h1>
      <div className="space-y-4">
        {messages.map((msg) => (
          <div key={msg._id} className="bg-white p-4 shadow rounded">
            <h2 className="text-xl font-semibold">{msg.name}</h2>
            <p className="text-gray-600">{msg.email}</p>
            <p className="text-gray-600">{msg.message}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
