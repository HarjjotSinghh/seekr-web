import { Metadata } from "next";
import Hero from "@/components/Hero";
import Brands from "@/components/Brands";
import Feature from "@/components/Features";
import About from "@/components/About";
import FeaturesTab from "@/components/FeaturesTab";
import FunFact from "@/components/FunFact";
import Integration from "@/components/Integration";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Blog from "@/components/Blog";
import Testimonial from "@/components/Testimonial";

export const metadata: Metadata = {
  title: "Seekr | AI-Guided Careers, Crafted For You",
  description:
    "Seekr is an innovative career guidance platform that leverages cutting-edge AI technology to empower professionals in their career journeys. By combining machine learning, job market analysis, and personalized assessments, Seekr offers users a comprehensive suite of tools to navigate the ever-changing landscape of modern careers.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Brands />
      <Feature />
      {/* <About /> */}
      {/* <FeaturesTab /> */}
      {/* <FunFact /> */}
      {/* <Integration /> */}
      <CTA />
      <FAQ />
      <Testimonial />
      {/* <Pricing /> */}
      <Contact />
      {/* <Blog /> */}
    </main>
  );
}
