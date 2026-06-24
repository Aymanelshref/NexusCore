import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Products from "@/components/Products";
import HowItWorks from "@/components/HowItWorks";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <HowItWorks />
    </main>
  );
}