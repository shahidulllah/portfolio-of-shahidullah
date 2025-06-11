"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";

const EmailSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });
    if (res.ok) {
      toast.success("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
    setIsSubmitting(false);
  };

  return (
    <section className="py-24 px-6">
      <div
        id="contact"
        className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto mt-8"
      >
        {/* Contact Text */}
        <div className="flex flex-col justify-center text-center md:text-left">
          <h2 className="text-3xl font-bold text-black dark:text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-gray-700 dark:text-gray-300 mb-6">
            I&apos;m currently open to opportunities! Whether you have a
            question, idea, or want to collaborate, feel free to reach out.
            I&apos;ll get back to you as soon as I can.
          </p>
          <div className="socials flex flex-row gap-2 justify-center lg:justify-start">
            <Link href="https://github.com/shahidulllah" target="_blank">
              <Image src={GithubIcon} alt="GitHub" />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shahidulllah/"
              target="_blank"
            >
              <Image src={LinkedinIcon} alt="LinkedIn" />
            </Link>
          </div>
        </div>

        {/* Contact Form */}
        <div>
          <form
            className="p-6 rounded-lg shadow-xl space-y-6"
            onSubmit={handleSubmit}
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="block font-medium dark:text-gray-300 mb-1"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                value={formData.name}
                name="name"
                type="text"
                id="name"
                required
                className="w-full bg-[#1f2028] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your name"
              />
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block font-medium dark:text-gray-300 mb-1"
              >
                Email
              </label>
              <input
                onChange={handleChange}
                value={formData.email}
                name="email"
                type="email"
                id="email"
                required
                className="w-full bg-[#1f2028] border border-gray-600 rounded-lg p-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="your@email.com"
              />
            </div>

            {/* Message */}
            <div>
              <label
                htmlFor="message"
                className="block font-medium dark:text-gray-300 mb-1"
              >
                Message
              </label>
              <textarea
                onChange={handleChange}
                value={formData.message}
                name="message"
                id="message"
                rows={5}
                required
                className="w-full bg-transparent border border-gray-600 dark:border-gray-400 rounded-lg p-3 placeholder-gray-700 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your message..."
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex justify-center items-center gap-2 w-full bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] text-black dark:text-white font-semibold py-2.5 px-5 rounded-lg transition-all duration-300 hover:scale-105 shadow-lg disabled:opacity-50"
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin w-4 h-4" /> Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
