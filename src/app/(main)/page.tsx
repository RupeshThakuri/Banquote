import React from "react";
import Hero from "@/components/hero/Hero";
import Banquote from "@/components/Banquote/Banquote";
import Facilities from "@/components/Facilities/Facilities"
import Testimonials from "@/components/Testimonials/Testimonials"
import Contact from "@/components/Contact/Contact"

export default function LandingPage() {

  return (
    <>
      <Hero/>
      <Banquote/>
      <Facilities/>
      <Testimonials/>
      <Contact/>
    </>
  );
}
