"use client"
import Navbar from "@/components/Navbar";
import Image from "next/image";
import HeroAnimation from "@/components/HeroAnimation/HeroAnimation";
import AboutUs from "@/components/About/About";
import Carousel from "@/components/Carousel";
import JuiceMenu from "@/components/Juices/JuilceMenu";
import Burger from "@/components/Burger";
import Footer from "@/components/Footer"
export default function Home() {
  return (
  <>
  <Navbar/>
    <HeroAnimation/>
 <AboutUs/>
    <Carousel/>
    <JuiceMenu/>
    <Burger/>
    <Footer/>

  a
  </>
  );
}
