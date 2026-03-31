import Features from "@/components/Features";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowToUse from "@/components/HowToUse";

export default function Page() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <main>
        <Hero />
        <Features />
        <HowToUse />
      </main>
      <Footer />
    </div>
  );
}
