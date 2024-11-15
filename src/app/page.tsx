import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import ModeToggle, { HeaderBanner } from "@/pages/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className=" gap-4">
    <HeaderBanner/>
    <Hero/>
    <Footer/>
    </section>
  );
}
