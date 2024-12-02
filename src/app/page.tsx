import "./globals.css";
import type { AppProps } from 'next/app';
import Navbar from '@/components/Navbar';
import ImageWithCaption from "@/components/ImageWithCaption";
import HeroSection from "@/components/HeroSection";
import InfoSection from "@/components/InfoSection";

import StatsSection from "@/components/StatsSection";


export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <ImageWithCaption />
      <HeroSection />
      <InfoSection/>

      <StatsSection/>
    </>
  );
}

