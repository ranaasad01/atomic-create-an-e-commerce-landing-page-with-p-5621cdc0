import PromoBanner from "@/components/PromoBanner";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import NewsletterSection from "@/components/NewsletterSection";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <PromoBanner />
      <Navbar />
      <Hero />
      <ProductGrid />
      <NewsletterSection />
      <Footer />
    </main>
  );
}
