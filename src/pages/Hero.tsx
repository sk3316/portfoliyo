"use client";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";
import ModeToggle from "./Navbar";
// Import your tabs content components
import Education from "@/hero_toggle/Education";
import Experience from "@/hero_toggle/Experience";
import TechnicalSkills from "@/hero_toggle/Technical_skills";
import Projects from "@/hero_toggle/Projects";
import Introduction from "@/hero_toggle/Home";
import Certifications from "@/hero_toggle/Certifications";
import Hobbies from "@/hero_toggle/Hobbies";
import CoCurricularActivities from "@/hero_toggle/Co-curriculer";
import SocialLinks from "@/hero_toggle/Socials";
import ContactMe from "@/hero_toggle/Contact-me";

const Hero = () => {
  return (
    <main className="p-6">
      <Tabs defaultValue="About me">
        {/* Scrollable Tabs List */}
        <ScrollArea className="w-full overflow-hidden rounded-2xl bg-slate-400 shadow-2xl">
          <TabsList className="flex gap-2 p-2 w-max min-w-full">
            <TabsTrigger value="About me" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              About me
            </TabsTrigger>
            <TabsTrigger value="Education" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Education
            </TabsTrigger>
            <TabsTrigger value="Experience" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Experience
            </TabsTrigger>
            <TabsTrigger value="Technical Skills" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Technical Skills
            </TabsTrigger>
            <TabsTrigger value="Projects" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Projects
            </TabsTrigger>
            <TabsTrigger value="Certifications" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Certifications
            </TabsTrigger>
            <TabsTrigger value="Hobbies" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Hobbies
            </TabsTrigger>
            <TabsTrigger value="Co-curricular" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Co-curricular
            </TabsTrigger>
            <TabsTrigger value="Socials" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Socials
            </TabsTrigger>
            <TabsTrigger value="Contact-me" className="bg-red-400 rounded-2xl shadow-2xl px-4 py-2">
              Contact-me
            </TabsTrigger>
          </TabsList>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>

        {/* Content Sections */}
        <TabsContent value="About me">
          <Introduction />
        </TabsContent>
        <TabsContent value="Education">
          <Education />
        </TabsContent>
        <TabsContent value="Experience">
          <Experience />
        </TabsContent>
        <TabsContent value="Technical Skills">
          <TechnicalSkills />
        </TabsContent>
        <TabsContent value="Projects">
          <Projects />
        </TabsContent>
        <TabsContent value="Certifications">
          <Certifications />
        </TabsContent>
        <TabsContent value="Hobbies">
          <Hobbies />
        </TabsContent>
        <TabsContent value="Co-curricular">
          <CoCurricularActivities />
        </TabsContent>
        <TabsContent value="Socials">
          <SocialLinks />
        </TabsContent>
        <TabsContent value="Contact-me">
          <ContactMe />
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Hero;
