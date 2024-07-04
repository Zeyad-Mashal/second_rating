import Image from "next/image";
import Register from "./components/register/page";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import "./globals.css"
import NFC from "./components/NFC/NFC";
import Social from "./components/Social/Social";
import Seo from "./components/SEO/Seo";
import Footer from "./components/Footer/Footer";
import More from "./components/More/More";
export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <NFC />
      <Social />
      <Seo />
      <More />
      <Footer />
    </main>
  );
}
