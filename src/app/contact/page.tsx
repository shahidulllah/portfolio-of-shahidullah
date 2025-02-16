"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    }
  };

  return (
    <section className="py-10 px-6 mt-20">
      <h1 className="text-3xl font-bold text-center mb-6">Contact Me</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          value={formData.name}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          value={formData.email}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          value={formData.message}
          className="w-full p-2 mb-3 border rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Send Message
        </button>
      </form>
    </section>
  );
}
