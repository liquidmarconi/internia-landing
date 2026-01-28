import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import Cases from "@/components/sections/Cases";
import Process from "@/components/sections/Process";
import CTA from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-background flex flex-col font-sans text-foreground selection:bg-primary/30 selection:text-white">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        <Services />
        <Cases />
        <Process />
        <CTA />
      </main>
      
      <Footer />
    </div>
  );
}
