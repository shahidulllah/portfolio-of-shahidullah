"use client";

import { useState } from "react";
import { MessageCircle, X, Facebook, Phone } from "lucide-react";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Options Box */}
      {open && (
        <div className="mb-3 w-48 p-4 bg-white shadow-xl rounded-xl border space-y-3 animate-fadeIn">
          <a
            href="https://m.me/shahidullllah"
            target="_blank"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <Facebook size={20} className="text-blue-600" />
            <span>Messenger</span>
          </a>

          <a
            href="https://wa.me/+8801747162648"
            target="_blank"
            className="flex items-center gap-2 p-2 rounded-lg hover:bg-gray-100"
          >
            <Phone size={20} className="text-green-600" />
            <span>WhatsApp</span>
          </a>
        </div>
      )}

      {/* Chat Bubble Button */}
      <button
        onClick={() => setOpen(!open)}
        className="p-4 bg-black text-white rounded-full shadow-lg hover:bg-gray-800 transition"
      >
        {open ? <X size={24} /> : <MessageCircle size={24} />}
      </button>
    </div>
  );
}
