import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WhatYouGet from "@/components/WhatYouGet";
import WhyChooseUs from "@/components/WhyChooseUs";
import Pricing from "@/components/Pricing";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhatYouGet />
      <WhyChooseUs />
      <Pricing />
      <Footer />
    </div>
  );
}
