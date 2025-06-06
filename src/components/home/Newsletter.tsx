"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";

export default function NewsletterSignupSection() {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !email.includes("@")) {
      toast.error("Please enter a valid email address.");
      return;
    }

    //TO DO: You can connect this to Mailchimp / Firebase / DB API
    toast.success("Thanks for subscribing!");
    setEmail("");
  };

  return (
    <section className="py-16 px-6 dark:text-white text-black">
      <div className="">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join My Newsletter
          </h2>
          <p className="mb-8 text-center">
            Stay updated with my latest projects, blogs, and development tips.
            <br />
            No spam — just good stuff.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full sm:w-auto px-4 py-3 bg-slate-700 placeholder:text-gray-400 dark:border rounded-xl text-gray-300 focus:outline-none"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-[#ddcb9f] to-[#599cb7] dark:from-[#314155] dark:to-[#262656] dark:text-white px-6 py-3 dark:border rounded-xl font-medium transition-all duration-300 hover:bg-gray-900/30 hover:text-black hover:scale-105 hover:shadow-md border border-gray-500 dark:border-gray-400"
            >
              Subscribe
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
