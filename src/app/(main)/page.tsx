import React from "react";
import Hero from "@/components/hero/Hero";
import Banquote from "@/components/Banquote/Banquote";
import Facilities from "@/components/Facilities/Facilities"
import Testimonials from "@/components/Testimonials/Testimonials"
import Contact from "@/components/Contact/Contact"
import Calender from "@/components/calender/calender"

export default function LandingPage() {

  return (
    <>
    
      <Hero/>
      <Banquote/>
      <Calender/>
      <Facilities/>
      <Testimonials/>
      <Contact/>
    </>
  );
}
