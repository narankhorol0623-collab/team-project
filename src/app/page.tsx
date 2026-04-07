import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

import HowToUse from "@/components/HowToUse";
import HowToUse2 from "@/components/HowToUse2";

export default function Page() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowToUse />
        <HowToUse2 />
      </main>
      <Footer />
    </div>
  );
}
