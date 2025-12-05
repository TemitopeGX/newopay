"use client";

import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { TrustSection } from "@/components/TrustSection";
import { Services } from "@/components/Services";
import { Timeline } from "@/components/Timeline";
import { DebitCard } from "@/components/DebitCard";
import { Testimonials } from "@/components/Testimonials";
import { DownloadSection } from "@/components/DownloadSection";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-black">
      <Navbar />
      <Hero />
      <TrustSection />
      <Services />
      <Timeline />
      <DebitCard />
      <Testimonials />
      <DownloadSection />
      <Footer />
    </main>
  );
}
