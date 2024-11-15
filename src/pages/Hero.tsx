"use client";
import Image from "next/image";
import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ModeToggle from "./Navbar";
// import Home from "@/hero_toggle/Home";
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
      <Tabs defaultValue="About me" >
        <TabsList className="bg-slate-400 rounded-2xl shadow-2xl gap-1">
          <TabsTrigger value="About me" className="bg-red-400 rounded-2xl shadow-2xl">About me</TabsTrigger>
          <TabsTrigger value="Education" className="bg-red-400 rounded-2xl shadow-2xl">Education</TabsTrigger>
          <TabsTrigger value="Experience" className="bg-red-400 rounded-2xl shadow-2xl">Experience</TabsTrigger>
          <TabsTrigger value="Technical Skills" className="bg-red-400 rounded-2xl shadow-2xl">Technical Skills</TabsTrigger>
          <TabsTrigger value="Projects" className="bg-red-400 rounded-2xl shadow-2xl">Projects</TabsTrigger>
          <TabsTrigger value="Certifications" className="bg-red-400 rounded-2xl shadow-2xl">Certifications</TabsTrigger>
          <TabsTrigger value="Hobbies" className="bg-red-400 rounded-2xl shadow-2xl">Hobbies</TabsTrigger>
          <TabsTrigger value="Co-curricular" className="bg-red-400 rounded-2xl shadow-2xl">Co-curricular</TabsTrigger>
          <TabsTrigger value="Socials" className="bg-red-400 rounded-2xl shadow-2xl">Socials</TabsTrigger>
          <TabsTrigger value="Contact-me" className="bg-red-400 rounded-2xl shadow-2xl">Contact-me</TabsTrigger>
        </TabsList>
        <TabsContent value="About me">
          <Introduction/>
        </TabsContent>
        <TabsContent value="Education">
          <Education/>
        </TabsContent>
        <TabsContent value="Experience">
          <Experience/>
        </TabsContent>
        <TabsContent value="Technical Skills">
          <TechnicalSkills/>
        </TabsContent>
        <TabsContent value="Projects">
          <Projects/>
        </TabsContent>
        <TabsContent value="Certifications">
          <Certifications/>
        </TabsContent>
        <TabsContent value="Hobbies">
          <Hobbies/>
        </TabsContent>
        <TabsContent value="Co-curricular">
          <CoCurricularActivities/>
        </TabsContent>
        <TabsContent value="Socials">
          <SocialLinks/>
        </TabsContent>
        <TabsContent value="Contact-me">
          <ContactMe/>
        </TabsContent>
      </Tabs>
    </main>
  );
};

export default Hero;
