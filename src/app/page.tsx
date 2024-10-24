import Footer from "@/pages/Footer";
import Hero from "@/pages/Hero";
import ModeToggle from "@/pages/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <section className="p-4 gap-4">
    <ModeToggle/>
    <Hero/>
    <Footer/>
    </section>
  );
}
