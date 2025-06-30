"use client";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  BookOpen,
  Calculator,
  Globe,
  GraduationCap,
  Heart,
  Lightbulb,
  Microscope,
  Palette,
} from "lucide-react";
import { useCallback, useEffect, useState } from "react";

// Category data with Bengali names and icons
const categories = [
  {
    id: 1,
    name: "উপন্যাস",
    englishName: "Novels",
    icon: BookOpen,
    color: "from-blue-500 to-blue-600",
    bgColor: "bg-blue-50",
    count: "১২৫০+",
  },
  {
    id: 2,
    name: "শিক্ষামূলক",
    englishName: "Educational",
    icon: GraduationCap,
    color: "from-green-500 to-green-600",
    bgColor: "bg-green-50",
    count: "৮৯০+",
  },
  {
    id: 3,
    name: "প্রেমের গল্প",
    englishName: "Romance",
    icon: Heart,
    color: "from-pink-500 to-pink-600",
    bgColor: "bg-pink-50",
    count: "৬৭৫+",
  },
  {
    id: 4,
    name: "স্ব-উন্নতি",
    englishName: "Self Help",
    icon: Lightbulb,
    color: "from-yellow-500 to-yellow-600",
    bgColor: "bg-yellow-50",
    count: "৪৩২+",
  },
  {
    id: 5,
    name: "ইতিহাস",
    englishName: "History",
    icon: Globe,
    color: "from-purple-500 to-purple-600",
    bgColor: "bg-purple-50",
    count: "৩৮৭+",
  },
  {
    id: 6,
    name: "শিল্পকলা",
    englishName: "Arts",
    icon: Palette,
    color: "from-indigo-500 to-indigo-600",
    bgColor: "bg-indigo-50",
    count: "২৯৫+",
  },
  {
    id: 7,
    name: "গণিত",
    englishName: "Mathematics",
    icon: Calculator,
    color: "from-orange-500 to-orange-600",
    bgColor: "bg-orange-50",
    count: "৫৪৩+",
  },
  {
    id: 8,
    name: "বিজ্ঞান",
    englishName: "Science",
    icon: Microscope,
    color: "from-teal-500 to-teal-600",
    bgColor: "bg-teal-50",
    count: "৭২১+",
  },
];

function CategorySlider() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  // Auto-play functionality
  const autoPlay = useCallback(() => {
    if (!api) return;

    if (api.canScrollNext()) {
      api.scrollNext();
    } else {
      api.scrollTo(0); // Go back to first slide
    }
  }, [api]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Set up auto-play interval
    const interval = setInterval(autoPlay, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [api, autoPlay]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-2">বই ক্যাটেগরি</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          আপনার পছন্দের বিষয়ের বই খুঁজে নিন। আমাদের রয়েছে বিভিন্ন ধরনের বইয়ের
          বিশাল সংগ্রহ।
        </p>
      </div>

      {/* Carousel */}
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-2 md:-ml-4">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <CarouselItem
                key={category.id}
                className="pl-2 md:pl-4 basis-full sm:basis-1/2 md:basis-1/3 lg:basis-1/4"
              >
                <Card className="group cursor-pointer transition-all duration-300 hover:shadow-xl hover:-translate-y-2 border-0 bg-white overflow-hidden">
                  <CardContent className="p-0">
                    <div
                      className={`${category.bgColor} p-6 relative overflow-hidden`}
                    >
                      {/* Background decoration */}
                      <div className="absolute top-0 right-0 w-20 h-20 bg-white/10 rounded-full -translate-y-10 translate-x-10"></div>
                      <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full translate-y-8 -translate-x-8"></div>

                      {/* Icon */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                      >
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>

                      {/* Category Info */}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-gray-900 mb-1 group-hover:text-gray-700 transition-colors">
                          {category.name}
                        </h3>
                        <p className="text-sm text-gray-600 mb-3">
                          {category.englishName}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="text-lg font-semibold text-gray-800">
                            {category.count}
                          </span>
                          <span className="text-sm text-gray-500">বই</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            );
          })}
        </CarouselContent>

        {/* Navigation Buttons */}
        <CarouselPrevious className="hidden md:flex -left-12 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-200" />
        <CarouselNext className="hidden md:flex -right-12 bg-white/90 backdrop-blur-sm border-gray-200 hover:bg-white hover:shadow-lg transition-all duration-200" />
      </Carousel>

      {/* Dots Indicator */}
      <div className="flex justify-center mt-6 space-x-2">
        {Array.from({ length: Math.ceil(categories.length / 4) }).map(
          (_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                Math.floor((current - 1) / 4) === index
                  ? "bg-blue-600 w-6"
                  : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => api?.scrollTo(index * 4)}
            />
          )
        )}
      </div>

      {/* Auto-play indicator */}
      <div className="text-center mt-4">
        <p className="text-xs text-gray-500 flex items-center justify-center">
          <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
          স্বয়ংক্রিয় স্লাইড চালু আছে
        </p>
      </div>
    </div>
  );
}

export default CategorySlider;
