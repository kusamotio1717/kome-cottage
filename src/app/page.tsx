import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Concept from "@/components/Concept";
import Space from "@/components/Space";
import Experience from "@/components/Experience";
import Gallery from "@/components/Gallery";
import Information from "@/components/Information";
import Booking from "@/components/Booking";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Concept />
        <Space />
        <Experience />
        <Gallery />
        <Information />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
