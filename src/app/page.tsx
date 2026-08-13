import Hero from "@/components/home/Hero";
import VisionStory from "@/components/home/VisionStory";
import FrameStory from "@/components/home/FrameStory";
import LensStory from "@/components/home/LensStory";
import CareStory from "@/components/home/CareStory";
import EditorialCatalogue from "@/components/home/EditorialCatalogue";
import EditorialStoreLocator from "@/components/home/EditorialStoreLocator";
import SocialEditorial from "@/components/home/SocialEditorial";
import FinalEditorialCTA from "@/components/home/FinalEditorialCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <VisionStory />
      <FrameStory />
      <LensStory />
      <CareStory />
      <EditorialCatalogue />
      <EditorialStoreLocator />
      <SocialEditorial />
      <FinalEditorialCTA />
    </>
  );
}
