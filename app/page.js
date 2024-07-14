
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import styles from "./globals.css"
import NFC from "./components/NFC/NFC";
import Social from "./components/Social/Social";
import Seo from "./components/SEO/Seo";
import Footer from "./components/Footer/Footer";
import More from "./components/More/More";
import VideoBackground from "./components/VideoBackground/VideoBackground"
export default function Home() {
  return (
    <main>
      <Navbar />
      <VideoBackground />
      <Hero />
      <NFC />
      <Social />
      <Seo />
      <More />
      <Footer />

    </main>
  );
}
