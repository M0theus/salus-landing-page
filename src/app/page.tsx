import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Solution } from "@/components/solutions";
import { Features } from "@/components/features";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Solution />
      <Features />
      <Footer />
    </main>
  );
}