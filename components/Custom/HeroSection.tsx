"use client";

import CarouselWithMultipleSlides from "@/components/customized/carousel/carousel-02";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

function HeroSection() {
  const statsData = [
    { number: "১০,০০০+", label: "বই বিজ্ঞাপন" },
    { number: "৫,০০০+", label: "সক্রিয় ব্যবহারকারী" },
    { number: "৬৪", label: "জেলায় সেবা" },
    { number: "৯৮%", label: "সন্তুষ্ট ক্রেতা" },
  ];
  return (
    <section
      className="text-white py-24 relative before:absolute before:inset-0 before:bg-black before:opacity-50 before:z-0"
      style={{
        backgroundImage: "url('https://i.postimg.cc/d0f3znNM/banner.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-8">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            বাংলাদেশের সবচেয়ে বড় <br />
            <span className="bg-gradient-to-r text-transparent bg-clip-text from-yellow-300 to-yellow-600 ">
              একাডেমিক বই
            </span>{" "}
            মার্কেটপ্লেস
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-blue-100 mb-8"
          >
            পুরানো বই কিনুন ও বিক্রি করুন সহজেই
          </motion.p>

          {/* Search Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="max-w-4xl mx-auto"
          >
            <div className="bg-white rounded-lg p-4 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input
                    placeholder="বই খুঁজুন..."
                    // value={searchQuery}
                    // onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10 border-gray-300"
                  />
                </div>

                {/* <Select value={selectedClass} onValueChange={setSelectedClass}> */}
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="শ্রেণি নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">সব শ্রেণি</SelectItem>
                    <SelectItem value="SSC">SSC</SelectItem>
                    <SelectItem value="HSC">HSC</SelectItem>
                    <SelectItem value="Honours">অনার্স</SelectItem>
                    <SelectItem value="Masters">মাস্টার্স</SelectItem>
                    <SelectItem value="MBBS">MBBS</SelectItem>
                    <SelectItem value="Engineering">ইঞ্জিনিয়ারিং</SelectItem>
                  </SelectContent>
                </Select>

                <Select>
                  {/* <Select value={selectedDistrict} onValueChange={setSelectedDistrict}> */}
                  <SelectTrigger>
                    <SelectValue placeholder="জেলা নির্বাচন করুন" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">সব জেলা</SelectItem>
                    <SelectItem value="Dhaka">ঢাকা</SelectItem>
                    <SelectItem value="Chittagong">চট্টগ্রাম</SelectItem>
                    <SelectItem value="Sylhet">সিলেট</SelectItem>
                    <SelectItem value="Rajshahi">রাজশাহী</SelectItem>
                    <SelectItem value="Khulna">খুলনা</SelectItem>
                    <SelectItem value="Barisal">বরিশাল</SelectItem>
                  </SelectContent>
                </Select>

                <Link href="/books">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Search className="w-4 h-4 mr-2" />
                    খুঁজুন
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {statsData.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.1 }}
            >
              <div className="text-2xl font-bold bg-gradient-to-r text-transparent bg-clip-text from-yellow-300 to-yellow-600 ">
                {stat.number}
              </div>
              <div className="text-blue-100">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
      <div className="absolute inset-x-0 bottom-0 text-black h-20">
        <CarouselWithMultipleSlides />
      </div>
    </section>
  );
}

export default HeroSection;
