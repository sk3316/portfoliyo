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
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

import {
  // DropdownMenu,
  // DropdownMenuContent,
  // DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  // DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function ModeToggle() {
  const { setTheme } = useTheme();

  return (
    <main className="">
      <div>
        <NavigationMenu>
          <NavigationMenuList className="gap-4">
            <NavigationMenuItem className="text-3xl">
              Shitanshu Priyadarshi
              {/* <NavigationMenuTrigger>Shitanshu</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>Link</NavigationMenuLink>
              </NavigationMenuContent> */}
            </NavigationMenuItem>
            <Separator orientation="vertical" />
            {/* <NavigationMenuItem className="text-xl">
              Education
            </NavigationMenuItem>
            <NavigationMenuItem className="text-xl">
              Experience
            </NavigationMenuItem>
            <NavigationMenuItem className="text-xl">
              Tech Stack
            </NavigationMenuItem>
            <NavigationMenuItem className="text-xl">
              Projects
            </NavigationMenuItem>
            <NavigationMenuItem className="text-xl">
              Certifications
            </NavigationMenuItem>
            <NavigationMenuItem className="text-xl">
              Extra-curricular
            </NavigationMenuItem>
            <NavigationMenuItem className="text-xl">
              Contact Me
            </NavigationMenuItem> */}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
        {/* <CollapsibleDemo/> */}
      {/* <div className="flex justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>Open</DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div> */}
      <div className="flex justify-end">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="icon">
              <FiSun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <FaMoon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-fuchsia-700">
            <DropdownMenuItem onClick={() => setTheme("light")}>
              Light
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("dark")}>
              Dark
            </DropdownMenuItem>
            <DropdownMenuItem onClick={() => setTheme("system")}>
              System
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </main>
  );
}

export default ModeToggle;
