import "./globals.css";
import Navbar from '@/components/Navbar';
import ImageWithCaption from "@/components/ImageWithCaption";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";
import ScaleSection from "@/components/StatsSection";


export default function App() {
  return (
    <>
      <Navbar />
      <ImageWithCaption />
      <HeroSection />
      <InfoSection/>
      <ScaleSection/>
    </>
  );
}

