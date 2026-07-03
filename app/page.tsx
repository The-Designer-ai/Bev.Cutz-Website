import { BookingSection } from "@/components/BookingSection";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { InstagramCTA } from "@/components/InstagramCTA";
import { Services } from "@/components/Services";
import { VideoCarousel } from "@/components/VideoCarousel";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { getTransformationVideos } from "@/lib/gallery";

export const dynamic = "force-dynamic";

export default function Home() {
  const transformationVideos = getTransformationVideos();

  return (
    <main className="bg-ink text-white">
      <Hero />
      <VideoCarousel videos={transformationVideos} />
      <Services />
      <BookingSection />
      <WhyChooseUs />
      <InstagramCTA />
      <Footer />
    </main>
  );
}
