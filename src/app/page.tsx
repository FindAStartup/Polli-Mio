import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import HeroAnimation from "@/components/HeroAnimation/HeroAnimation";
import AboutUs from "@/components/About/About";
import Carousel from "@/components/Carousel";
import JuiceMenu from "@/components/Juices/JuilceMenu";
import Burger from "@/components/Burger";
import Footer from "@/components/Footer"

export const metadata: Metadata = {
  title: "Best Burger Shop in Kattanam | Pollomio",
  description: "Looking for the best burger shop in Kattanam? Pollomio offers fresh, juicy burgers, loaded fries, and fast delivery for the ultimate tasty burger experience.",
  alternates: {
    canonical: "https://www.pollomio.in/",
  },
};

export default function Home() {
  return (
    <>
      <Navbar />
      <HeroAnimation />
      <AboutUs />
      <Carousel />
      <JuiceMenu />
      <Burger />
      <Footer />
    </>
  );
}
