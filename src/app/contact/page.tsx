"use client";

import React, { useState } from "react";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { toast } from "sonner";

const EmailSection = () => {
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
      toast.success("Message sent successfully!");

      setFormData({ name: "", email: "", message: "" });
    } else {
      toast.error("Failed to send message. Please try again.");
    }
  };

  return (
    <section className="py-24 px-6">
      <div
        id="contact"
        className="grid md:grid-cols-2 gap-4 relative max-w-6xl mx-auto mt-8"
      >
        <div className="z-9 my flex flex-col justify-center text-center lg:text-left">
          <h5 className="text-3xl font-bold text-black dark:text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-black dark:text-white mb-4 max-w-md">
            I&apos;m currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>
          <div className="socials flex flex-row gap-2 justify-center lg:justify-start">
            <Link href="https://github.com/shahidulllah">
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
            <Link href="https://www.linkedin.com/in/shahidulllah/">
              <Image src={LinkedinIcon} alt="Linkedin Icon" />
            </Link>
          </div>
        </div>
        <div className="mt-6">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="name"
                className="text-black dark:text-white block mb-2 text-sm font-medium"
              >
                Name
              </label>
              <input
                onChange={handleChange}
                name="name"
                type="text"
                id="name"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Place your name"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="email"
                className="text-black dark:text-white block text-sm mb-2 font-medium"
              >
                Your email
              </label>
              <input
                onChange={handleChange}
                name="email"
                type="email"
                id="email"
                required
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Give your E-mail"
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="text-black dark:text-white block text-sm mb-2 font-medium"
              >
                Message
              </label>
              <textarea
                onChange={handleChange}
                name="message"
                id="message"
                className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                placeholder="Let's talk about..."
              />
            </div>
            <button
              type="submit"
              className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default EmailSection;
