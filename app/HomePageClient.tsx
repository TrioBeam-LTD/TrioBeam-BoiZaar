import CategorySection from "@/components/Custom/CategorySection";
import FeatureSection from "@/components/Custom/FeatureSection";
import HeroSection from "@/components/Custom/HeroSection";
import Navber from "@/components/Custom/Navber";
import RecentBook from "@/components/Custom/RecentBook";
import React from "react";

function HomePageClient() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navber />
      <HeroSection />
      <CategorySection />
      <FeatureSection />
      <RecentBook />
    </div>
  );
}

export default HomePageClient;
