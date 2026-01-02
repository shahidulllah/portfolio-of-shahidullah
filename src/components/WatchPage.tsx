/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { ArrowRight, Clock, TrendingUp, Users, Star } from "lucide-react";
import { motion } from "framer-motion";
import { categories } from "@/lib/watchData";

const categoryIcons: Record<string, React.ReactNode> = {
  trending: <TrendingUp className="w-6 h-6 text-purple-900" />,
  popular: <Users className="w-6 h-6" />,
  recent: <Clock className="w-6 h-6" />,
  top: <Star className="w-6 h-6" />,
};

export default function WatchPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 pt-24 lg:pt-32 pb-12">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Explore My{" "}
            <span className="text-purple-900 dark:text-purple-300">
              Video Content
            </span>
          </h1>
          <p className="text-md lg:text-lg">
            Browse through carefully curated categories to find content that
            matches your interests
          </p>
        </div>

        {/* Categories Grid */}
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat: any, index: number) => (
              <motion.div
                key={cat.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <a href={`/watch/${cat.slug}`} className="group block">
                  <div className="bg-gradient-to-r from-[#baab86] to-[#4d889f] dark:from-[#314155] dark:to-[#262656] dark:text-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-700 hover:border-blue-500 hover:translate-y-[-4px] h-full">
                    {/* Category Header */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="p-3 rounded-xl bg-gradient-to-br from-purple-300 to-purple-100 group-hover:from-purple-200 group-hover:to-purple-100 transition-colors">
                          {categoryIcons[cat.slug] || (
                            <div className="w-6 h-6 bg-gradient-to-br from-purple-400 to-purple-700 rounded" />
                          )}
                        </div>
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-all" />
                      </div>

                      {/* Category Title */}
                      <h3 className="text-xl font-semibold mb-2 transition-colors">
                        {cat.title}
                      </h3>

                      {/* Optional: Category Description */}
                      {cat.description && (
                        <p className=" text-sm mb-4 line-clamp-1">
                          {cat.description}
                        </p>
                      )}

                      {/* Optional: Video Count Badge */}
                      {cat.videoCount && (
                        <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-300 group-hover:bg-blue-50 transition-colors">
                          <span className="text-xs font-medium text-gray-700 group-hover:text-blue-700">
                            {cat.videoCount} videos
                          </span>
                        </div>
                      )}
                    </div>

                    {/* Optional: Gradient Bottom Border */}
                    <div className="h-1 bg-gradient-to-r from-transparent via-purple-900 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  </div>
                </a>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Optional: Stats Section */}
        <div className="mt-16 pt-8 border-t border-gray-300">
          <div className="text-center">
            <p className=" text-sm">
              Explore thousands of videos across {categories.length} categories
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
