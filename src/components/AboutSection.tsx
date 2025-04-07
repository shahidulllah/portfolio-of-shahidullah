"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "@/utils/TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>JavaScript</li>
        <li>React.js</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>HTML</li>
        <li>CSS</li>
        <li>Tailwind</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>National University</li>
        <li>Bachelor of Honours Degree, Department of Philosophy</li>
        <li>Ananda Mohon University and College, Mymensingh, Bangladesh</li>
        <li>(From 2021 to Running)</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2 text-white">
        <li>Complete Web Development Course With Jhankar Mahbub</li>
        <li>Programming Hero</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [, startTransition] = useTransition();

  const handleTabChange = (id: React.SetStateAction<string>) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const selectedTab = TAB_DATA.find((t) => t.id === tab);

  return (
    <section className="text-black dark:text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-6 xl:gap-16 sm:py-16 xl:px-24">
        <div className="bg-slate-800/50 rounded-full mx-auto p-2 lg:p-2 border-2 flex items-center justify-center w-[240px] h-[295px] lg:w-[315px] lg:h-[390px]">
          <Image
            className="rounded-full"
            src="/images/about.png"
            width={350}
            height={350}
            alt="About pic"
            priority
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 text-center lg:text-left mt-4">
            About Me
          </h2>
          <p className="text-base text-justify text-white">
            Hi, I&apos;m a Junior Web Developer skilled in JavaScript, React,
            Node.js, Express, MongoDB, HTML, CSS, and Tailwind CSS and other
            tools. I have completed several full-stack projects, showcasing my
            ability to develop both front-end and back-end solutions. I am
            passionate about coding and eager to join a collaborative team where
            I can contribute to innovative web applications and continue to grow
            my skills. My goal is to create user-friendly and efficient web
            experiences. In my free time, I enjoy exploring new technologies and
            contributing to open-source projects.
          </p>
          <div className="flex flex-row justify-start mt-8 flex-wrap gap-4 text-white">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>
          <div className="mt-8">
            {selectedTab ? selectedTab.content : "No content found"}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
