"use client";

import * as React from "react";
import { FiSun } from "react-icons/fi";
import { FaMoon } from "react-icons/fa6";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export function HeaderBanner() {
  const { setTheme } = useTheme();

  return (
    <header className="relative bg-gradient-to-br from-purple-600 to-pink-500 text-white flex flex-col items-center justify-center shadow-lg overflow-hidden h-screen md:h-auto px-6">
      {/* Background Animation */}
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 opacity-75"></div>

      <div className="relative z-10 flex flex-col items-center p-6 space-y-4 md:space-y-6">
        {/* Main Heading and Name */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold tracking-tight text-center">
          Hola Amigos
        </h1>
        <p className="text-xs sm:text-xl md:text-2xl font-extralight tracking-tight text-center py-0">
          kaise ho theek ho ?
        </p>
        <p className="text-sm sm:text-lg md:text-2xl font-medium text-gray-200 text-center">
          Frontend Web Developer | Data Analyst | Tech Enthusiast
        </p>

        {/* Navigation Menu */}
        {/* <NavigationMenu className="w-full mt-4 md:mt-8">
          <NavigationMenuList className="flex flex-col md:flex-row md:gap-6 text-base md:text-lg font-semibold items-center">
            {["Education", "Experience", "Tech Stack", "Projects", "Certifications", "Extra-curricular", "Contact Me"].map((item, idx) => (
              <NavigationMenuItem
                key={idx}
                className="text-center hover:text-gray-300 transition-colors duration-200"
              >
                {item}
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu> */}

        {/* Theme Toggle Button */}
        {/* <div className="flex justify-center md:justify-end w-full absolute top-4 right-4 md:right-8">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                size="icon"
                className="text-white bg-transparent hover:bg-pink-500 transition-colors duration-200"
              >
                <FiSun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <FaMoon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="bg-purple-700 text-white">
              <DropdownMenuItem onClick={() => setTheme("light")}>Light</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>Dark</DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("system")}>System</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div> */}
      </div>
    </header>
  );
}

export default HeaderBanner;
