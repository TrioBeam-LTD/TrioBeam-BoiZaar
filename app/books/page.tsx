"use client";

import ProductCard from "@/components/Custom/Card";
import Navber from "@/components/Custom/Navber";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { useBookStore } from "@/lib/store";
import { motion } from "framer-motion";
import { Grid, List, Search, SlidersHorizontal } from "lucide-react";
import { useState } from "react";

export default function BookPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 5000]);
  const [selectedClass, setSelectedClass] = useState("all");
  const [selectedSubject, setSelectedSubject] = useState("all");
  const [selectedDistrict, setSelectedDistrict] = useState("all");
  const [selectedCondition, setSelectedCondition] = useState("all");
  const [sortBy, setSortBy] = useState("newest");

  const { books, filteredBooks, setFilters } = useBookStore();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <Navber />

      {/* Search & filter Section */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-4">
                সব বই ({filteredBooks.length}টি)
              </h1>
              {/* Search Bar */}
              <div className="relative max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  placeholder="বই খুঁজুন..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 border-gray-300"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              {/* filter toogle */}
              <Button
                variant="outline"
                size="sm"
                onClick={() => setShowFilters(!showFilters)}
                className="border-gray-300"
              >
                <SlidersHorizontal className="w-4 h-4 mr-2" />
                ফিল্টার
              </Button>

              {/* View  Mode Toggle */}
              <div className=" flex border border-gray-300 rounded-lg overflow-hidden">
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className={`rounded-none ${
                    viewMode === "grid" ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className={`rounded-none ${
                    viewMode === "list" ? "bg-blue-600 text-white" : ""
                  }`}
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto", animationDelay: 0.5  }}
              exit={{ opacity: 0, height: 0 }}
              className="mt-6 p-6 bg-gray-50 rounded-lg border border-gray-200"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    শ্রেণি
                  </label>
                  <Select
                    value={selectedClass}
                    onValueChange={setSelectedClass}
                  >
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
                      <SelectItem value="BBA">BBA</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    বিষয়
                  </label>
                  <Select
                    value={selectedSubject}
                    onValueChange={setSelectedSubject}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="বিষয় নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">সব বিষয়</SelectItem>
                      <SelectItem value="Mathematics">গণিত</SelectItem>
                      <SelectItem value="Physics">পদার্থবিজ্ঞান</SelectItem>
                      <SelectItem value="Chemistry">রসায়ন</SelectItem>
                      <SelectItem value="Biology">জীববিজ্ঞান</SelectItem>
                      <SelectItem value="Bangla">বাংলা</SelectItem>
                      <SelectItem value="English">ইংরেজি</SelectItem>
                      <SelectItem value="Economics">অর্থনীতি</SelectItem>
                      <SelectItem value="Accounting">হিসাববিজ্ঞান</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    জেলা
                  </label>
                  <Select
                    value={selectedDistrict}
                    onValueChange={setSelectedDistrict}
                  >
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
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    অবস্থা
                  </label>
                  <Select
                    value={selectedCondition}
                    onValueChange={setSelectedCondition}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="অবস্থা নির্বাচন করুন" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">সব অবস্থা</SelectItem>
                      <SelectItem value="New">নতুন</SelectItem>
                      <SelectItem value="Like New">নতুনের মতো</SelectItem>
                      <SelectItem value="Good">ভালো</SelectItem>
                      <SelectItem value="Fair">মোটামুটি</SelectItem>
                      <SelectItem value="Poor">খারাপ</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  মূল্য পরিসীমা: ৳{priceRange[0]} - ৳{priceRange[1]}{" "}
                </label>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={5000}
                  step={50}
                  className="w-full max-w-md"
                />
              </div>

              <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  সাজান
                </label>
                <Select value={sortBy} onValueChange={setSortBy}>
                  <SelectTrigger className="max-w-xs">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">নতুন প্রথমে</SelectItem>
                    <SelectItem value="price-low">কম দাম প্রথমে</SelectItem>
                    <SelectItem value="price-high">বেশি দাম প্রথমে</SelectItem>
                    <SelectItem value="popular">জনপ্রিয় প্রথমে</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* Books Grid */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredBooks.length === 0 ? (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                কোন বই পাওয়া যায়নি
              </h3>
              <p className="text-gray-600 mb-6">
                আপনার অনুসন্ধান পরিবর্তন করে আবার চেষ্টা করুন
              </p>
              <Button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedClass("all");
                  setSelectedSubject("all");
                  setSelectedDistrict("all");
                  setSelectedDistrict("all");
                  setPriceRange([0, 5000]);
                }}
                className="bg-blue-600 hover:bg-blue-700"
              >
                সব ফিল্টার রিসেট করুন
              </Button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredBooks.map((book, index) => (
                <ProductCard key={book.id} book={book} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
